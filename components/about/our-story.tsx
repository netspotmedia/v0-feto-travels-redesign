export function OurStory() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            OUR STORY: WHERE TRAVEL <span className="italic text-accent">Meets Purpose</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty">
            Founded on the belief that travel transforms lives, Feto Travels has been connecting people with
            extraordinary destinations for over a decade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/design-mode/7014902-airplane-flight-sunset.jpg"
                alt="Our journey"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/design-mode/70416483-Asia-Singapore-City-Skyline-Cityscape-Skyscrapers-Modern-Buildings-Hi_rise-Night-View-Night-Lights.jpg"
                alt="Our vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground mb-4 text-pretty">
                We are passionate professionals committed to making travel accessible, meaningful, and transformative.
                Whether you seek adventure, relaxation, or cultural immersion, we believe every journey should be
                crafted with care and expertise.
              </p>
              <p className="text-muted-foreground text-pretty">
                From our humble beginnings as a small travel consultancy, we've grown into a trusted partner for
                thousands of travelers worldwide, always maintaining our commitment to personalized service and
                attention to detail.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-4 text-pretty">
                Our team of experienced travel specialists brings together decades of industry knowledge, insider
                connections, and a genuine passion for exploration. We don't just book trips—we create experiences that
                leave lasting impressions.
              </p>
              <p className="text-muted-foreground text-pretty">
                Today, we continue to innovate and evolve, embracing new technologies while staying true to our core
                values: integrity, excellence, and a deep respect for the cultures and destinations we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
