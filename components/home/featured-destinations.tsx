import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    title: "Dubai, UAE",
    subtitle: "Luxury & Innovation",
    image: "/dubai-skyline-with-burj-khalifa-at-sunset.jpg",
    description: "Experience the perfect blend of modern luxury and rich Arabian heritage",
  },
  {
    title: "Bali, Indonesia",
    subtitle: "Tropical Paradise",
    image: "/bali-rice-temples.png",
    description: "Discover pristine beaches, ancient temples, and vibrant culture",
  },
  {
    title: "Paris, France",
    subtitle: "City of Romance",
    image: "/eiffel-tower-and-paris-cityscape.jpg",
    description: "Immerse yourself in art, fashion, and timeless elegance",
  },
]

export function FeaturedDestinations() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            TRAVEL GUIDES THAT GO <span className="italic text-accent">Beyond The Map</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            Explore handpicked destinations with insider knowledge and authentic local experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm text-accent font-semibold mb-2">{destination.subtitle}</p>
                  <h3 className="text-2xl font-serif font-bold mb-2">{destination.title}</h3>
                  <p className="text-sm text-white/90 mb-4 text-pretty">{destination.description}</p>
                  <Button
                    variant="ghost"
                    className="text-accent hover:text-accent/90 hover:bg-accent/10 p-0 h-auto font-semibold"
                  >
                    Explore More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
