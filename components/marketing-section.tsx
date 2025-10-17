import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, ListChecks, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MarketingSection() {
  const services = [
    {
      icon: Target,
      title: "Prospection Ciblée",
      description: "Identification et qualification de vos prospects idéaux pour maximiser vos chances de conversion",
      color: "var(--neomnia-green)",
    },
    {
      icon: Users,
      title: "Organisation Commerciale",
      description: "Structuration et optimisation de vos processus commerciaux pour une efficacité maximale",
      color: "var(--neomnia-magenta)",
    },
    {
      icon: ListChecks,
      title: "Listes Ultra-Qualifiées",
      description: "Génération de bases de données ciblées et enrichies pour vos campagnes marketing",
      color: "var(--neomnia-orange)",
    },
    {
      icon: TrendingUp,
      title: "Croissance Mesurable",
      description: "Suivi et analyse de vos performances pour un ROI optimal et une croissance continue",
      color: "var(--neomnia-green)",
    },
  ]

  return (
    <section id="marketing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Marketing Direct
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Je vous accompagne dans votre développement commercial avec des stratégies de prospection éprouvées et des
            listes de contacts ultra-qualifiées
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="https://mission-croissance.fr" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/90 text-white text-lg px-8"
            >
              En savoir plus sur Mission Croissance
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
