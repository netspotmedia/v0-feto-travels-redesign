-- Update tours policy to only show published tours for public users
DROP POLICY IF EXISTS "Allow public to view featured tours" ON public.tours;

CREATE POLICY "Allow public to view published tours"
  ON public.tours FOR SELECT
  USING (status = 'published');

-- Update blog posts policy to only show published content
DROP POLICY IF EXISTS "Allow public to view published posts" ON public.blog_posts;

CREATE POLICY "Allow public to view published blog posts"
  ON public.blog_posts FOR SELECT
  USING (status = 'published');

-- Ensure admins can see all tours regardless of status
DROP POLICY IF EXISTS "Allow admins to view all tours" ON public.tours;

CREATE POLICY "Allow admins to view all tours"
  ON public.tours FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE admin_users.id = auth.uid()
    )
  );
