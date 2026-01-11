import { createClient } from "@/lib/supabase/server"
import { Plane, Hotel, FileText, Package, Shield, Globe, BookOpen, Users } from "lucide-react"

const iconMap: Record<string, any> = {
  flights: Plane,
  hotels: Hotel,
  visa: FileText,
  tours: Package,
  insurance: Shield,
  guides: Globe,
  study: BookOpen,
  work: Users,
}

export async function ServicesOverview() {
  const supabase = await createClient()

  // Services are always displayed
  const { data: services = [], error } = await supabase
    .from("services")
    .select("id, name, description, icon, display_order")
    .order("display_order", { ascending: true })

  if (error) {
    console.error("Services error:", error)
  }

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
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Package
            return (
              <div key={service.id} className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">{service.name}</h3>
                  <p className="text-secondary-foreground/70 text-pretty">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
