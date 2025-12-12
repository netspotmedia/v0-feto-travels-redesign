import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/travel-blogger-writing-at-scenic-location.jpg"
              alt="Travel Blog"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              Travel <span className="italic text-accent">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance">
              Tips, guides, and inspiration for your next adventure
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all h-full cursor-pointer">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 text-pretty">{post.excerpt}</p>
                        <div className="text-accent hover:text-accent/90 font-semibold text-sm flex items-center gap-2">
                          Read More <ArrowRight size={16} />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
