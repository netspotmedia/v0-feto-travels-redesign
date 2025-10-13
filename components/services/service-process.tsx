const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Share your travel dreams and requirements with our expert team",
  },
  {
    number: "02",
    title: "Planning",
    description: "We create a customized itinerary tailored to your preferences",
  },
  {
    number: "03",
    title: "Booking",
    description: "Secure all reservations with our best-rate guarantee",
  },
  {
    number: "04",
    title: "Support",
    description: "Enjoy 24/7 assistance throughout your entire journey",
  },
]

export function ServiceProcess() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              HOW IT <span className="italic text-accent">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our streamlined process ensures a stress-free experience from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-serif font-bold text-accent/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/20 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
