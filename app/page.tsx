import { SiteHeader } from "@/components/sections/site-header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Portfolio } from "@/components/sections/portfolio"
import { ComingSoon } from "@/components/sections/coming-soon"
import { Contact } from "@/components/sections/contact"
import { SiteFooter } from "@/components/sections/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <Portfolio />
      <ComingSoon />
      <Contact />
      <SiteFooter />
    </main>
  )
}
