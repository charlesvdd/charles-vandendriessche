import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Target, Rocket, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Audit & Diagnostic",
      description: "Analyse approfondie de vos processus, outils et données pour identifier les opportunités d'optimisation.",
      icon: Lightbulb,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      number: "02",
      title: "Stratégie Personnalisée",
      description: "Définition d'une feuille de route adaptée à vos objectifs, avec les technologies et outils les plus pertinents.",
      icon: Target,
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      number: "03",
      title: "Implémentation",
      description: "Mise en place progressive avec formation de vos équipes et suivi régulier de l'adoption.",
      icon: Rocket,
      color: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      number: "04",
      title: "Optimisation Continue",
      description: "Monitoring et ajustements pour maximiser le ROI et assurer une croissance durable.",
      icon: CheckCircle,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[var(--neomnia-anthracite)] text-balance">
            Notre Approche en 4 Étapes
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Un processus éprouvé pour transformer votre organisation et accélérer votre croissance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="border-2 border-gray-200 hover:border-[var(--neomnia-green)] transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="text-sm font-bold text-[var(--neomnia-green)] mb-3">{step.number}</div>

                    <div className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${step.iconColor}`} />
                    </div>

                    <h3 className="text-xl font-bold text-[var(--neomnia-black)] mb-2">{step.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-8 top-1/3 text-[var(--neomnia-green)]">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
