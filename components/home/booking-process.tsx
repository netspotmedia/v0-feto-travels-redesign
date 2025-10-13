import { Search, Calendar, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Choose Your Destination",
    description: "Browse our curated destinations or tell us your dream location",
  },
  {
    icon: Calendar,
    title: "Plan Your Journey",
    description: "Work with our experts to create the perfect itinerary",
  },
  {
    icon: CheckCircle,
    title: "Travel with Confidence",
    description: "Enjoy seamless travel with 24/7 support throughout your trip",
  },
]

export function BookingProcess() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            SEAMLESS TRAVEL PLANNING,
          </h2>
          <p className="text-3xl font-serif italic text-accent">From Start to Finish</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 mb-6">
                <step.icon className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-foreground">{step.title}</h3>
              <p className="text-secondary-foreground/70 text-pretty">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
