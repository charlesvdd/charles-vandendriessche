import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#262626] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/charles-photo.png"
                alt="Charles Van den Driessche"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Charles Van den
                </span>
                <span className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Driessche
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Spécialiste en IA, automatisation et marketing data-driven
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Compétences
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/data-driving" className="hover:text-[var(--neomnia-green)] transition-colors">
                  Data Driving
                </Link>
              </li>
              <li>
                <Link href="/intelligence-artificielle" className="hover:text-[var(--neomnia-green)] transition-colors">
                  Intelligence Artificielle
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="hover:text-[var(--neomnia-green)] transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/editions-saas" className="hover:text-[var(--neomnia-green)] transition-colors">
                  Éditions de SaaS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Projets
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  href="https://neomnia.net"
                  target="_blank"
                  className="hover:text-[var(--neomnia-green)] transition-colors"
                >
                  Neomnia Studio
                </Link>
              </li>
              <li>
                <Link
                  href="https://mission-croissance.fr"
                  target="_blank"
                  className="hover:text-[var(--neomnia-green)] transition-colors"
                >
                  Mission Croissance
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/neosaastech/neosaas"
                  target="_blank"
                  className="hover:text-[var(--neomnia-green)] transition-colors"
                >
                  NeoSaaS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Informations
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/a-propos" className="hover:text-[var(--neomnia-green)] transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-[var(--neomnia-green)] transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[var(--neomnia-green)] transition-colors">
                  Prendre Rendez-vous
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p className="text-[var(--neomnia-green)]">
            © {new Date().getFullYear()} Charles Van den Driessche. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
