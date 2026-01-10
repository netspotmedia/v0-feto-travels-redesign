-- Upgrade tours table with slug and status fields
ALTER TABLE public.tours ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE;
ALTER TABLE public.tours ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published'));
ALTER TABLE public.tours ADD COLUMN IF NOT EXISTS destination_id UUID;

-- Add foreign key constraint
ALTER TABLE public.tours
ADD CONSTRAINT fk_tours_destination FOREIGN KEY (destination_id)
REFERENCES public.destinations(id) ON DELETE SET NULL;

-- Add slug to destinations
ALTER TABLE public.destinations ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE;

-- Update blog_posts with status field
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published'));

-- Add display_order to services
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS display_order INTEGER DEFAULT 0;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_tours_slug ON public.tours(slug);
CREATE INDEX IF NOT EXISTS idx_tours_status ON public.tours(status);
CREATE INDEX IF NOT EXISTS idx_tours_destination_id ON public.tours(destination_id);
CREATE INDEX IF NOT EXISTS idx_destinations_slug ON public.destinations(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_services_display_order ON public.services(display_order);
