"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ServiceRequestForm } from "@/components/service-request-form"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>("")

  const services = [
    { id: "flight", title: "Flight Bookings", icon: "✈️" },
    { id: "hotel", title: "Hotel Reservations", icon: "🏨" },
    { id: "visa", title: "Visa Assistance", icon: "🛂" },
    { id: "tour", title: "Tour Packages", icon: "🎒" },
    { id: "insurance", title: "Travel Insurance", icon: "🛡️" },
  ]

  const openServiceForm = (serviceId: string) => {
    setSelectedService(serviceId)
    setServicesOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/feto-logo.png"
              alt="Feto Travels Logo"
              width={180}
              height={52}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-primary-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-primary-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-primary-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/destinations" className="text-primary-foreground hover:text-accent transition-colors">
              Destinations
            </Link>
            <Link href="/tours" className="text-primary-foreground hover:text-accent transition-colors">
              Tours
            </Link>
            <Link href="/blog" className="text-primary-foreground hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-primary-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setServicesOpen(true)}
              className="p-0 bg-transparent hover:opacity-80 transition-opacity"
            >
              <Image src="/book.png" alt="Book Now" width={140} height={70} className="w-32 h-auto" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-foreground hover:text-accent"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-foreground hover:text-accent"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-foreground hover:text-accent"
            >
              Services
            </Link>
            <Link
              href="/destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-foreground hover:text-accent"
            >
              Destinations
            </Link>
            <Link
              href="/tours"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-foreground hover:text-accent"
            >
              Tours
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-foreground hover:text-accent"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-foreground hover:text-accent"
            >
              Contact
            </Link>

            <button
              onClick={() => {
                setServicesOpen(true)
                setMobileMenuOpen(false)
              }}
              className="p-0 bg-transparent hover:opacity-80 transition-opacity"
            >
              <Image src="/book.png" alt="Book Now" width={160} height={80} className="w-40 h-auto mx-auto" />
            </button>
          </div>
        )}
      </nav>

      <Dialog open={servicesOpen} onOpenChange={setServicesOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold mb-6">Choose a Service</DialogTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => openServiceForm(service.id)}
                className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent/10 hover:border-accent transition text-left"
              >
                <span className="text-3xl">{service.icon}</span>
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <Button variant="outline" onClick={() => setServicesOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService("")}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold mb-6">Service Request Form</DialogTitle>
          <ServiceRequestForm initialService={selectedService} onClose={() => setSelectedService("")} />
        </DialogContent>
      </Dialog>
    </header>
  )
}
