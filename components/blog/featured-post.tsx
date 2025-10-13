import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function FeaturedPost() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-accent font-semibold">FEATURED POST</span>
          </div>
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <img
                  src="/stunning-travel-destination-landscape-view.jpg"
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>December 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>8 min read</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
                  10 Hidden Gems in Southeast Asia You Must Visit in 2025
                </h2>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Discover the lesser-known destinations that offer authentic experiences away from the tourist crowds.
                  From secluded beaches to ancient temples, these hidden gems will transform your Southeast Asian
                  adventure.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    Destinations
                  </span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    Travel Tips
                  </span>
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
