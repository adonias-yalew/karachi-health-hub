import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle2, CalendarDays, Clock, User, Phone, Mail, FileText } from "lucide-react";
import { services, timeSlots, packages } from "@/data/content";
import { format } from "date-fns";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Appointment - Karachi Healthcare" },
      {
        name: "description",
        content:
          "Book your physiotherapy appointment online. Choose your service, date, and time. Same-day appointments available.",
      },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="h-20 w-20 rounded-full bg-green-100 grid place-items-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-semibold mb-4">
              Booking Request Received!
            </h1>
            <p className="text-muted-foreground mb-6">
              Thank you for booking with Karachi Healthcare. We've received your
              request and will contact you within 1 hour to confirm your
              appointment.
            </p>
            <div className="bg-brand-tint/50 rounded-2xl p-6 text-left max-w-md mx-auto mb-8">
              <h3 className="font-semibold mb-4">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">Service:</span>{" "}
                  {services.find((s) => s.id === selectedService)?.title}
                </p>
                <p>
                  <span className="text-muted-foreground">Date:</span>{" "}
                  {date ? format(date, "PPP") : ""}
                </p>
                <p>
                  <span className="text-muted-foreground">Time:</span>{" "}
                  {selectedTime}
                </p>
                <p>
                  <span className="text-muted-foreground">Name:</span>{" "}
                  {formData.name}
                </p>
              </div>
            </div>
            <Button asChild className="rounded-full">
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-ink">
              Book Your Appointment
            </h1>
            <p className="mt-4 text-muted-foreground">
              Choose your service, preferred date and time, and we'll confirm
              your booking within 1 hour.
            </p>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-16 rounded-full transition ${
                  s <= step ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="p-8 rounded-3xl border-brand/20">
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">
                      1. Select a Service
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`p-4 rounded-xl border text-left transition ${
                              selectedService === service.id
                                ? "border-primary bg-brand-tint"
                                : "border-border hover:border-brand"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="h-10 w-10 rounded-lg bg-brand-tint grid place-items-center text-primary">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium">{service.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  {service.duration}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-3">
                        Or select a package:
                      </h3>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {packages.map((pkg) => (
                          <button
                            key={pkg.id}
                            onClick={() => {
                              setSelectedPackage(pkg.id);
                              setSelectedService("general");
                            }}
                            className={`p-3 rounded-xl border text-center transition ${
                              selectedPackage === pkg.id
                                ? "border-primary bg-brand-tint"
                                : "border-border hover:border-brand"
                            }`}
                          >
                            <p className="font-medium text-sm">{pkg.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {pkg.price}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!selectedService}
                      className="w-full rounded-xl"
                    >
                      Continue
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">
                      2. Choose Date & Time
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="font-medium mb-3">Select a date</p>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          className="rounded-xl border"
                        />
                      </div>
                      <div>
                        <p className="font-medium mb-3">Select a time</p>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 rounded-xl border text-sm transition ${
                                selectedTime === time
                                  ? "border-primary bg-brand-tint"
                                  : "border-border hover:border-brand"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="rounded-xl"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => setStep(3)}
                        disabled={!date || !selectedTime}
                        className="flex-1 rounded-xl"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-semibold">
                      3. Your Details
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="h-12 w-full px-4 rounded-xl border border-border bg-background outline-none focus:border-primary transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="h-12 w-full px-4 rounded-xl border border-border bg-background outline-none focus:border-primary transition"
                          placeholder="+251 91 234 5678"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12 w-full px-4 rounded-xl border border-border bg-background outline-none focus:border-primary transition"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        Additional Notes
                      </label>
                      <textarea
                        rows={4}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:border-primary transition resize-none"
                        placeholder="Tell us about your condition or any special requests..."
                      />
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(2)}
                        className="rounded-xl"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 rounded-xl bg-primary hover:bg-primary/90"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>

            <div>
              <Card className="p-6 rounded-2xl border-brand/20 sticky top-24">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Booking Summary
                </h3>
                <div className="space-y-3 text-sm">
                  {selectedService && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Service</span>
                      <span className="font-medium">
                        {services.find((s) => s.id === selectedService)?.title}
                      </span>
                    </div>
                  )}
                  {selectedPackage && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Package</span>
                      <span className="font-medium">
                        {packages.find((p) => p.id === selectedPackage)?.name}
                      </span>
                    </div>
                  )}
                  {date && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Date</span>
                      <span className="font-medium">
                        {format(date, "PPP")}
                      </span>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Time</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                  )}
                  {!selectedService && !date && !selectedTime && (
                    <p className="text-muted-foreground text-center py-4">
                      Select a service, date and time to see your booking
                      summary.
                    </p>
                  )}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-brand-tint/50 text-sm">
                  <p className="font-medium mb-1">Need help?</p>
                  <p className="text-muted-foreground">
                    Call us at{" "}
                    <a href="tel:+251994092233" className="text-primary">
                      +251 994 092 233
                    </a>{" "}
                    for assistance.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
