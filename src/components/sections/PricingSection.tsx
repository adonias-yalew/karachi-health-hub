import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";
import { packages } from "@/data/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function PricingSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const packageKeys = ["single", "recovery", "wellness"] as const;

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            {t.pricing.subtitle}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.pricing.description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p, index) => (
            <Card
              key={p.id}
              className={`p-8 rounded-3xl flex flex-col ${
                p.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-brand/40 md:scale-105"
                  : "bg-background border-brand/20"
              }`}
            >
              {p.featured && (
                <span className="self-start mb-4 px-3 py-1 rounded-full bg-primary-foreground/15 text-xs uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="h-3 w-3" />
                  {t.pricing.mostPopular}
                </span>
              )}
              <h3 className="text-2xl font-semibold">
                {t.pricing.packages[packageKeys[index]].name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  p.featured
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {t.pricing.packages[packageKeys[index]].desc}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold">
                  {p.price}
                </span>
                <span
                  className={
                    p.featured
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }
                >
                  {p.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2
                      className={`h-5 w-5 shrink-0 ${
                        p.featured ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className={`mt-8 rounded-full ${
                  p.featured
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <a href="/booking">{t.pricing.choosePlan}</a>
              </Button>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          {t.pricing.insurance} · {t.pricing.familyDiscount}
        </p>
      </div>
    </section>
  );
}
