import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Sparkles, Workflow, MessageSquare, Code, Network, CheckCircle2, Database } from "lucide-react"

export default function IntelligenceArtificiellePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--neomnia-navy)] to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Intelligence Artificielle Agentique
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-balance">
              Systèmes multi-agents autonomes pour automatiser vos workflows complexes et transformer votre productivité
            </p>
          </div>
        </div>
      </section>

      {/* Agentic AI vs Agent IA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Agentic AI vs Agent IA : Quelle différence ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12 text-pretty">
              Comprendre la distinction entre ces deux paradigmes est essentiel pour choisir la solution adaptée à vos
              besoins.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Agent IA Card */}
              <Card className="border-2 border-[#262626]">
                <CardHeader>
                  <Bot className="h-12 w-12 text-[#262626] mb-4" />
                  <CardTitle className="text-2xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    Agent IA (Individuel)
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    Une entité autonome capable d'exécuter des tâches spécifiques dans un environnement contrôlé.
                  </CardDescription>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#262626] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Architecture :</strong> Monolithique (1 LLM ou modèle dédié)
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#262626] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Autonomie :</strong> Limitée à la tâche programmée
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#262626] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Scalabilité :</strong> Faible (surcharge sur tâches complexes)
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#262626] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Usages :</strong> Chatbots, automatisation de processus répétitifs
                      </span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Agentic AI Card */}
              <Card className="border-2 border-[#32AFB1] bg-gradient-to-br from-[#32AFB1]/5 to-white">
                <CardHeader>
                  <Network className="h-12 w-12 text-[#32AFB1] mb-4" />
                  <CardTitle className="text-2xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    Agentic AI (Multi-agents)
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    Un système composé de plusieurs agents autonomes qui collaborent pour accomplir des objectifs
                    complexes.
                  </CardDescription>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#32AFB1] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Architecture :</strong> Modulaire (plusieurs agents spécialisés)
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#32AFB1] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Autonomie :</strong> Émergente via collaboration dynamique
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#32AFB1] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Scalabilité :</strong> Élevée (parallélisation des sous-tâches)
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#32AFB1] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Usages :</strong> Workflows complexes, finance, administration publique
                      </span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Key Insight */}
            <div className="bg-[#32AFB1] text-white rounded-lg p-8 text-center">
              <p className="text-lg leading-relaxed text-pretty">
                <strong>La différence essentielle :</strong> L'Agent IA est limité à des tâches prédéfinies, tandis que
                l'Agentic AI est capable d'une prise de décision autonome et contextuelle, avec une capacité
                d'apprentissage et d'adaptation continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              L'IA Agentique au service de votre performance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8 text-pretty">
              L'intelligence artificielle agentique n'est plus réservée aux grandes entreprises tech. Je vous accompagne
              dans l'intégration de systèmes multi-agents concrets et adaptés à vos besoins, pour améliorer votre
              productivité et créer de la valeur grâce à l'automatisation intelligente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardHeader>
                <Network className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Systèmes Multi-Agents</CardTitle>
                <CardDescription>
                  Développement de systèmes Agentic AI avec agents spécialisés collaborant pour automatiser vos
                  workflows complexes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardHeader>
                <Bot className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Agents IA Personnalisés</CardTitle>
                <CardDescription>
                  Création d'agents intelligents adaptés à vos processus métier pour automatiser les tâches répétitives
                  et complexes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-[var(--neomnia-magenta)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Chatbots Intelligents</CardTitle>
                <CardDescription>
                  Création de chatbots conversationnels pour améliorer votre service client et automatiser les réponses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-orange)] transition-colors">
              <CardHeader>
                <Workflow className="h-12 w-12 text-[var(--neomnia-orange)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Automatisation Intelligente</CardTitle>
                <CardDescription>
                  Mise en place de workflows automatisés avec LangChain et LangFlow qui apprennent et s'adaptent à vos
                  besoins
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Génération de Contenu</CardTitle>
                <CardDescription>
                  Utilisation de l'IA générative pour créer du contenu marketing, des rapports et des analyses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
              <CardHeader>
                <Code className="h-12 w-12 text-[var(--neomnia-magenta)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Intégration API & LLM</CardTitle>
                <CardDescription>
                  Connexion de vos outils existants avec les dernières API d'IA (OpenAI, Anthropic, etc.) et
                  orchestration de plusieurs LLM
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Use Cases */}
          <div className="max-w-4xl mx-auto">
            <h3
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Cas d'usage concrets avec l'Agentic AI
            </h3>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-[var(--neomnia-green)]">
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>
                    Création automatisée d'appels d'offres publics
                  </CardTitle>
                  <CardDescription>
                    Un système Agentic AI coordonne plusieurs agents spécialisés : un agent "juriste" vérifie la
                    conformité réglementaire, un agent "rédacteur" génère le texte, un agent "auditeur" valide la
                    cohérence et un agent "estimateur" consulte des bases de données historiques. Résultat : réduction
                    des délais de 3-5 jours à 1-2 heures, avec validation croisée et meilleure conformité.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-[var(--neomnia-magenta)]">
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>
                    Qualification automatique de leads avec agents collaboratifs
                  </CardTitle>
                  <CardDescription>
                    Plusieurs agents IA collaborent pour analyser vos prospects : un agent "parseur" extrait les
                    informations, un agent "enrichisseur" consulte des bases de données externes, un agent
                    "qualificateur" évalue le potentiel selon vos critères, et un agent "intégrateur" met à jour votre
                    CRM avec des informations pertinentes et validées.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-[var(--neomnia-orange)]">
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>
                    Assistant de veille stratégique multi-sources
                  </CardTitle>
                  <CardDescription>
                    Un système Agentic AI surveille votre marché avec des agents spécialisés : un agent "veilleur"
                    collecte les données, un agent "analyseur" identifie les tendances, un agent "comparateur" évalue
                    vos concurrents, et un agent "synthétiseur" génère des rapports personnalisés avec insights et
                    recommandations actionnables.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Tools Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <h3
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Outils et frameworks utilisés
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-[#32AFB1]">
                <CardHeader>
                  <CardTitle className="text-xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    LangChain
                  </CardTitle>
                  <CardDescription>
                    Framework Python open-source pour créer des applications basées sur des LLM. Permet de chaîner des
                    appels de modèles, gérer la mémoire conversationnelle, intégrer des outils externes et créer des
                    agents IA complexes. Idéal pour un contrôle fin et une grande flexibilité en production.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-[#32AFB1]">
                <CardHeader>
                  <CardTitle className="text-xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    LangFlow
                  </CardTitle>
                  <CardDescription>
                    Interface graphique open-source basée sur LangChain, permettant de créer des workflows d'IA via une
                    interface drag-and-drop, sans codage. Parfait pour le prototypage rapide, l'expérimentation et la
                    collaboration entre développeurs et non-codeurs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* RAG Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <Database className="h-16 w-16 text-[#32AFB1] mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                    RAG : Retrieval-Augmented Generation
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                    Le RAG combine la puissance des LLM avec vos données propriétaires pour des réponses précises, à
                    jour et conformes au RGPD. Une alternative souveraine aux modèles fermés.
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#32AFB1]">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#262626] text-white">
                          <th className="px-6 py-4 text-left font-semibold">Critère</th>
                          <th className="px-6 py-4 text-left font-semibold">RAG (avec base locale)</th>
                          <th className="px-6 py-4 text-left font-semibold">Modèles fermés (ex : ChatGPT)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-[#262626]">Stockage des données</td>
                          <td className="px-6 py-4">
                            <span className="text-[#32AFB1] font-medium">Local</span> (on-premise ou cloud privé UE)
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            Cloud du fournisseur (risque de transferts hors UE)
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-[#262626]">Mise à jour</td>
                          <td className="px-6 py-4">
                            <span className="text-[#32AFB1] font-medium">Temps réel</span> (base modifiable)
                          </td>
                          <td className="px-6 py-4 text-gray-600">Statique (connaissances figées à une date)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-[#262626]">Transparence</td>
                          <td className="px-6 py-4">
                            <span className="text-[#32AFB1] font-medium">Sources citées</span> et auditables
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            Boîte noire (pas de visibilité sur les données utilisées)
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-[#262626]">Conformité RGPD</td>
                          <td className="px-6 py-4">
                            <span className="text-[#32AFB1] text-xl">✅</span> Facile (données maîtrisées)
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-red-500 text-xl">❌</span> Risque (traitement opaque, sous-traitance
                            internationale)
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-[#262626]">Coût</td>
                          <td className="px-6 py-4">
                            <span className="text-[#32AFB1] font-medium">Investissement initial</span> (indexation)
                          </td>
                          <td className="px-6 py-4 text-gray-600">Abonnements récurrents + coûts de sortie</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-[#262626]">Hallucinations</td>
                          <td className="px-6 py-4">
                            <span className="text-[#32AFB1] font-medium">Limitées</span> (sources vérifiables)
                          </td>
                          <td className="px-6 py-4 text-gray-600">Fréquentes (pas de contexte externe)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* RAG Benefits */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                  <Card className="border-2 border-[#32AFB1]">
                    <CardHeader>
                      <CheckCircle2 className="h-10 w-10 text-[#32AFB1] mb-3" />
                      <CardTitle className="text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                        Souveraineté des données
                      </CardTitle>
                      <CardDescription>
                        Vos données restent sous votre contrôle, hébergées localement ou dans un cloud privé européen.
                        Conformité RGPD garantie.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-2 border-[#32AFB1]">
                    <CardHeader>
                      <CheckCircle2 className="h-10 w-10 text-[#32AFB1] mb-3" />
                      <CardTitle className="text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                        Réponses vérifiables
                      </CardTitle>
                      <CardDescription>
                        Chaque réponse cite ses sources, permettant une vérification et un audit complet. Réduction
                        drastique des hallucinations.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-2 border-[#32AFB1]">
                    <CardHeader>
                      <CheckCircle2 className="h-10 w-10 text-[#32AFB1] mb-3" />
                      <CardTitle className="text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                        Mise à jour en temps réel
                      </CardTitle>
                      <CardDescription>
                        Votre base de connaissances évolue avec votre entreprise. Ajoutez de nouveaux documents
                        instantanément sans réentraîner de modèle.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                {/* Call to Action */}
                <div className="mt-12 bg-[#32AFB1] text-white rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    Prêt à exploiter vos données avec le RAG ?
                  </h3>
                  <p className="text-lg leading-relaxed text-pretty max-w-2xl mx-auto">
                    Je vous accompagne dans la mise en place d'une solution RAG adaptée à vos besoins : indexation de
                    vos documents, configuration du système de recherche vectorielle, et intégration avec vos outils
                    existants.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Substack Newsletter Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Suivez mes analyses sur l'IA
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                  Recevez régulièrement mes réflexions et analyses approfondies sur l'intelligence artificielle, l'IA
                  agentique, le RAG et les dernières innovations technologiques directement dans votre boîte mail.
                </p>

                <div className="flex justify-center">
                  <div className="w-full max-w-[480px] bg-white rounded-lg shadow-lg p-6 border-2 border-[#32AFB1]">
                    <iframe
                      src="https://charlesvandendriessche.substack.com/embed"
                      width="100%"
                      height="320"
                      style={{ border: "1px solid #EEE", background: "white", maxWidth: "480px" }}
                      frameBorder="0"
                      scrolling="no"
                      title="Newsletter Substack de Charles Van Den Driessche"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
