import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MessageSquare, Users } from "lucide-react"
import Link from "next/link"

const CASE_STUDIES = [
  {
    icon: MessageSquare,
    title: "Automatisation de la messagerie LinkedIn",
    accent: "var(--neomnia-green)",
    problem:
      "Une équipe commerciale perdait du temps à lire et rédiger manuellement ses messages LinkedIn.",
    solution:
      "Solution technique de lecture et d'envoi automatisé des messages LinkedIn, couplée à un agent IA qui analyse et classe chaque message entrant pour qualifier son intention.",
    impact:
      "Gain estimé d'1,5 jour de travail par semaine pour l'équipe commerciale — cumulé sur une année, l'équivalent de plusieurs semaines de charge économisées.",
  },
  {
    icon: Users,
    title: "Plateforme d'équipe d'agents métier (Neokube/IA)",
    accent: "var(--neomnia-magenta)",
    problem:
      "Produire du code et des applications avec des agents IA, sans dépendre d'infrastructure ou de modèles tiers non maîtrisés.",
    solution:
      "Architecture Cloud Native multi-tenant sur Kubernetes hébergeant une équipe d'agents métier capables de rédiger sur l'outil de gestion de projet et d'interagir entre eux pour orchestrer le travail — 100% souverain (RBAC, networkPolicies, secrets centralisés, Zero Trust).",
    impact:
      "Plateforme de production dev & applications pilotée par des agents IA, sans dépendance à un cloud ou LLM externe non contrôlé.",
  },
]

const LINKS = [
  { title: "Neomnia Studio", href: "https://neomnia.net", accent: "var(--neomnia-green)" },
  { title: "NeoSaaS", href: "https://github.com/neosaastech/neosaas", accent: "var(--neomnia-magenta)" },
]

export function PortfolioProjets() {
  return (
    <section id="projets" className="py-24 px-4 bg-[var(--neomnia-gray-light)]/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--neomnia-black)] text-balance">
          Cas techniques
        </h2>
        <p className="text-center text-[var(--neomnia-gray-dark)] mb-12 max-w-2xl mx-auto text-pretty">
          Des problèmes concrets, résolus avec l&apos;IA appliquée
        </p>

        <div className="space-y-6 mb-12">
          {CASE_STUDIES.map((cs) => {
            const Icon = cs.icon
            return (
              <Card key={cs.title} className="border-2" style={{ borderColor: "var(--neomnia-gray-light)" }}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2.5 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: `color-mix(in srgb, ${cs.accent} 12%, white)` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: cs.accent }} />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--neomnia-black)]">{cs.title}</h3>
                  </div>

                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wide text-[var(--neomnia-gray-dark)] mb-1">
                        Problème
                      </dt>
                      <dd className="text-sm text-[var(--neomnia-gray-dark)] leading-relaxed">{cs.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wide text-[var(--neomnia-gray-dark)] mb-1">
                        Solution
                      </dt>
                      <dd className="text-sm text-[var(--neomnia-gray-dark)] leading-relaxed">{cs.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wide" style={{ color: cs.accent }}>
                        Impact
                      </dt>
                      <dd className="text-sm font-medium text-[var(--neomnia-black)] leading-relaxed">{cs.impact}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {LINKS.map((l) => (
            <Link key={l.title} href={l.href} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-[var(--neomnia-gray-light)] text-[var(--neomnia-black)] bg-white hover:border-current"
                style={{ color: l.accent }}
              >
                {l.title}
                <ExternalLink className="ml-2 h-3.5 w-3.5" />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
