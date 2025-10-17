import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Target,
  Users,
  TrendingUp,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  Database,
  Shield,
  Zap,
  BarChart3,
  Brain,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Direct B2B - RAG et IA Générative | Charles Vandendriessche",
  description:
    "Développez votre activité B2B avec une approche marketing ciblée propulsée par l'IA et la RAG. Prospection intelligente, séquençage multi-canal et conformité RGPD avec Mission Croissance.",
  keywords: [
    "marketing direct",
    "marketing B2B",
    "RAG",
    "IA générative",
    "prospection",
    "génération de leads",
    "Mission Croissance",
    "automatisation marketing",
    "agents IA",
    "RGPD",
    "séquençage multi-canal",
  ],
  openGraph: {
    title: "Marketing Direct B2B - RAG et IA Générative",
    description: "Développez votre activité B2B avec une approche marketing ciblée propulsée par l'IA et la RAG.",
    type: "website",
  },
}

export default function MarketingPage() {
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
              Marketing Direct
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 text-balance">
              Développez votre activité B2B avec une approche marketing ciblée et performante, propulsée par l'IA et la
              RAG
            </p>
            <div className="flex justify-center">
              <Image
                src="/mission-croissance-logo.png"
                alt="Mission Croissance - Gagnez la confiance que vous méritez"
                width={400}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* RAG Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-center text-[var(--neomnia-green)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              RAG et IA Générative au Service du Marketing
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 text-center text-pretty">
              L'intelligence artificielle générative et la génération augmentée par récupération (RAG) révolutionnent le
              marketing en transformant les 4P traditionnels (Produit, Prix, Place, Promotion) en{" "}
              <strong className="text-[var(--neomnia-green)]">
                4A : Automatisation, Analyse, Adaptation, Anticipation
              </strong>
              .
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-[var(--neomnia-green)]/30 hover:border-[var(--neomnia-green)] transition-colors">
                <CardHeader>
                  <Zap className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Traitement Ultra-Rapide</CardTitle>
                  <CardDescription>
                    La RAG réduit le temps de segmentation des bases clients de plusieurs semaines à quelques heures
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-[var(--neomnia-green)]/30 hover:border-[var(--neomnia-green)] transition-colors">
                <CardHeader>
                  <Shield className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Conformité RGPD</CardTitle>
                  <CardDescription>
                    Conservation locale des données, minimisant les risques liés aux transferts hors UE
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-[var(--neomnia-green)]/30 hover:border-[var(--neomnia-green)] transition-colors">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>ROI Exceptionnel</CardTitle>
                  <CardDescription>
                    Augmentation des conversions de 10 à 40% et réduction des coûts de 60%
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-[var(--neomnia-green)]/5 to-[var(--neomnia-green)]/10 rounded-lg p-8 border border-[var(--neomnia-green)]/20">
              <h3 className="text-2xl font-bold mb-6 text-[#262626]" style={{ fontFamily: "var(--font-heading)" }}>
                Entreprises Leaders Utilisant la RAG
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                    <p className="text-[#262626]">
                      <strong>Amazon</strong> : +35% de panier moyen grâce au moteur de recommandation RAG
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                    <p className="text-[#262626]">
                      <strong>LVMH</strong> : Chatbot RAG avec 92% de satisfaction client et -80% de temps de réponse
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                    <p className="text-[#262626]">
                      <strong>Revolut</strong> : +40% de souscriptions via offres personnalisées RAG
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                    <p className="text-[#262626]">
                      <strong>Netflix</strong> : 93% des décisions de contenu prises par IA RAG
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                    <p className="text-[#262626]">
                      <strong>Coca-Cola</strong> : 5 000 assets publicitaires en 3 mois avec engagement 2x supérieur
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                    <p className="text-[#262626]">
                      <strong>Nike</strong> : -60% de tickets support grâce aux agents IA RAG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Marketing Traditionnel vs Marketing avec RAG
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-[#262626] text-white">
                    <th className="p-4 text-left font-bold">Critère</th>
                    <th className="p-4 text-left font-bold">Marketing Traditionnel</th>
                    <th className="p-4 text-left font-bold bg-[var(--neomnia-green)]">Marketing avec RAG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Temps de segmentation</td>
                    <td className="p-4 text-muted-foreground">1–2 semaines</td>
                    <td className="p-4 bg-[var(--neomnia-green)]/10 font-semibold">
                      Quelques minutes (segmentation dynamique)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Personnalisation</td>
                    <td className="p-4 text-muted-foreground">Segments larges (ex : "25–34 ans")</td>
                    <td className="p-4 bg-[var(--neomnia-green)]/10 font-semibold">
                      1:1 (ex : "Panier abandonné ? Voici une promo")
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Coût par lead</td>
                    <td className="p-4 text-muted-foreground">50–100€ (campagnes manuelles)</td>
                    <td className="p-4 bg-[var(--neomnia-green)]/10 font-semibold">
                      10–20€ (automatisation + ciblage précis)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Conformité RGPD</td>
                    <td className="p-4 text-muted-foreground">Risque élevé (données envoyées à des tiers)</td>
                    <td className="p-4 bg-[var(--neomnia-green)]/10 font-semibold">
                      Conforme (données traitées en local)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Réactivité</td>
                    <td className="p-4 text-muted-foreground">Campagnes planifiées à l'avance</td>
                    <td className="p-4 bg-[var(--neomnia-green)]/10 font-semibold">
                      Temps réel (offre envoyée 5 min après abandon)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Autonomous AI Agents Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Les Agents IA Autonomes : Des "Marketeurs Virtuels" 24/7
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 text-center text-pretty">
              Les agents IA autonomes exécutent des tâches marketing de bout en bout sans intervention humaine, en
              s'appuyant sur la RAG pour accéder à des données locales et à jour.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
                <CardHeader>
                  <Brain className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Coca-Cola : Create Real Magic</CardTitle>
                  <CardDescription>
                    Agent utilisant DALL·E 3 et RAG pour générer 5 000 visuels publicitaires en 3 mois avec un
                    engagement 2x supérieur
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
                <CardHeader>
                  <Users className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Nike : Service Client IA</CardTitle>
                  <CardDescription>
                    Agent IA sur WhatsApp/Instagram réduisant les tickets support de 60% avec un NPS de 85%
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
                <CardHeader>
                  <Shield className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Unilever : Crisis Management</CardTitle>
                  <CardDescription>
                    Agent surveillant les réseaux sociaux en temps réel, réduisant les bad buzz de 40%
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-[var(--neomnia-green)]/10 to-[var(--neomnia-green)]/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Métriques Clés d'Impact
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Vitesse</p>
                    <p className="text-sm text-muted-foreground">Lancement de campagne en 10 minutes vs 3 jours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">ROI</p>
                    <p className="text-sm text-muted-foreground">ROI marketing 3 à 5x supérieur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-6 w-6 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Scalabilité</p>
                    <p className="text-sm text-muted-foreground">10 000 conversations/jour avec 2 superviseurs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RGPD Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-center text-[var(--neomnia-green)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              RGPD et Souveraineté des Données : Un Atout Concurrentiel
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 text-center text-pretty">
              La conformité RGPD est essentielle pour éviter des sanctions financières lourdes (jusqu'à 20 M€ ou 4% du
              CA mondial) et préserver la confiance des consommateurs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    Cloud Public (ex : AWS + ChatGPT)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    <p className="text-muted-foreground">Abonnement + coûts de sortie de données</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    <p className="text-muted-foreground">Latence 200–500ms (appels API externes)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    <p className="text-muted-foreground">Risque de transferts hors UE</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    <p className="text-muted-foreground">Sous-traitance à un tiers</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[var(--neomnia-green)] bg-[var(--neomnia-green)]/5">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    RAG Locale (ex : On-Premise + Mistral)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0" />
                    <p>Investissement initial, 0 coût variable</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0" />
                    <p>Latence &lt;50ms (traitement local)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0" />
                    <p>100% conforme (données en UE)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-0.5 flex-shrink-0" />
                    <p>Contrôle total des données</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-[var(--neomnia-green)]/5 to-[var(--neomnia-green)]/10 rounded-lg p-8 border border-[var(--neomnia-green)]/20">
              <h3 className="text-2xl font-bold mb-6 text-[#262626]" style={{ fontFamily: "var(--font-heading)" }}>
                Bonnes Pratiques RGPD pour un Marketing IA Conforme
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                  <p className="text-[#262626]">
                    <strong>Minimisation des données</strong> : Ne collecter que les données nécessaires
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                  <p className="text-[#262626]">
                    <strong>Consentement explicite</strong> : Demander le consentement pour chaque traitement
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                  <p className="text-[#262626]">
                    <strong>Durée de conservation</strong> : Définir et respecter des durées adaptées
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                  <p className="text-[#262626]">
                    <strong>Sécurité des données</strong> : Chiffrement et contrôle d'accès
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                  <p className="text-[#262626]">
                    <strong>Transparence</strong> : Informer clairement sur l'utilisation des données
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--neomnia-green)] mt-1 flex-shrink-0" />
                  <p className="text-[#262626]">
                    <strong>Exercice des droits</strong> : Permettre l'accès, rectification, effacement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Stack Technologique pour la RAG en Marketing
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-[var(--neomnia-green)] text-white">
                    <th className="p-4 text-left font-bold">Couche</th>
                    <th className="p-4 text-left font-bold">Outil/Technologie</th>
                    <th className="p-4 text-left font-bold">Exemple d'Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Stockage des données</td>
                    <td className="p-4">Snowflake, PostgreSQL (pgvector)</td>
                    <td className="p-4 text-muted-foreground">Base clients + historique d'achats</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Vectorisation</td>
                    <td className="p-4">Weaviate, Milvus, Qdrant</td>
                    <td className="p-4 text-muted-foreground">Indexation des produits, articles</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Modèle IA</td>
                    <td className="p-4">Mistral 7B, Llama 3, Vertex AI</td>
                    <td className="p-4 text-muted-foreground">Génération de textes/publicités</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Orchestration</td>
                    <td className="p-4">LangChain, Haystack</td>
                    <td className="p-4 text-muted-foreground">Pipeline RAG pour chatbots</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Automatisation</td>
                    <td className="p-4">AutoGPT, Adept</td>
                    <td className="p-4 text-muted-foreground">Agents autonomes pour campagnes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Analyse</td>
                    <td className="p-4">Databricks, BigQuery</td>
                    <td className="p-4 text-muted-foreground">Tableaux de bord temps réel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-[var(--neomnia-green)]">
                <CardHeader>
                  <Database className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Coût Initial</CardTitle>
                  <CardDescription className="text-2xl font-bold text-foreground">~50 000€</CardDescription>
                  <CardDescription>Pour une stack RAG locale complète</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-[var(--neomnia-green)]">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>ROI Moyen</CardTitle>
                  <CardDescription className="text-2xl font-bold text-foreground">300%</CardDescription>
                  <CardDescription>En 12 mois (source : BCG 2024)</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-[var(--neomnia-green)]">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Réduction des Coûts</CardTitle>
                  <CardDescription className="text-2xl font-bold text-foreground">-60%</CardDescription>
                  <CardDescription>Exemple : Carrefour (content marketing)</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Sequencing Visual Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--neomnia-green)]/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-center text-[var(--neomnia-green)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Séquençage Multi-Canal Intelligent
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 text-center text-pretty">
              Le CRM au cœur de la magie : orchestrez vos actions email, appel et LinkedIn pour maximiser vos chances de
              contact
            </p>

            {/* Visual Sequence Flow */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-[var(--neomnia-green)]/30 shadow-lg">
              {/* CRM Center */}
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-[var(--neomnia-green)] blur-xl opacity-20 rounded-full"></div>
                  <div className="relative bg-[var(--neomnia-green)] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
                    <Database className="h-12 w-12 mb-2" />
                    <span className="font-bold text-sm">CRM</span>
                  </div>
                </div>
              </div>

              {/* Sequence Timeline */}
              <div className="space-y-8">
                {/* Day 1 - Email */}
                <div className="relative">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="text-[var(--neomnia-green)] font-bold text-lg">Jour 1</span>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="bg-[var(--neomnia-green)] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-[var(--neomnia-green)]/10 to-[var(--neomnia-green)]/5 rounded-lg p-4 border border-[var(--neomnia-green)]/30">
                      <h4 className="font-bold text-lg mb-2">Email Personnalisé</h4>
                      <p className="text-sm text-muted-foreground">
                        Premier contact avec un message adapté au profil et au secteur du prospect
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-[140px] top-16 w-0.5 h-8 bg-[var(--neomnia-green)]/30"></div>
                </div>

                {/* Day 3 - LinkedIn */}
                <div className="relative">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="text-[var(--neomnia-green)] font-bold text-lg">Jour 3</span>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="bg-[#0077B5] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-[#0077B5]/10 to-[#0077B5]/5 rounded-lg p-4 border border-[#0077B5]/30">
                      <h4 className="font-bold text-lg mb-2">Connexion LinkedIn</h4>
                      <p className="text-sm text-muted-foreground">
                        Demande de connexion avec message personnalisé pour créer du lien
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-[140px] top-16 w-0.5 h-8 bg-[var(--neomnia-green)]/30"></div>
                </div>

                {/* Day 5 - Phone Call */}
                <div className="relative">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="text-[var(--neomnia-green)] font-bold text-lg">Jour 5</span>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="bg-[var(--neomnia-orange)] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-[var(--neomnia-orange)]/10 to-[var(--neomnia-orange)]/5 rounded-lg p-4 border border-[var(--neomnia-orange)]/30">
                      <h4 className="font-bold text-lg mb-2">Appel Téléphonique</h4>
                      <p className="text-sm text-muted-foreground">
                        Prise de contact directe pour qualifier le besoin et proposer un rendez-vous
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-[140px] top-16 w-0.5 h-8 bg-[var(--neomnia-green)]/30"></div>
                </div>

                {/* Day 8 - Follow-up Email */}
                <div className="relative">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="text-[var(--neomnia-green)] font-bold text-lg">Jour 8</span>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="bg-[var(--neomnia-magenta)] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-[var(--neomnia-magenta)]/10 to-[var(--neomnia-magenta)]/5 rounded-lg p-4 border border-[var(--neomnia-magenta)]/30">
                      <h4 className="font-bold text-lg mb-2">Email de Relance</h4>
                      <p className="text-sm text-muted-foreground">
                        Rappel avec proposition de valeur et cas client pertinent pour le secteur
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-[140px] top-16 w-0.5 h-8 bg-[var(--neomnia-green)]/30"></div>
                </div>

                {/* Day 12 - LinkedIn Message */}
                <div className="relative">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="text-[var(--neomnia-green)] font-bold text-lg">Jour 12</span>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="bg-[#0077B5] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-[#0077B5]/10 to-[#0077B5]/5 rounded-lg p-4 border border-[#0077B5]/30">
                      <h4 className="font-bold text-lg mb-2">Message LinkedIn Direct</h4>
                      <p className="text-sm text-muted-foreground">
                        Message personnalisé avec contenu à valeur ajoutée (article, étude de cas)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="mt-12 pt-8 border-t border-[var(--neomnia-green)]/20">
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "var(--font-heading)" }}>
                  Résultats du Séquençage Multi-Canal
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-[var(--neomnia-green)]/10 rounded-lg p-6 text-center border border-[var(--neomnia-green)]/30">
                    <div className="text-4xl font-bold text-[var(--neomnia-green)] mb-2">+65%</div>
                    <p className="text-sm text-muted-foreground">Taux de réponse vs mono-canal</p>
                  </div>
                  <div className="bg-[var(--neomnia-green)]/10 rounded-lg p-6 text-center border border-[var(--neomnia-green)]/30">
                    <div className="text-4xl font-bold text-[var(--neomnia-green)] mb-2">3.5x</div>
                    <p className="text-sm text-muted-foreground">Plus de rendez-vous qualifiés</p>
                  </div>
                  <div className="bg-[var(--neomnia-green)]/10 rounded-lg p-6 text-center border border-[var(--neomnia-green)]/30">
                    <div className="text-4xl font-bold text-[var(--neomnia-green)] mb-2">-40%</div>
                    <p className="text-sm text-muted-foreground">Coût par lead acquis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CRM Benefits */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-[var(--neomnia-green)]/30 hover:border-[var(--neomnia-green)] transition-colors">
                <CardHeader>
                  <Brain className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Orchestration Intelligente</CardTitle>
                  <CardDescription>
                    Le CRM analyse les interactions et adapte automatiquement le timing et le canal de chaque action
                    pour maximiser l'engagement
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-[var(--neomnia-green)]/30 hover:border-[var(--neomnia-green)] transition-colors">
                <CardHeader>
                  <Target className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Personnalisation à l'Échelle</CardTitle>
                  <CardDescription>
                    Chaque message est personnalisé en fonction du profil, du secteur et du comportement du prospect
                    grâce à la RAG
                  </CardDescription>
                </CardHeader>
              </Card>
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
              Une approche marketing orientée résultats
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              Le marketing direct reste l'un des leviers les plus efficaces pour générer des opportunités commerciales
              qualifiées. Mon expertise vous permet de structurer votre prospection et d'optimiser votre organisation
              commerciale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardHeader>
                <Target className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Prospection Ciblée</CardTitle>
                <CardDescription>
                  Identification et qualification de vos prospects idéaux pour maximiser vos chances de conversion
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-[var(--neomnia-magenta)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Listes Ultra-Qualifiées</CardTitle>
                <CardDescription>
                  Génération de bases de données ciblées avec des contacts décisionnaires dans votre secteur
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-orange)] transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[var(--neomnia-orange)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Organisation Commerciale</CardTitle>
                <CardDescription>
                  Structuration de vos processus de vente pour améliorer l'efficacité de vos équipes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-green)] transition-colors">
              <CardHeader>
                <Mail className="h-12 w-12 text-[var(--neomnia-green)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Campagnes Email</CardTitle>
                <CardDescription>
                  Conception et déploiement de campagnes d'emailing personnalisées et performantes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-magenta)] transition-colors">
              <CardHeader>
                <Phone className="h-12 w-12 text-[var(--neomnia-magenta)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Stratégie Multicanal</CardTitle>
                <CardDescription>
                  Combinaison intelligente des canaux (email, téléphone, LinkedIn) pour toucher vos prospects
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[var(--neomnia-orange)] transition-colors">
              <CardHeader>
                <FileText className="h-12 w-12 text-[var(--neomnia-orange)] mb-4" />
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>Reporting & Analyse</CardTitle>
                <CardDescription>
                  Suivi précis de vos performances avec des KPIs actionnables pour optimiser vos campagnes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Mission Croissance Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[var(--neomnia-orange)] bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/mission-croissance-logo.png"
                    alt="Mission Croissance - Gagnez la confiance que vous méritez"
                    width={350}
                    height={100}
                  />
                </div>
                <CardTitle className="text-3xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Mission Croissance : Votre Agence Marketing B2B
                </CardTitle>
                <CardDescription className="text-base">
                  Une agence dédiée au développement des PME et ETI B2B
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Mission Croissance</strong> est une agence de marketing direct
                  spécialisée dans l'accompagnement des PME et ETI du secteur B2B. Notre mission : vous assister dans
                  votre développement économique, stratégique et opérationnel pour atteindre vos objectifs de
                  croissance.
                </p>
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h4 className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                    Nos domaines d'expertise
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-orange)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Développement économique et commercial</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-green)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Stratégie marketing et positionnement</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-magenta)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Optimisation opérationnelle des ventes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--neomnia-orange)] mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Génération de leads qualifiés</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex justify-center">
                  <a href="https://mission-croissance.fr" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#262626] hover:bg-[#1a1a1a] text-white">
                      Découvrir Mission Croissance
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
