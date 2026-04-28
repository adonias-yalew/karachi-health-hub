import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="testimonials" className="py-24 bg-brand-tint/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            {t.testimonials.subtitle}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
            {t.testimonials.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              className="p-8 rounded-3xl border-brand/20 bg-background"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-primary">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-brand-soft" />
              </div>
              <p className="font-display text-lg leading-relaxed text-ink">
                "{item.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-tint grid place-items-center text-primary font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
