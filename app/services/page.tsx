import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { WhyChooseOurServices } from "@/components/services/why-choose-our-services"
import { ServiceProcess } from "@/components/services/service-process"
import { ServicesCTA } from "@/components/services/services-cta"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <WhyChooseOurServices />
        <ServiceProcess />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
