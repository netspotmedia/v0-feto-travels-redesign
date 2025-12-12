import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getBlogPost, getRelatedPosts } from "@/lib/blog-data"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id)

  return (
    <main className="min-h-screen pt-24 pb-20">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">{post.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">{post.title}</h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          <Button variant="ghost" size="sm" className="ml-auto">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                    {block.text}
                  </p>
                )
              case "heading":
                return (
                  <h2 key={index} className="text-2xl font-serif font-bold mt-12 mb-4">
                    {block.text}
                  </h2>
                )
              case "image":
                return (
                  <div key={index} className="relative h-96 rounded-lg overflow-hidden my-8">
                    <Image src={block.src || "/placeholder.svg"} alt={block.alt || ""} fill className="object-cover" />
                  </div>
                )
              case "quote":
                return (
                  <blockquote key={index} className="border-l-4 border-accent pl-6 py-4 my-8 italic text-lg">
                    {block.text}
                  </blockquote>
                )
              default:
                return null
            }
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold line-clamp-2">{relatedPost.title}</h4>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-16 p-8 bg-accent/5 border-accent/20 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground mb-6">
            Let us help you plan your perfect trip to any of these amazing destinations
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </Card>
      </article>
    </main>
  )
}
