import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="py-24 bg-brand-tint/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">
              {t.services.subtitle}
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink max-w-xl">
              {t.services.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {t.services.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, id }) => {
            const item = t.services.items[id as keyof typeof t.services.items];
            return (
              <Card
                key={id}
                className="group p-8 rounded-3xl border-brand/20 bg-background hover:bg-brand hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-brand/30"
              >
                <div className="h-12 w-12 rounded-2xl bg-brand-tint group-hover:bg-background/20 grid place-items-center text-primary group-hover:text-primary-foreground transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  {item?.title || id}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                  {item?.desc || ""}
                </p>
                <a
                  href={`/services/${id}`}
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary group-hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition"
                >
                  {t.services.learnMore} <ArrowRight className="h-4 w-4" />
                </a>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full">
            <a href="/services">{t.services.viewAll}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
