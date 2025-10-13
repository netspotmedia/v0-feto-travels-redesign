import { Card } from "@/components/ui/card"

const experiences = [
  {
    title: "Luxury Cruises",
    subtitle: "Sail in Style",
    image: "/luxury-cruise-ship-at-sunset-on-ocean.jpg",
    description: "Experience world-class amenities and breathtaking ocean views",
  },
  {
    title: "Adventure Tours",
    subtitle: "Thrill Seekers Welcome",
    image: "/hot-air-balloons-over-scenic-landscape-at-sunrise.jpg",
    description: "Push your limits with unforgettable outdoor experiences",
  },
  {
    title: "Cultural Immersion",
    subtitle: "Connect with Locals",
    image: "/african-safari-wildlife-and-savanna-landscape.jpg",
    description: "Discover authentic traditions and local ways of life",
  },
]

export function TravelExperiences() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">JOURNEYS OF A LIFETIME:</h2>
          <p className="text-3xl font-serif italic text-accent">Adventure Meets Comfort</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-96"
            >
              <img
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm text-accent font-semibold mb-2">{experience.subtitle}</p>
                <h3 className="text-2xl font-serif font-bold mb-2">{experience.title}</h3>
                <p className="text-sm text-white/90 text-pretty">{experience.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
