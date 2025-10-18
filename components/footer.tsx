import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-secondary-foreground mb-4">
              Subscribe for Travel Inspiration and Special Offers
            </h3>
            <p className="text-secondary-foreground/80 mb-6">
              Get exclusive deals, travel tips, and destination guides delivered to your inbox
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-card text-card-foreground" />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/feto-logo.png"
                alt="Feto Travels Logo"
                width={1028}
                height={295}
                className="w-40 h-auto object-contain"
                priority
              />
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for unforgettable travel experiences worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Travel Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Flight Bookings</li>
              <li className="text-primary-foreground/80">Hotel Reservations</li>
              <li className="text-primary-foreground/80">Visa Assistance</li>
              <li className="text-primary-foreground/80">Travel Packages</li>
              <li className="text-primary-foreground/80">Travel Insurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>KM 8, Idiroko Road, Rosco Bus stop, Rosco Complex, Ado-Odo Ota, Ogun State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={20} className="flex-shrink-0" />
                <div className="flex flex-col">
                  <span>+234 901 478 6078</span>
                  <span>+234 701 105 3895</span>
                  <span className="text-xs text-accent mt-1">(WhatsApp available)</span>
                </div>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={20} className="flex-shrink-0" />
                <span>fetotravels@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Feto Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
