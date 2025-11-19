import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

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
