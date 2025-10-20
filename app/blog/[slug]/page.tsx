import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Sample blog data - in production, this would come from a database or CMS
const blogPosts = {
  "top-10-destinations-2026": {
    id: "top-10-destinations-2026",
    title: "Top 10 Must-Visit Destinations in 2026",
    excerpt: "Discover the most exciting travel destinations for the upcoming year",
    author: "Sarah Johnson",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Travel Guides",
    image: "/exotic-travel-destination.jpg",
    content: [
      {
        type: "paragraph",
        text: "As we step into 2026, the world of travel continues to evolve with new destinations emerging and classic favorites reinventing themselves. Whether you're seeking adventure, relaxation, or cultural immersion, this year's top destinations offer something for every type of traveler.",
      },
      {
        type: "heading",
        text: "1. Iceland - The Land of Fire and Ice",
      },
      {
        type: "paragraph",
        text: "Iceland continues to captivate travelers with its dramatic landscapes, from cascading waterfalls to geothermal hot springs. The country's commitment to sustainable tourism makes it an even more attractive destination for eco-conscious travelers.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800&query=iceland landscape with waterfall",
        alt: "Iceland waterfall",
      },
      {
        type: "heading",
        text: "2. Japan - Where Tradition Meets Innovation",
      },
      {
        type: "paragraph",
        text: "From the neon-lit streets of Tokyo to the serene temples of Kyoto, Japan offers a perfect blend of ancient traditions and cutting-edge modernity. The country's efficient rail system makes it easy to explore multiple regions in one trip.",
      },
      {
        type: "heading",
        text: "3. Portugal - Europe's Hidden Gem",
      },
      {
        type: "paragraph",
        text: "Portugal's charm lies in its authentic culture, stunning coastline, and affordable prices compared to other Western European destinations. The country's wine regions and historic cities are must-visits for any traveler.",
      },
      {
        type: "quote",
        text: "Travel is the only thing you buy that makes you richer. These destinations offer experiences that will stay with you forever.",
      },
      {
        type: "heading",
        text: "Planning Your 2026 Adventure",
      },
      {
        type: "paragraph",
        text: "When planning your trips to these destinations, consider booking early to secure the best rates and availability. Many of these locations are experiencing increased demand, so advance planning is essential for a smooth travel experience.",
      },
    ],
    tags: ["Travel Tips", "Destinations", "2026 Travel", "Travel Planning"],
    relatedPosts: [
      {
        id: "visa-guide-2026",
        title: "Essential Visa Requirements for Popular Destinations",
        image: "/visa-passport-travel-documents-desk.jpg",
      },
      {
        id: "packing-tips",
        title: "How to Pack Light for a Two-Week European Adventure",
        image: "/travel-packing-luggage-essentials.jpg",
      },
      {
        id: "honeymoon-destinations",
        title: "Top 5 Romantic Honeymoon Destinations for 2025",
        image: "/romantic-beach-sunset-couple-silhouette.jpg",
      },
    ],
  },
  "dubai-guide": {
    id: "dubai-guide",
    title: "Best Time to Visit Dubai: A Month-by-Month Guide",
    excerpt: "Plan your Dubai trip perfectly with our detailed weather and events calendar for every month.",
    author: "Michael Chen",
    date: "December 8, 2024",
    readTime: "5 min read",
    category: "Destinations",
    image: "/dubai-skyline-different-seasons.jpg",
    content: [
      {
        type: "paragraph",
        text: "Dubai is a year-round destination, but the best time to visit depends on your preferences and what you want to experience. Understanding the seasonal patterns will help you plan the perfect trip.",
      },
      {
        type: "heading",
        text: "Winter (November to March) - The Best Season",
      },
      {
        type: "paragraph",
        text: "Winter is the peak season in Dubai with pleasant temperatures ranging from 20-30°C. This is the ideal time for outdoor activities, beach visits, and exploring the city's attractions.",
      },
      {
        type: "heading",
        text: "Summer (June to August) - Hot and Humid",
      },
      {
        type: "paragraph",
        text: "Summer temperatures can exceed 45°C, making outdoor activities challenging. However, hotels offer significant discounts during this period, and indoor attractions like shopping malls are perfect for cooling off.",
      },
      {
        type: "heading",
        text: "Spring and Fall - Transition Seasons",
      },
      {
        type: "paragraph",
        text: "April-May and September-October offer moderate temperatures and fewer crowds. These are great times to visit if you want to avoid peak season prices while still enjoying pleasant weather.",
      },
    ],
    tags: ["Dubai", "Travel Planning", "Weather Guide", "Best Time to Visit"],
    relatedPosts: [
      {
        id: "top-10-destinations-2026",
        title: "Top 10 Must-Visit Destinations in 2026",
        image: "/exotic-travel-destination.jpg",
      },
      {
        id: "packing-tips",
        title: "How to Pack Light for a Two-Week European Adventure",
        image: "/travel-packing-luggage-essentials.jpg",
      },
      {
        id: "business-travel",
        title: "Business Travel Hacks: Stay Productive on the Go",
        image: "/business-traveler-airport-lounge-working.jpg",
      },
    ],
  },
  "packing-tips": {
    id: "packing-tips",
    title: "How to Pack Light for a Two-Week European Adventure",
    excerpt: "Master the art of minimalist packing with our expert tips and essential item checklist.",
    author: "Emma Wilson",
    date: "December 5, 2024",
    readTime: "7 min read",
    category: "Travel Tips",
    image: "/travel-packing-luggage-essentials.jpg",
    content: [
      {
        type: "paragraph",
        text: "Packing light is an art form that can transform your travel experience. With the right strategy, you can explore Europe for two weeks with just a carry-on bag.",
      },
      {
        type: "heading",
        text: "The 80/20 Rule",
      },
      {
        type: "paragraph",
        text: "Pack 80% neutral colors and 20% accent pieces. This allows you to mix and match outfits easily while keeping your luggage minimal.",
      },
      {
        type: "heading",
        text: "Essential Items Checklist",
      },
      {
        type: "paragraph",
        text: "Focus on versatile clothing that works in multiple settings. Include comfortable walking shoes, a light jacket, and layers that can adapt to different weather conditions.",
      },
      {
        type: "heading",
        text: "Packing Techniques",
      },
      {
        type: "paragraph",
        text: "Use packing cubes to organize your items and maximize space. Roll clothes instead of folding them to save space and reduce wrinkles.",
      },
    ],
    tags: ["Packing", "Travel Tips", "Europe", "Budget Travel"],
    relatedPosts: [
      {
        id: "top-10-destinations-2026",
        title: "Top 10 Must-Visit Destinations in 2026",
        image: "/exotic-travel-destination.jpg",
      },
      {
        id: "dubai-guide",
        title: "Best Time to Visit Dubai: A Month-by-Month Guide",
        image: "/dubai-skyline-different-seasons.jpg",
      },
      {
        id: "honeymoon-destinations",
        title: "Top 5 Romantic Honeymoon Destinations for 2025",
        image: "/romantic-beach-sunset-couple-silhouette.jpg",
      },
    ],
  },
  "honeymoon-destinations": {
    id: "honeymoon-destinations",
    title: "Top 5 Romantic Honeymoon Destinations for 2025",
    excerpt: "Celebrate your love in these breathtaking locations perfect for newlyweds seeking romance and adventure.",
    author: "Jessica Martinez",
    date: "December 3, 2024",
    readTime: "8 min read",
    category: "Honeymoon",
    image: "/romantic-beach-sunset-couple-silhouette.jpg",
    content: [
      {
        type: "paragraph",
        text: "Your honeymoon is one of the most special trips you'll ever take. These five destinations offer the perfect blend of romance, adventure, and unforgettable memories.",
      },
      {
        type: "heading",
        text: "1. Bora Bora, French Polynesia",
      },
      {
        type: "paragraph",
        text: "Crystal-clear waters, overwater bungalows, and pristine beaches make Bora Bora the ultimate romantic destination. The island's natural beauty and luxury resorts create an unforgettable honeymoon experience.",
      },
      {
        type: "heading",
        text: "2. Santorini, Greece",
      },
      {
        type: "paragraph",
        text: "Sunset views over the Aegean Sea, white-washed buildings, and romantic dinners make Santorini a classic honeymoon choice. The island's charm and Mediterranean culture create magical moments.",
      },
      {
        type: "heading",
        text: "3. Maldives",
      },
      {
        type: "paragraph",
        text: "The Maldives offers luxury resorts, pristine beaches, and world-class diving. It's the perfect destination for couples seeking privacy and natural beauty.",
      },
    ],
    tags: ["Honeymoon", "Romance", "Destinations", "Travel Planning"],
    relatedPosts: [
      {
        id: "top-10-destinations-2026",
        title: "Top 10 Must-Visit Destinations in 2026",
        image: "/exotic-travel-destination.jpg",
      },
      {
        id: "packing-tips",
        title: "How to Pack Light for a Two-Week European Adventure",
        image: "/travel-packing-luggage-essentials.jpg",
      },
      {
        id: "business-travel",
        title: "Business Travel Hacks: Stay Productive on the Go",
        image: "/business-traveler-airport-lounge-working.jpg",
      },
    ],
  },
  "business-travel": {
    id: "business-travel",
    title: "Business Travel Hacks: Stay Productive on the Go",
    excerpt:
      "Maximize efficiency during business trips with these proven strategies from frequent corporate travelers.",
    author: "David Thompson",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Business Travel",
    image: "/business-traveler-airport-lounge-working.jpg",
    content: [
      {
        type: "paragraph",
        text: "Business travel can be exhausting, but with the right strategies, you can stay productive and maintain work-life balance.",
      },
      {
        type: "heading",
        text: "Time Management Tips",
      },
      {
        type: "paragraph",
        text: "Schedule your most important tasks during your peak energy hours. Use travel time for emails and administrative work.",
      },
      {
        type: "heading",
        text: "Technology Essentials",
      },
      {
        type: "paragraph",
        text: "Invest in a good laptop, portable charger, and noise-canceling headphones. These tools will help you work efficiently from anywhere.",
      },
      {
        type: "heading",
        text: "Health and Wellness",
      },
      {
        type: "paragraph",
        text: "Maintain a regular exercise routine, stay hydrated, and get adequate sleep. Your health is crucial for maintaining productivity during business trips.",
      },
    ],
    tags: ["Business Travel", "Productivity", "Travel Tips", "Work"],
    relatedPosts: [
      {
        id: "packing-tips",
        title: "How to Pack Light for a Two-Week European Adventure",
        image: "/travel-packing-luggage-essentials.jpg",
      },
      {
        id: "dubai-guide",
        title: "Best Time to Visit Dubai: A Month-by-Month Guide",
        image: "/dubai-skyline-different-seasons.jpg",
      },
      {
        id: "travel-photography",
        title: "Capturing Travel Memories: Photography Tips for Beginners",
        image: "/photographer-taking-landscape-photo.jpg",
      },
    ],
  },
  "travel-photography": {
    id: "travel-photography",
    title: "Capturing Travel Memories: Photography Tips for Beginners",
    excerpt: "Learn how to take stunning travel photos with your smartphone or camera using these simple techniques.",
    author: "Lisa Anderson",
    date: "November 25, 2024",
    readTime: "9 min read",
    category: "Photography",
    image: "/photographer-taking-landscape-photo.jpg",
    content: [
      {
        type: "paragraph",
        text: "Travel photography doesn't require expensive equipment. With these simple techniques, you can capture stunning memories with any camera or smartphone.",
      },
      {
        type: "heading",
        text: "Composition Basics",
      },
      {
        type: "paragraph",
        text: "Use the rule of thirds to create balanced and interesting compositions. Avoid placing your subject in the center of the frame.",
      },
      {
        type: "heading",
        text: "Lighting Tips",
      },
      {
        type: "paragraph",
        text: "Golden hour (sunrise and sunset) provides the best natural lighting for travel photos. Avoid harsh midday sun when possible.",
      },
      {
        type: "heading",
        text: "Smartphone Photography",
      },
      {
        type: "paragraph",
        text: "Modern smartphones have excellent cameras. Learn to use your phone's built-in features like HDR and portrait mode to enhance your photos.",
      },
    ],
    tags: ["Photography", "Travel Tips", "Smartphone", "Cameras"],
    relatedPosts: [
      {
        id: "top-10-destinations-2026",
        title: "Top 10 Must-Visit Destinations in 2026",
        image: "/exotic-travel-destination.jpg",
      },
      {
        id: "packing-tips",
        title: "How to Pack Light for a Two-Week European Adventure",
        image: "/travel-packing-luggage-essentials.jpg",
      },
      {
        id: "business-travel",
        title: "Business Travel Hacks: Stay Productive on the Go",
        image: "/business-traveler-airport-lounge-working.jpg",
      },
    ],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

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
                    <Image src={block.src || "/placeholder.svg"} alt={block.alt} fill className="object-cover" />
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

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost) => (
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
