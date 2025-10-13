import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 234 567 8900", "+1 234 567 8901"],
    description: "Mon-Fri: 9AM - 6PM",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@fetotravels.com", "support@fetotravels.com"],
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Travel Street", "City, State 12345"],
    description: "Visit us by appointment",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+1 234 567 8900"],
    description: "Quick responses 24/7",
  },
]

export function ContactInfo() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-secondary-foreground mb-2">Contact Information</h2>
          <p className="text-secondary-foreground/80 mb-8">
            Multiple ways to reach us - choose what works best for you
          </p>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{method.title}</h3>
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-muted-foreground/70 mt-1">{method.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-accent/5 border-accent/20">
            <div className="flex gap-3">
              <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Business Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm text-accent font-semibold mt-2">Emergency support available 24/7</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
