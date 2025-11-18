import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTAFinalSection } from "@/components/cta-final-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown, AlertCircle, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />

      {/* Problem Statement Section for B2B Companies */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--neomnia-anthracite)] text-balance">
              Les défis des organisations avant la fin de la décennie
            </h2>
            <p className="text-xl text-[var(--neomnia-anthracite)] max-w-3xl mx-auto text-pretty">
              Ne pas agir face à ces défis expose votre entreprise au déclassement et à une concurrence de plus en plus
              agressive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-gray-200 hover:border-[var(--neomnia-green)] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <TrendingDown className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--neomnia-anthracite)]">Retard Technologique</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  L'Europe investit seulement <strong>2,2% de son PIB en R&D</strong>, contre 3,5% aux États-Unis. Les
                  entreprises peinent à adopter l'IA, le cloud et l'automatisation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[var(--neomnia-green)] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--neomnia-anthracite)]">Données Sous-Exploitées</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  <strong>60% des données collectées</strong> ne sont jamais analysées. Les décisions stratégiques
                  restent basées sur l'intuition plutôt que sur des insights data-driven.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[var(--neomnia-green)] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--neomnia-anthracite)]">Prospection Inefficace</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Les équipes commerciales perdent <strong>40% de leur temps</strong> sur des prospects non qualifiés,
                  faute d'outils d'automatisation et de ciblage précis.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[var(--neomnia-black)] text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4 text-balance text-[var(--neomnia-green)]">
                Et si vous pouviez transformer ces défis en opportunités ?
              </h3>
              <p className="text-lg text-[#262626] bg-white rounded-lg p-6 mb-8 leading-relaxed text-pretty">
                Des données plus pertinentes pour prendre des décisions plus rapides et plus judicieuses. Apprenez à
                mieux connaître vos concurrents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/data-driving">
                  <Button
                    size="lg"
                    className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white"
                  >
                    Découvrir nos solutions IA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/marketing">
                  <Button size="lg" className="bg-[#262626] hover:bg-[#1a1a1a] text-white border-2 border-white">
                    Optimiser votre prospection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-balance">Mes Services</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto text-pretty">
            Je vous accompagne dans votre transformation digitale avec deux expertises complémentaires
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Studio IA Card */}
            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-[var(--neomnia-green)]/10 rounded-lg">
                    <Image
                      src="/neomnia-logo-icon.png"
                      alt="Neomnia"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Studio IA & Automatisation</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-foreground/70">
                    <svg
                      className="w-5 h-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>La formalisation pour réduire vos coûts administratifs</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/70">
                    <svg
                      className="w-5 h-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>La recherche de données pour perdre moins de temps</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/70">
                    <svg
                      className="w-5 h-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Déléguer des tâches énergivores</span>
                  </li>
                </ul>
                <Link href="/data-driving">
                  <Button className="w-full bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white">
                    Découvrir le Studio IA
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Mission Croissance Card */}
            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-[var(--neomnia-green)]/10 rounded-lg">
                    <Image
                      src="/mission-croissance-icon.png"
                      alt="Mission Croissance"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Marketing Direct</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-foreground/70">
                    <svg
                      className="w-5 h-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Prospection et organisation commerciale</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/70">
                    <svg
                      className="w-5 h-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Génération de listes ultra-qualifiées</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/70">
                    <svg
                      className="w-5 h-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Développement stratégique PME & ETI B2B</span>
                  </li>
                </ul>
                <Link href="/marketing">
                  <Button className="w-full bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white">
                    Découvrir Mission Croissance
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ProcessSection />
      <UseCasesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />

      <ContactSection />
      <CTAFinalSection />
      <Footer />
    </main>
  )
}
