"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle, Plane, Hotel, FileText, MapPin, Shield } from "lucide-react"
import { SecurityQuestion } from "@/components/security-question"

interface ServiceRequestFormProps {
  initialService?: string
  onClose?: () => void
}

export function ServiceRequestForm({ initialService, onClose }: ServiceRequestFormProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [isSecurityValid, setIsSecurityValid] = useState(false)
  const [resetSecurity, setResetSecurity] = useState(false)
  const [selectedService, setSelectedService] = useState(initialService || "")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isSecurityValid) {
      setError("Please answer the security question correctly.")
      return
    }

    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data: any = {
      service: formData.get("service"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      nationality: formData.get("nationality"),
      residence: formData.get("residence"),
      contactMethod: formData.get("contactMethod"),
      specialRequests: formData.get("specialRequests"),
      consent: formData.get("consent"),
    }

    if (selectedService === "flight") {
      data.tripType = formData.get("tripType")
      data.departureCity = formData.get("departureCity")
      data.destinationCity = formData.get("destinationCity")
      data.departureDate = formData.get("departureDate")
      data.returnDate = formData.get("returnDate")
      data.airline = formData.get("airline")
      data.cabinClass = formData.get("cabinClass")
      data.adults = formData.get("adults")
      data.children = formData.get("children")
      data.infants = formData.get("infants")
      data.budget = formData.get("budget")
    } else if (selectedService === "hotel") {
      data.destinationCity = formData.get("destinationCity")
      data.checkinDate = formData.get("checkinDate")
      data.checkoutDate = formData.get("checkoutDate")
      data.rooms = formData.get("rooms")
      data.adults = formData.get("adults")
      data.children = formData.get("children")
      data.hotelCategory = formData.get("hotelCategory")
      data.bedType = formData.get("bedType")
      data.breakfast = formData.get("breakfast")
      data.preferredHotel = formData.get("preferredHotel")
    } else if (selectedService === "visa") {
      data.destinationCountry = formData.get("destinationCountry")
      data.visaType = formData.get("visaType")
      data.travelDate = formData.get("travelDate")
      data.stayDuration = formData.get("stayDuration")
      data.appliedBefore = formData.get("appliedBefore")
      data.previousVisas = formData.get("previousVisas")
      data.visaRefused = formData.get("visaRefused")
      data.refusalReason = formData.get("refusalReason")
      data.validPassport = formData.get("validPassport")
      data.bankStatement = formData.get("bankStatement")
    } else if (selectedService === "tour") {
      data.destination = formData.get("destination")
      data.travelDates = formData.get("travelDates")
      data.duration = formData.get("duration")
      data.travelers = formData.get("travelers")
      data.tourType = formData.get("tourType")
      data.budgetRange = formData.get("budgetRange")
      data.accommodation = formData.get("accommodation")
      data.activities = formData.getAll("activities")
    } else if (selectedService === "insurance") {
      data.destinationCountry = formData.get("destinationCountry")
      data.startDate = formData.get("startDate")
      data.endDate = formData.get("endDate")
      data.travelers = formData.get("travelers")
      data.ages = formData.get("ages")
      data.coverageType = formData.get("coverageType")
      data.tripPurpose = formData.get("tripPurpose")
    }

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit request")
      }

      setSuccess(true)
      setTimeout(() => {
        if (onClose) onClose()
      }, 2000)
    } catch (err) {
      setError("Failed to submit request. Please try again or contact us directly.")
      setResetSecurity(!resetSecurity)
      setIsSecurityValid(false)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-16 px-6">
        <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">Request Submitted Successfully!</h3>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Thank you for choosing Feto Travels. We'll review your request and contact you shortly via your preferred
          contact method.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <Label htmlFor="service" className="text-xl font-bold text-gray-900 mb-4 block flex items-center gap-2">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
            1
          </span>
          Select Your Service
        </Label>
        <Select name="service" value={selectedService} onValueChange={setSelectedService} required>
          <SelectTrigger className="h-14 text-base bg-white border-2 border-gray-200 hover:border-blue-400 transition-colors">
            <SelectValue placeholder="Choose the service you need" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="flight" className="py-3">
              <div className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Flight Bookings</span>
              </div>
            </SelectItem>
            <SelectItem value="hotel" className="py-3">
              <div className="flex items-center gap-3">
                <Hotel className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Hotel Reservations</span>
              </div>
            </SelectItem>
            <SelectItem value="visa" className="py-3">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-green-600" />
                <span className="font-medium">Visa Assistance</span>
              </div>
            </SelectItem>
            <SelectItem value="tour" className="py-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Tour Packages</span>
              </div>
            </SelectItem>
            <SelectItem value="insurance" className="py-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-red-600" />
                <span className="font-medium">Travel Insurance</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
            2
          </span>
          Your Information
        </h3>
        <div className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                Phone Number (WhatsApp) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+234 XXX XXX XXXX"
                className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="nationality" className="text-sm font-semibold text-gray-700 mb-2 block">
                Nationality <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nationality"
                name="nationality"
                required
                placeholder="e.g., Nigerian"
                className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="residence" className="text-sm font-semibold text-gray-700 mb-2 block">
                Current Residence <span className="text-red-500">*</span>
              </Label>
              <Input
                id="residence"
                name="residence"
                required
                placeholder="e.g., Nigeria"
                className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="contactMethod" className="text-sm font-semibold text-gray-700 mb-2 block">
              Preferred Contact Method
            </Label>
            <Select name="contactMethod" defaultValue="whatsapp">
              <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="call">Phone Call</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {selectedService && (
        <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
              3
            </span>
            Service Details
          </h3>

          {/* Flight Booking Fields */}
          {selectedService === "flight" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="tripType" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Trip Type <span className="text-red-500">*</span>
                </Label>
                <Select name="tripType" required>
                  <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue placeholder="Select trip type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oneway">One-way</SelectItem>
                    <SelectItem value="roundtrip">Round-trip</SelectItem>
                    <SelectItem value="multicity">Multi-city</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="departureCity" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Departure City / Airport <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="departureCity"
                    name="departureCity"
                    required
                    placeholder="e.g., Lagos (LOS)"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="destinationCity" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Destination City / Airport <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="destinationCity"
                    name="destinationCity"
                    required
                    placeholder="e.g., Paris (CDG)"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="departureDate" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Departure Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="departureDate"
                    name="departureDate"
                    type="date"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="returnDate" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Return Date
                  </Label>
                  <Input
                    id="returnDate"
                    name="returnDate"
                    type="date"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="airline" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Preferred Airline
                  </Label>
                  <Input
                    id="airline"
                    name="airline"
                    placeholder="e.g., Emirates"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="cabinClass" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Cabin Class
                  </Label>
                  <Select name="cabinClass" defaultValue="economy">
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="premium">Premium Economy</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="first">First Class</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="adults" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Adults <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="adults"
                    name="adults"
                    type="number"
                    min="1"
                    defaultValue="1"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="children" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Children (2-11)
                  </Label>
                  <Input
                    id="children"
                    name="children"
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="infants" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Infants (0-2)
                  </Label>
                  <Input
                    id="infants"
                    name="infants"
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="budget" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Estimated Budget (₦ / $)
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  placeholder="e.g., ₦500,000 or $1,200"
                  className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {/* Hotel Reservation Fields */}
          {selectedService === "hotel" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="destinationCity" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Destination City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="destinationCity"
                  name="destinationCity"
                  required
                  placeholder="e.g., Dubai"
                  className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="checkinDate" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Check-in Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="checkinDate"
                    name="checkinDate"
                    type="date"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="checkoutDate" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Check-out Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="checkoutDate"
                    name="checkoutDate"
                    type="date"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="rooms" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Rooms <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="rooms"
                    name="rooms"
                    type="number"
                    min="1"
                    defaultValue="1"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="adults" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Number of Adults <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="adults"
                    name="adults"
                    type="number"
                    min="1"
                    defaultValue="1"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="children" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Number of Children
                  </Label>
                  <Input
                    id="children"
                    name="children"
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="hotelCategory" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Hotel Category
                  </Label>
                  <Select name="hotelCategory" defaultValue="4star">
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3star">3-Star</SelectItem>
                      <SelectItem value="4star">4-Star</SelectItem>
                      <SelectItem value="5star">5-Star</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bedType" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Bed Type
                  </Label>
                  <Select name="bedType" defaultValue="double">
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="double">Double</SelectItem>
                      <SelectItem value="twin">Twin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="breakfast" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Breakfast Included?
                  </Label>
                  <Select name="breakfast" defaultValue="yes">
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="preferredHotel" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Preferred Hotel Name
                  </Label>
                  <Input
                    id="preferredHotel"
                    name="preferredHotel"
                    placeholder="Optional"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Visa Assistance Fields */}
          {selectedService === "visa" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="destinationCountry" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Destination Country <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="destinationCountry"
                    name="destinationCountry"
                    required
                    placeholder="e.g., United Kingdom"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="visaType" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Visa Type <span className="text-red-500">*</span>
                  </Label>
                  <Select name="visaType" required>
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Select visa type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tourist">Tourist</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="transit">Transit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="travelDate" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Intended Travel Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="travelDate"
                    name="travelDate"
                    type="date"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="stayDuration" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Duration of Stay <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="stayDuration"
                    name="stayDuration"
                    required
                    placeholder="e.g., 14 days"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="appliedBefore" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Have you applied for this visa before?
                </Label>
                <Select name="appliedBefore" defaultValue="no">
                  <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="previousVisas" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Previous Visas Held
                </Label>
                <Input
                  id="previousVisas"
                  name="previousVisas"
                  placeholder="e.g., USA, UK, Schengen"
                  className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="visaRefused" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Have you been refused a visa before?
                </Label>
                <Select name="visaRefused" defaultValue="no">
                  <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="refusalReason" className="text-sm font-semibold text-gray-700 mb-2 block">
                  If yes, please explain
                </Label>
                <Textarea
                  id="refusalReason"
                  name="refusalReason"
                  rows={2}
                  placeholder="Optional"
                  className="text-base border-2 border-gray-200 focus:border-blue-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="validPassport" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Valid Passport?
                  </Label>
                  <Select name="validPassport" defaultValue="yes">
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bankStatement" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Bank Statement Ready?
                  </Label>
                  <Select name="bankStatement" defaultValue="yes">
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Tour Package Fields */}
          {selectedService === "tour" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="destination" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Destination Country/City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="destination"
                  name="destination"
                  required
                  placeholder="e.g., Morocco"
                  className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="travelDates" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Travel Dates <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="travelDates"
                    name="travelDates"
                    type="date"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="duration" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Duration (Days) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    min="1"
                    required
                    placeholder="e.g., 7"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="travelers" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Number of Travelers <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="travelers"
                    name="travelers"
                    type="number"
                    min="1"
                    defaultValue="1"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="tourType" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Type of Tour <span className="text-red-500">*</span>
                </Label>
                <Select name="tourType" required>
                  <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue placeholder="Select tour type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leisure">Leisure</SelectItem>
                    <SelectItem value="honeymoon">Honeymoon</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="group">Group</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="budgetRange" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Budget Range <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="budgetRange"
                    name="budgetRange"
                    required
                    placeholder="e.g., ₦500k - ₦1M"
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="accommodation" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Accommodation Level
                  </Label>
                  <Select name="accommodation" defaultValue="4star">
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3star">3-Star</SelectItem>
                      <SelectItem value="4star">4-Star</SelectItem>
                      <SelectItem value="5star">5-Star</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Activities of Interest</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="city-tours" name="activities" value="city-tours" />
                    <label htmlFor="city-tours" className="text-sm cursor-pointer text-gray-700">
                      City Tours
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="safari" name="activities" value="safari" />
                    <label htmlFor="safari" className="text-sm cursor-pointer text-gray-700">
                      Safari
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="beach" name="activities" value="beach" />
                    <label htmlFor="beach" className="text-sm cursor-pointer text-gray-700">
                      Beach
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cultural" name="activities" value="cultural" />
                    <label htmlFor="cultural" className="text-sm cursor-pointer text-gray-700">
                      Cultural Tours
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="shopping" name="activities" value="shopping" />
                    <label htmlFor="shopping" className="text-sm cursor-pointer text-gray-700">
                      Shopping
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Travel Insurance Fields */}
          {selectedService === "insurance" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="destinationCountry" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Destination Country <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="destinationCountry"
                  name="destinationCountry"
                  required
                  placeholder="e.g., USA"
                  className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="startDate" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Travel Start Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Travel End Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="travelers" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Number of Travelers <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="travelers"
                    name="travelers"
                    type="number"
                    min="1"
                    defaultValue="1"
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="ages" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Age of Travelers
                </Label>
                <Input
                  id="ages"
                  name="ages"
                  placeholder="e.g., 35, 32, 8, 5"
                  className="h-12 text-base border-2 border-gray-200 focus:border-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="coverageType" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Coverage Type <span className="text-red-500">*</span>
                </Label>
                <Select name="coverageType" required>
                  <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue placeholder="Select coverage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medical">Medical Only</SelectItem>
                    <SelectItem value="medical-baggage">Medical + Baggage</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive Coverage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="tripPurpose" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Trip Purpose
                </Label>
                <Select name="tripPurpose" defaultValue="tourism">
                  <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tourism">Tourism</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="study">Study</SelectItem>
                    <SelectItem value="adventure">Sports / Adventure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
            4
          </span>
          Additional Information
        </h3>
        <div>
          <Label htmlFor="specialRequests" className="text-sm font-semibold text-gray-700 mb-2 block">
            Special Requests or Notes
          </Label>
          <Textarea
            id="specialRequests"
            name="specialRequests"
            rows={4}
            placeholder="Any additional information, special requirements, or questions you'd like to share..."
            className="text-base border-2 border-gray-200 focus:border-blue-500 resize-none"
          />
        </div>
      </div>

      <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm">
        <SecurityQuestion onValidate={setIsSecurityValid} reset={resetSecurity} />
      </div>

      <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
        <Checkbox id="consent" name="consent" required className="mt-1" />
        <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
          I agree to Feto Travels' terms and conditions and consent to being contacted via my provided contact details.
        </label>
      </div>

      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm font-medium">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={loading || !isSecurityValid}
        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting Your Request...
          </>
        ) : (
          "Submit Service Request"
        )}
      </Button>

      <p className="text-center text-sm text-gray-500">We typically respond within 2-4 hours during business hours</p>
    </form>
  )
}
