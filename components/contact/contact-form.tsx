"use client"

import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const SERVICE_ID = "service_l26lg6f"
const TEMPLATE_ID = "template_qo6fyko"
const PUBLIC_KEY = "taK6_rQr-RNOcXofy"

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // initialize emailjs client once
  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // basic client-side validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setStatus("error")
      console.error("First and last name are required.")
      return
    }
    if (!isValidEmail(formData.email)) {
      setStatus("error")
      console.error("Invalid email address.")
      return
    }
    if (!formData.subject.trim() || !formData.message.trim()) {
      setStatus("error")
      console.error("Subject and message are required.")
      return
    }

    setStatus("loading")

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      // optional meta fields
      _replyto: formData.email,
      _subject: `Contact form: ${formData.subject}`,
      source: typeof window !== "undefined" ? window.location.href : "",
    }

    try {
      // send JSON payload via emailjs
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      // emailjs.send resolves with an object: { status: 200, text: 'OK' } on success
      if (result && (result.status === 200 || (result as any).text)) {
        setStatus("success")
        // reset form state
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setStatus("error")
        console.error("Unexpected EmailJS response:", result)
      }
    } catch (err) {
      console.error("EmailJS error:", err)
      setStatus("error")
    } finally {
      // keep status for user feedback; you might reset to 'idle' after a timeout if desired
      // e.g. setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Send Us a Message</h2>
        <p className="text-muted-foreground mb-8">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+234 901 234 5678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help you?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your travel plans..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={status === "loading"}
            aria-busy={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </form>

        <div className="mt-4 text-center" aria-live="assertive">
          {status === "success" && (
            <p className="text-green-600">✅ Thank you! Your message has been sent successfully.</p>
          )}
          {status === "error" && (
            <p className="text-red-600">❌ Oops! Something went wrong. Please check your input or try again later.</p>
          )}
        </div>
      </div>
    </section>
  )
}
