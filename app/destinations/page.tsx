import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationsHero } from "@/components/destinations/destinations-hero"
import { DestinationsByRegion } from "@/components/destinations/destinations-by-region"
import { PopularDestinations } from "@/components/destinations/popular-destinations"
import { DestinationsCTA } from "@/components/destinations/destinations-cta"

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <DestinationsHero />
        <PopularDestinations />
        <DestinationsByRegion />
        <DestinationsCTA />
      </main>
      <Footer />
    </div>
  )
}
