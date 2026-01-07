"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle } from "lucide-react"
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
    } else if (selectedService === "study-abroad") {
      data.destinationCountry = formData.get("destinationCountry")
      data.studyLevel = formData.get("studyLevel")
      data.fieldOfStudy = formData.get("fieldOfStudy")
      data.intendedStartDate = formData.get("intendedStartDate")
      data.englishProficiency = formData.get("englishProficiency")
      data.academicQualification = formData.get("academicQualification")
      data.preferredCountries = formData.get("preferredCountries")
      data.budget = formData.get("budget")
    } else if (selectedService === "work-abroad") {
      data.destinationCountry = formData.get("destinationCountry")
      data.jobTitle = formData.get("jobTitle")
      data.industry = formData.get("industry")
      data.yearsOfExperience = formData.get("yearsOfExperience")
      data.skillSet = formData.get("skillSet")
      data.visaType = formData.get("visaType")
      data.startDate = formData.get("startDate")
      data.salaryExpectation = formData.get("salaryExpectation")
    } else if (selectedService === "job-procurement") {
      data.jobTitle = formData.get("jobTitle")
      data.industry = formData.get("industry")
      data.preferredCountries = formData.get("preferredCountries")
      data.qualifications = formData.get("qualifications")
      data.yearsOfExperience = formData.get("yearsOfExperience")
      data.salaryRange = formData.get("salaryRange")
      data.startDate = formData.get("startDate")
      data.languages = formData.get("languages")
    } else if (selectedService === "visa-appointment") {
      data.visaType = formData.get("visaType")
      data.destinationCountry = formData.get("destinationCountry")
      data.appointmentReason = formData.get("appointmentReason")
      data.documentStatus = formData.get("documentStatus")
      data.preferredAppointmentDate = formData.get("preferredAppointmentDate")
      data.embassy = formData.get("embassy")
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
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Selection */}
        <div className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
              1
            </span>
            Select Service
          </h3>
          <Select
            value={selectedService}
            onValueChange={(value) => {
              setSelectedService(value)
              setResetSecurity(!resetSecurity)
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flight">Flight Bookings</SelectItem>
              <SelectItem value="hotel">Hotel Reservations</SelectItem>
              <SelectItem value="visa">Visa Assistance</SelectItem>
              <SelectItem value="study-abroad">Study Abroad</SelectItem>
              <SelectItem value="work-abroad">Work Abroad</SelectItem>
              <SelectItem value="job-procurement">Job Procurement Abroad</SelectItem>
              <SelectItem value="visa-appointment">Visa Appointment Assistance</SelectItem>
              <SelectItem value="tour">Tour Packages</SelectItem>
              <SelectItem value="insurance">Travel Insurance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {selectedService && (
          <>
            {/* Contact Information */}
            <div className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
                  2
                </span>
                Your Information
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-semibold text-foreground">
                      Full Name *
                    </Label>
                    <Input id="name" name="name" required placeholder="John Doe" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-semibold text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="font-semibold text-foreground">
                      Phone Number *
                    </Label>
                    <Input id="phone" name="phone" required placeholder="+1 (555) 000-0000" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="nationality" className="font-semibold text-foreground">
                      Nationality *
                    </Label>
                    <Input id="nationality" name="nationality" required placeholder="Your Country" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="residence" className="font-semibold text-foreground">
                    Country of Residence *
                  </Label>
                  <Input id="residence" name="residence" required placeholder="Current Country" className="mt-2" />
                </div>
              </div>
            </div>

            {/* Service-Specific Fields */}
            {selectedService === "flight" && (
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  Service Details
                </h3>
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
              </div>
            )}

            {selectedService === "hotel" && (
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  Service Details
                </h3>
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
              </div>
            )}

            {selectedService === "visa" && (
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  Service Details
                </h3>
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
              </div>
            )}

            {selectedService === "tour" && (
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  Service Details
                </h3>
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
              </div>
            )}

            {selectedService === "insurance" && (
              <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  Service Details
                </h3>
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
              </div>
            )}

            {selectedService === "study-abroad" && (
              <div className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Study Details</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="destinationCountry" className="font-semibold text-foreground">
                      Destination Country *
                    </Label>
                    <Input
                      id="destinationCountry"
                      name="destinationCountry"
                      required
                      placeholder="e.g., USA, UK, Canada"
                      className="mt-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="studyLevel" className="font-semibold text-foreground">
                        Study Level *
                      </Label>
                      <Select name="studyLevel">
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="certification">Certification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="fieldOfStudy" className="font-semibold text-foreground">
                        Field of Study *
                      </Label>
                      <Input
                        id="fieldOfStudy"
                        name="fieldOfStudy"
                        required
                        placeholder="e.g., Engineering, Business"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="intendedStartDate" className="font-semibold text-foreground">
                        Intended Start Date *
                      </Label>
                      <Input id="intendedStartDate" name="intendedStartDate" type="date" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="englishProficiency" className="font-semibold text-foreground">
                        English Proficiency *
                      </Label>
                      <Select name="englishProficiency">
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="native">Native</SelectItem>
                          <SelectItem value="fluent">Fluent</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="beginner">Beginner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="academicQualification" className="font-semibold text-foreground">
                        Current Academic Qualification *
                      </Label>
                      <Input
                        id="academicQualification"
                        name="academicQualification"
                        required
                        placeholder="e.g., High School Diploma"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="budget" className="font-semibold text-foreground">
                        Budget Range *
                      </Label>
                      <Input
                        id="budget"
                        name="budget"
                        required
                        placeholder="e.g., $20,000 - $50,000"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="preferredCountries" className="font-semibold text-foreground">
                      Other Preferred Countries
                    </Label>
                    <Textarea
                      id="preferredCountries"
                      name="preferredCountries"
                      placeholder="List any other countries you're interested in"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedService === "work-abroad" && (
              <div className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Work Details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="jobTitle" className="font-semibold text-foreground">
                        Job Title/Position *
                      </Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        required
                        placeholder="e.g., Software Engineer"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry" className="font-semibold text-foreground">
                        Industry *
                      </Label>
                      <Input
                        id="industry"
                        name="industry"
                        required
                        placeholder="e.g., Technology, Healthcare"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="yearsOfExperience" className="font-semibold text-foreground">
                        Years of Experience *
                      </Label>
                      <Input
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        type="number"
                        required
                        placeholder="5"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="destinationCountry" className="font-semibold text-foreground">
                        Destination Country *
                      </Label>
                      <Input
                        id="destinationCountry"
                        name="destinationCountry"
                        required
                        placeholder="e.g., USA, Australia"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="skillSet" className="font-semibold text-foreground">
                      Key Skills *
                    </Label>
                    <Textarea
                      id="skillSet"
                      name="skillSet"
                      required
                      placeholder="List your main skills and competencies"
                      className="mt-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="visaType" className="font-semibold text-foreground">
                        Visa Type Needed *
                      </Label>
                      <Select name="visaType">
                        <SelectTrigger>
                          <SelectValue placeholder="Select visa type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="work-visa">Work Visa</SelectItem>
                          <SelectItem value="skilled-migration">Skilled Migration</SelectItem>
                          <SelectItem value="intra-company">Intra-company Transfer</SelectItem>
                          <SelectItem value="temp-work">Temporary Work</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="startDate" className="font-semibold text-foreground">
                        Expected Start Date *
                      </Label>
                      <Input id="startDate" name="startDate" type="date" required className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="salaryExpectation" className="font-semibold text-foreground">
                      Salary Expectation *
                    </Label>
                    <Input
                      id="salaryExpectation"
                      name="salaryExpectation"
                      required
                      placeholder="e.g., $60,000 - $80,000 annually"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedService === "job-procurement" && (
              <div className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Job Procurement Details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="jobTitle" className="font-semibold text-foreground">
                        Desired Job Title *
                      </Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        required
                        placeholder="e.g., Project Manager"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry" className="font-semibold text-foreground">
                        Industry/Sector *
                      </Label>
                      <Input
                        id="industry"
                        name="industry"
                        required
                        placeholder="e.g., Finance, Engineering"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="preferredCountries" className="font-semibold text-foreground">
                      Preferred Countries/Regions *
                    </Label>
                    <Textarea
                      id="preferredCountries"
                      name="preferredCountries"
                      required
                      placeholder="List countries where you'd like to work"
                      className="mt-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="yearsOfExperience" className="font-semibold text-foreground">
                        Years of Experience *
                      </Label>
                      <Input
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        type="number"
                        required
                        placeholder="5"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="qualifications" className="font-semibold text-foreground">
                        Key Qualifications *
                      </Label>
                      <Input
                        id="qualifications"
                        name="qualifications"
                        required
                        placeholder="e.g., Bachelor's in Business"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="salaryRange" className="font-semibold text-foreground">
                        Salary Range *
                      </Label>
                      <Input
                        id="salaryRange"
                        name="salaryRange"
                        required
                        placeholder="e.g., $50,000 - $70,000"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="startDate" className="font-semibold text-foreground">
                        Available Start Date *
                      </Label>
                      <Input id="startDate" name="startDate" type="date" required className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="languages" className="font-semibold text-foreground">
                      Languages Spoken *
                    </Label>
                    <Input
                      id="languages"
                      name="languages"
                      required
                      placeholder="e.g., English, Spanish, Mandarin"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedService === "visa-appointment" && (
              <div className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Visa Appointment Details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="visaType" className="font-semibold text-foreground">
                        Visa Type *
                      </Label>
                      <Select name="visaType">
                        <SelectTrigger>
                          <SelectValue placeholder="Select visa type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tourist">Tourist Visa</SelectItem>
                          <SelectItem value="work">Work Visa</SelectItem>
                          <SelectItem value="student">Student Visa</SelectItem>
                          <SelectItem value="family">Family Visa</SelectItem>
                          <SelectItem value="business">Business Visa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="destinationCountry" className="font-semibold text-foreground">
                        Destination Country *
                      </Label>
                      <Input
                        id="destinationCountry"
                        name="destinationCountry"
                        required
                        placeholder="e.g., USA, Canada"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="embassy" className="font-semibold text-foreground">
                      Embassy/Consulate Location *
                    </Label>
                    <Input
                      id="embassy"
                      name="embassy"
                      required
                      placeholder="e.g., Embassy of USA in Cairo"
                      className="mt-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="documentStatus" className="font-semibold text-foreground">
                        Document Readiness *
                      </Label>
                      <Select name="documentStatus">
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ready">All documents ready</SelectItem>
                          <SelectItem value="in-progress">Documents in progress</SelectItem>
                          <SelectItem value="need-help">Need help gathering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="preferredAppointmentDate" className="font-semibold text-foreground">
                        Preferred Appointment Date *
                      </Label>
                      <Input
                        id="preferredAppointmentDate"
                        name="preferredAppointmentDate"
                        type="date"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="appointmentReason" className="font-semibold text-foreground">
                      Appointment Purpose *
                    </Label>
                    <Textarea
                      id="appointmentReason"
                      name="appointmentReason"
                      required
                      placeholder="Describe why you need the visa appointment"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information */}
            <div className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
                  3
                </span>
                Additional Information
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contactMethod" className="font-semibold text-foreground">
                    Preferred Contact Method *
                  </Label>
                  <Select name="contactMethod" defaultValue="email">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="specialRequests" className="font-semibold text-foreground">
                    Special Requests or Notes
                  </Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    placeholder="Any additional information you'd like us to know?"
                    className="mt-2"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" name="consent" required />
                  <Label htmlFor="consent" className="text-sm cursor-pointer">
                    I agree to be contacted about my service request and understand my information will be kept
                    confidential
                  </Label>
                </div>
              </div>
            </div>

            {/* Security Question */}
            <div className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
                  4
                </span>
                Security Verification
              </h3>
              <SecurityQuestion onValidate={setIsSecurityValid} reset={resetSecurity} />
            </div>

            {/* Submit Button */}
            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={loading || !isSecurityValid}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
              {onClose && (
                <Button type="button" variant="outline" onClick={onClose} className="px-8 bg-transparent">
                  Cancel
                </Button>
              )}
            </div>

            {success && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-semibold text-green-900">Request Submitted Successfully!</p>
                  <p className="text-sm text-green-800">We'll review your information and contact you soon.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">{error}</p>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  )
}
