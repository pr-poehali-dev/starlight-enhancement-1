import Icon from "@/components/ui/icon"
import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export default function CtaSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section ref={ref} className="relative px-4 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative rounded-3xl border border-foreground/[0.08] overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-foreground/[0.03] to-accent/15" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Icon name="Rocket" size={28} className="text-foreground/80" />
            </div>

            <h2
              className={`text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Начни путь к здоровью сегодня
            </h2>

            <p
              className={`text-lg text-foreground/60 max-w-xl mx-auto mb-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Скачай HomeFitness бесплатно и получи доступ ко всем модулям на 14 дней
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <MagneticButton variant="primary" size="lg">
                <span className="flex items-center gap-2">
                  <Icon name="Apple" size={18} />
                  App Store
                </span>
              </MagneticButton>
              <MagneticButton variant="secondary" size="lg">
                <span className="flex items-center gap-2">
                  <Icon name="Play" size={18} />
                  Google Play
                </span>
              </MagneticButton>
            </div>

            <div
              className={`flex items-center justify-center gap-6 text-sm text-foreground/40 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-primary" />
                Бесплатно
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-primary" />
                Без рекламы
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-primary" />
                iOS и Android
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
