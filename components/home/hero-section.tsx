"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const slides = [
  {
    image: "/tropical-beach-paradise-with-turquoise-water-and-p.jpg",
    title: (
      <>
        Let's <span className="italic text-accent">Travel Together</span>
      </>
    ),
    subtitle:
      "Discover extraordinary destinations and create unforgettable memories with expert guidance every step of the way.",
  },
  {
    image: "/goa.jpg",
    title: (
      <>
        Explore <span className="italic text-accent">New Horizons</span>
      </>
    ),
    subtitle:
      "From serene mountains to hidden gems, experience the beauty of the world with personalized travel plans.",
  },
  {
    image: "/tokyo.jpg",
    title: (
      <>
        Experience <span className="italic text-accent">Luxury & Culture</span>
      </>
    ),
    subtitle:
      "Immerse yourself in vibrant cities and indulge in unforgettable cultural experiences.",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-screen relative">
            <img
              src={slide.image}
              alt="Travel destination"
              className="w-full h-full object-cover"
            />

            {/* Light airy overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/20" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-foreground mb-6">
              {slides[current].title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
              {slides[current].subtitle}
            </p>

            <div className="flex items-center gap-4">
              <Link href="/destinations">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
                >
                  Explore Destinations
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/70 backdrop-blur border-muted-foreground/20"
              >
                Play Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current === index
                ? "bg-accent scale-125"
                : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
