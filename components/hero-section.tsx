import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative h-36 md:h-40 lg:h-44">
        {/* Diagonal split background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
            {/* Left anthracite triangle */}
            <polygon points="0,0 600,0 400,200 0,200" fill="#262626" />
            {/* Right green triangle */}
            <polygon points="600,0 1200,0 1200,200 400,200" fill="#32AFB1" />
          </svg>
        </div>

        {/* Photo overlapping the banner - positioned to overlap both colors */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10">
          <Image
            src="/charles-photo.png"
            alt="Charles Van den Driessche"
            width={180}
            height={180}
            className="rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Name as main title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--neomnia-black)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CHARLES VAN DEN DRIESSCHE
          </h1>

          {/* Main subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[var(--neomnia-black)] leading-relaxed text-balance">
            Gagnez de la productivité et maîtrisez mieux les données dans votre organisation
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[var(--neomnia-gray-dark)] leading-relaxed text-balance max-w-3xl mx-auto">
            Spécialiste en marketing direct et intelligence artificielle pour accélérer la croissance de votre
            entreprise
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="#services">
              <Button
                size="lg"
                className="bg-[var(--neomnia-green)] hover:bg-[var(--neomnia-green-hover)] text-white text-base px-8"
              >
                Découvrir mes services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--neomnia-green)] text-[var(--neomnia-green)] hover:bg-[var(--neomnia-green)]/10 text-base px-8 bg-transparent"
              >
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
