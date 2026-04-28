import { clinicStats } from "@/data/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { n: clinicStats.yearsOfCare, l: t.about.stats.years },
    { n: clinicStats.happyPatients, l: t.about.stats.patients },
    { n: clinicStats.specialists, l: t.about.stats.doctors },
    { n: clinicStats.recoveryRate, l: t.about.stats.satisfaction },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            {t.about.subtitle}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
            {t.about.title}
          </h2>
        </div>
        <div className="md:col-span-7 text-muted-foreground text-lg leading-relaxed">
          <p>{t.about.description}</p>
          <div className="mt-8 grid grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="border-l-2 border-brand pl-4">
                <p className="font-display text-3xl font-semibold text-ink">
                  {s.n}
                </p>
                <p className="text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
