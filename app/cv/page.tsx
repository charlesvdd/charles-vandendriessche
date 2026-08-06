import { SiteNav } from "@/components/site-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const metadata = {
  title: "CV — Charles Van den Driessche",
  description: "Architecte IA — LLM & systèmes multi-agents, RAG, Cloud AI, Architecte SI.",
}

export default function CVPage() {
  return (
    <main className="min-h-screen">
      <SiteNav />

      <section className="pt-32 pb-12 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--neomnia-black)] mb-4 text-balance">
            Mon CV
          </h1>
          <p className="text-lg text-[var(--neomnia-gray-dark)] mb-8 text-pretty">
            Architecte IA — LLM & systèmes multi-agents, RAG, Cloud AI, Architecte SI.
          </p>
          <a href="/cv-charles-vandendriessche.pdf" download>
            <Button size="lg" className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white text-base px-8">
              Télécharger le PDF
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-3xl">
          <div className="border-2 border-[var(--neomnia-gray-light)] rounded-xl overflow-hidden bg-white" style={{ aspectRatio: "1 / 1.35" }}>
            <object data="/cv-charles-vandendriessche.pdf" type="application/pdf" className="w-full h-full">
              <p className="p-8 text-center text-[var(--neomnia-gray-dark)]">
                Aperçu PDF indisponible dans ce navigateur —{" "}
                <a href="/cv-charles-vandendriessche.pdf" className="text-[var(--neomnia-green)] underline">
                  télécharger le CV
                </a>
                .
              </p>
            </object>
          </div>
          <p className="text-center text-sm text-[var(--neomnia-gray-dark)] mt-6">
            Une version détaillée de mon parcours, mes compétences et mes diplômes est aussi disponible{" "}
            <a href="/#parcours" className="text-[var(--neomnia-green)] underline underline-offset-2">
              directement sur cette page
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
