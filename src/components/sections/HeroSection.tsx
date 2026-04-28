import { Button } from "@/components/ui/button";
import { ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import { team } from "@/data/content";
import heroImg from "@/assets/hero-clinic.jpg";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand-tint px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> {t.hero.badge}
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.02] text-ink">
            {t.hero.title1} <em className="not-italic text-primary">{t.hero.title2}</em> <br /> {t.hero.title3}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            {t.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-primary hover:bg-primary/90 px-7"
            >
              <a href="/booking">{t.hero.bookConsultation}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full border-brand text-foreground px-7"
            >
              <a href="/services">{t.hero.exploreServices}</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {team.map((member, i) => (
                <img
                  key={member.name}
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full ring-2 ring-background object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {t.hero.trustedBy}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-brand/20 rounded-[3rem] blur-3xl" />
          <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-[2rem] aspect-4/5 bg-brand-soft shadow-2xl shadow-brand/30">
            <img
              src={heroImg}
              alt="Medical team at Karachi Health Care"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <Card className="absolute -bottom-6 -left-6 p-4 flex items-center gap-3 rounded-2xl shadow-xl border-brand/30">
            <div className="h-10 w-10 rounded-full bg-brand-tint grid place-items-center text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">{t.hero.recoveryRate}</p>
              <p className="text-xs text-muted-foreground">
                {t.hero.trustedBy}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
