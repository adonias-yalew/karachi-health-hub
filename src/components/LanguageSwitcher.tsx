import { useState } from "react";
import { Globe, Check } from "lucide-react";
import type { Language } from "@/lib/i18n/translations";

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "am", label: "Amharic", native: "አማርኛ" },
  { code: "om", label: "Oromiffa", native: "Oromiffa" },
];

export function LanguageSwitcher({
  currentLang,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const current = languages.find((l) => l.code === currentLang);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-brand-tint text-primary hover:bg-brand-tint/80 transition"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{current?.native}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 min-w-[160px] rounded-xl bg-background border border-border shadow-lg py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-brand-tint transition text-left ${
                  currentLang === lang.code
                    ? "text-primary font-medium"
                    : "text-foreground"
                }`}
              >
                <div className="flex flex-col">
                  <span>{lang.native}</span>
                  <span className="text-xs text-muted-foreground">
                    {lang.label}
                  </span>
                </div>
                {currentLang === lang.code && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
