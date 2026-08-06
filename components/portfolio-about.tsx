const SKILLS = [
  "Data driving & automatisation",
  "Agents IA & intégration de données",
  "Marketing direct B2B",
  "Prospection & organisation commerciale",
  "Éditions de SaaS",
  "Formalisation de process",
  "Delivery agile",
  "Conseil stratégique PME/ETI",
]

export function PortfolioAbout() {
  return (
    <section id="a-propos" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--neomnia-black)] text-balance">
          Rigueur d&apos;ingénieur, vision entrepreneuriale
        </h2>
        <p className="text-lg text-[var(--neomnia-gray-dark)] leading-relaxed mb-4 text-pretty">
          Passionné par l&apos;intelligence artificielle et l&apos;automatisation, j&apos;accompagne les entreprises
          B2B dans leur transformation digitale et leur croissance commerciale.
        </p>
        <p className="text-lg text-[var(--neomnia-gray-dark)] leading-relaxed mb-12 text-pretty">
          Mon expertise combine le marketing direct stratégique avec les technologies d&apos;IA les plus avancées
          pour créer des solutions innovantes et performantes, du studio d&apos;automatisation Neomnia jusqu&apos;au
          boilerplate SaaS open-source NeoSaaS.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="border-2 border-[var(--neomnia-gray-light)] hover:border-[var(--neomnia-green)] rounded-xl p-4 text-center text-sm font-semibold text-[var(--neomnia-black)] transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
