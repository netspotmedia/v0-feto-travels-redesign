import { Card } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Essential Visa Requirements for Popular Destinations",
    excerpt: "Navigate the visa application process with our comprehensive guide covering the most visited countries.",
    image: "/visa-passport-travel-documents-desk.jpg",
    category: "Travel Tips",
    date: "December 10, 2024",
    readTime: "6 min read",
  },
  {
    title: "Best Time to Visit Dubai: A Month-by-Month Guide",
    excerpt: "Plan your Dubai trip perfectly with our detailed weather and events calendar for every month.",
    image: "/dubai-skyline-different-seasons.jpg",
    category: "Destinations",
    date: "December 8, 2024",
    readTime: "5 min read",
  },
  {
    title: "How to Pack Light for a Two-Week European Adventure",
    excerpt: "Master the art of minimalist packing with our expert tips and essential item checklist.",
    image: "/travel-packing-luggage-essentials.jpg",
    category: "Travel Tips",
    date: "December 5, 2024",
    readTime: "7 min read",
  },
  {
    title: "Top 5 Romantic Honeymoon Destinations for 2025",
    excerpt: "Celebrate your love in these breathtaking locations perfect for newlyweds seeking romance and adventure.",
    image: "/romantic-beach-sunset-couple-silhouette.jpg",
    category: "Honeymoon",
    date: "December 3, 2024",
    readTime: "8 min read",
  },
  {
    title: "Business Travel Hacks: Stay Productive on the Go",
    excerpt:
      "Maximize efficiency during business trips with these proven strategies from frequent corporate travelers.",
    image: "/business-traveler-airport-lounge-working.jpg",
    category: "Business Travel",
    date: "November 28, 2024",
    readTime: "6 min read",
  },
  {
    title: "Capturing Travel Memories: Photography Tips for Beginners",
    excerpt: "Learn how to take stunning travel photos with your smartphone or camera using these simple techniques.",
    image: "/photographer-taking-landscape-photo.jpg",
    category: "Photography",
    date: "November 25, 2024",
    readTime: "9 min read",
  },
]

export function BlogGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              LATEST <span className="italic text-accent">Articles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
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
                  <button className="text-accent hover:text-accent/90 font-semibold text-sm flex items-center gap-2">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
