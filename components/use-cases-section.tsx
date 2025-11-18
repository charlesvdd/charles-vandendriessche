import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Users, Zap, Globe, Package, Brain } from "lucide-react"
import Link from "next/link"

export function UseCasesSection() {
  const useCases = [
    {
      icon: Database,
      title: "Centraliser vos données",
      description:
        "Intégrez tous vos outils et sources de données dans un seul dashboard pour une vision 360° de votre activité.",
      industry: "Tous secteurs",
      benefits: ["Vue consolidée", "Moins de manuels", "Meilleure décision"],
    },
    {
      icon: Users,
      title: "Qualifier vos prospects",
      description:
        "Obtenez des listes ultra-précises basées sur des critères profonds pour augmenter votre taux de conversion.",
      industry: "Sales & Marketing",
      benefits: ["Plus de prospects", "Meilleure qualité", "ROI + 200%"],
    },
    {
      icon: Zap,
      title: "Automatiser vos workflows",
      description:
        "Éliminez les tâches répétitives et libérez du temps pour vos équipes afin qu'elles se focalisent sur la valeur.",
      industry: "Opérations",
      benefits: ["40% temps gagné", "Zéro erreur", "Réduction coûts"],
    },
    {
      icon: Globe,
      title: "Analyser votre compétition",
      description:
        "Suivez en temps réel la stratégie de vos concurrents pour adapter votre positionnement et rester compétitif.",
      industry: "Stratégie",
      benefits: ["Réactivité", "Avance stratégique", "Benchmarking"],
    },
    {
      icon: Package,
      title: "Créer des processus SaaS",
      description:
        "Transformez vos services en produits digitaux scalables pour créer une nouvelle source de revenus.",
      industry: "Growth",
      benefits: ["Revenu passif", "Scalabilité", "Multiplicateur"],
    },
    {
      icon: Brain,
      title: "Utiliser l'IA générative",
      description:
        "Intégrez ChatGPT, Claude ou des modèles spécialisés directement dans vos workflows pour augmenter la productivité.",
      industry: "Innovation",
      benefits: ["+ Productivité", "Nouvelles capacités", "Réduction coûts"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[var(--neomnia-anthracite)] text-balance">
            Cas d'usage & Secteurs d'application
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Découvrez comment nous avons transformé les opérations et la croissance d'entreprises variées
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card key={index} className="border-2 border-gray-200 hover:border-[var(--neomnia-green)] transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-[var(--neomnia-green)]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[var(--neomnia-green)]" />
                  </div>

                  <h3 className="text-lg font-bold text-[var(--neomnia-black)] mb-2">{useCase.title}</h3>

                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{useCase.description}</p>

                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <span className="inline-block bg-[var(--neomnia-green)]/10 text-[var(--neomnia-green)] text-xs font-semibold px-3 py-1 rounded-full">
                      {useCase.industry}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-[var(--neomnia-green)] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white"
            >
              Discuter de votre cas d'usage
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
