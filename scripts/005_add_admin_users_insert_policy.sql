-- Allow authenticated users to insert their own admin_users record (for registration)
CREATE POLICY "Allow authenticated users to insert their own admin record"
  ON public.admin_users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Allow authenticated users to view their own admin record
CREATE POLICY "Allow users to view their own admin record"
  ON public.admin_users FOR SELECT
  USING (auth.uid() = id);

-- Allow authenticated users to update their own admin record
CREATE POLICY "Allow users to update their own admin record"
  ON public.admin_users FOR UPDATE
  USING (auth.uid() = id);
