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
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
        <p className="text-muted-foreground">We'll contact you shortly at the email/phone provided.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="service" className="text-lg font-semibold mb-3 block">
          Select Service *
        </Label>
        <Select name="service" value={selectedService} onValueChange={setSelectedService} required>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="flight">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4" />
                <span>Flight Bookings</span>
              </div>
            </SelectItem>
            <SelectItem value="hotel">
              <div className="flex items-center gap-2">
                <Hotel className="w-4 h-4" />
                <span>Hotel Reservations</span>
              </div>
            </SelectItem>
            <SelectItem value="visa">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Visa Assistance</span>
              </div>
            </SelectItem>
            <SelectItem value="tour">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tour Packages</span>
              </div>
            </SelectItem>
            <SelectItem value="insurance">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Travel Insurance</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Common Client Information Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Client Information</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" required placeholder="John Doe" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" required placeholder="john@example.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number (WhatsApp preferred) *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="+234 XXX XXX XXXX" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nationality">Nationality *</Label>
              <Input id="nationality" name="nationality" required placeholder="e.g., Nigerian" />
            </div>
            <div>
              <Label htmlFor="residence">Current Country of Residence *</Label>
              <Input id="residence" name="residence" required placeholder="e.g., Nigeria" />
            </div>
          </div>

          <div>
            <Label htmlFor="contactMethod">Preferred Contact Method</Label>
            <Select name="contactMethod" defaultValue="whatsapp">
              <SelectTrigger>
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
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Service Details</h3>

          {/* Flight Booking Fields */}
          {selectedService === "flight" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="tripType">Trip Type *</Label>
                <Select name="tripType" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select trip type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oneway">One-way</SelectItem>
                    <SelectItem value="roundtrip">Round-trip</SelectItem>
                    <SelectItem value="multicity">Multi-city</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="departureCity">Departure City / Airport *</Label>
                  <Input id="departureCity" name="departureCity" required placeholder="e.g., Lagos (LOS)" />
                </div>
                <div>
                  <Label htmlFor="destinationCity">Destination City / Airport *</Label>
                  <Input id="destinationCity" name="destinationCity" required placeholder="e.g., Paris (CDG)" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="departureDate">Departure Date *</Label>
                  <Input id="departureDate" name="departureDate" type="date" required />
                </div>
                <div>
                  <Label htmlFor="returnDate">Return Date</Label>
                  <Input id="returnDate" name="returnDate" type="date" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="airline">Preferred Airline</Label>
                  <Input id="airline" name="airline" placeholder="e.g., Emirates" />
                </div>
                <div>
                  <Label htmlFor="cabinClass">Cabin Class</Label>
                  <Select name="cabinClass" defaultValue="economy">
                    <SelectTrigger>
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="adults">Number of Adults *</Label>
                  <Input id="adults" name="adults" type="number" min="1" defaultValue="1" required />
                </div>
                <div>
                  <Label htmlFor="children">Children (2-11)</Label>
                  <Input id="children" name="children" type="number" min="0" defaultValue="0" />
                </div>
                <div>
                  <Label htmlFor="infants">Infants (0-2)</Label>
                  <Input id="infants" name="infants" type="number" min="0" defaultValue="0" />
                </div>
              </div>

              <div>
                <Label htmlFor="budget">Estimated Budget (₦ / $)</Label>
                <Input id="budget" name="budget" placeholder="e.g., ₦500,000 or $1,200" />
              </div>
            </div>
          )}

          {/* Hotel Reservation Fields */}
          {selectedService === "hotel" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="destinationCity">Destination City *</Label>
                <Input id="destinationCity" name="destinationCity" required placeholder="e.g., Dubai" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="checkinDate">Check-in Date *</Label>
                  <Input id="checkinDate" name="checkinDate" type="date" required />
                </div>
                <div>
                  <Label htmlFor="checkoutDate">Check-out Date *</Label>
                  <Input id="checkoutDate" name="checkoutDate" type="date" required />
                </div>
                <div>
                  <Label htmlFor="rooms">Number of Rooms *</Label>
                  <Input id="rooms" name="rooms" type="number" min="1" defaultValue="1" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="adults">Number of Adults *</Label>
                  <Input id="adults" name="adults" type="number" min="1" defaultValue="1" required />
                </div>
                <div>
                  <Label htmlFor="children">Number of Children</Label>
                  <Input id="children" name="children" type="number" min="0" defaultValue="0" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hotelCategory">Hotel Category</Label>
                  <Select name="hotelCategory" defaultValue="4star">
                    <SelectTrigger>
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
                  <Label htmlFor="bedType">Bed Type</Label>
                  <Select name="bedType" defaultValue="double">
                    <SelectTrigger>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="breakfast">Breakfast Included?</Label>
                  <Select name="breakfast" defaultValue="yes">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="preferredHotel">Preferred Hotel Name</Label>
                  <Input id="preferredHotel" name="preferredHotel" placeholder="Optional" />
                </div>
              </div>
            </div>
          )}

          {/* Visa Assistance Fields */}
          {selectedService === "visa" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="destinationCountry">Destination Country *</Label>
                  <Input
                    id="destinationCountry"
                    name="destinationCountry"
                    required
                    placeholder="e.g., United Kingdom"
                  />
                </div>
                <div>
                  <Label htmlFor="visaType">Visa Type *</Label>
                  <Select name="visaType" required>
                    <SelectTrigger>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="travelDate">Intended Travel Date *</Label>
                  <Input id="travelDate" name="travelDate" type="date" required />
                </div>
                <div>
                  <Label htmlFor="stayDuration">Duration of Stay *</Label>
                  <Input id="stayDuration" name="stayDuration" required placeholder="e.g., 14 days" />
                </div>
              </div>

              <div>
                <Label htmlFor="appliedBefore">Have you applied for this visa before?</Label>
                <Select name="appliedBefore" defaultValue="no">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="previousVisas">Previous Visas Held</Label>
                <Input id="previousVisas" name="previousVisas" placeholder="e.g., USA, UK, Schengen" />
              </div>

              <div>
                <Label htmlFor="visaRefused">Have you been refused a visa before?</Label>
                <Select name="visaRefused" defaultValue="no">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="refusalReason">If yes, please explain</Label>
                <Textarea id="refusalReason" name="refusalReason" rows={2} placeholder="Optional" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="validPassport">Valid Passport?</Label>
                  <Select name="validPassport" defaultValue="yes">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bankStatement">Bank Statement Ready?</Label>
                  <Select name="bankStatement" defaultValue="yes">
                    <SelectTrigger>
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
            <div className="space-y-4">
              <div>
                <Label htmlFor="destination">Destination Country/City *</Label>
                <Input id="destination" name="destination" required placeholder="e.g., Morocco" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="travelDates">Travel Dates *</Label>
                  <Input id="travelDates" name="travelDates" type="date" required />
                </div>
                <div>
                  <Label htmlFor="duration">Duration (Days) *</Label>
                  <Input id="duration" name="duration" type="number" min="1" required placeholder="e.g., 7" />
                </div>
                <div>
                  <Label htmlFor="travelers">Number of Travelers *</Label>
                  <Input id="travelers" name="travelers" type="number" min="1" defaultValue="1" required />
                </div>
              </div>

              <div>
                <Label htmlFor="tourType">Type of Tour *</Label>
                <Select name="tourType" required>
                  <SelectTrigger>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budgetRange">Budget Range *</Label>
                  <Input id="budgetRange" name="budgetRange" required placeholder="e.g., ₦500k - ₦1M" />
                </div>
                <div>
                  <Label htmlFor="accommodation">Accommodation Level</Label>
                  <Select name="accommodation" defaultValue="4star">
                    <SelectTrigger>
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
                <Label className="mb-2 block">Activities of Interest</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="city-tours" name="activities" value="city-tours" />
                    <label htmlFor="city-tours" className="text-sm cursor-pointer">
                      City Tours
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="safari" name="activities" value="safari" />
                    <label htmlFor="safari" className="text-sm cursor-pointer">
                      Safari
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="beach" name="activities" value="beach" />
                    <label htmlFor="beach" className="text-sm cursor-pointer">
                      Beach
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cultural" name="activities" value="cultural" />
                    <label htmlFor="cultural" className="text-sm cursor-pointer">
                      Cultural Tours
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="shopping" name="activities" value="shopping" />
                    <label htmlFor="shopping" className="text-sm cursor-pointer">
                      Shopping
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Travel Insurance Fields */}
          {selectedService === "insurance" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="destinationCountry">Destination Country *</Label>
                <Input id="destinationCountry" name="destinationCountry" required placeholder="e.g., USA" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="startDate">Travel Start Date *</Label>
                  <Input id="startDate" name="startDate" type="date" required />
                </div>
                <div>
                  <Label htmlFor="endDate">Travel End Date *</Label>
                  <Input id="endDate" name="endDate" type="date" required />
                </div>
                <div>
                  <Label htmlFor="travelers">Number of Travelers *</Label>
                  <Input id="travelers" name="travelers" type="number" min="1" defaultValue="1" required />
                </div>
              </div>

              <div>
                <Label htmlFor="ages">Age of Travelers</Label>
                <Input id="ages" name="ages" placeholder="e.g., 35, 32, 8, 5" />
              </div>

              <div>
                <Label htmlFor="coverageType">Coverage Type *</Label>
                <Select name="coverageType" required>
                  <SelectTrigger>
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
                <Label htmlFor="tripPurpose">Trip Purpose</Label>
                <Select name="tripPurpose" defaultValue="tourism">
                  <SelectTrigger>
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

      {/* Additional Notes Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
        <div>
          <Label htmlFor="specialRequests">Special Requests / Comments</Label>
          <Textarea
            id="specialRequests"
            name="specialRequests"
            rows={4}
            placeholder="Any special requirements or additional information..."
          />
        </div>
      </div>

      {/* Consent Section */}
      <div className="border-t pt-6">
        <div className="flex items-start space-x-2">
          <Checkbox id="consent" name="consent" required />
          <label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
            I confirm that the information provided is accurate and I consent to Feto Travels contacting me regarding my
            request *
          </label>
        </div>
      </div>

      <SecurityQuestion onValidate={setIsSecurityValid} reset={resetSecurity} />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex gap-4">
        <Button type="submit" className="flex-1" disabled={loading || !isSecurityValid}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Request"
          )}
        </Button>
        {onClose && (
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}
