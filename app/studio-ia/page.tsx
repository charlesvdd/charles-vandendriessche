import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Database, Zap, Brain, LineChart, Shield } from "lucide-react"
import Image from "next/image"

export default function StudioIAPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <Image src="/neomnia-logo.png" alt="Neomnia" width={200} height={200} className="mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Studio IA & Automatisation Data-Driven</h1>
            <p className="text-xl text-foreground/70 max-w-3xl text-pretty leading-relaxed">
              Transformez vos données en décisions stratégiques grâce à des outils d'automatisation innovants et des
              agents IA intelligents
            </p>
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">
                L'Intelligence Artificielle au Service de Votre Croissance
              </h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Dans un monde où les données sont omniprésentes, la capacité à les collecter, les analyser et les
                exploiter efficacement devient un avantage concurrentiel majeur.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Mon studio IA vous permet de mettre en œuvre des solutions d'automatisation avancées qui récupèrent,
                filtrent et analysent vos données pour vous permettre de prendre les meilleures décisions, au bon
                moment, avec les bonnes personnes.
              </p>
            </div>
            <div className="bg-[var(--neomnia-green)]/5 p-8 rounded-2xl border-2 border-[var(--neomnia-green)]/20">
              <h3 className="text-2xl font-bold mb-4">Pourquoi l'Automatisation Data-Driven ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-[var(--neomnia-green)] rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-foreground/80 leading-relaxed">
                    Gain de temps considérable sur les tâches répétitives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-[var(--neomnia-green)] rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-foreground/80 leading-relaxed">
                    Réduction des erreurs humaines dans le traitement des données
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-[var(--neomnia-green)] rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-foreground/80 leading-relaxed">
                    Insights en temps réel pour des décisions plus rapides
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-[var(--neomnia-green)] rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-foreground/80 leading-relaxed">
                    Scalabilité : traitez des volumes de données croissants sans effort
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Nos Solutions d'Automatisation IA</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-[var(--neomnia-green)]/10 rounded-lg w-fit mb-4">
                  <Database className="h-8 w-8 text-[var(--neomnia-green)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collecte Automatisée</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Récupération automatique de données depuis multiples sources : web scraping, APIs, bases de données,
                  fichiers, etc.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-[var(--neomnia-magenta)]/10 rounded-lg w-fit mb-4">
                  <Brain className="h-8 w-8 text-[var(--neomnia-magenta)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Agents IA Intelligents</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Des agents IA qui filtrent, classifient et enrichissent vos données selon vos critères métier
                  spécifiques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-[var(--neomnia-orange)]/10 rounded-lg w-fit mb-4">
                  <LineChart className="h-8 w-8 text-[var(--neomnia-orange)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Analyse Prédictive</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Modèles d'IA qui identifient les tendances, prédisent les comportements et recommandent des actions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-[var(--neomnia-green)]/10 rounded-lg w-fit mb-4">
                  <Zap className="h-8 w-8 text-[var(--neomnia-green)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Workflows Automatisés</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Création de processus automatisés de bout en bout, de la collecte à l'action, sans intervention
                  manuelle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-[var(--neomnia-magenta)]/10 rounded-lg w-fit mb-4">
                  <Bot className="h-8 w-8 text-[var(--neomnia-magenta)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Chatbots & Assistants</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Assistants conversationnels intelligents pour interagir avec vos données et obtenir des réponses
                  instantanées.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-[var(--neomnia-orange)]/10 rounded-lg w-fit mb-4">
                  <Shield className="h-8 w-8 text-[var(--neomnia-orange)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sécurité & Conformité</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Solutions conformes RGPD avec chiffrement des données et contrôle d'accès granulaire.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-br from-[var(--neomnia-green)]/5 to-[var(--neomnia-magenta)]/5 p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-balance">Cas d'Usage Concrets</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-[var(--neomnia-green)]">
                  Veille Concurrentielle Automatisée
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Surveillez automatiquement les prix, produits et communications de vos concurrents. Recevez des
                  alertes en temps réel sur les changements importants.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-[var(--neomnia-magenta)]">
                  Qualification de Leads Intelligente
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Des agents IA analysent et scorent automatiquement vos prospects selon vos critères, enrichissent les
                  données et priorisent les opportunités.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-[var(--neomnia-orange)]">Analyse de Sentiment Client</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Collectez et analysez automatiquement les avis clients, commentaires sur les réseaux sociaux et
                  feedbacks pour identifier les tendances.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-[var(--neomnia-green)]">Reporting Automatisé</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Génération automatique de rapports personnalisés avec visualisations, insights et recommandations
                  basées sur vos KPIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Prêt à Automatiser Votre Croissance ?</h2>
          <p className="text-xl text-foreground/70 mb-8 text-pretty leading-relaxed">
            Discutons de vos besoins et découvrez comment l'IA peut transformer votre activité
          </p>
          <a
            href="https://outlook.office.com/book/RendezvousregularavecCharlesVandendriessche@neomnia.onmicrosoft.com/?ismsaljsauthenabled"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Réserver un Rendez-vous
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
