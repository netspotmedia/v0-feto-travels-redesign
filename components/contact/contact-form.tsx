"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SecurityQuestion } from "@/components/security-question"
import { Loader2, Mail, CheckCircle2 } from "lucide-react"

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have questions about your travel plans? Fill out the form below and our team will respond within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 mb-2 block">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234 901 234 5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <Label htmlFor="subject" className="text-sm font-semibold text-gray-700 mb-2 block">
                Subject <span className="text-red-500">*</span>
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your travel plans, questions, or how we can assist you..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="text-base border-2 border-gray-200 focus:border-blue-500 resize-none transition-colors"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <SecurityQuestion onValidate={setIsSecurityValid} reset={resetSecurity} />
            </div>

            <Button
              type="submit"
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              disabled={status === "loading" || !isSecurityValid}
              aria-busy={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          <div className="mt-6" aria-live="assertive">
            {status === "success" && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">Message sent successfully!</p>
                  <p className="text-sm text-green-700 mt-1">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                <p className="text-red-900 font-medium">Oops! Something went wrong.</p>
                <p className="text-sm text-red-700 mt-1">
                  Please check your information and try again, or contact us directly at{" "}
                  <a href="mailto:fetotravels@gmail.com" className="underline">
                    fetotravels@gmail.com
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          🔒 Your information is secure and will never be shared with third parties
        </p>
      </div>
    </section>
  )
}
