import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

interface Tour {
  id: string
  title: string
  destination_id: string
  description: string
  price: number
  image_url: string
}

export async function FeaturedDestinations() {
  const supabase = await createClient()

  const { data: tours, error } = await supabase
    .from("tours")
    .select("id, title, destination_id, description, price, image_url")
    .eq("status", "published")
    .limit(4)

  if (error) {
    console.error("Featured destinations error:", error)
    return (
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
              FEATURED DESTINATIONS
            </h2>
          </div>
          <div className="text-center py-12">
            <p className="text-lg text-secondary-foreground/60">Featured tours are temporarily unavailable</p>
          </div>
        </div>
      </section>
    )
  }

  const safeTours = tours || []

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            FEATURED DESTINATIONS
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            Explore our handpicked collection of premium travel experiences
          </p>
        </div>

        {safeTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safeTours.map((tour) => (
              <Card
                key={tour.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={tour.image_url || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-between h-full">
                    <div />
                    <div>
                      <p className="text-sm text-accent font-semibold mb-2">Destination</p>
                      <h3 className="text-2xl font-serif font-bold mb-2">{tour.title}</h3>
                      <p className="text-sm text-white/90 mb-4 text-pretty line-clamp-2">{tour.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">${tour.price.toLocaleString()}</span>
                        <Button
                          variant="ghost"
                          className="text-accent hover:text-accent/90 hover:bg-accent/10 p-0 h-auto font-semibold"
                        >
                          Book Now <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-secondary-foreground/60">No featured tours available yet</p>
          </div>
        )}
      </div>
    </section>
  )
}
