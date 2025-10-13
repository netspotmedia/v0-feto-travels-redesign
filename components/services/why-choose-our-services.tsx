import { Award, Clock, DollarSign, HeadphonesIcon } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over 15 years of experience delivering exceptional travel services",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "We handle all the details so you can focus on enjoying your trip",
  },
  {
    icon: DollarSign,
    title: "Best Value",
    description: "Competitive pricing with exclusive deals and partner discounts",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "24/7 assistance throughout your entire journey",
  },
]

export function WhyChooseOurServices() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4">
              WHY CHOOSE <span className="italic text-accent">Our Services?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                  <benefit.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary-foreground">{benefit.title}</h3>
                <p className="text-secondary-foreground/70 text-pretty">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
