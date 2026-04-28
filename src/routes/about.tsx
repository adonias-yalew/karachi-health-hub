import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { clinicStats, team, whyUs, contactInfo } from "@/data/content";
import {
  HeartPulse,
  Award,
  Users,
  Target,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const values = [
  {
    icon: HeartPulse,
    title: "Patient-First Care",
    desc: "We put your comfort, dignity, and goals at the center of everything we do.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "Evidence-based treatments delivered by certified specialists using modern equipment.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    desc: "One-on-one sessions where you're never rushed — quality care takes time.",
  },
  {
    icon: Target,
    title: "Measurable Results",
    desc: "We track your progress and adjust treatments to ensure you reach your goals.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-24 bg-brand-tint/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                Our story
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
                Healing Addis Ababa since 2009
              </h1>
              <p className="mt-4 text-muted-foreground">
                A decade and a half of trusted care, thousands of successful
                recoveries, and a commitment to treating every patient like
                family.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand/20 rounded-[3rem] blur-3xl" />
              <div className="relative overflow-hidden rounded-t-[8rem] rounded-b-[2rem] aspect-4/5 bg-brand-soft">
                <img
                  src={heroImg}
                  alt="Karachi Healthcare clinic"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Karachi Healthcare was founded in 2009 with a simple mission: to
                bring world-class physiotherapy to Addis Ababa. What started as
                a small practice has grown into one of the most trusted
                rehabilitation centers in Ethiopia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we've helped over 20,000 patients recover from
                injuries, manage chronic conditions, and return to the activities
                they love. Our team has expanded to include specialists in
                orthopedics, neurology, sports medicine, and pediatrics — all
                united by a commitment to patient-first care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to invest in the latest technology and training,
                ensuring our patients receive the same quality of care they'd find
                in top international clinics — right here in Addis Ababa.
              </p>

              <div className="grid grid-cols-4 gap-4 pt-4">
                {[
                  { n: clinicStats.yearsOfCare, l: "Years" },
                  { n: clinicStats.happyPatients, l: "Patients" },
                  { n: "50k+", l: "Sessions" },
                  { n: clinicStats.recoveryRate, l: "Success" },
                ].map((stat) => (
                  <div key={stat.l} className="text-center">
                    <p className="font-display text-3xl font-semibold text-primary">
                      {stat.n}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-brand-tint/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                What drives us
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
                Our Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <Card
                  key={title}
                  className="p-8 rounded-3xl border-brand/20 bg-background text-center"
                >
                  <div className="h-14 w-14 rounded-2xl bg-brand-tint grid place-items-center text-primary mx-auto">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                The experts
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
                Meet Our Team
              </h2>
              <p className="mt-4 text-muted-foreground">
                Certified specialists with decades of combined experience in
                physiotherapy and rehabilitation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card
                  key={member.name}
                  className="overflow-hidden rounded-3xl border-brand/20"
                >
                  <div className="aspect-square bg-brand-soft">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary text-sm">{member.role}</p>
                    {member.bio && (
                      <p className="mt-3 text-sm text-muted-foreground">
                        {member.bio}
                      </p>
                    )}
                    {member.specialties && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="text-xs px-3 py-1 rounded-full bg-brand-tint text-primary"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-brand-tint/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                Why us
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
                What Sets Us Apart
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <Card
                  key={title}
                  className="p-6 rounded-2xl border-brand/20 bg-background"
                >
                  <div className="h-11 w-11 rounded-xl bg-brand-tint grid place-items-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-soft/20 blur-2xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Ready to start your recovery journey?
                </h2>
                <p className="mt-4 opacity-80 max-w-xl mx-auto">
                  Book a consultation today and experience the Karachi
                  Healthcare difference.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    <a href="/booking">Book Appointment</a>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {contactInfo.address}
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> {contactInfo.phone}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {contactInfo.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
