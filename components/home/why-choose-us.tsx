import { Plane, Shield, Users, Award } from "lucide-react"

const features = [
  {
    icon: Plane,
    title: "Expert Travel Planning",
    description: "Personalized itineraries crafted by experienced travel specialists who understand your unique needs",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Years of excellence in service with thousands of satisfied travelers worldwide",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock assistance ensuring peace of mind throughout your entire journey",
  },
  {
    icon: Award,
    title: "Best Value Guaranteed",
    description: "Competitive pricing with exclusive deals and packages you won't find anywhere else",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            WHY TRAVEL <span className="italic text-accent">With Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're committed to making your travel dreams a reality with personalized service and unmatched expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
