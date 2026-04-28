import { conditions } from "@/data/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ConditionsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 bg-brand-tint/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            {t.conditions.subtitle}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
            {t.conditions.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {conditions.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex items-center gap-3 p-5 rounded-2xl bg-background border border-brand/15 hover:border-primary transition"
            >
              <div className="h-10 w-10 rounded-lg bg-brand-tint grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
