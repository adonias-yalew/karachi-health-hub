import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ConditionsSection } from "@/components/sections/ConditionsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ConditionsSection />
        <ProcessSection />
        <TeamSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
