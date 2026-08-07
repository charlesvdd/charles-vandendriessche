import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import ClientLayout from "./ClientLayout"

import { GoogleTagManager } from '@next/third-parties/google'
import { Montserrat, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const TITLE = "Charles Van den Driessche — Architecte IA"
const DESCRIPTION =
  "Architecte SI senior spécialiste de l'IA générative et du RAG (LLM, systèmes multi-agents, Cloud AI) — plateformes Data/IA robustes, souveraines et sécurisées."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://charles-vandendriessche.fr"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://charles-vandendriessche.fr",
    siteName: "Charles Van den Driessche",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-KC56PHH"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <GoogleTagManager gtmId={GTM_ID} />
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
