import { Button } from "@/components/ui/button";
import { team } from "@/data/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function TeamSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="team" className="py-24 bg-brand-tint/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            {t.team.subtitle}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
            {t.team.title}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-square overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] bg-brand-soft">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
              {member.bio && (
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full">
            <a href="/about">{t.team.meetFull}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
