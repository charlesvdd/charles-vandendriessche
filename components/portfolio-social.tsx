"use client"

import { Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/charles-van-den-driessche/", accent: "var(--neomnia-green)" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/Charles_vandend", accent: "var(--neomnia-magenta)" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@charles-vandendriessche", accent: "var(--neomnia-orange)" },
]

export function PortfolioSocial() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="flex flex-wrap justify-center gap-4">
        {SOCIALS.map((s) => {
          const Icon = s.icon
          return (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border-2 text-sm font-semibold text-[var(--neomnia-black)] hover:text-white transition-colors"
              style={{ borderColor: "var(--neomnia-gray-light)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = s.accent
                e.currentTarget.style.borderColor = s.accent
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.borderColor = "var(--neomnia-gray-light)"
              }}
            >
              <Icon className="h-4 w-4" />
              {s.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
