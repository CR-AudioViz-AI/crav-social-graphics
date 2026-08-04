// lib/credits/index.ts — javari-social
//
// 2026-08-04: REWRITTEN. This file used to do credit arithmetic itself:
//
//   const newBalance = credits.balance - amount;
//   update user_credits set balance = newBalance
//
// That is a read-modify-write with no lock. Two generations started at the same
// moment both read the same balance and one overwrites the other, so the
// customer is charged once for two jobs. It also never updated the
// profiles.credit_balance mirror, ignored the granted-before-purchased spend
// order, and wrote the ledger row separately from the balance change - so a
// crash between the two left them disagreeing.
//
// Every one of those bugs was found and fixed in the core platform in August,
// where the answer is a set of SECURITY DEFINER functions that do the whole
// thing in one atomic statement. This file now calls those, which means
// javari-social gets the reservations, the re-entrancy guards, the ceilings and
// the reconciliation for free, and can never drift from them again.
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kteobfyferrukqeolofj.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = SUPABASE_SERVICE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, { auth: { persistSession: false } })
  : null;

/** Can this user afford it? Reads the one true balance. */
export async function checkCredits(userId: string, amount: number): Promise<boolean> {
  if (!supabaseAdmin) return false;
  const { data, error } = await supabaseAdmin
    .from('user_credits').select('balance').eq('user_id', userId).maybeSingle();
  if (error) {
    console.error('[credits] balance read failed:', error.message);
    return false;
  }
  return (data?.balance ?? 0) >= amount;
}

/**
 * Spend. Atomic, and it respects the spend order (granted credits before
 * purchased ones) that the customer was promised.
 */
export async function deductCredits(
  userId: string, amount: number, operation: string, appId: string,
  metadata?: Record<string, unknown>,
): Promise<{ success: boolean; newBalance?: number; error?: string }> {
  if (!supabaseAdmin) return { success: false, error: 'Not configured' };

  const { data, error } = await supabaseAdmin.rpc('cl_spend_direct', {
    p_user: userId,
    p_amount: amount,
    p_reason: `${appId}: ${operation}`,
  });

  if (error) {
    console.error('[credits] spend failed:', error.message);
    return { success: false, error: error.message };
  }
  const res = data as { ok?: boolean; balance?: number; error?: string } | null;
  if (!res?.ok) {
    return { success: false, error: res?.error ?? 'Insufficient credits' };
  }
  void metadata;
  return { success: true, newBalance: res.balance };
}

/**
 * Refund. Uses the purchase path with a REFERENCE, so a retry cannot refund
 * twice - the old version had no idempotency at all and would credit again on
 * every call.
 */
export async function refundCredits(
  userId: string, amount: number, reason: string, appId: string,
): Promise<{ success: boolean; error?: string }> {
  if (!supabaseAdmin) return { success: false, error: 'Not configured' };
  const { data, error } = await supabaseAdmin.rpc('cl_grant_purchase', {
    p_user: userId,
    p_amount: amount,
    p_reason: `Refund (${appId}): ${reason}`,
    p_reference: `refund:${appId}:${userId}:${reason}`.slice(0, 200),
  });
  if (error) {
    console.error('[credits] refund failed:', error.message);
    return { success: false, error: error.message };
  }
  const res = data as { ok?: boolean } | null;
  return res?.ok ? { success: true } : { success: false, error: 'Refund not applied' };
}

export async function getCreditBalance(userId: string): Promise<number> {
  if (!supabaseAdmin) return 0;
  const { data } = await supabaseAdmin
    .from('user_credits').select('balance').eq('user_id', userId).maybeSingle();
  return data?.balance ?? 0;
}
