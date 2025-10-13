import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

const destinations = [
  {
    name: "Dubai, UAE",
    region: "Middle East",
    description: "Futuristic skyline meets Arabian heritage in this luxury destination",
    image: "/dubai-burj-khalifa-and-modern-skyline.jpg",
    highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping", "Beach Resorts"],
  },
  {
    name: "Bali, Indonesia",
    region: "Southeast Asia",
    description: "Tropical paradise with stunning beaches and rich culture",
    image: "/bali-beach-with-temple-and-palm-trees.jpg",
    highlights: ["Ancient Temples", "Rice Terraces", "Beach Clubs", "Yoga Retreats"],
  },
  {
    name: "Paris, France",
    region: "Europe",
    description: "The city of lights, love, and timeless elegance",
    image: "/paris-eiffel-tower-and-seine-river.jpg",
    highlights: ["Eiffel Tower", "Louvre Museum", "Champs-Élysées", "French Cuisine"],
  },
  {
    name: "Santorini, Greece",
    region: "Europe",
    description: "Iconic white-washed buildings overlooking the Aegean Sea",
    image: "/santorini-white-buildings-blue-domes-sunset.jpg",
    highlights: ["Sunset Views", "Wine Tasting", "Volcanic Beaches", "Luxury Villas"],
  },
  {
    name: "Tokyo, Japan",
    region: "East Asia",
    description: "Where ancient traditions blend seamlessly with cutting-edge technology",
    image: "/tokyo-cityscape-with-mount-fuji-background.jpg",
    highlights: ["Cherry Blossoms", "Temples & Shrines", "Modern Architecture", "Culinary Scene"],
  },
  {
    name: "Cape Town, South Africa",
    region: "Africa",
    description: "Stunning natural beauty meets vibrant urban culture",
    image: "/cape-town-table-mountain-and-coastline.jpg",
    highlights: ["Table Mountain", "Wine Country", "Beaches", "Wildlife Safari"],
  },
]

export function PopularDestinations() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              POPULAR <span className="italic text-accent">Destinations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Handpicked locations offering unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.region}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <h3 className="text-2xl font-serif font-bold text-foreground">{destination.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">{destination.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" className="text-accent hover:text-accent/90 hover:bg-accent/10 p-0 h-auto">
                    Explore {destination.name} <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
