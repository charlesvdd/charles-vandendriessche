import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Prenons Rendez-vous
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Discutons de vos objectifs et découvrons comment nous pouvons accélérer votre croissance
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border-2 bg-gradient-to-br from-[var(--neomnia-navy)] to-primary text-white">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[var(--neomnia-green)]">
                <Image
                  src="/charles-photo.png"
                  alt="Charles Van den Driessche"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <CardTitle
                className="text-2xl text-white whitespace-nowrap"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Charles Van den Driessche
              </CardTitle>
              <CardDescription className="text-white/80 text-base">Expert IA & Automatisation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--neomnia-green)] flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-3 text-sm text-white/90">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--neomnia-green)]" />
                  Rendez-vous en visioconférence
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--neomnia-magenta)]" />
                  Durée : 30-45 minutes
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--neomnia-orange)]" />
                  Analyse gratuite de vos besoins
                </p>
              </div>
              <a
                href="https://outlook.office.com/book/RendezvousregularavecCharlesVandendriessche@neomnia.onmicrosoft.com/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  className="w-full bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/90 text-white text-lg"
                >
                  Prendre rendez-vous maintenant
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
