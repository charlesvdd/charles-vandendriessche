import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const plans = [
    {
      name: "Audit & Stratégie",
      price: "2 500",
      duration: "forfait",
      description: "Comprendre vos besoins et tracer votre roadmap",
      features: [
        "Audit complet de vos outils et processus",
        "Rapport stratégique détaillé",
        "Recommandations prioritaires",
        "Plan d'action sur 6 mois",
        "Support 2 semaines",
      ],
      highlighted: false,
    },
    {
      name: "Projet Standard",
      price: "12 500",
      duration: "forfait",
      description: "Implémentation complète avec suivi inclus",
      features: [
        "Audit & stratégie",
        "Implémentation 4 semaines",
        "Formation des équipes",
        "Tests et optimisations",
        "Support 1 mois post-lancement",
        "Documentation complète",
      ],
      highlighted: true,
    },
    {
      name: "Projet Premium",
      price: "25 000",
      duration: "forfait",
      description: "Solution personnalisée avec accompagnement intensif",
      features: [
        "Tout du Standard",
        "Implémentation 8 semaines",
        "Développement custom si besoin",
        "Support prioritaire 2 mois",
        "Optimisation continue",
        "Documentation & manuels",
      ],
      highlighted: false,
    },
    {
      name: "Maintenance Continue",
      price: "1 500",
      duration: "/mois",
      description: "Évolution, support et optimisation à long terme",
      features: [
        "Support réactif par email/Slack",
        "Optimisations mensuelles",
        "Mises à jour des flux",
        "Rapports de performance",
        "Évolution des processus",
        "Priorité support premium",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[var(--neomnia-anthracite)] text-balance">
            Tarification Transparente
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choisissez le plan qui corresponds à vos besoins. Tous les projets incluent un audit initial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-2 transition-all ${
                plan.highlighted
                  ? "border-[var(--neomnia-green)] shadow-2xl scale-105"
                  : "border-gray-200 hover:border-[var(--neomnia-green)]"
              }`}
            >
              <CardHeader className="pb-4">
                {plan.highlighted && (
                  <div className="mb-4 inline-block bg-[var(--neomnia-green)] text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAIRE
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[var(--neomnia-black)]">{plan.name}</h3>
                <p className="text-sm text-foreground/70 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-bold text-[var(--neomnia-black)]">{plan.price}</span>
                  <span className="text-foreground/70 ml-2">€ {plan.duration}</span>
                </div>

                <Link href="#contact" className="block">
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white"
                        : "border-2 border-[var(--neomnia-green)] text-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/10 bg-transparent"
                    }`}
                  >
                    Commencer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--neomnia-green)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-[var(--neomnia-black)] to-[#404040] rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Projet sur mesure ?</h3>
          <p className="mb-4 text-gray-300">
            Vous avez des besoins spécifiques ? Parlons ensemble d'une solution personnalisée.
          </p>
          <Link href="#contact">
            <Button className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white">
              Discuter d'un projet spécifique
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
