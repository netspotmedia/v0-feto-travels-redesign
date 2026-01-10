import { createClient } from "./server"

export async function uploadTourImage(file: File, tourId: string) {
  try {
    const supabase = await createClient()
    const fileExt = file.name.split(".").pop()
    const fileName = `${tourId}-${Date.now()}.${fileExt}`
    const filePath = `tours/${tourId}/${fileName}`

    const { error: uploadError } = await supabase.storage.from("tours").upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    })

    if (uploadError) throw uploadError

    const { data } = supabase.storage.from("tours").getPublicUrl(filePath)
    return { success: true, url: data.publicUrl, path: filePath }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Upload failed" }
  }
}

export async function deleteTourImage(path: string) {
  try {
    const supabase = await createClient()
    const { error } = await supabase.storage.from("tours").remove([path])
    if (error) throw error
    return { success: true }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Delete failed" }
  }
}
