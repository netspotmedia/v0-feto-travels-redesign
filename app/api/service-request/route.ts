import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const serviceNames = {
      flight: "Flight Bookings",
      hotel: "Hotel Reservations",
      visa: "Visa Assistance",
      tour: "Tour Packages",
      insurance: "Travel Insurance",
    }

    let serviceDetails = ""

    if (data.service === "flight") {
      serviceDetails = `
FLIGHT BOOKING DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trip Type: ${data.tripType || "Not specified"}
Departure: ${data.departureCity || "Not specified"}
Destination: ${data.destinationCity || "Not specified"}
Departure Date: ${data.departureDate || "Not specified"}
Return Date: ${data.returnDate || "Not specified"}
Preferred Airline: ${data.airline || "No preference"}
Cabin Class: ${data.cabinClass || "Economy"}

PASSENGERS
Adults: ${data.adults || "1"}
Children (2-11): ${data.children || "0"}
Infants (0-2): ${data.infants || "0"}

Budget: ${data.budget || "Not specified"}
      `.trim()
    } else if (data.service === "hotel") {
      serviceDetails = `
HOTEL RESERVATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Destination: ${data.destinationCity || "Not specified"}
Check-in: ${data.checkinDate || "Not specified"}
Check-out: ${data.checkoutDate || "Not specified"}
Number of Rooms: ${data.rooms || "1"}

GUESTS
Adults: ${data.adults || "1"}
Children: ${data.children || "0"}

PREFERENCES
Hotel Category: ${data.hotelCategory || "Not specified"}
Bed Type: ${data.bedType || "Not specified"}
Breakfast: ${data.breakfast || "Not specified"}
Preferred Hotel: ${data.preferredHotel || "No preference"}
      `.trim()
    } else if (data.service === "visa") {
      serviceDetails = `
VISA ASSISTANCE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Destination Country: ${data.destinationCountry || "Not specified"}
Visa Type: ${data.visaType || "Not specified"}
Travel Date: ${data.travelDate || "Not specified"}
Stay Duration: ${data.stayDuration || "Not specified"}

TRAVEL HISTORY
Applied Before: ${data.appliedBefore || "No"}
Previous Visas: ${data.previousVisas || "None"}
Visa Refused Before: ${data.visaRefused || "No"}
${data.refusalReason ? `Refusal Reason: ${data.refusalReason}` : ""}

DOCUMENT READINESS
Valid Passport: ${data.validPassport || "Not specified"}
Bank Statement Ready: ${data.bankStatement || "Not specified"}
      `.trim()
    } else if (data.service === "tour") {
      serviceDetails = `
TOUR PACKAGE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Destination: ${data.destination || "Not specified"}
Travel Date: ${data.travelDates || "Not specified"}
Duration: ${data.duration || "Not specified"} days
Number of Travelers: ${data.travelers || "1"}

PREFERENCES
Tour Type: ${data.tourType || "Not specified"}
Budget Range: ${data.budgetRange || "Not specified"}
Accommodation Level: ${data.accommodation || "Not specified"}
Activities: ${Array.isArray(data.activities) && data.activities.length > 0 ? data.activities.join(", ") : "None specified"}
      `.trim()
    } else if (data.service === "insurance") {
      serviceDetails = `
TRAVEL INSURANCE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Destination Country: ${data.destinationCountry || "Not specified"}
Start Date: ${data.startDate || "Not specified"}
End Date: ${data.endDate || "Not specified"}
Number of Travelers: ${data.travelers || "1"}
Ages of Travelers: ${data.ages || "Not specified"}

COVERAGE
Coverage Type: ${data.coverageType || "Not specified"}
Trip Purpose: ${data.tripPurpose || "Tourism"}
      `.trim()
    }

    const emailContent = `
New Service Request from Feto Travels Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVICE REQUESTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${serviceNames[data.service as keyof typeof serviceNames] || data.service}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Nationality: ${data.nationality || "Not specified"}
Current Residence: ${data.residence || "Not specified"}
Preferred Contact: ${data.contactMethod || "WhatsApp"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${serviceDetails}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SPECIAL REQUESTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${data.specialRequests || "No special requests"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted at: ${new Date().toLocaleString()}
Client has confirmed information accuracy.

Please respond to this client within 24 hours.
    `.trim()

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Feto Travels <onboarding@resend.dev>",
        reply_to: "fetotravels@gmail.com",
        to: ["fetotravels@gmail.com"],
        subject: `New ${serviceNames[data.service as keyof typeof serviceNames]} Request from ${data.name}`,
        text: emailContent,
      }),
    })

    if (!response.ok) {
      console.error("[v0] Email send failed:", await response.text())
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Service request error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
