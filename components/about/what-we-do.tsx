import { Users, Briefcase, Heart, Globe } from "lucide-react"

const clientTypes = [
  {
    icon: Users,
    title: "Families & Groups",
    description: "Creating memorable experiences for families and friend groups with tailored itineraries",
  },
  {
    icon: Briefcase,
    title: "Business Travelers",
    description: "Efficient planning and seamless logistics for corporate travel needs",
  },
  {
    icon: Heart,
    title: "Honeymooners",
    description: "Romantic getaways designed to celebrate your special moments",
  },
  {
    icon: Globe,
    title: "Solo Adventurers",
    description: "Safe, enriching experiences for independent travelers seeking new horizons",
  },
]

export function WhatWeDo() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-4 text-center">
            WHAT WE DO: TRAVEL THAT BUILDS BONDS,
          </h2>
          <p className="text-3xl font-serif italic text-accent text-center mb-4">
            Honors Roots, And Inspires Discovery
          </p>
          <p className="text-lg text-secondary-foreground/80 text-center max-w-3xl mx-auto mb-16 text-pretty">
            We specialize in creating personalized travel experiences that connect you with the world's most remarkable
            destinations while respecting local cultures and communities.
          </p>

          <div className="relative mb-16">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D5612AQGIdXHFdGvJLA/article-cover_image-shrink_600_2000/B56ZWjouWMHQAQ-/0/1742207118004?e=2147483647&v=beta&t=f1Sts1MRoACY-Bb0xfGPMBdT0ylTWSqG0TTGnGGLul4"
                alt="Travel experiences"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/40" />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-secondary-foreground mb-8 text-center">We work with:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientTypes.map((type, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <type.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-secondary-foreground">{type.title}</h4>
                    <p className="text-secondary-foreground/70 text-pretty">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
