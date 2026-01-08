import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function AdminDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) {
    redirect("/admin/login")
  }

  // Verify admin access
  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("*")
    .eq("id", user.id)
    .single()

  if (adminError || !adminUser) {
    redirect("/admin/login")
  }

  // Fetch statistics
  const [toursCount, destinationsCount, postsCount] = await Promise.all([
    supabase.from("tours").select("id", { count: "exact", head: true }),
    supabase.from("destinations").select("id", { count: "exact", head: true }),
    supabase.from("blog_posts").select("id", { count: "exact", head: true }),
  ])

  const handleLogout = async () => {
    "use server"
    await supabase.auth.signOut()
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <form action={handleLogout}>
            <Button type="submit" variant="outline" className="text-white border-slate-600 bg-transparent">
              Logout
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-300">Total Tours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">{toursCount.count || 0}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-300">Total Destinations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">{destinationsCount.count || 0}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-300">Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">{postsCount.count || 0}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Manage Tours</CardTitle>
              <CardDescription className="text-slate-400">Create, edit, and delete tours</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/tours">
                <Button className="w-full">Go to Tours Manager</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Manage Destinations</CardTitle>
              <CardDescription className="text-slate-400">Manage travel destinations</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/destinations">
                <Button className="w-full">Go to Destinations Manager</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Manage Blog Posts</CardTitle>
              <CardDescription className="text-slate-400">Create and publish blog content</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/blog">
                <Button className="w-full">Go to Blog Manager</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Manage Services</CardTitle>
              <CardDescription className="text-slate-400">Update service offerings</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/services">
                <Button className="w-full">Go to Services Manager</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
