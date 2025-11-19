import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import ClientLayout from "./ClientLayout"

import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next"

import { Montserrat, Open_Sans, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-KC56PHH"

  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className={`${openSans.className} antialiased`}>
        <style jsx global>{`
          :root {
            --font-heading: ${montserrat.style.fontFamily};
          }
        `}</style>
        <ClientLayout>{children}</ClientLayout>
        <GoogleTagManager gtmId={gtmId} />
        <Analytics />
      </body>
    </html>
  )
}
