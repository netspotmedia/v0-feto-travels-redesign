import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function DestinationsCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Can't Find Your <span className="italic text-accent">Dream Destination?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Tell us where you want to go, and we'll create a custom itinerary just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input type="text" placeholder="Search destinations..." className="pl-10 h-12 text-lg" />
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12">
              Search
            </Button>
          </div>
          <p className="text-muted-foreground">
            Or{" "}
            <a href="/contact" className="text-accent hover:underline font-semibold">
              contact our travel experts
            </a>{" "}
            for personalized recommendations
          </p>
        </div>
      </div>
    </section>
  )
}
