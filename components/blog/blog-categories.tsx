import { Plane, Map, Briefcase, Camera, Utensils, Heart } from "lucide-react"

const categories = [
  { name: "Travel Tips", icon: Plane, count: 24 },
  { name: "Destinations", icon: Map, count: 38 },
  { name: "Business Travel", icon: Briefcase, count: 12 },
  { name: "Photography", icon: Camera, count: 16 },
  { name: "Food & Culture", icon: Utensils, count: 20 },
  { name: "Honeymoon", icon: Heart, count: 15 },
]

export function BlogCategories() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-secondary-foreground mb-8 text-center">
            Browse by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm text-foreground">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.count} posts</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
