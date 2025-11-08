-- Create designs table
CREATE TABLE IF NOT EXISTS designs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Design details
  name TEXT NOT NULL,
  platform TEXT NOT NULL,
  
  -- Design content (stored as JSON)
  elements JSONB NOT NULL DEFAULT '[]'::jsonb,
  background JSONB NOT NULL DEFAULT '{}'::jsonb,
  
  -- Optional thumbnail for quick preview
  thumbnail TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create brand_kits table
CREATE TABLE IF NOT EXISTS brand_kits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Brand kit details
  name TEXT NOT NULL,
  
  -- Brand assets (stored as JSON arrays)
  colors JSONB NOT NULL DEFAULT '[]'::jsonb,
  fonts JSONB NOT NULL DEFAULT '[]'::jsonb,
  logos JSONB NOT NULL DEFAULT '[]'::jsonb,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_designs_user_id ON designs(user_id);
CREATE INDEX IF NOT EXISTS idx_designs_platform ON designs(platform);
CREATE INDEX IF NOT EXISTS idx_designs_created_at ON designs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_brand_kits_user_id ON brand_kits(user_id);

-- Enable Row Level Security
ALTER TABLE designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_kits ENABLE ROW LEVEL SECURITY;

-- Create policies for designs
CREATE POLICY "Users can view own designs"
  ON designs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own designs"
  ON designs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own designs"
  ON designs FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own designs"
  ON designs FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for brand_kits
CREATE POLICY "Users can view own brand kits"
  ON brand_kits FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own brand kits"
  ON brand_kits FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own brand kits"
  ON brand_kits FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own brand kits"
  ON brand_kits FOR DELETE
  USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for designs
CREATE TRIGGER update_designs_updated_at
  BEFORE UPDATE ON designs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions
GRANT ALL ON designs TO authenticated;
GRANT ALL ON designs TO service_role;
GRANT ALL ON brand_kits TO authenticated;
GRANT ALL ON brand_kits TO service_role;
