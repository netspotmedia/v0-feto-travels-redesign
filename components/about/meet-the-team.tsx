import { Card } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "David Feto",
    role: "Founder & CEO",
    image: "/professional-man-in-suit-smiling.png",
    bio: "With over 15 years in the travel industry, David founded Feto Travels to make world-class travel accessible to everyone.",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Operations",
    image: "/professional-woman-in-business-attire.png",
    bio: "Sarah ensures every journey runs smoothly, bringing 10 years of logistics expertise to our team.",
  },
  {
    name: "James Chen",
    role: "Senior Travel Consultant",
    image: "/professional-asian-man-smiling.png",
    bio: "James specializes in Asian destinations and has personally visited over 40 countries across the continent.",
  },
  {
    name: "Maria Rodriguez",
    role: "Visa & Documentation Specialist",
    image: "/professional-latina-woman-smiling.png",
    bio: "Maria's expertise in international documentation has helped thousands of travelers navigate complex visa requirements.",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                      <Mail size={18} />
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
