import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { contactInfo } from "@/data/content";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import logo from "@/assets/logo.jpg";

const getNavLinks = (lang: "en" | "am" | "om") => {
  const t = translations[lang];
  return [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const navLinks = getNavLinks(language);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/90 border-b border-border/60 shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-18 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Karachi Health Care" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-display text-xl font-semibold tracking-tight">
            Karachi <span className="text-primary">Health Care</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher
            currentLang={language}
            onLanguageChange={setLanguage}
          />
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <Phone className="h-4 w-4" />
            {contactInfo.phone}
          </a>
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90"
          >
            <a href="/booking">{t.nav.bookNow}</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-6 gap-4">
            <div className="flex items-center justify-between pb-4 border-b">
              <span className="text-sm text-muted-foreground">{t.language?.title || "Language"}</span>
              <LanguageSwitcher
                currentLang={language}
                onLanguageChange={setLanguage}
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium hover:text-primary transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-muted-foreground pt-4 border-t"
            >
              <Phone className="h-4 w-4" />
              {contactInfo.phone}
            </a>
            <Button
              asChild
              className="rounded-full bg-primary hover:bg-primary/90 mt-2"
            >
              <a href="/booking">{t.nav.bookNow}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
