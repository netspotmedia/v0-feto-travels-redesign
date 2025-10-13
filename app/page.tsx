import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { FeaturedDestinations } from "@/components/home/featured-destinations"
import { TravelExperiences } from "@/components/home/travel-experiences"
import { ServicesOverview } from "@/components/home/services-overview"
import { Testimonials } from "@/components/home/testimonials"
import { BookingProcess } from "@/components/home/booking-process"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <FeaturedDestinations />
        <TravelExperiences />
        <ServicesOverview />
        <Testimonials />
        <BookingProcess />
      </main>
      <Footer />
    </div>
  )
}
