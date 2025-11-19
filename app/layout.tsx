import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import ClientLayout from "./ClientLayout"
import { Montserrat, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Charles Van den Driessche - Expert IA & Automatisation",
  description: "Expert en intelligence artificielle, automatisation et marketing data-driven pour PME et ETI B2B",
  generator: "v0.app",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://charles-vandendriessche.vercel.app"),
  openGraph: {
    title: "Charles Van den Driessche - Expert IA & Automatisation",
    description: "Expert en intelligence artificielle, automatisation et marketing data-driven pour PME et ETI B2B",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://charles-vandendriessche.vercel.app",
    siteName: "Charles Van den Driessche",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Van den Driessche - Expert IA & Automatisation",
    description: "Expert en intelligence artificielle, automatisation et marketing data-driven pour PME et ETI B2B",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
