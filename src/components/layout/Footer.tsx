import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { contactInfo, insurers } from "@/data/content";
import logo from "@/assets/logo.jpg";

const exploreLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/emergency", label: "Emergency Services" },
  { href: "/services/inpatient", label: "Inpatient Care" },
  { href: "/services/outpatient", label: "Outpatient Services" },
  { href: "/services/specialist", label: "Specialist Consultations" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-background/80 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src={logo} 
                alt="Karachi Health Care" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-display text-xl font-semibold text-background">
                Karachi Health Care
              </span>
            </div>
            <p className="text-sm leading-relaxed text-background/60 mb-5">
              Trusted medical care in Addis Ababa since 2009. 
              Professional healthcare, compassionate service.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/karachi_clinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="h-9 w-9 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-background mb-4">Explore</p>
            <ul className="space-y-2 text-sm text-background/60">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-background transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-background mb-4">Services</p>
            <ul className="space-y-2 text-sm text-background/60">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-background transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-background mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-background transition">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-background transition">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 mb-8">
          <p className="text-center text-xs text-background/40 mb-4">
            Insurance partners we accept
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {insurers.map((name) => (
              <span
                key={name}
                className="font-display text-lg text-background/30 hover:text-primary transition"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Karachi Healthcare. All rights reserved.</p>
          <p>Crafted with care in Addis Ababa.</p>
        </div>
      </div>
    </footer>
  );
}
