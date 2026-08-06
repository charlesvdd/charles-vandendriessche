"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const LINKS = [
  { href: "/#parcours", label: "Parcours" },
  { href: "/#projets", label: "Projets" },
  { href: "/#contact", label: "Contact" },
  { href: "/cv", label: "CV" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--neomnia-gray-light)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/#top" className="text-sm font-bold text-[var(--neomnia-black)]">
            Charles Van den Driessche
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-[var(--neomnia-black)]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden flex flex-col gap-4 pt-4 pb-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
