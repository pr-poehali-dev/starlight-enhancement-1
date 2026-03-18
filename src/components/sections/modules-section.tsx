import Icon from "@/components/ui/icon"
import { useReveal } from "@/hooks/use-reveal"

const modules = [
  {
    icon: "UtensilsCrossed",
    title: "Питание",
    description: "Калькулятор КБЖУ, база продуктов со сканером штрихкодов, шаблоны рационов и рецепты здоровых блюд с фильтрами",
    features: ["Дневник питания", "Фотофиксация", "Напоминания", "Недельные отчёты"],
    gradient: "from-red-500/20 to-orange-500/20",
    iconBg: "bg-red-500/15",
    iconColor: "text-red-400",
  },
  {
    icon: "Dumbbell",
    title: "Тренировки",
    description: "Библиотека упражнений с видео, готовые программы по целям и уровню, конструктор индивидуальных планов",
    features: ["Видео-техника", "Таймер подходов", "Дневник весов", "Челленджи"],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
  },
  {
    icon: "Calendar",
    title: "Расписание",
    description: "Календарь тренировок и питания с цветовой маркировкой, шаблоны расписаний и интеграция с Google Calendar",
    features: ["Цветовая маркировка", "Шаблоны 5/2, 6/1", "Уведомления", "PDF-экспорт"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
  },
  {
    icon: "Droplets",
    title: "Трекер воды",
    description: "Настраиваемая дневная норма на основе веса и активности, напоминания и визуализация прогресса",
    features: ["Умная норма", "Напоминания", "Учёт жидкостей", "Круговая диаграмма"],
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-400",
  },
  {
    icon: "Moon",
    title: "Трекер сна",
    description: "Умный будильник с пробуждением в фазу лёгкого сна, дневник качества и библиотека звуков для засыпания",
    features: ["Умный будильник", "Фазы сна", "Звуки природы", "Аудиомедитации"],
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-400",
  },
  {
    icon: "PieChart",
    title: "График БЖУ",
    description: "Автоматический расчёт нормы нутриентов под вашу цель, круговые диаграммы и подсказки по продуктам",
    features: ["Авторасчёт БЖУ", "Нормы ВОЗ", "Подсказки", "Инфографика"],
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
  },
  {
    icon: "TrendingUp",
    title: "Прогресс и аналитика",
    description: "Замеры тела с графиком динамики, фотофиксация До/После, дашборд с ключевыми метриками здоровья",
    features: ["Замеры тела", "Фото До/После", "Графики", "Дашборд"],
    gradient: "from-emerald-500/20 to-green-500/20",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
  },
]

export default function ModulesSection() {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section ref={ref} className="relative px-4 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <span className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase">Модули</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Всё для здоровья
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            7 модулей, которые работают вместе — от питания и тренировок до сна и аналитики
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border border-foreground/[0.06] bg-foreground/[0.03] backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:border-foreground/15 hover:bg-foreground/[0.06] hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${i === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${module.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${module.iconBg} mb-5`}>
                  <Icon name={module.icon} size={22} className={module.iconColor} />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{module.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-5">{module.description}</p>

                <div className="flex flex-wrap gap-2">
                  {module.features.map((feature, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center rounded-full bg-foreground/[0.06] px-3 py-1 text-xs text-foreground/50 transition-colors group-hover:text-foreground/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
