import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const PILLARS = [
  {
    title: "Studio IA & Automatisation",
    accent: "var(--neomnia-green)",
    items: [
      "La formalisation pour réduire vos coûts administratifs",
      "La recherche de données pour perdre moins de temps",
      "Déléguer des tâches énergivores",
    ],
  },
  {
    title: "Marketing Direct",
    accent: "var(--neomnia-magenta)",
    items: [
      "Prospection et organisation commerciale",
      "Génération de listes ultra-qualifiées",
      "Développement stratégique PME & ETI B2B",
    ],
  },
]

export function PortfolioExpertises() {
  return (
    <section id="expertises" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--neomnia-black)] text-balance">
          Deux expertises complémentaires
        </h2>
        <p className="text-center text-[var(--neomnia-gray-dark)] mb-12 max-w-2xl mx-auto text-pretty">
          Je vous accompagne dans votre transformation digitale, de la donnée à la croissance commerciale
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => (
            <Card key={pillar.title} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: "var(--neomnia-gray-light)" }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-[var(--neomnia-black)]">{pillar.title}</h3>
                <ul className="space-y-4">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[var(--neomnia-gray-dark)]">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: pillar.accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
