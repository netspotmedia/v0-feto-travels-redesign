import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, Hotel, FileText, Package, Shield, MapPin, Calendar, CreditCard } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description:
      "Access to competitive rates on domestic and international flights with all major airlines. We handle everything from seat selection to special meal requests.",
    features: ["Best price guarantee", "Flexible booking options", "24/7 flight support", "Group booking discounts"],
    image: "/flight.png",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description:
      "Handpicked accommodations ranging from budget-friendly options to luxury resorts. We ensure quality, comfort, and value at every price point.",
    features: ["Verified reviews", "Exclusive partner rates", "Room upgrades available", "Flexible cancellation"],
    image: "/hotels.jpg",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description:
      "Expert guidance through complex visa application processes. We handle documentation, appointments, and follow-ups to ensure smooth approval.",
    features: ["Document preparation", "Application tracking", "Embassy liaison", "Fast-track options"],
    image: "/visa.jpg",
  },
  {
    icon: Package,
    title: "Travel Packages",
    description:
      "Curated experiences combining flights, hotels, tours, and activities. Customizable packages designed around your interests and budget.",
    features: ["All-inclusive options", "Custom itineraries", "Local experiences", "Group discounts"],
    image: "/vacation.jpg",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description:
      "Comprehensive coverage protecting you against unexpected events. From medical emergencies to trip cancellations, we've got you covered.",
    features: ["Medical coverage", "Trip cancellation", "Lost luggage protection", "24/7 emergency assistance"],
    image: "/insurance.jpg",
  },
  {
    icon: MapPin,
    title: "Tour Guides & Excursions",
    description:
      "Professional local guides providing authentic insights and unforgettable experiences. From city tours to adventure excursions.",
    features: ["Expert local guides", "Private & group tours", "Skip-the-line access", "Customized experiences"],
    image: "/tourist.jpg.png",
  },
  {
    icon: Calendar,
    title: "Event & Conference Travel",
    description:
      "Specialized services for business events, conferences, and corporate travel. Efficient planning and seamless execution for groups of any size.",
    features: ["Group coordination", "Venue booking", "Transportation logistics", "On-site support"],
    image: "/events.png",
  },
  {
    icon: CreditCard,
    title: "Travel Payment Plans",
    description:
      "Flexible payment options making dream vacations more accessible. Spread costs over time with our convenient installment plans.",
    features: ["Interest-free options", "Flexible terms", "Secure payments", "No hidden fees"],
    image: "/payment.png",
  },
]

export function ServicesList() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              COMPLETE TRAVEL <span className="italic text-accent">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              From planning to execution, we handle every aspect of your journey with expertise and care
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-0 shadow-lg ${index % 2 === 0 ? "" : "bg-secondary"}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "lg:grid-flow-dense"}`}>
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 0 ? "" : "lg:col-start-2"}`}>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit">Learn More</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
