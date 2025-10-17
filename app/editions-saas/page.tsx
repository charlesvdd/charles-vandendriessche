import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Users, CreditCard, Shield, Zap, Code2, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Éditions de SaaS - Templates et Solutions sur Mesure | Charles Vandendriessche",
  description:
    "Lancez votre SaaS rapidement avec NeoSaaS, un template prêt à l'emploi. Authentification, paiements Stripe, gestion utilisateurs et architecture moderne inclus.",
  keywords: [
    "SaaS",
    "template SaaS",
    "NeoSaaS",
    "développement SaaS",
    "Next.js",
    "TypeScript",
    "Stripe",
    "authentification",
    "startup",
    "MVP",
  ],
  openGraph: {
    title: "Éditions de SaaS - Templates et Solutions sur Mesure",
    description: "Lancez votre SaaS rapidement avec NeoSaaS, un template prêt à l'emploi.",
    type: "website",
  },
}

export default function EditionsSaasPage() {
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
              Éditions de SaaS
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-balance">
              Lancez votre SaaS rapidement avec des templates prêts à l'emploi et des solutions sur mesure
            </p>
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
              Accélérez le développement de votre SaaS
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              Créer un SaaS from scratch prend du temps et nécessite de nombreuses compétences techniques. Avec mes
              solutions, vous pouvez vous concentrer sur votre valeur ajoutée pendant que je m'occupe de
              l'infrastructure technique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardHeader>
                <Rocket className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Lancement Rapide</CardTitle>
                <CardDescription>
                  Templates prêts à l'emploi pour démarrer votre SaaS en quelques jours au lieu de plusieurs mois
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-[var(--neomnia-magenta)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Gestion Utilisateurs</CardTitle>
                <CardDescription>
                  Système complet d'authentification, gestion des rôles et permissions déjà intégré
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-orange)] transition-colors">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-[var(--neomnia-orange)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Paiements Intégrés</CardTitle>
                <CardDescription>
                  Connexion Stripe prête à l'emploi pour gérer abonnements, factures et paiements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Sécurité Renforcée</CardTitle>
                <CardDescription>
                  Best practices de sécurité implémentées : authentification, encryption, protection des données
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-[var(--neomnia-magenta)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Performance Optimale</CardTitle>
                <CardDescription>
                  Architecture moderne avec Next.js, optimisations SEO et temps de chargement ultra-rapides
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-orange)] transition-colors">
              <CardHeader>
                <Code2 className="h-12 w-12 text-[var(--neomnia-orange)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Code Moderne</CardTitle>
                <CardDescription>
                  Stack technique à jour : TypeScript, React, Tailwind CSS, base de données SQL
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* NeoSaaS Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[var(--neomnia-green)] bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--neomnia-green)] to-[var(--neomnia-magenta)] flex items-center justify-center">
                    <Rocket className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  NeoSaaS : Template SaaS Prêt à l'Emploi
                </CardTitle>
                <CardDescription className="text-base">
                  Un template complet pour lancer votre SaaS en un temps record
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">NeoSaaS</strong> est un template open-source que j'ai développé
                  pour permettre aux entrepreneurs et développeurs de lancer leur SaaS rapidement. Il inclut toutes les
                  fonctionnalités essentielles dont vous avez besoin pour démarrer.
                </p>
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h4
                    className="font-bold text-lg flex items-center gap-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <Github className="h-5 w-5" />
                    Fonctionnalités incluses
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-green)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Authentification complète (email, OAuth)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-magenta)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Gestion des utilisateurs et permissions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-orange)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Intégration Stripe pour les paiements</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-green)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Dashboard admin complet</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-magenta)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Base de données PostgreSQL</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-orange)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Documentation complète</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--neomnia-navy)] text-white rounded-lg p-4">
                  <p className="text-sm font-mono text-white">
                    <span className="text-[var(--neomnia-green)]">$</span> git clone
                    https://github.com/neosaastech/neosaas
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://github.com/neosaastech/neosaas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/90 text-white"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Voir sur GitHub
                    </Button>
                  </a>
                  <a
                    href="https://neosaas.kubernete.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-[var(--neomnia-green)] text-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/10 bg-transparent"
                    >
                      Voir la Démo
                    </Button>
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
