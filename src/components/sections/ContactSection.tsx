import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/content";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-16 grid lg:grid-cols-2 gap-12 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-soft/20 blur-2xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.22em] opacity-70">
              {t.contact.subtitle}
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold">
              {t.contact.title}
            </h2>
            <p className="mt-4 opacity-80 max-w-md">
              {t.contact.description}
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 grid place-items-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 grid place-items-center">
                  <Phone className="h-5 w-5" />
                </div>
                <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 grid place-items-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp?.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp: {contactInfo.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 grid place-items-center">
                  <Mail className="h-5 w-5" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 grid place-items-center">
                  <Clock className="h-5 w-5" />
                </div>
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          <form
            className="relative bg-background text-foreground p-8 rounded-3xl space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-semibold">{t.contact.form.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className="h-12 px-4 rounded-xl border border-border bg-background outline-none focus:border-primary transition"
                placeholder={t.contact.form.name}
              />
              <input
                className="h-12 px-4 rounded-xl border border-border bg-background outline-none focus:border-primary transition"
                placeholder={t.contact.form.phone}
              />
            </div>
            <input
              className="h-12 w-full px-4 rounded-xl border border-border bg-background outline-none focus:border-primary transition"
              placeholder={t.contact.form.email}
            />
            <textarea
              rows={4}
              className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:border-primary transition resize-none"
              placeholder={t.contact.form.message}
            />
            <Button
              size="lg"
              className="w-full rounded-xl bg-primary hover:bg-primary/90"
            >
              {t.contact.form.send}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              {t.contact.form.whatsapp}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
