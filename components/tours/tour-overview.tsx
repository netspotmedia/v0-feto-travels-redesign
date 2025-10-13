import Image from "next/image"

interface TourOverviewProps {
  title: string
  subtitle: string
  description: string
  image: string
  whyJoin: {
    title: string
    description: string
    images: string[]
  }
}

export function TourOverview({ title, subtitle, description, image, whyJoin }: TourOverviewProps) {
  return (
    <>
      {/* Why Join Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
                {whyJoin.title.split("WITH US?")[0]}
                <span className="italic text-accent">WITH US?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{whyJoin.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyJoin.images.map((img, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Tour highlight ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {title.split(":")[0]}
              <span className="block text-2xl md:text-3xl italic text-accent mt-2">{subtitle}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            <div>
              <p className="text-secondary-foreground/80 leading-relaxed text-lg">{description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
