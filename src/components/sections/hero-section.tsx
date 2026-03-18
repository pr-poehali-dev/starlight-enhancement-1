import Icon from "@/components/ui/icon"
import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export default function HeroSection() {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md px-4 py-2 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-foreground/70">Новое фитнес-приложение</span>
        </div>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Home
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fitness</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Питание, тренировки, сон, вода и аналитика — всё в одном приложении.
          Достигай целей с умными трекерами и персональными программами.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <MagneticButton variant="primary" size="lg">
            Попробовать бесплатно
          </MagneticButton>
          <MagneticButton variant="secondary" size="lg">
            <span className="flex items-center gap-2">
              <Icon name="Play" size={16} />
              Смотреть видео
            </span>
          </MagneticButton>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {[
            { value: "7", label: "Модулей" },
            { value: "50к+", label: "Продуктов в базе" },
            { value: "100+", label: "Программ тренировок" },
            { value: "24/7", label: "Трекинг здоровья" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
