import Icon from "@/components/ui/icon"

export default function FooterSection() {
  return (
    <footer className="border-t border-foreground/[0.06] px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <span className="text-lg font-bold text-foreground">H</span>
              </div>
              <span className="text-lg font-semibold text-foreground">HomeFitness</span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
              Всё для здорового образа жизни в одном приложении
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Модули</h4>
            <ul className="space-y-2.5">
              {["Питание", "Тренировки", "Расписание", "Трекер воды", "Трекер сна", "БЖУ", "Аналитика"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/40 hover:text-foreground/70 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Контент</h4>
            <ul className="space-y-2.5">
              {["Статьи", "Рецепты", "Программы тренировок", "Челленджи", "Гайды", "Медитации"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground/40 hover:text-foreground/70 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@homefitness.app" className="text-sm text-foreground/40 hover:text-foreground/70 transition-colors">
                  hello@homefitness.app
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {[
                { icon: "Send", label: "Telegram" },
                { icon: "Instagram", label: "Instagram" },
                { icon: "Youtube", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-foreground/[0.05] text-foreground/40 hover:bg-foreground/10 hover:text-foreground/70 transition-all"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/30">
            &copy; 2026 HomeFitness. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-foreground/30 hover:text-foreground/50 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-xs text-foreground/30 hover:text-foreground/50 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
