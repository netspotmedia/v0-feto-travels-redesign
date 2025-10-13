import { Shield, Heart, Lightbulb, Award, Users, Leaf } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest, transparent service you can trust",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Genuine love for travel and cultural exchange",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing new ideas while honoring tradition",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality in every detail",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building lasting relationships with clients",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Responsible travel that protects our planet",
  },
]

export function OurValues() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            OUR <span className="italic text-accent">Core Values</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-pretty">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
