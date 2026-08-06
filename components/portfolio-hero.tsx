import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const STATS = [
  { value: "Dizaines", label: "d'entreprises accompagnées" },
  { value: "3 secteurs", label: "Industrie, Commerce & Services" },
  { value: "Croissance", label: "Transformation digitale mesurable" },
  { value: "Sur-mesure", label: "Solutions adaptées à votre activité" },
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
          Je mets l&apos;<span className="text-[var(--neomnia-green)]">IA appliquée</span> au service de vos
          résultats
        </h1>

        <p className="text-lg text-[var(--neomnia-gray-dark)] leading-relaxed text-balance mb-10 max-w-2xl mx-auto">
          Spécialiste en marketing direct et intelligence artificielle, j&apos;accompagne les PME et ETI B2B pour
          gagner en productivité et mieux maîtriser leurs données.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact">
            <Button size="lg" className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white text-base px-8">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#projets">
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--neomnia-gray-light)] text-[var(--neomnia-black)] hover:border-[var(--neomnia-green)] hover:text-[var(--neomnia-green)] text-base px-8 bg-transparent"
            >
              Voir mes projets
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-[var(--neomnia-gray-light)]">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-[var(--neomnia-green)] mb-1">{stat.value}</div>
              <p className="text-sm text-[var(--neomnia-gray-dark)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
