"use client"

import type React from "react"

import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

// <CHANGE> Updated fonts to match brand charter
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${openSans.className} antialiased`}>
        <style jsx global>{`
          :root {
            --font-heading: ${montserrat.style.fontFamily};
          }
        `}</style>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
