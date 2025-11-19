"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Quel est le coût approximatif d'un projet IA ?",
      answer:
        "Le coût varie en fonction de la complexité et de l'envergure du projet. Les petits projets d'automatisation commencent à partir de 5 000€, tandis que les solutions complètes peuvent aller jusqu'à 50 000€ ou plus. Je recommande un audit gratuit pour évaluer précisément vos besoins.",
    },
    {
      question: "Combien de temps faut-il pour voir les résultats ?",
      answer:
        "Les premiers résultats apparaissent généralement en 2-4 semaines. Cependant, le véritable impact se mesure après 2-3 mois lorsque les workflows sont totalement intégrés. Un suivi régulier aide à optimiser continuellement.",
    },
    {
      question: "Travaillez-vous avec toutes les tailles d'entreprise ?",
      answer:
        "Oui, j'accompagne les startups, PME, ETI et grandes entreprises. Mon approche s'adapte à votre maturité digitale, vos ressources et vos objectifs. Chaque projet est personnalisé.",
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer:
        "Je travaille avec l'écosystème d'outils et technologies les plus pertinents : ChatGPT, Claude, Zapier, Make, Power Automate, Notion, HubSpot, et bien d'autres. Le choix dépend de vos besoins spécifiques.",
    },
    {
      question: "Fournirez-vous une formation à mes équipes ?",
      answer:
        "Absolument. La formation est incluse dans tous les projets. Je prépare des sessions adaptées au niveau technique de vos équipes et fournis de la documentation pour l'onboarding continu.",
    },
    {
      question: "Comment fonctionne le suivi post-projet ?",
      answer:
        "Je propose des contrats de support et de maintenance mensuels pour ajuster, optimiser et développer continuellement vos solutions. Vous bénéficiez d'une amélioration continue.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[var(--neomnia-anthracite)]">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-foreground/70">
            Trouvez les réponses aux questions les plus posées
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-gray-200 rounded-lg px-6 data-[state=open]:border-[var(--neomnia-green)] data-[state=open]:bg-[var(--neomnia-green)]/5"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-left font-semibold text-[var(--neomnia-black)]">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
