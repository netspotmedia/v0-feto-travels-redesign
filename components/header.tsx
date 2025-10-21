"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo only */}
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

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Book Now</Link>
            </Button>
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
              className="text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/destinations"
              className="text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="/tours"
              className="text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tours
            </Link>
            <Link
              href="/blog"
              className="text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
