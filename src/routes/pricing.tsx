import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles, HelpCircle, Shield, Clock } from "lucide-react";
import { packages, insurers } from "@/data/content";

const faqs = [
  {
    q: "Can I switch between packages?",
    a: "Yes, you can upgrade your package at any time. Downgrades take effect at the start of the next billing cycle.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No hidden fees. The price you see is the price you pay. Additional treatments outside your package are quoted upfront.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, for our Recovery Plan and Wellness Membership, we offer interest-free monthly payment options.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Individual sessions can be cancelled with 24 hours notice. Package cancellations are prorated based on sessions used.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-24 bg-brand-tint/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                Simple & transparent
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
                Pricing & Packages
              </h1>
              <p className="mt-4 text-muted-foreground">
                Honest pricing designed around the way real recovery happens. No
                hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`p-8 rounded-3xl flex flex-col ${
                    pkg.featured
                      ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-brand/40 md:scale-105 md:-my-4"
                      : "bg-background border-brand/20"
                  }`}
                >
                  {pkg.featured && (
                    <span className="self-start mb-4 px-3 py-1 rounded-full bg-primary-foreground/15 text-xs uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="h-3 w-3" />
                      Most popular
                    </span>
                  )}
                  <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                  <p
                    className={`mt-1 text-sm ${
                      pkg.featured
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pkg.desc}
                  </p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-semibold">
                      {pkg.price}
                    </span>
                    <span
                      className={
                        pkg.featured
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }
                    >
                      {pkg.period}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <CheckCircle2
                          className={`h-5 w-5 shrink-0 ${
                            pkg.featured
                              ? "text-primary-foreground"
                              : "text-primary"
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
                      pkg.featured
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    <a href="/booking">Choose Plan</a>
                  </Button>
                </Card>
              ))}
            </div>

            {/* Insurance Note */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-tint/50 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                Most major insurance plans accepted
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {insurers.map((name) => (
                  <span
                    key={name}
                    className="font-display text-lg text-muted-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-24 bg-brand-tint/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 rounded-2xl border-brand/20">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  Book sessions at your convenience. Morning, afternoon, and
                  evening slots available.
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-brand/20">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Insurance Direct Billing</h3>
                <p className="text-sm text-muted-foreground">
                  We handle the paperwork. Direct billing available for most
                  major insurers.
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-brand/20">
                <HelpCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Not Sure What You Need?</h3>
                <p className="text-sm text-muted-foreground">
                  Book a consultation and our specialists will recommend the
                  right plan for you.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Pricing FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card
                  key={faq.q}
                  className="p-6 rounded-2xl border-brand/20"
                >
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Ready to start your recovery?
            </h2>
            <p className="mt-4 opacity-80 max-w-xl mx-auto">
              Book your first session today and take the first step towards a
              pain-free life.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href="/booking">Book Appointment</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
