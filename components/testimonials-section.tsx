"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const testimonials = [
    {
      name: "Marie Leclerc",
      role: "Directrice Marketing",
      company: "TechCorp France",
      content:
        "La mise en place du studio IA nous a permis de réduire nos tâches administratives de 40%. L'équipe de Charles est vraiment très attentive à nos besoins.",
      avatar: "/avatars/avatar-1.svg",
      rating: 5,
    },
    {
      name: "Jean Dubois",
      role: "PDG",
      company: "Groupe Industrie +",
      content:
        "Les listes de prospects qualifiées nous ont ouvert des opportunités commerciales qu'on n'avait pas identifiées. C'est un vrai catalyseur de croissance.",
      avatar: "/avatars/avatar-2.svg",
      rating: 5,
    },
    {
      name: "Sophie Martin",
      role: "Responsable Opérations",
      company: "Solutions B2B Services",
      content:
        "L'automatisation des workflows nous a fait gagner plusieurs jours par mois. C'est transformationnel pour une PME comme la nôtre.",
      avatar: "/avatars/avatar-3.svg",
      rating: 5,
    },
  ]

  const currentTestimonial = testimonials[selectedIndex]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[var(--neomnia-anthracite)]">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-foreground/70">
            Découvrez les résultats concrets obtenus par nos partenaires
          </p>
        </div>

        <Card className="border-2 border-[var(--neomnia-green)]/20 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl font-light text-[var(--neomnia-anthracite)] mb-8 italic leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-[var(--neomnia-black)]">{currentTestimonial.name}</div>
                <div className="text-sm text-foreground/70">
                  {currentTestimonial.role}, {currentTestimonial.company}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`h-3 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-[var(--neomnia-green)] w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-3"
              }`}
              aria-label={`Témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
