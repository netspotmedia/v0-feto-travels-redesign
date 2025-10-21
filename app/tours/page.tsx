import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, MapPin, DollarSign, ArrowRight } from "lucide-react"

const tours = [
  {
    id: "kenya-classic-safari",
    title: "Kenya Classic Safari Experience",
    year: "2026",
    image: "/kenya-safari-landscape-with-acacia-trees.jpg",
    price: "$3,499",
    duration: "7 Days, 6 Nights",
    destinations: "4 Destinations",
    excerpt:
      "Experience the magic of Kenya's wildlife and landscapes with expert guides who know every corner of this magnificent country.",
  },
]

export default function ToursPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">
                Explore Our <span className="italic text-accent">Curated Tours</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 text-balance">
                Discover unforgettable journeys to the world's most captivating destinations
              </p>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tours.map((tour) => (
                  <Link key={tour.id} href={`/tours/${tour.id}`}>
                    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all h-full cursor-pointer">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={tour.image || "/placeholder.svg"}
                          alt={tour.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                          {tour.year}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                          {tour.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-6 text-pretty">{tour.excerpt}</p>

                        {/* Tour Details */}
                        <div className="space-y-3 mb-6 pb-6 border-b">
                          <div className="flex items-center gap-3 text-sm">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="text-foreground font-semibold">{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-foreground font-semibold">{tour.destinations}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <DollarSign className="w-4 h-4 text-accent" />
                            <span className="text-foreground font-semibold">{tour.price}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="text-accent hover:text-accent/90 font-semibold text-sm flex items-center gap-2">
                          View Details <ArrowRight size={16} />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Ready to Start Your Adventure?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our travel experts to customize your perfect tour or book one of our curated experiences today.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
