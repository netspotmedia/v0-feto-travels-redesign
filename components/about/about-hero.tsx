export function AboutHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.state.gov/wp-content/uploads/2020/11/shutterstock_186964970-scaled.jpg"
          alt="About Feto Travels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">About Us</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance">
          Expert Agents & Trusted Partners Handling Every Detail Of Your Journey
        </p>
      </div>
    </section>
  )
}
