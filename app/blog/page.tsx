import { Header } from "@/components/header"
import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedPost } from "@/components/blog/featured-post"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCategories } from "@/components/blog/blog-categories"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BlogHero />
        <FeaturedPost />
        <BlogCategories />
        <BlogGrid />
      </main>
    </div>
  )
}
