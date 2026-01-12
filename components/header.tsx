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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-muted">
      <nav className="container mx-auto px-6 h-20 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/feto-logo.png"
              alt="Feto Travels Logo"
              width={180}
              height={52}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/destinations" className="text-foreground hover:text-accent transition-colors">
              Destinations
            </Link>
            <Link href="/tours" className="text-foreground hover:text-accent transition-colors">
              Tours
            </Link>
            <Link href="/blog" className="text-foreground hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Book Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setServicesOpen(true)}
              className="p-0 bg-transparent hover:opacity-80 transition-opacity"
            >
              <Image
                src="/book.png"
                alt="Book Now"
                width={140}
                height={70}
                className="w-28 h-auto"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-muted px-6 py-6 flex flex-col gap-4">
          {[
            ["Home", "/"],
            ["About Us", "/about"],
            ["Services", "/services"],
            ["Destinations", "/destinations"],
            ["Tours", "/tours"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent transition-colors"
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => {
              setServicesOpen(true)
              setMobileMenuOpen(false)
            }}
            className="pt-4"
          >
            <Image
              src="/book.png"
              alt="Book Now"
              width={160}
              height={80}
              className="w-40 h-auto mx-auto"
            />
          </button>
        </div>
      )}

      {/* Services Dialog */}
      <Dialog open={servicesOpen} onOpenChange={setServicesOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold mb-6">
            Choose a Service
          </DialogTitle>

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

      {/* Service Request Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService("")}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold mb-6">
            Service Request Form
          </DialogTitle>
          <ServiceRequestForm
            initialService={selectedService}
            onClose={() => setSelectedService("")}
          />
        </DialogContent>
      </Dialog>
    </header>
  )
}
