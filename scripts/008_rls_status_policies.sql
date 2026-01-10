-- Drop conflicting public tour viewing policies
DROP POLICY IF EXISTS "Allow public to view featured tours" ON public.tours;

-- Create new policy: Public can view published tours
CREATE POLICY "Public view published tours"
  ON public.tours FOR SELECT
  USING (status = 'published');

-- Drop conflicting public blog viewing policies
DROP POLICY IF EXISTS "Allow public to view published posts" ON public.blog_posts;

-- Create new policy: Public can view published blog posts
CREATE POLICY "Public view published blog posts"
  ON public.blog_posts FOR SELECT
  USING (status = 'published');
