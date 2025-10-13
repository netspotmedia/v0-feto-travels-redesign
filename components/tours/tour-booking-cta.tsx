import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface TourBookingCTAProps {
  title: string
  description: string
  image: string
}

export function TourBookingCTA({ title, description, image }: TourBookingCTAProps) {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 text-balance">
          YOUR <span className="italic">{title}</span> AWAITS
        </h2>
        <p className="text-white/90 text-lg leading-relaxed mb-8 text-pretty">{description}</p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
          <Link href="/contact">Book This Tour</Link>
        </Button>
      </div>
    </section>
  )
}
