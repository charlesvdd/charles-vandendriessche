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
    <section id="a-propos" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--neomnia-black)] text-balance">
          Rigueur d&apos;ingénieur, vision entrepreneuriale
        </h2>
        <p className="text-lg text-[var(--neomnia-gray-dark)] leading-relaxed mb-4 text-pretty">
          Passionné par l&apos;intelligence artificielle et l&apos;automatisation, j&apos;accompagne les entreprises
          B2B dans leur transformation digitale et leur croissance commerciale.
        </p>
        <p className="text-lg text-[var(--neomnia-gray-dark)] leading-relaxed mb-10 text-pretty">
          Mon expertise combine le marketing direct stratégique avec les technologies d&apos;IA les plus avancées
          pour créer des solutions innovantes et performantes, du studio d&apos;automatisation Neomnia jusqu&apos;au
          boilerplate SaaS open-source NeoSaaS.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {SKILLS.map((skill) => (
            <li key={skill} className="flex items-center gap-2 text-[var(--neomnia-black)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--neomnia-green)] flex-shrink-0" />
              <span className="text-sm font-medium">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
