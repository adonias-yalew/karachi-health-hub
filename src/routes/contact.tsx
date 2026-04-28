import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { contactInfo } from "@/data/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us - Karachi Healthcare" },
      {
        name: "description",
        content:
          "Get in touch with Karachi Healthcare in Addis Ababa. Book appointments, ask questions, or visit our clinic at Bulbula 93 Mazoria.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-24 bg-brand-tint/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                Get in touch
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-ink">
                Contact Us
              </h1>
              <p className="mt-4 text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Visit Our Clinic
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our modern facility is conveniently located in Bole Bulbula,
                  making it easy to access quality physiotherapy care.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-4 rounded-2xl border-brand/20 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-tint grid place-items-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.address}
                    </p>
                  </div>
                </Card>

                <Card className="p-4 rounded-2xl border-brand/20 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-tint grid place-items-center text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </Card>

                <Card className="p-4 rounded-2xl border-brand/20 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-tint grid place-items-center text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </Card>

                <Card className="p-4 rounded-2xl border-brand/20 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-tint grid place-items-center text-primary shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.hours}
                    </p>
                  </div>
                </Card>
              </div>

              {/* WhatsApp CTA */}
              <Card className="p-6 rounded-2xl bg-green-50 border-green-200">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-green-100 grid place-items-center text-green-600 shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Prefer WhatsApp?</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Get instant responses on WhatsApp. Click below to start a
                      chat.
                    </p>
                    <Button
                      asChild
                      className="mt-3 rounded-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <a
                        href={`https://wa.me/${contactInfo.whatsapp?.replace(
                          /\+/g,
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Map */}
              <Card className="overflow-hidden rounded-2xl border-brand/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.8!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDAnMDAuMCJOIDM4wrA0OCcwMC4wIkU!5e0!3m2!1sen!2set!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karachi Healthcare Location"
                />
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 rounded-3xl border-brand/20">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-green-100 grid place-items-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-semibold">Send a Message</h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          placeholder="John Doe"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+251 91 234 5678"
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us about your condition or question..."
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-xl bg-primary hover:bg-primary/90"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      For urgent matters, please call us directly at{" "}
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-primary"
                      >
                        {contactInfo.phone}
                      </a>
                    </p>
                  </form>
                )}
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
