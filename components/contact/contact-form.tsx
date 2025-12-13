"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SecurityQuestion } from "@/components/security-question"

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
  const [isSecurityValid, setIsSecurityValid] = useState(false)
  const [resetSecurity, setResetSecurity] = useState(false)

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setStatus("error")
      return
    }
    if (!isValidEmail(formData.email)) {
      setStatus("error")
      return
    }
    if (!formData.subject.trim() || !formData.message.trim()) {
      setStatus("error")
      return
    }

    if (!isSecurityValid) {
      setStatus("error")
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setResetSecurity(!resetSecurity)
      setIsSecurityValid(false)

      setTimeout(() => setStatus("idle"), 5000)
    } catch (err) {
      console.error("Contact form error:", err)
      setStatus("error")
      setResetSecurity(!resetSecurity)
      setIsSecurityValid(false)
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Send Us a Message</h2>
        <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

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

          <SecurityQuestion onValidate={setIsSecurityValid} reset={resetSecurity} />

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={status === "loading" || !isSecurityValid}
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
