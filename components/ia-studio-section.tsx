import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Database, Filter, Zap, LineChart, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function IAStudioSection() {
  const features = [
    {
      icon: Database,
      title: "Collecte de Données",
      description: "Récupération automatisée de données pertinentes depuis multiples sources",
    },
    {
      icon: Bot,
      title: "Agents IA Intelligents",
      description: "Filtrage et analyse de données par des agents IA pour extraire l'essentiel",
    },
    {
      icon: Filter,
      title: "Qualification Automatique",
      description: "Tri et qualification automatique des données selon vos critères",
    },
    {
      icon: LineChart,
      title: "Décisions Éclairées",
      description: "Insights actionnables pour prendre les bonnes décisions au bon moment",
    },
    {
      icon: Zap,
      title: "Automatisation Complète",
      description: "Workflows automatisés pour gagner du temps et de l'efficacité",
    },
    {
      icon: Brain,
      title: "Intelligence Prédictive",
      description: "Anticipation des tendances et opportunités grâce à l'IA",
    },
  ]

  return (
    <section id="ia-studio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image src="/neomnia-logo.png" alt="Neomnia Logo" width={200} height={200} className="rounded-full" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Studio IA Data-Driven
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-balance">
            Mon activité s'oriente vers le studio IA{" "}
            <Link
              href="https://neomnia.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--neomnia-green)] hover:underline font-semibold"
            >
              neomnia.net
            </Link>
            , une plateforme d'automatisation intelligente qui transforme vos données en décisions stratégiques
          </p>
          <p className="text-base text-muted-foreground leading-relaxed text-balance">
            Je mets en œuvre des outils innovants d'automatisation pour récupérer, filtrer et analyser vos données. Mes
            agents IA vous permettent de prendre de meilleures décisions, au bon moment, avec la bonne personne.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-[var(--neomnia-green)] to-[var(--neomnia-magenta)]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="https://neomnia.net" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--neomnia-green)] to-[var(--neomnia-magenta)] hover:opacity-90 text-white text-lg px-8"
            >
              Découvrir neomnia.net
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
