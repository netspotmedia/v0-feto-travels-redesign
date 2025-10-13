import { Card } from "@/components/ui/card"

const regions = [
  {
    name: "Europe",
    description: "Historic cities, stunning architecture, and diverse cultures",
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam", "Prague"],
    image: "/european-historic-city-architecture.jpg",
  },
  {
    name: "Asia",
    description: "Ancient traditions, modern marvels, and exotic landscapes",
    destinations: ["Tokyo", "Bangkok", "Singapore", "Bali", "Dubai"],
    image: "/asian-temple-and-modern-city-skyline.jpg",
  },
  {
    name: "Africa",
    description: "Wildlife safaris, pristine beaches, and rich heritage",
    destinations: ["Cape Town", "Marrakech", "Zanzibar", "Cairo", "Nairobi"],
    image: "/african-safari-landscape-with-wildlife.jpg",
  },
  {
    name: "Americas",
    description: "Natural wonders, vibrant cities, and diverse experiences",
    destinations: ["New York", "Rio de Janeiro", "Cancun", "Vancouver", "Buenos Aires"],
    image: "/american-city-skyline-and-nature.jpg",
  },
  {
    name: "Oceania",
    description: "Pristine beaches, unique wildlife, and adventure",
    destinations: ["Sydney", "Auckland", "Fiji", "Bora Bora", "Melbourne"],
    image: "/oceania-beach-and-tropical-paradise.jpg",
  },
]

export function DestinationsByRegion() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
              DESTINATIONS BY <span className="italic text-accent">Region</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto text-pretty">
              Explore the world continent by continent
            </p>
          </div>

          <div className="space-y-6">
            {regions.map((region, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={region.image || "/placeholder.svg"}
                      alt={region.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-serif font-bold mb-3 text-foreground">{region.name}</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">{region.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Popular Destinations:</p>
                      <div className="flex flex-wrap gap-2">
                        {region.destinations.map((destination, idx) => (
                          <span
                            key={idx}
                            className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {destination}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
