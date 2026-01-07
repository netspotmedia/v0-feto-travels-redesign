import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Inter, Playfair_Display as V0_Font_Playfair_Display } from 'next/font/google'
import { Playfair_Display, Playfair_Display as V0_Font_Playfair_Display } from 'next/font/google'

// Initialize fonts
const _playfairDisplay = V0_Font_Playfair_Display({ subsets: ['latin'], weight: ["400","500","600","700","800","900"] })

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Feto Travels - Your Gateway to Unforgettable Journeys",
  description:
    "Expert travel agency offering flights, hotels, visa assistance, and curated travel packages to destinations worldwide.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
