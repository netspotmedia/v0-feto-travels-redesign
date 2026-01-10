"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createTour(formData: {
  title: string
  destination: string
  description: string
  price: number
  destination_id?: string
  image_url?: string
  duration_days?: number
}) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) throw new Error("Unauthorized")

    const { data: adminUser } = await supabase.from("admin_users").select("*").eq("id", user.id).single()

    if (!adminUser) throw new Error("Admin access required")

    const slug = formData.title.toLowerCase().replace(/\s+/g, "-")

    const { data: tour, error } = await supabase
      .from("tours")
      .insert({
        ...formData,
        slug,
        status: "draft",
        created_by: user.id,
      })
      .select()
      .single()

    if (error) throw error

    revalidatePath("/admin/tours")
    revalidatePath("/")

    return { success: true, data: tour }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function publishTour(tourId: string) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) throw new Error("Unauthorized")

    const { data: adminUser } = await supabase.from("admin_users").select("*").eq("id", user.id).single()

    if (!adminUser) throw new Error("Admin access required")

    const { data: tour, error } = await supabase
      .from("tours")
      .update({ status: "published", updated_at: new Date().toISOString() })
      .eq("id", tourId)
      .select()
      .single()

    if (error) throw error

    revalidatePath("/admin/tours")
    revalidatePath("/")

    return { success: true, data: tour }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function unpublishTour(tourId: string) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) throw new Error("Unauthorized")

    const { data: adminUser } = await supabase.from("admin_users").select("*").eq("id", user.id).single()

    if (!adminUser) throw new Error("Admin access required")

    const { data: tour, error } = await supabase
      .from("tours")
      .update({ status: "draft", updated_at: new Date().toISOString() })
      .eq("id", tourId)
      .select()
      .single()

    if (error) throw error

    revalidatePath("/admin/tours")
    revalidatePath("/")

    return { success: true, data: tour }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function deleteTour(tourId: string) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) throw new Error("Unauthorized")

    const { data: adminUser } = await supabase.from("admin_users").select("*").eq("id", user.id).single()

    if (!adminUser) throw new Error("Admin access required")

    const { error } = await supabase.from("tours").delete().eq("id", tourId)

    if (error) throw error

    revalidatePath("/admin/tours")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}
