-- Create saved_designs table
CREATE TABLE IF NOT EXISTS saved_designs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Design details
  name TEXT NOT NULL,
  template_id TEXT,
  
  -- Canvas configuration
  dimensions JSONB NOT NULL,
  canvas_data TEXT NOT NULL, -- JSON stringified canvas state
  
  -- Preview
  thumbnail TEXT, -- Base64 or URL
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_saved_designs_user_id ON saved_designs(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_designs_created_at ON saved_designs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_saved_designs_template_id ON saved_designs(template_id);

-- Enable Row Level Security
ALTER TABLE saved_designs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own designs"
  ON saved_designs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own designs"
  ON saved_designs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own designs"
  ON saved_designs FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own designs"
  ON saved_designs FOR DELETE
  USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER update_saved_designs_updated_at
  BEFORE UPDATE ON saved_designs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions
GRANT ALL ON saved_designs TO authenticated;
GRANT ALL ON saved_designs TO service_role;
