import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function CTAFinalSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[var(--neomnia-black)] via-[#404040] to-[var(--neomnia-green)]/20">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
          Prêt à transformer votre organisation ?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Découvrez comment l'IA et l'automatisation peuvent libérer du potentiel dans votre entreprise.
          Commençons avec une consultation gratuite de 30 minutes.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors">
            <Calendar className="h-8 w-8 text-[var(--neomnia-green)] mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Rendez-vous rapide</h3>
            <p className="text-gray-300 text-sm">30 min pour discuter de votre projet</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors">
            <Mail className="h-8 w-8 text-[var(--neomnia-green)] mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Audit gratuit</h3>
            <p className="text-gray-300 text-sm">Analyse de votre situation</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors">
            <Phone className="h-8 w-8 text-[var(--neomnia-green)] mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">Support 24/48h</h3>
            <p className="text-gray-300 text-sm">Réponse rapide à vos questions</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white text-base px-8"
            >
              Réserver une consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:contact@example.com">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent text-base px-8"
            >
              Envoyer un email
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
