import Icon from "@/components/ui/icon"
import { useReveal } from "@/hooks/use-reveal"

const features = [
  {
    icon: "Smartphone",
    title: "Работает офлайн",
    description: "Тренируйся без интернета — данные синхронизируются автоматически",
  },
  {
    icon: "Shield",
    title: "Приватность",
    description: "Фото До/После и личные данные хранятся только на вашем устройстве",
  },
  {
    icon: "Users",
    title: "Сообщество",
    description: "Челленджи с друзьями, форум, прямые эфиры с тренерами и нутрициологами",
  },
  {
    icon: "Trophy",
    title: "Достижения",
    description: "Система наград и мотивации — 10 дней подряд, пройдено 100 км и многое другое",
  },
  {
    icon: "Activity",
    title: "Интеграции",
    description: "Синхронизация с Google Fit, Apple Health, фитнес-браслетами, экспорт в PDF",
  },
  {
    icon: "Sparkles",
    title: "Умная аналитика",
    description: "AI подстраивает рекомендации под ваши цели, привычки и прогресс",
  },
]

export default function FeaturesSection() {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section ref={ref} className="relative px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <span className="inline-block text-sm font-medium text-accent mb-3 tracking-wider uppercase">Почему мы</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Больше, чем трекер
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            HomeFitness — это экосистема для тех, кто серьёзно относится к своему здоровью
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group flex items-start gap-4 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-6 transition-all duration-500 hover:border-foreground/15 hover:bg-foreground/[0.05] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name={feature.icon} size={18} className="text-foreground/80" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
