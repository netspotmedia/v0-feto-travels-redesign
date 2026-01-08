-- Add missing RLS policies for admin_users table to allow registration
-- Allow authenticated users to insert their own record
CREATE POLICY "Allow users to create their own admin record"
  ON public.admin_users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Allow users to view their own record
CREATE POLICY "Allow users to view their own record"
  ON public.admin_users FOR SELECT
  USING (auth.uid() = id);
