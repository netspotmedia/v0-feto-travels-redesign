import { Header } from "@/components/header"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { WhatWeDo } from "@/components/about/what-we-do"
import { OurValues } from "@/components/about/our-values"
import { OurApproach } from "@/components/about/our-approach"
import { MeetTheTeam } from "@/components/about/meet-the-team"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <WhatWeDo />
        <OurValues />
        <OurApproach />
        <MeetTheTeam />
      </main>
    </div>
  )
}
