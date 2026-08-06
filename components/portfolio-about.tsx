const SKILLS = [
  { name: "Plateformes data & architecture", level: 5 },
  { name: "SQL, Python & modélisation", level: 5 },
  { name: "Cloud & écosystèmes data (Azure, AWS)", level: 5 },
  { name: "IA générative & LLM", level: 5 },
  { name: "IA agentique & multi-agents", level: 5 },
  { name: "Gouvernance & DataOps / MLOps", level: 4 },
  { name: "RAG & exploitation du patrimoine data", level: 4 },
  { name: "Conseil, cadrage & leadership technique", level: 4 },
]

function SkillLevel({ level }: { level: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`Niveau ${level}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: i < level ? "var(--neomnia-green)" : "var(--neomnia-gray-light)" }}
        />
      ))}
    </span>
  )
}

export function PortfolioAbout() {
  return (
    <section id="a-propos" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--neomnia-black)] text-balance">
          Architecte SI, rigueur d&apos;ingénieur
        </h2>
        <p className="text-lg text-[var(--neomnia-gray-dark)] leading-relaxed mb-10 text-pretty">
          Architecte SI senior spécialiste de l&apos;IA générative et du RAG (multi-agents, LangGraph/FastAPI,
          bases vectorielles), je conçois et industrialise des plateformes Data/IA robustes, souveraines et
          sécurisées : Kubernetes, CI/CD, observabilité (Langfuse, Temporal), MLOps.
        </p>

        <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--neomnia-gray-dark)] mb-4">
          Compétences
        </h3>
        <ul className="space-y-3">
          {SKILLS.map((skill) => (
            <li key={skill.name} className="flex items-center justify-between gap-4 py-2 border-b border-[var(--neomnia-gray-light)]">
              <span className="text-sm font-medium text-[var(--neomnia-black)]">{skill.name}</span>
              <SkillLevel level={skill.level} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
