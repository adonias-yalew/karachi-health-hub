import { Card } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { whyUs } from "@/data/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function WhyUsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const whyUsKeys = ["certified", "emergency", "patient", "modern"] as const;

  return (
    <section id="why" className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            {t.whyUs.subtitle}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink leading-tight">
            {t.whyUs.title1}{" "}
            <em className="not-italic text-primary">{t.whyUs.title2}</em>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            {t.whyUs.description}
          </p>
          <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-brand-tint/60">
            <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold">{t.whyUs.accredited}</p>
              <p className="text-sm text-muted-foreground">
                {t.whyUs.inspected}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {whyUs.map(({ icon: Icon }, index) => (
            <Card
              key={whyUsKeys[index]}
              className="p-7 rounded-3xl border-brand/20 bg-background"
            >
              <div className="h-11 w-11 rounded-xl bg-brand-tint grid place-items-center text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                {t.whyUs.items[whyUsKeys[index]].title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t.whyUs.items[whyUsKeys[index]].desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
