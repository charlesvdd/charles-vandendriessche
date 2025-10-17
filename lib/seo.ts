import type { Metadata } from "next"

const siteName = "Charles Van den Driessche"
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://charlesvandendriessche.fr"

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} - Data Driving & AI`,
    template: `%s | ${siteName}`,
  },
  description: "Expert en intelligence artificielle, automatisation et marketing data-driven pour PME et ETI B2B",
  keywords: [
    "intelligence artificielle",
    "IA",
    "automatisation",
    "marketing B2B",
    "data-driven",
    "RAG",
    "agents IA",
    "Neomnia",
    "Mission Croissance",
  ],
  authors: [{ name: "Charles Van den Driessche" }],
  creator: "Charles Van den Driessche",
  publisher: "Charles Van den Driessche",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName,
    title: `${siteName} - Data Driving & AI`,
    description: "Expert en intelligence artificielle, automatisation et marketing data-driven pour PME et ETI B2B",
    images: [
      {
        url: "/og-base.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Data Driving & AI`,
    description: "Expert en intelligence artificielle, automatisation et marketing data-driven pour PME et ETI B2B",
    creator: "@charlesvdd",
    images: ["/og-base.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export function generatePageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: ["/og-base.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-base.png"],
    },
    alternates: {
      canonical: url,
    },
  }
}
