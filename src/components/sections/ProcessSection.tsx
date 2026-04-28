import { Card } from "@/components/ui/card";
import { process } from "@/data/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const stepKeys = ["registration", "consultation", "treatment", "followup"] as const;

  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">
              {t.process.subtitle}
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink max-w-xl">
              {t.process.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {t.process.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map(({ icon: Icon }, i) => (
            <Card
              key={stepKeys[i]}
              className="relative p-7 rounded-3xl border-brand/20 bg-background"
            >
              <span className="font-display text-5xl font-semibold text-brand-soft">
                {t.process.steps[stepKeys[i]].step}
              </span>
              <div className="mt-2 h-11 w-11 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">
                {t.process.steps[stepKeys[i]].title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t.process.steps[stepKeys[i]].desc}
              </p>
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 h-px w-6 bg-brand" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
