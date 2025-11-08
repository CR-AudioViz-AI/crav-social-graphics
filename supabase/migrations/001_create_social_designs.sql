-- Create social_designs table
CREATE TABLE IF NOT EXISTS social_designs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Design details
  name TEXT NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('instagram', 'facebook', 'twitter', 'linkedin', 'pinterest', 'youtube')),
  format TEXT NOT NULL CHECK (format IN ('post', 'story', 'cover')),
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  
  -- Design elements (stored as JSON)
  elements JSONB NOT NULL DEFAULT '[]'::jsonb,
  
  -- Thumbnail preview
  thumbnail TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on user_id for filtering
CREATE INDEX IF NOT EXISTS idx_social_designs_user_id ON social_designs(user_id);

-- Create index on platform for filtering
CREATE INDEX IF NOT EXISTS idx_social_designs_platform ON social_designs(platform);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_social_designs_created_at ON social_designs(created_at DESC);

-- Enable Row Level Security
ALTER TABLE social_designs ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Users can view their own designs
CREATE POLICY "Users can view own designs"
  ON social_designs FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own designs
CREATE POLICY "Users can insert own designs"
  ON social_designs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own designs
CREATE POLICY "Users can update own designs"
  ON social_designs FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can delete their own designs
CREATE POLICY "Users can delete own designs"
  ON social_designs FOR DELETE
  USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_social_designs_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_social_designs_updated_at
  BEFORE UPDATE ON social_designs
  FOR EACH ROW
  EXECUTE FUNCTION update_social_designs_updated_at();

-- Grant permissions
GRANT ALL ON social_designs TO authenticated;
GRANT ALL ON social_designs TO service_role;
