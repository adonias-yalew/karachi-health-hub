import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { services } from "@/data/content";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services - Karachi Healthcare" },
      {
        name: "description",
        content:
          "Comprehensive physiotherapy services in Addis Ababa. Orthopedic therapy, sports rehab, neuro physiotherapy, pediatric care and more.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-24 bg-brand-tint/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                What we offer
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
                Our Services
              </h1>
              <p className="mt-4 text-muted-foreground">
                From sports injuries to long-term rehabilitation, every program is
                tailored to your body, your pace, and your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="p-8 rounded-3xl border-brand/20 bg-background hover:shadow-xl hover:shadow-brand/20 transition"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-brand-tint grid place-items-center text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      {service.desc}
                    </p>
                    {service.fullDescription && (
                      <p className="mt-4 text-sm text-muted-foreground">
                        {service.fullDescription}
                      </p>
                    )}
                    
                    {service.benefits && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Benefits:</p>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                      {service.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {service.duration}
                        </span>
                      )}
                      {service.price && <span>{service.price}</span>}
                    </div>

                    <Button asChild className="mt-6 w-full rounded-xl">
                      <a href={`/services/${service.id}`}>
                        Learn More <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Not sure which service you need?
            </h2>
            <p className="mt-4 opacity-80 max-w-xl mx-auto">
              Book a general consultation and our specialists will assess your
              condition and recommend the best treatment plan.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href="/booking">Book a Consultation</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
