-- Drop old policies that don't consider status
DROP POLICY IF EXISTS "Allow public to view featured tours" ON public.tours;

-- Public can only view published tours
CREATE POLICY "Public view published tours"
  ON public.tours FOR SELECT
  USING (status = 'published');

-- Drop old blog policy
DROP POLICY IF EXISTS "Allow public to view published posts" ON public.blog_posts;

-- Public can only view published blog posts
CREATE POLICY "Public view published blog posts"
  ON public.blog_posts FOR SELECT
  USING (status = 'published');
