import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ItineraryDay {
  location: string
  day: string
  title: string
  activities: string[]
  image: string
}

interface TourItineraryProps {
  itinerary: ItineraryDay[]
}

export function TourItinerary({ itinerary }: TourItineraryProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            TRAVEL ITINERARY
            <span className="block text-2xl md:text-3xl italic text-accent mt-2">Details</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {itinerary.map((day, index) => (
            <div key={index}>
              <h3 className="text-2xl md:text-3xl font-serif italic text-accent mb-8">{day.location}</h3>

              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                        {day.day}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-6">{day.title}</h4>
                    <ul className="space-y-3">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image src={day.image || "/placeholder.svg"} alt={day.title} fill className="object-cover" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
