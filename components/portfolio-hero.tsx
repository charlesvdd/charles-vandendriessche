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
    <section id="top" className="relative bg-white overflow-hidden pt-20">
      <div className="relative h-32 md:h-36">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <polygon points="0,0 600,0 400,200 0,200" fill="#262626" />
            <polygon points="600,0 1200,0 1200,200 400,200" fill="#32AFB1" />
          </svg>
        </div>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10">
          <Image
            src="/charles-photo.png"
            alt="Charles Van den Driessche"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--neomnia-black)] leading-tight">
            Je mets l&apos;<span className="text-[var(--neomnia-green)]">IA appliquée</span> au service de vos
            résultats
          </h1>

          <p className="text-lg md:text-xl text-[var(--neomnia-gray-dark)] leading-relaxed text-balance">
            Spécialiste en marketing direct et intelligence artificielle, j&apos;accompagne les PME et ETI B2B pour
            gagner en productivité et mieux maîtriser leurs données.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
                className="border-[var(--neomnia-green)] text-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/10 text-base px-8 bg-transparent"
              >
                Voir mes projets
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--neomnia-green)] mb-1">{stat.value}</div>
              <p className="text-sm text-[var(--neomnia-gray-dark)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
