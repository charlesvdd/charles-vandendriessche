import { Button } from "@/components/ui/button"
import { ArrowRight, FileDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const STATS = [
  { value: "IA générative", label: "LLM, RAG, agents multi-agents" },
  { value: "Cloud & Kubernetes", label: "Azure, AWS, CI/CD, IaC" },
  { value: "Data & MLOps", label: "Pipelines, gouvernance, observabilité" },
  { value: "Architecture SI", label: "Cadrage, roadmaps, mentoring" },
]

export function PortfolioHero() {
  return (
    <section id="top" className="bg-white pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <Image
          src="/charles-photo.png"
          alt="Charles Van den Driessche"
          width={88}
          height={88}
          className="rounded-full object-cover mx-auto mb-8"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-[var(--neomnia-black)] leading-tight text-balance mb-6">
          Architecte <span className="text-[var(--neomnia-green)]">IA</span> — LLM, systèmes multi-agents & RAG
        </h1>

        <p className="text-lg text-[var(--neomnia-gray-dark)] leading-relaxed text-balance mb-10 max-w-2xl mx-auto">
          Architecte SI senior spécialiste de l&apos;IA générative et du RAG, je conçois et industrialise des
          plateformes Data/IA robustes, souveraines et sécurisées.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact">
            <Button size="lg" className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white text-base px-8">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <Link href="/cv">
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--neomnia-gray-light)] text-[var(--neomnia-black)] hover:border-[var(--neomnia-green)] hover:text-[var(--neomnia-green)] text-base px-8 bg-transparent"
            >
              Voir mon CV
              <FileDown className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-[var(--neomnia-gray-light)]">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-lg font-bold text-[var(--neomnia-green)] mb-1 text-balance">{stat.value}</div>
              <p className="text-sm text-[var(--neomnia-gray-dark)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
