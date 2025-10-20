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
    image: "/resort.jpg",
    title: (
      <>
        Explore <span className="italic text-accent">New Horizons</span>
      </>
    ),
    subtitle:
      "From serene mountains to hidden gems, experience the beauty of the world with personalized travel plans.",
  },
  {
    image: "/slide.jpg",
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center transition-all duration-700">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance">
          {slides[current].title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          {slides[current].subtitle}
        </p>

        <Link href="/destinations">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
          >
            Explore Destinations
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              current === index ? "bg-accent" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
