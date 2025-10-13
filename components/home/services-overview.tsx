import { Plane, Hotel, FileText, Package, Shield, Globe } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Best rates on domestic and international flights",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Handpicked accommodations for every budget",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Hassle-free visa processing and documentation",
  },
  {
    icon: Package,
    title: "Travel Packages",
    description: "Curated experiences tailored to your preferences",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage for peace of mind",
  },
  {
    icon: Globe,
    title: "Tour Guides",
    description: "Expert local guides for authentic experiences",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
            COMPREHENSIVE TRAVEL SERVICES
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            Everything you need for a seamless journey, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">{service.title}</h3>
                <p className="text-secondary-foreground/70 text-pretty">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
