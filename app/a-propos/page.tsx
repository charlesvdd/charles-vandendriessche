import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Code, Linkedin, Twitter, Youtube, Music } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo"

export const metadata = generatePageMetadata(
  "À Propos - Charles Van den Driessche",
  "Découvrez mon parcours et mes projets en intelligence artificielle et automatisation. Publications, réseaux sociaux et ressources.",
  "/a-propos",
)

export default function AProposPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <Image
              src="/charles-photo.png"
              alt="Charles Van den Driessche"
              width={300}
              height={300}
              className="rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-5xl font-bold mb-6 text-balance">Charles Van den Driessche</h1>
              <p className="text-2xl text-[var(--neomnia-green)] font-semibold mb-6">Expert IA & Automatisation</p>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Passionné par l'intelligence artificielle et l'automatisation, j'accompagne les entreprises B2B dans
                leur transformation digitale et leur croissance commerciale.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Mon expertise combine le marketing direct stratégique avec les technologies d'IA les plus avancées pour
                créer des solutions innovantes et performantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Projects */}
      <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Publications & Projets</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Substack */}
            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[var(--neomnia-green)]/10 rounded-lg">
                    <BookOpen className="h-8 w-8 text-[var(--neomnia-green)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Newsletter Substack</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      Articles et analyses sur l'IA, l'automatisation et les stratégies de croissance pour les
                      entreprises B2B.
                    </p>
                    <Link href="https://substack.com/@charlesvandendriessche" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/90 text-white">
                        Lire mes articles
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NeoSaaS */}
            <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[var(--neomnia-magenta)]/10 rounded-lg">
                    <Code className="h-8 w-8 text-[var(--neomnia-magenta)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">NeoSaaS Template</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      Template SaaS prêt à l'emploi avec authentification, paiements, et infrastructure moderne pour
                      lancer rapidement votre produit.
                    </p>
                    <Link href="https://neosaas.kubernete.club/" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[var(--neomnia-magenta)] hover:bg-[var(--neomnia-magenta)]/90 text-white">
                        Découvrir le projet
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Suivez-moi sur les Réseaux</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="https://www.linkedin.com/in/charles-van-den-driessche/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-[var(--neomnia-green)]/10 rounded-full mb-4 group-hover:bg-[var(--neomnia-green)]/20 transition-colors">
                    <Linkedin className="h-8 w-8 text-[var(--neomnia-green)]" />
                  </div>
                  <span className="font-semibold">LinkedIn</span>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://x.com/Charles_vandend" target="_blank" rel="noopener noreferrer" className="group">
              <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-[var(--neomnia-magenta)]/10 rounded-full mb-4 group-hover:bg-[var(--neomnia-magenta)]/20 transition-colors">
                    <Twitter className="h-8 w-8 text-[var(--neomnia-magenta)]" />
                  </div>
                  <span className="font-semibold">X (Twitter)</span>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://www.youtube.com/@charles-vandendriessche"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-2 hover:border-[var(--neomnia-orange)] transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-[var(--neomnia-orange)]/10 rounded-full mb-4 group-hover:bg-[var(--neomnia-orange)]/20 transition-colors">
                    <Youtube className="h-8 w-8 text-[var(--neomnia-orange)]" />
                  </div>
                  <span className="font-semibold">YouTube</span>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://www.tiktok.com/@charlesvandendriessche"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-[var(--neomnia-green)]/10 rounded-full mb-4 group-hover:bg-[var(--neomnia-green)]/20 transition-colors">
                    <svg className="h-8 w-8 text-[var(--neomnia-green)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <span className="font-semibold">TikTok</span>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Spotify Podcast */}
          <div className="mt-8">
            <Link href="https://open.spotify.com/show/3swY6ckSbfEFytqbVRWbe2" target="_blank" rel="noopener noreferrer">
              <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-[var(--neomnia-green)]/10 rounded-full">
                      <Music className="h-12 w-12 text-[var(--neomnia-green)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Podcast Spotify</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Discussions et interviews sur l'IA, l'entrepreneuriat et les stratégies de croissance
                      </p>
                    </div>
                    <Button className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/90 text-white">
                      Écouter
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
