# 📝 GUIDE DE CUSTOMISATION - Contenu & Textes

## 🎯 Où Personnaliser Quoi

### 1. HERO SECTION
**Fichier** : `components/hero-section.tsx`

**À modifier:**
\`\`\`tsx
// Image
src="/charles-photo.png"  → Votre photo

// Headline
"CHARLES VAN DEN DRIESSCHE" → Votre nom

// Sous-titre
"Gagnez de la productivité..." → Votre proposition

// Liens des boutons
href="/data-driving" → Vos URLs
href="/marketing" → Vos URLs
\`\`\`

---

### 2. STATS SECTION
**Fichier** : `components/stats-section.tsx`

**Exemple à adapter:**
\`\`\`tsx
const stats = [
  {
    value: "150%",           // MODIFIER
    label: "Augmentation de productivité",  // MODIFIER
    icon: TrendingUp,
    color: "bg-blue-100",
  },
  // ... autres stats
]
\`\`\`

**Vos valeurs possibles:**
\`\`\`
✅ Économies annuelles : "€500K"
✅ Clients satisfaits : "98%"
✅ Temps sauvé/jour : "15h"
✅ Projets complétés : "250+"
\`\`\`

---

### 3. TÉMOIGNAGES
**Fichier** : `components/testimonials-section.tsx`

**Structure:**
\`\`\`tsx
{
  name: "MODIFIER",
  role: "MODIFIER",
  company: "MODIFIER",
  content: "MODIFIER - Le témoignage réel du client",
  avatar: "/avatars/avatar-new.svg",  // AJOUTER
  rating: 5,
}
\`\`\`

**Exemple réel:**
\`\`\`tsx
{
  name: "Philippe Arnoud",
  role: "Directeur Général",
  company: "AgroTech Solutions",
  content: "En 2 mois, Charles a automatisé 60% de nos tâches administratives. Nos équipes peuvent enfin se concentrer sur la stratégie. C'est un game-changer !",
  avatar: "/avatars/philippe.jpg",
  rating: 5,
}
\`\`\`

---

### 4. TARIFICATION
**Fichier** : `components/pricing-section.tsx`

**Structure:**
\`\`\`tsx
{
  name: "MODIFIER",
  price: "2500",  // MODIFIER
  duration: "forfait",
  description: "MODIFIER",
  features: [
    "Feature 1",
    "Feature 2",
  ],
  highlighted: false,  // true pour le plan populaire
}
\`\`\`

**Vos tarifs possibles:**
\`\`\`
💰 Audit : €2,000 - €5,000
💰 Projet court : €10,000 - €15,000
💰 Projet long : €25,000 - €50,000+
💰 Support/mois : €1,000 - €3,000
\`\`\`

---

### 5. FAQ
**Fichier** : `components/faq-section.tsx`

**Structure:**
\`\`\`tsx
{
  question: "Votre question ?",
  answer: "Votre réponse détaillée...",
}
\`\`\`

**Exemples personnalisés:**
\`\`\`tsx
{
  question: "Combien de temps dure une implémentation ?",
  answer: "Entre 2 et 8 semaines selon la complexité. Nous avons un processus éprouvé...",
},
{
  question: "Supportez-vous notre stack technologique ?",
  answer: "Oui, nous travaillons avec...",
},
\`\`\`

---

### 6. CAS D'USAGE
**Fichier** : `components/use-cases-section.tsx`

**Structure:**
\`\`\`tsx
{
  icon: Database,
  title: "MODIFIER",
  description: "MODIFIER",
  industry: "MODIFIER",  // Ex: "E-commerce", "SaaS"
  benefits: [
    "Bénéfice 1",
    "Bénéfice 2",
    "Bénéfice 3",
  ],
}
\`\`\`

---

### 7. PROCESSUS
**Fichier** : `components/process-section.tsx`

**Structure:**
\`\`\`tsx
{
  number: "01",
  title: "MODIFIER",
  description: "MODIFIER",
  icon: Lightbulb,
  color: "bg-blue-100",
}
\`\`\`

**Exemple:**
\`\`\`tsx
{
  number: "01",
  title: "Audit Initial (Semaine 1)",
  description: "Nous analysons vos outils actuels et identifions les opportunités d'optimisation.",
  icon: Lightbulb,
}
\`\`\`

---

## 🔗 LIENS À METTRE À JOUR

### Dans la Navigation
**Fichier** : `components/navigation.tsx`

\`\`\`tsx
// Remplacer les liens
href="/data-driving"                → Votre URL
href="/intelligence-artificielle"   → Votre URL
href="/marketing"                   → Votre URL
href="/editions-saas"               → Votre URL

// Email de contact
<Link href="#contact">Contact</Link>  → Votre système de contact
\`\`\`

### Boutons CTA
\`\`\`tsx
// Hero Section
Link href="/data-driving"   → Vers où ?
Link href="/marketing"      → Vers où ?

// Partout où #contact
Calendly, Typeform, Hubspot ?
\`\`\`

---

## 📧 FORMULAIRE DE CONTACT

**À intégrer:**
\`\`\`tsx
// Option 1: Calendly
<Link href="https://calendly.com/votre-lien">
  Réserver une consultation
</Link>

// Option 2: Typeform
<iframe src="https://votre.typeform.com/..."></iframe>

// Option 3: Email direct
<Link href="mailto:contact@votresite.com">
  Envoyer un email
</Link>
\`\`\`

---

## 📊 CONTENU RECOMMANDÉ

### Vos Statistics
\`\`\`
1️⃣  Une métrique de résultat (€, %, h)
2️⃣  Volume d'impact (clients, projets)
3️⃣  Économies/gains majeurs
4️⃣  Satisfaction client
\`\`\`

### Vos Cas d'Usage
\`\`\`
✅ Cas réel 1 - secteur Y
✅ Cas réel 2 - secteur Z
✅ Cas réel 3 - secteur W
\`\`\`

### Vos Services
\`\`\`
À bien définir dans chaque description
Avantages concrets
ROI mesurable
Timeline réaliste
\`\`\`

---

## 🎨 COULEURS À ADAPTER

**Actuellement:**
\`\`\`css
--neomnia-black: #262626
--neomnia-green: #32AFB1
--neomnia-gray: #404040
\`\`\`

**Si vous changez:**
1. Éditer `/app/globals.css`
2. Mettre à jour dans Tailwind
3. Tester partout sur la page

---

## 📸 IMAGES À REMPLACER

| Fichier | Localisation | Taille |
|---------|--------------|--------|
| charles-photo.png | Hero + Nav | 180x180px |
| neomnia-logo-icon.png | Services | 60x60px |
| mission-croissance-icon.png | Services | 60x60px |
| avatar-1.svg | Témoignage 1 | 80x80px |
| avatar-2.svg | Témoignage 2 | 80x80px |
| avatar-3.svg | Témoignage 3 | 80x80px |

---

## ✍️ CHECKLIST DE CONTENU

### Phase 1: Stats & Crédibilité
- [ ] 4 statistiques réelles
- [ ] Photo professionnelle
- [ ] 3 témoignages réels avec avatars

### Phase 2: Services & Valeur
- [ ] Description claire de vos services
- [ ] 4 étapes de processus
- [ ] 6 cas d'usage pratiques

### Phase 3: Commercial
- [ ] 4 plans tarifaires réalistes
- [ ] 6 FAQ pertinentes
- [ ] CTA clair sur contact

### Phase 4: Technique
- [ ] Tous les liens fonctionnels
- [ ] Formulaire de contact intégré
- [ ] Analytics Google configuré

---

## 📝 EXEMPLE DE CONTENU COMPLET

### Cas d'Entreprise 1 : PME B2B

**Stats:**
\`\`\`
150% - ROI après 3 mois
45 - Heures économisées/mois
98% - Satisfaction client
€2M - Revenu généré
\`\`\`

**Tarification:**
\`\`\`
Audit : €3,000
Projet : €15,000
Support : €1,500/mois
\`\`\`

**Témoignage:**
\`\`\`
"Charles a transformé nos processus commerciaux. 
Notre pipeline a doublé en 4 mois. 
Investissement rentabilisé en 6 semaines!"
- Pierre Martin, Directeur Commercial
\`\`\`

---

### Cas d'Entreprise 2 : SaaS

**Stats:**
\`\`\`
200% - Augmentation MRR
1M+ - API calls optimisés
30% - Réduction des coûts AWS
4.8/5 - Score NPS
\`\`\`

**Tarification:**
\`\`\`
Audit : €5,000
Projet : €25,000
Support : €2,500/mois
\`\`\`

---

## 🚀 DÉPLOIEMENT FINAL

1. Remplacer tous les placeholders
2. Tester sur mobile/desktop
3. Vérifier tous les liens
4. Tester le formulaire
5. Optimiser images
6. Push vers production

---

## 💡 TIPS CONVERSION

✅ **Soyez spécifique** - "€500K/an" pas "beaucoup"
✅ **Prouvez** - Chiffres, témoignages, cas réels
✅ **Rassurez** - Processus clair, FAQ complète
✅ **Facilitez** - CTA visible, formulaire simple
✅ **Créez urgence** - "Limitées" places, "Bientôt"

---

*Utilisez ce guide pour remplir votre landing page avec votre propre contenu ! 🎯*
