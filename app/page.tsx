import { DoseCalculator } from "@/components/dose-calculator"
import { Hero } from "@/components/hero"
import { HoursAndHabits } from "@/components/hours-and-habits"
import { Playbook } from "@/components/playbook"
import { Season } from "@/components/season"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatBandingMeans } from "@/components/what-banding-means"
import { WhatIsPgr } from "@/components/what-is-pgr"
import { WhyItFails } from "@/components/why-it-fails"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhyItFails />
        <Playbook />
        <WhatBandingMeans />
        <WhatIsPgr />
        <DoseCalculator />
        <Season />
        <HoursAndHabits />
      </main>
      <SiteFooter />
    </>
  )
}
