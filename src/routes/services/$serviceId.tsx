import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, CheckCircle2, Calendar } from "lucide-react";
import { services, packages } from "@/data/content";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-24 text-center">
          <h1 className="text-4xl font-semibold">Service not found</h1>
          <p className="mt-4 text-muted-foreground">
            The service you're looking for doesn't exist.
          </p>
          <Button asChild className="mt-8">
            <a href="/services">View All Services</a>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-24 bg-brand-tint/50">
          <div className="mx-auto max-w-7xl px-6">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to services
            </a>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-2xl bg-brand-tint grid place-items-center text-primary">
                <Icon className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-ink">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              {service.desc}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {service.fullDescription && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    About this service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>
              )}

              {service.benefits && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 p-4 rounded-xl bg-brand-tint/50"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                <h3 className="text-xl font-semibold mb-2">
                  Ready to start your recovery?
                </h3>
                <p className="opacity-80">
                  Book an appointment today and take the first step towards a
                  pain-free life.
                </p>
                <Button
                  asChild
                  className="mt-4 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a href="/booking">Book Now</a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 rounded-2xl border-brand/20">
                <h3 className="font-semibold mb-4">Service Details</h3>
                <div className="space-y-3 text-sm">
                  {service.duration && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Duration: {service.duration}
                    </div>
                  )}
                  {service.price && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="font-medium">Price:</span>
                      {service.price}
                    </div>
                  )}
                </div>
              </Card>

              <Card className="p-6 rounded-2xl border-brand/20">
                <h3 className="font-semibold mb-4">Available Packages</h3>
                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-brand-tint/30 hover:bg-brand-tint/50 transition"
                    >
                      <div>
                        <p className="font-medium text-sm">{pkg.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {pkg.price}
                        </p>
                      </div>
                      <a
                        href="/booking"
                        className="text-primary text-sm hover:underline"
                      >
                        Book
                      </a>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 rounded-2xl border-brand/20 bg-brand-tint/50">
                <Calendar className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Easy Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  Book online or call us. Same-day appointments often available.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
