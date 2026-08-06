const MISSIONS = [
  {
    title: "Architecture Multi-Tenant & Souveraineté",
    context: "Mission pour un acteur juridique (Neokube/IA)",
    description:
      "Refonte d'un monolithe RAG vers une architecture Cloud Native multi-tenant sécurisée pour répondre aux enjeux de souveraineté technique & réglementaire.",
    items: [
      "Architecture multi-tenant (séparation environnements/données par client) sur Kubernetes",
      "Sécurité & gouvernance : RBAC, networkPolicies, secrets centralisés",
      "Control Engine centralisé, observabilité, optimisation tokens & temps de réponse, alignement Zero Trust",
    ],
  },
  {
    title: "Fiabilisation des réponses IA en contexte de certification",
    context: "Mission pour un centre de formation",
    description:
      "Mise en place de la méthode CAIL/SAIL issue de l'observabilité des agents IA pour stabiliser les réponses dans un contexte multi-agents, multi-sources, à fortes contraintes de certification.",
    items: [
      "Classification sémantique des erreurs, scoring, indicateurs de qualité dans le temps",
      "Intégration des cas d'échec dans un RAG enrichi (mémoire des erreurs fréquentes)",
      "Pilotage par les signaux d'observabilité : ajustement des prompts, contextes, comportements des agents",
    ],
  },
  {
    title: "Plateforme de reporting data",
    context: "Application de finance / agence",
    description:
      "Conception et exploitation d'une plateforme de reporting data agrégeant des données multi-sources pour le pilotage de la performance.",
    items: [
      "Agrégation multi-sources (trafic, campagnes, logs, performance) dans une base centrale",
      "Modélisation orientée reporting (KPI, segmentation, tableaux de bord)",
      "Tableaux de bord dynamiques Grafana pour le pilotage et la prise de décision",
    ],
  },
]

const DIPLOMES = [
  {
    title: "Master Innovation numérique & systèmes d'information (Bac+5)",
    school: "Université de Picardie, Amiens",
    detail: "Parcours orienté ingénierie de l'innovation & transformation digitale DATA",
  },
  {
    title: "Licence développement application / web",
    school: "École des arts et métiers de Lille",
    detail: null,
  },
]

export function PortfolioParcours() {
  return (
    <section id="parcours" className="py-24 px-4 bg-[var(--neomnia-gray-light)]/20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--neomnia-black)] text-balance">
          Expériences & missions
        </h2>
        <p className="text-[var(--neomnia-gray-dark)] mb-12">
          Le détail complet est disponible dans mon{" "}
          <a href="/cv" className="text-[var(--neomnia-green)] font-semibold underline underline-offset-2">
            CV
          </a>
          .
        </p>

        <div className="space-y-10 mb-16">
          {MISSIONS.map((mission, i) => (
            <div key={mission.title} className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[var(--neomnia-green)]" />
              {i < MISSIONS.length - 1 && (
                <div className="absolute left-[5px] top-5 bottom-[-2.5rem] w-px bg-[var(--neomnia-gray-light)]" />
              )}
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--neomnia-green)] mb-1">
                {mission.context}
              </p>
              <h3 className="text-lg font-bold text-[var(--neomnia-black)] mb-2">{mission.title}</h3>
              <p className="text-sm text-[var(--neomnia-gray-dark)] leading-relaxed mb-3">{mission.description}</p>
              <ul className="space-y-1.5">
                {mission.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--neomnia-gray-dark)] flex gap-2">
                    <span className="text-[var(--neomnia-green)]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--neomnia-gray-dark)] mb-4">
          Diplômes & certificats
        </h3>
        <div className="space-y-4">
          {DIPLOMES.map((d) => (
            <div key={d.title} className="border-l-2 border-[var(--neomnia-green)] pl-4">
              <p className="font-semibold text-[var(--neomnia-black)]">{d.title}</p>
              <p className="text-sm text-[var(--neomnia-gray-dark)]">{d.school}</p>
              {d.detail && <p className="text-sm text-[var(--neomnia-gray-dark)]">{d.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
