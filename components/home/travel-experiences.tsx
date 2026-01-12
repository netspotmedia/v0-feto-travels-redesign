import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "Luxury Cruises",
    subtitle: "Sail in Style",
    image: "/luxury-cruise-ship-at-sunset-on-ocean.jpg",
    description:
      "Experience world-class amenities and breathtaking ocean views",
  },
  {
    title: "Adventure Tours",
    subtitle: "Thrill Seekers Welcome",
    image: "/hot-air-balloons-over-scenic-landscape-at-sunrise.jpg",
    description:
      "Push your limits with unforgettable outdoor experiences",
  },
  {
    title: "Cultural Immersion",
    subtitle: "Connect with Locals",
    image: "/african-safari-wildlife-and-savanna-landscape.jpg",
    description:
      "Discover authentic traditions and local ways of life",
  },
]

export function TravelExperiences() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Featured Experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-2xl border shadow-sm hover:shadow-lg transition-shadow p-0"
            >
              {/* IMAGE — FULL BLEED */}
              <div className="relative h-64 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90">{item.subtitle}</p>
                </div>
              </div>

              {/* CONTENT — ONLY THIS HAS PADDING */}
              <CardContent className="px-5 py-4">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-5"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
