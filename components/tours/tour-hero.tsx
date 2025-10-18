import Image from "next/image"

interface TourHeroProps {
  title: string
  year: string
  image: string
  highlights: Array<{
    label: string
    value: string
    sublabel: string
  }>
}

export function TourHero({ title, year, image, highlights }: TourHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 text-balance">
          {title}
          <span className="block text-3xl md:text-5xl mt-2">{year}</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-3">
                <div className="text-center">
                  <div className="text-sm font-semibold text-accent-foreground">{highlight.label}</div>
                </div>
              </div>
              <div className="text-white text-center">
                <div className="text-xl font-bold">{highlight.value}</div>
                <div className="text-sm text-white/80">{highlight.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
