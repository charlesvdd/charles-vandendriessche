import { SiteNav } from "@/components/site-nav"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioAbout } from "@/components/portfolio-about"
import { PortfolioParcours } from "@/components/portfolio-parcours"
import { PortfolioProjets } from "@/components/portfolio-projets"
import { ContactSection } from "@/components/contact-section"
import { PortfolioSocial } from "@/components/portfolio-social"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <PortfolioHero />
      <PortfolioAbout />
      <PortfolioParcours />
      <PortfolioProjets />
      <ContactSection />
      <PortfolioSocial />
      <Footer />
    </main>
  )
}
