import { Check, X } from "lucide-react"
import { Card } from "@/components/ui/card"

interface TourInclusionsProps {
  inclusions: {
    included: string[]
    excluded: string[]
  }
}

export function TourInclusions({ inclusions }: TourInclusionsProps) {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            What's <span className="italic text-accent">Included</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                Included
              </h3>
              <ul className="space-y-3">
                {inclusions.included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                Not Included
              </h3>
              <ul className="space-y-3">
                {inclusions.excluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
