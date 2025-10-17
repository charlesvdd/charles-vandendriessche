import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, TrendingUp, Target, Zap, BarChart3, Brain } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Driving - Transformez vos données en décisions stratégiques | Charles Vandendriessche",
  description:
    "Exploitez le potentiel de vos données grâce à l'automatisation et l'intelligence artificielle. Collecte automatisée, agents IA intelligents et décisions éclairées avec Neomnia Studio.",
  keywords: [
    "data driving",
    "intelligence artificielle",
    "automatisation",
    "analyse de données",
    "agents IA",
    "décisions stratégiques",
    "Neomnia Studio",
    "data-driven",
    "business intelligence",
  ],
  openGraph: {
    title: "Data Driving - Transformez vos données en décisions stratégiques",
    description:
      "Exploitez le potentiel de vos données grâce à l'automatisation et l'intelligence artificielle avec Neomnia Studio.",
    type: "website",
  },
}

export default function DataDrivingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--neomnia-navy)] to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Data Driving
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 text-balance">
              Transformez vos données en décisions stratégiques grâce à l'automatisation et l'intelligence artificielle
            </p>
            <div className="flex justify-center">
              <Image src="/neomnia-logo-full.png" alt="Neomnia Studio" width={200} height={200} className="h-32 w-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              L'approche Data-Driven pour votre croissance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              Dans un monde où les données sont omniprésentes, savoir les collecter, les analyser et les exploiter
              devient un avantage concurrentiel majeur. Mon approche data-driven vous permet de prendre les bonnes
              décisions au bon moment, avec les bonnes personnes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardHeader>
                <Database className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Collecte Automatisée</CardTitle>
                <CardDescription>
                  Mise en place d'outils innovants pour récupérer automatiquement les données pertinentes de vos sources
                  multiples
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
              <CardHeader>
                <Brain className="h-12 w-12 text-[var(--neomnia-magenta)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Agents IA Intelligents</CardTitle>
                <CardDescription>
                  Des agents d'intelligence artificielle qui filtrent, analysent et enrichissent vos données pour en
                  extraire l'essentiel
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-orange)] transition-colors">
              <CardHeader>
                <Target className="h-12 w-12 text-[var(--neomnia-orange)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Décisions Éclairées</CardTitle>
                <CardDescription>
                  Prenez de meilleures décisions stratégiques basées sur des insights précis et actionnables
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Optimisation Continue</CardTitle>
                <CardDescription>
                  Amélioration constante de vos processus grâce à l'analyse en temps réel de vos performances
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-[var(--neomnia-magenta)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Automatisation Poussée</CardTitle>
                <CardDescription>
                  Libérez du temps en automatisant les tâches répétitives de traitement et d'analyse de données
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-orange)] transition-colors">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-[var(--neomnia-orange)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Visualisation Claire</CardTitle>
                <CardDescription>
                  Des tableaux de bord intuitifs qui rendent vos données compréhensibles et actionnables
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Neomnia Studio Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[var(--neomnia-green)] bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/neomnia-logo-full.png"
                    alt="Neomnia Studio"
                    width={150}
                    height={150}
                    className="h-24 w-24"
                  />
                </div>
                <CardTitle className="text-3xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Neomnia Studio : Votre Partenaire Data-Driven
                </CardTitle>
                <CardDescription className="text-base">
                  Découvrez comment Neomnia.net peut transformer votre approche des données
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Neomnia Studio</strong> est une plateforme complète qui combine
                  automatisation avancée et intelligence artificielle pour vous aider à exploiter pleinement le
                  potentiel de vos données. Que vous cherchiez à optimiser votre prospection, améliorer votre prise de
                  décision ou automatiser vos processus, Neomnia vous accompagne.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--neomnia-green)] mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Outils d'automatisation sur mesure pour votre activité
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--neomnia-magenta)] mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Agents IA configurables selon vos besoins</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--neomnia-orange)] mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Intégration avec vos outils existants</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--neomnia-green)] mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Support et accompagnement personnalisé</p>
                  </div>
                </div>
                <div className="pt-4">
                  <a
                    href="https://neomnia.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/90 text-white rounded-lg font-semibold transition-colors"
                  >
                    Découvrir Neomnia Studio
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
