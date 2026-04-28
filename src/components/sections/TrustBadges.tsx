import { ShieldCheck, Award, Clock, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function TrustBadges() {
  const { language } = useLanguage();
  const t = translations[language];

  const badges = [
    { icon: ShieldCheck, label: t.trustBadges.licensed, desc: "PMDC Accredited" },
    { icon: Award, label: t.trustBadges.years, desc: "Experience" },
    { icon: Users, label: t.trustBadges.patients, desc: "Happy Patients" },
    { icon: Clock, label: t.trustBadges.sameDay, desc: "Appointments" },
  ];

  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-brand-tint grid place-items-center text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
