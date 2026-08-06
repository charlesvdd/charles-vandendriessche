import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Code, Music, Rocket } from "lucide-react"
import Link from "next/link"

const PROJECTS = [
  {
    icon: Rocket,
    title: "Neomnia Studio",
    description: "Plateforme d'automatisation et d'agents IA, outils personnalisables et intégration aux systèmes existants.",
    href: "https://neomnia.net",
    accent: "var(--neomnia-green)",
    cta: "Découvrir Neomnia",
  },
  {
    icon: Code,
    title: "NeoSaaS",
    description: "Boilerplate SaaS open-source prêt à l'emploi : authentification, paiements, infrastructure moderne.",
    href: "https://github.com/neosaastech/neosaas",
    accent: "var(--neomnia-magenta)",
    cta: "Voir sur GitHub",
  },
  {
    icon: Rocket,
    title: "Mission Croissance",
    description: "Marketing direct et prospection B2B : listes ultra-qualifiées, organisation commerciale, croissance PME/ETI.",
    href: "https://mission-croissance.fr",
    accent: "var(--neomnia-orange)",
    cta: "Découvrir le site",
  },
  {
    icon: BookOpen,
    title: "Newsletter Substack",
    description: "Articles et analyses sur l'IA, l'automatisation et les stratégies de croissance pour les entreprises B2B.",
    href: "https://substack.com/@charlesvandendriessche",
    accent: "var(--neomnia-green)",
    cta: "Lire mes articles",
  },
  {
    icon: Music,
    title: "Podcast Spotify",
    description: "Discussions et interviews sur l'IA, l'entrepreneuriat et les stratégies de croissance.",
    href: "https://open.spotify.com/show/3swY6ckSbfEFytqbVRWbe2",
    accent: "var(--neomnia-navy)",
    cta: "Écouter",
  },
]

export function PortfolioProjets() {
  return (
    <section id="projets" className="py-24 px-4 bg-[var(--neomnia-gray-light)]/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--neomnia-black)] text-balance">
          Projets & publications
        </h2>
        <p className="text-center text-[var(--neomnia-gray-dark)] mb-12 max-w-2xl mx-auto text-pretty">
          Ce que je construis et partage aujourd&apos;hui
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => {
            const Icon = project.icon
            return (
              <Card key={project.title} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: "var(--neomnia-gray-light)" }}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `color-mix(in srgb, ${project.accent} 12%, white)` }}>
                    <Icon className="h-6 w-6" style={{ color: project.accent }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-[var(--neomnia-black)]">{project.title}</h3>
                    <p className="text-sm text-[var(--neomnia-gray-dark)] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <Link href={project.href} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" style={{ backgroundColor: project.accent }} className="text-white hover:opacity-90">
                        {project.cta}
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
