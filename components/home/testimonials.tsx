"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Feto Travels made our honeymoon absolutely perfect. Every detail was thoughtfully planned, and we felt taken care of throughout our entire journey.",
    image: "/professional-woman-smiling.png",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Outstanding service from start to finish. The visa assistance was incredibly helpful, and the travel package exceeded all our expectations.",
    image: "/professional-man-smiling.png",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "I've used many travel agencies, but Feto Travels stands out. Their attention to detail and personalized approach made all the difference.",
    image: "/smiling-professional-woman.png",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">WHAT OUR CLIENTS SAY</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            <span className="italic">"Exceptional Service"</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg border-0 bg-card">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[activeIndex].image || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-6"
              />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 italic text-balance">
                "{testimonials[activeIndex].text}"
              </p>
              <p className="font-semibold text-foreground">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[activeIndex].location}</p>
            </div>
          </Card>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-accent w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
