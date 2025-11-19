import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MissionCroissancePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center mb-12">
            <Image
              src="/mission-croissance-logo.png"
              alt="Mission Croissance"
              width={400}
              height={100}
              className="mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Agence Marketing Direct B2B</h1>
            <p className="text-xl text-foreground/70 max-w-3xl text-pretty leading-relaxed">
              Accompagnement stratégique et opérationnel des PME et ETI dans leur développement commercial
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/mission-croissance-icon.png" alt="Mission Croissance" width={60} height={60} />
                <h2 className="text-4xl font-bold text-balance">Notre Mission</h2>
              </div>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Mission Croissance est une agence spécialisée dans le marketing direct B2B, dédiée aux PME et ETI qui
                souhaitent accélérer leur développement commercial.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Nous vous assistons dans votre croissance économique, stratégique et opérationnelle grâce à une approche
                sur-mesure et des méthodes éprouvées.
              </p>
              <Link href="https://mission-croissance.fr" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[var(--neomnia-orange)] hover:bg-[var(--neomnia-orange)]/90 text-white">
                  Visiter mission-croissance.fr
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-[var(--neomnia-orange)]/5 p-8 rounded-2xl border-2 border-[var(--neomnia-orange)]/20">
              <h3 className="text-2xl font-bold mb-6">Gagnez la confiance que vous méritez</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[var(--neomnia-orange)] flex-shrink-0 mt-1" />
                  <span className="text-foreground/80 leading-relaxed">Expertise sectorielle en B2B</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[var(--neomnia-orange)] flex-shrink-0 mt-1" />
                  <span className="text-foreground/80 leading-relaxed">Approche personnalisée selon vos enjeux</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[var(--neomnia-orange)] flex-shrink-0 mt-1" />
                  <span className="text-foreground/80 leading-relaxed">Résultats mesurables et ROI optimisé</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[var(--neomnia-orange)] flex-shrink-0 mt-1" />
                  <span className="text-foreground/80 leading-relaxed">Accompagnement de A à Z</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Nos Services Marketing Direct</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-[var(--neomnia-orange)]/10 rounded-lg w-fit mb-4">
                  <Target className="h-8 w-8 text-[var(--neomnia-orange)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prospection Ciblée</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Identification et approche des prospects à fort potentiel pour votre activité.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neomnia-orange)] mt-1">•</span>
                    <span>Définition de votre cible idéale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neomnia-orange)] mt-1">•</span>
                    <span>Campagnes multi-canaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neomnia-orange)] mt-1">•</span>
                    <span>Suivi et relances personnalisées</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-[var(--neomnia-green)]/10 rounded-lg w-fit mb-4">
                  <Users className="h-8 w-8 text-[var(--neomnia-green)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Listes Ultra-Qualifiées</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Génération de bases de données ciblées et enrichies pour maximiser vos taux de conversion.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neomnia-green)] mt-1">•</span>
                    <span>Segmentation avancée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neomnia-green)] mt-1">•</span>
                    <span>Enrichissement des données</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neomnia-green)] mt-1">•</span>
                    <span>Conformité RGPD garantie</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="p-3 bg-[var(--neomnia-magenta)]/10 rounded-lg w-fit mb-4">
                  <Building2 className="h-8 w-8 text-[var(--neomnia-magenta)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Organisation Commerciale</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Structuration et optimisation de votre force de vente pour une efficacité maximale.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neomnia-magenta)] mt-1">•</span>
                    <span>Audit de votre process commercial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neomnia-magenta)] mt-1">•</span>
                    <span>Mise en place d'outils CRM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--neomnia-magenta)] mt-1">•</span>
                    <span>Formation des équipes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Approach */}
          <div className="bg-gradient-to-br from-[var(--neomnia-orange)]/5 to-[var(--neomnia-green)]/5 p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-balance">Notre Approche en 4 Étapes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--neomnia-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Audit & Diagnostic</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Analyse approfondie de votre situation actuelle, de vos objectifs et de votre marché.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--neomnia-green)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Stratégie Sur-Mesure</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Élaboration d'un plan d'action personnalisé adapté à vos ressources et ambitions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--neomnia-magenta)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mise en Œuvre</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Déploiement opérationnel des actions avec accompagnement continu de nos experts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--neomnia-orange)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Optimisation Continue</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Suivi des performances, ajustements et amélioration continue pour maximiser les résultats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Pour Qui ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[var(--neomnia-orange)]/20">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-[var(--neomnia-orange)] mb-4" />
                <h3 className="text-2xl font-bold mb-4">PME en Croissance</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Vous souhaitez structurer votre développement commercial et passer à l'échelle supérieure avec des
                  méthodes éprouvées.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[var(--neomnia-green)]/20">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <h3 className="text-2xl font-bold mb-4">ETI B2B</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Vous cherchez à optimiser votre organisation commerciale et à conquérir de nouveaux marchés avec
                  efficacité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Développons Votre Activité Ensemble</h2>
          <p className="text-xl text-foreground/70 mb-8 text-pretty leading-relaxed">
            Échangeons sur vos enjeux commerciaux et découvrez comment Mission Croissance peut vous accompagner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://mission-croissance.fr" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[var(--neomnia-orange)] hover:bg-[var(--neomnia-orange)]/90 text-white px-8 py-6 text-lg">
                Visiter le Site
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://outlook.office.com/book/RendezvousregularavecCharlesVandendriessche@neomnia.onmicrosoft.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="px-8 py-6 text-lg border-2 bg-transparent">
                Prendre Rendez-vous
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
