import { Card } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Abayomi Okemakinde",
    role: "Founder & CEO",
    image: "/Abayomi.jpeg",
    bio: "With over 15 years in the travel industry, Abayomi founded Feto Travels to make world-class travel accessible to everyone.",
  },
  {
    name: "Abisola Okemakinde",
    role: "Co-Founder & MD",
    image: "/Abisola.jpg",
    bio: "Abisola ensures every journey runs smoothly, bringing 10 years of logistics expertise to our team.",
  },
]

export function MeetTheTeam() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
            MEET <span className="italic text-accent">Our Team</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-pretty">
            The passionate professionals dedicated to making your travel dreams a reality
          </p>

          {/* Updated grid to 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-80">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-6 text-pretty">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Mail size={20} />
                    </a>
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
