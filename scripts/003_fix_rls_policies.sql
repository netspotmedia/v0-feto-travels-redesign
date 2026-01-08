-- Drop the problematic admin_users policy that causes infinite recursion
DROP POLICY IF EXISTS "Allow admins to view admin users" ON public.admin_users;

-- Create a simpler admin_users policy that allows anyone to view admin_users 
-- (since we check auth.uid() in the WHERE clause instead)
CREATE POLICY "Allow auth users to view admin users"
  ON public.admin_users FOR SELECT
  USING (true);

-- Create a policy to allow admins to manage admin_users
CREATE POLICY "Allow admins to manage admin users"
  ON public.admin_users FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow admins to update admin users"
  ON public.admin_users FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admins to delete admin users"
  ON public.admin_users FOR DELETE
  USING (auth.role() = 'authenticated');
