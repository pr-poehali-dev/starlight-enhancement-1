import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"
import { MagneticButton } from "@/components/magnetic-button"
import { GrainOverlay } from "@/components/grain-overlay"
import HeroSection from "@/components/sections/hero-section"
import ModulesSection from "@/components/sections/modules-section"
import FeaturesSection from "@/components/sections/features-section"
import CtaSection from "@/components/sections/cta-section"
import FooterSection from "@/components/sections/footer-section"

export default function Index() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <GrainOverlay />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-foreground/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md">
              <span className="text-lg font-bold text-foreground">H</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">HomeFitness</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Модули", id: "modules" },
              { label: "Возможности", id: "features" },
              { label: "Скачать", id: "cta" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton variant="primary" onClick={() => scrollTo("cta")}>
              Скачать
            </MagneticButton>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-foreground" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-foreground/[0.06] px-4 pb-4">
            {[
              { label: "Модули", id: "modules" },
              { label: "Возможности", id: "features" },
              { label: "Скачать", id: "cta" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <HeroSection />

      <div id="modules">
        <ModulesSection />
      </div>

      <div id="features">
        <FeaturesSection />
      </div>

      <div id="cta">
        <CtaSection />
      </div>

      <FooterSection />
    </main>
  )
}
