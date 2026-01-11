"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function approveAdminUser(userId: string) {
  const supabase = await createClient()

  // Verify current user is an admin
  const {
    data: { user: currentUser },
  } = await supabase.auth.getUser()
  if (!currentUser) throw new Error("Not authenticated")

  const { data: adminUser } = await supabase.from("admin_users").select("*").eq("id", currentUser.id).single()

  if (!adminUser) throw new Error("You don't have admin access")

  // Approve the user
  const { error } = await supabase
    .from("admin_users")
    .update({ status: "approved", updated_at: new Date().toISOString() })
    .eq("id", userId)

  if (error) throw error

  await supabase.auth.refreshSession()

  // Revalidate admin paths to show updated access immediately
  revalidatePath("/admin")

  return { success: true }
}

export async function verifyAdminAccess() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return null

  await supabase.auth.refreshSession()

  const { data: adminUser } = await supabase
    .from("admin_users")
    .select("*")
    .eq("id", user.id)
    .eq("status", "approved")
    .single()

  return adminUser || null
}
