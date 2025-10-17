"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-[var(--neomnia-gray-light)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/charles-photo.png"
              alt="Charles Van den Driessche"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight whitespace-nowrap text-[var(--neomnia-black)]">
                Charles Van den Driessche
              </span>
              <span className="text-xs text-[var(--neomnia-gray-dark)] whitespace-nowrap">
                Expert IA & Automatisation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/data-driving"
              className="text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors font-semibold"
            >
              Data Driving
            </Link>
            <Link
              href="/intelligence-artificielle"
              className="text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors font-semibold"
            >
              Intelligence Artificielle
            </Link>
            <Link
              href="/marketing"
              className="text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors font-semibold"
            >
              Marketing
            </Link>
            <Link
              href="/editions-saas"
              className="text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors font-semibold"
            >
              Éditions de SaaS
            </Link>
            <Link href="#contact">
              <Button className="bg-[#32AFB1] hover:bg-[#2A9B9D] text-white font-bold rounded">Contact</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6 text-[var(--neomnia-black)]" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/data-driving"
              className="text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Data Driving
            </Link>
            <Link
              href="/intelligence-artificielle"
              className="text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Intelligence Artificielle
            </Link>
            <Link
              href="/marketing"
              className="text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketing
            </Link>
            <Link
              href="/editions-saas"
              className="text-[var(--neomnia-gray-dark)] hover:text-[var(--neomnia-green)] transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Éditions de SaaS
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-[#32AFB1] hover:bg-[#2A9B9D] text-white font-bold rounded">Contact</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
