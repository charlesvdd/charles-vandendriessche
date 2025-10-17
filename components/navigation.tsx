"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
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
              <span className="text-lg font-bold leading-tight whitespace-nowrap text-foreground">
                Charles Van den Driessche
              </span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">Data Driving & AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/data-driving"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
            >
              Data Driving
            </Link>
            <Link
              href="/intelligence-artificielle"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
            >
              Intelligence Artificielle
            </Link>
            <Link
              href="/marketing"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
            >
              Marketing
            </Link>
            <Link
              href="/editions-saas"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
            >
              Éditions de SaaS
            </Link>
            <ThemeToggle />
            <Link href="#contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/data-driving"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Data Driving
            </Link>
            <Link
              href="/intelligence-artificielle"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Intelligence Artificielle
            </Link>
            <Link
              href="/marketing"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketing
            </Link>
            <Link
              href="/editions-saas"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Éditions de SaaS
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
