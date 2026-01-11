-- Add status column to destinations table for publish/draft control
ALTER TABLE destinations
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published'));

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS destinations_status_idx ON destinations(status);
