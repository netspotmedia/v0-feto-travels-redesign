import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const emailContent = `
New Contact Form Submission from Feto Travels Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subject: ${data.subject}

Message:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted at: ${new Date().toLocaleString()}

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
        reply_to: data.email,
        to: ["fetotravels@gmail.com"],
        subject: `Contact Form: ${data.subject} - from ${data.firstName} ${data.lastName}`,
        text: emailContent,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Email send failed:", errorText)
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
