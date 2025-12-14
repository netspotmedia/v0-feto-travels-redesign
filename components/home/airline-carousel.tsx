"use client"

import { useEffect, useRef } from "react"

const airlines = [
  { name: "Emirates", logo: "/generic-airline-logo.png" },
  { name: "Qatar Airways", logo: "/qatar-airways-logo.png" },
  { name: "Ethiopian Airlines", logo: "/ethiopian-airlines-logo.png" },
  { name: "Turkish Airlines", logo: "/turkish-airlines-logo.png" },
  { name: "Lufthansa", logo: "/lufthansa-logo.png" },
  { name: "British Airways", logo: "/british-airways-logo.png" },
  { name: "Air France", logo: "/air-france-logo.png" },
  { name: "KLM", logo: "/klm-logo.png" },
  { name: "Singapore Airlines", logo: "/singapore-airlines-logo.png" },
  { name: "Cathay Pacific", logo: "/cathay-pacific-logo.png" },
  { name: "Delta Air Lines", logo: "/delta-airlines-logo.png" },
  { name: "American Airlines", logo: "/american-airlines-logo.png" },
  { name: "United Airlines", logo: "/united-airlines-logo.png" },
  { name: "Air Canada", logo: "/air-canada-logo.png" },
  { name: "Japan Airlines", logo: "/japan-airlines-logo.jpg" },
  { name: "ANA", logo: "/ana-logo.jpg" },
  { name: "Korean Air", logo: "/korean-air-logo.jpg" },
  { name: "Swiss International", logo: "/swiss-airlines-logo.jpg" },
  { name: "Virgin Atlantic", logo: "/virgin-atlantic-logo.jpg" },
  { name: "Etihad Airways", logo: "/etihad-airways-logo.png" },
]

export function AirlineCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // Slow, smooth scrolling

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 20)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-background to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Our Partner Airlines</h2>
          <p className="text-muted-foreground text-lg">Trusted partnerships with the world's leading airlines</p>
        </div>
      </div>

      <div className="relative">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div ref={scrollRef} className="flex gap-8 md:gap-12 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
          {/* Duplicate logos for seamless infinite scroll */}
          {[...airlines, ...airlines].map((airline, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 group"
            >
              <img
                src={airline.logo || "/placeholder.svg"}
                alt={`${airline.name} logo`}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
