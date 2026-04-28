import {
  Activity,
  HeartPulse,
  Stethoscope,
  Bone,
  Baby,
  Brain,
  Star,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Sparkles,
  ClipboardList,
  Microscope,
  TrendingUp,
  Hand,
  Footprints,
  Spline,
  Siren,
  Hospital,
  CalendarClock,
  UserRound,
  Ambulance,
} from "lucide-react";
import type {
  Service,
  TeamMember,
  Testimonial,
  WhyUsItem,
  Condition,
  ProcessStep,
  Package,
  FAQ,
  ContactInfo,
  BlogPost,
} from "@/types";

import doc1 from "@/assets/doc-1.jpg";
import doc2 from "@/assets/doc-2.jpg";
import doc3 from "@/assets/doc-3.jpg";

export const services: Service[] = [
  {
    id: "emergency",
    icon: Siren,
    title: "Emergency Services",
    desc: "Immediate, critical medical intervention for acute and life-threatening conditions.",
    fullDescription: "Our emergency department provides rapid response for trauma, severe injuries, and critical medical conditions. Equipped with modern life-support systems and staffed by experienced emergency physicians 24/7.",
    benefits: ["24/7 Availability", "Rapid Response", "Advanced Life Support", "Trauma Care"],
    duration: "Immediate",
    price: "Emergency rates apply",
  },
  {
    id: "acute-care",
    icon: Ambulance,
    title: "Acute & Life-Threatening Care",
    desc: "Critical intervention for trauma, severe injuries and medical emergencies.",
    fullDescription: "Specialized care for severe infections, acute allergic reactions, and life-threatening medical conditions. Our team is trained to handle complex emergencies with precision and speed.",
    benefits: ["Critical Care", "Infection Management", "Allergy Response", "Stabilization"],
    duration: "As needed",
    price: "Contact for pricing",
  },
  {
    id: "inpatient",
    icon: Hospital,
    title: "Inpatient Care",
    desc: "Extended monitoring and clinical stability for patients requiring admission.",
    fullDescription: "Our inpatient services provide comprehensive care for patients requiring extended medical attention. Comfortable private rooms with round-the-clock nursing care and monitoring.",
    benefits: ["24-hour Monitoring", "Private Rooms", "Nursing Care", "Clinical Stability"],
    duration: "24+ hours",
    price: "From ETB 3,500/night",
  },
  {
    id: "short-term",
    icon: CalendarClock,
    title: "Short-term Admission",
    desc: "24-hour observation and treatment window for emergency patients.",
    fullDescription: "Tailored for emergency patients requiring a 24-hour admission window for observation, treatment, and stabilization before discharge or transfer to longer-term care.",
    benefits: ["Observation", "Stabilization", "Rapid Assessment", "Transition Care"],
    duration: "24 hours",
    price: "From ETB 2,500",
  },
  {
    id: "outpatient",
    icon: UserRound,
    title: "Outpatient Services",
    desc: "Medical expertise without hospital stay - consultations and follow-ups.",
    fullDescription: "Access to medical professionals for expert diagnosis, treatment, and ongoing health management without the need for hospital admission. Convenient scheduling and minimal wait times.",
    benefits: ["No Hospital Stay", "Expert Doctors", "Convenient Scheduling", "Cost Effective"],
    duration: "30-60 min",
    price: "From ETB 500",
  },
  {
    id: "specialist",
    icon: Stethoscope,
    title: "Specialist Consultations",
    desc: "Expert medical professionals for accurate diagnosis and treatment plans.",
    fullDescription: "Connect with experienced specialists across multiple disciplines for comprehensive evaluation, accurate diagnosis, and personalized treatment recommendations tailored to your health needs.",
    benefits: ["Expert Diagnosis", "Multiple Specialties", "Personalized Plans", "Second Opinions"],
    duration: "30-45 min",
    price: "From ETB 800",
  },
  {
    id: "followup",
    icon: ClipboardList,
    title: "Follow-up Care",
    desc: "Continuous management of health conditions and post-treatment monitoring.",
    fullDescription: "Ongoing care to monitor recovery progress, manage chronic conditions, and adjust treatment plans as needed. Ensuring optimal outcomes through regular health assessments.",
    benefits: ["Progress Monitoring", "Chronic Care", "Medication Review", "Health Optimization"],
    duration: "15-30 min",
    price: "From ETB 400",
  },
];

export const team: TeamMember[] = [
  {
    img: doc1,
    name: "Dr. Ahmed Raza",
    role: "Emergency Medicine Specialist",
    bio: "15+ years of experience in emergency and critical care medicine. Trained in advanced trauma life support.",
    specialties: ["Emergency Care", "Trauma Management", "Critical Care"],
  },
  {
    img: doc2,
    name: "Dr. Sana Khan",
    role: "General Practitioner",
    bio: "Experienced in general medicine with expertise in chronic disease management and preventive care.",
    specialties: ["Family Medicine", "Internal Medicine", "Preventive Care"],
  },
  {
    img: doc3,
    name: "Dr. Bilal Hussain",
    role: "Medical Director",
    bio: "Oversees clinical operations with expertise in hospital administration and patient care quality.",
    specialties: ["Clinical Leadership", "Patient Safety", "Healthcare Management"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ayesha M.",
    role: "Business Owner",
    text: "When my father had a medical emergency, Karachi Healthcare responded immediately. The care was exceptional.",
    rating: 5,
  },
  {
    name: "Omar S.",
    role: "Father of two",
    text: "The outpatient services are convenient and professional. No long waits, and the doctors actually listen.",
    rating: 5,
  },
  {
    name: "Fatima R.",
    role: "Teacher",
    text: "I needed a 24-hour observation after an allergic reaction. The staff made me feel safe and comfortable throughout.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    role: "Office Manager",
    text: "Regular follow-up care for my diabetes has been seamless. The doctors monitor my progress consistently.",
    rating: 5,
  },
  {
    name: "Helen T.",
    role: "Mother",
    text: "Specialist consultation for my daughter's condition was thorough. We finally got answers we'd been seeking.",
    rating: 5,
  },
];

export const whyUs: WhyUsItem[] = [
  {
    icon: Award,
    title: "Certified Medical Team",
    desc: "Licensed physicians and healthcare professionals with specialized training and years of experience.",
  },
  {
    icon: Siren,
    title: "24/7 Emergency Ready",
    desc: "Round-the-clock emergency services with modern life support equipment and rapid response capability.",
  },
  {
    icon: Users,
    title: "Patient-Centered Care",
    desc: "Every treatment plan is tailored to your specific needs with compassion and clear communication.",
  },
  {
    icon: Sparkles,
    title: "Modern Facilities",
    desc: "Clean, comfortable environment with private rooms and state-of-the-art medical equipment.",
  },
];

export const conditions: Condition[] = [
  { icon: HeartPulse, label: "Heart Conditions" },
  { icon: Activity, label: "Diabetes Management" },
  { icon: Brain, label: "Neurological Care" },
  { icon: Baby, label: "Pediatric Health" },
  { icon: Siren, label: "Emergency Trauma" },
  { icon: Stethoscope, label: "Respiratory Issues" },
  { icon: Bone, label: "Orthopedic Care" },
  { icon: UserRound, label: "General Check-ups" },
];

export const process: ProcessStep[] = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Registration",
    desc: "Quick check-in with our friendly staff. Minimal paperwork, maximum care.",
  },
  {
    step: "02",
    icon: Stethoscope,
    title: "Consultation",
    desc: "Thorough examination by our experienced doctors with clear communication.",
  },
  {
    step: "03",
    icon: HeartPulse,
    title: "Treatment",
    desc: "Immediate care, medication, or procedures as needed. Inpatient if required.",
  },
  {
    step: "04",
    icon: CalendarClock,
    title: "Follow-up",
    desc: "Scheduled check-ups to ensure complete recovery and ongoing health.",
  },
];

export const packages: Package[] = [
  {
    id: "single",
    name: "Single Session",
    price: "ETB 2,500",
    period: "/ visit",
    desc: "Perfect for one-off pain or assessments.",
    features: ["60-min consultation", "Personalised diagnosis", "Take-home exercise plan", "Digital report"],
    featured: false,
  },
  {
    id: "recovery",
    name: "Recovery Plan",
    price: "ETB 22,000",
    period: "/ 10 sessions",
    desc: "Most chosen — for steady, lasting recovery.",
    features: ["10 × 60-min sessions", "Dedicated specialist", "Modality access (laser, ultrasound)", "Weekly progress reviews", "WhatsApp support"],
    featured: true,
  },
  {
    id: "wellness",
    name: "Wellness Membership",
    price: "ETB 60,000",
    period: "/ 6 months",
    desc: "Long-term care for chronic conditions or athletes.",
    features: ["30 sessions over 6 months", "Priority booking", "Quarterly movement screen", "Family discount 15%", "Home-visit option"],
    featured: false,
  },
];

export const faqs: FAQ[] = [
  {
    q: "Do I need a doctor's referral to book?",
    a: "No referral needed. You can book a consultation directly with our specialists, and we'll coordinate with your physician if required.",
  },
  {
    q: "Which insurance providers do you accept?",
    a: "We work with most major Ethiopian insurers. Bring your card and our front desk will verify coverage.",
  },
  {
    q: "How long does a typical session last?",
    a: "First consultations run 45–60 minutes. Follow-up treatment sessions are usually 45 minutes, depending on your plan.",
  },
  {
    q: "Do you offer home visits?",
    a: "Yes. Home physiotherapy is available across Addis Ababa for post-surgery, elderly and mobility-limited patients.",
  },
  {
    q: "What should I wear to my appointment?",
    a: "Comfortable, loose clothing — track pants and a t-shirt are ideal. We provide gowns when needed.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Of course. Just give us 24 hours' notice and we'll happily move your appointment at no charge.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, bank transfer, Telebirr, and most major credit/debit cards.",
  },
  {
    q: "Do you offer emergency services?",
    a: "For acute injuries, we offer same-day appointments. Call our emergency line at +251 994 092 233.",
  },
];

export const insurers = [
  "Ethio Health",
  "Nyala Insurance",
  "Awash Insurance",
  "United Insurance",
  "Nib Insurance",
  "Lion Insurance",
];

export const contactInfo: ContactInfo = {
  address: "Bulbula 93 Mazoria, Next to Fresh Corner, Addis Ababa, Ethiopia",
  phone: "+251 994 092 233",
  whatsapp: "+251 994 092 233",
  email: "care@karachihealthcare.et",
  hours: "Mon – Sat · 9:00 AM – 9:00 PM",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.8!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDAnMDAuMCJOIDM4wrA0OCcwMC4wIkU!5e0!3m2!1sen!2set!4v1234567890",
};

export const clinicStats = {
  yearsOfCare: "15+",
  happyPatients: "20k+",
  specialists: "30+",
  recoveryRate: "98%",
};

export const blogPosts: BlogPost[] = [
  {
    id: "back-pain",
    title: "Understanding and Managing Back Pain",
    excerpt: "Learn about the common causes of back pain and effective physiotherapy treatments.",
    content: "Back pain is one of the most common health complaints...",
    date: "2024-01-15",
    author: "Dr. Ahmed Raza",
    tags: ["Back Pain", "Orthopedic", "Tips"],
  },
  {
    id: "sports-injury",
    title: "Preventing Common Sports Injuries",
    excerpt: "Essential tips for athletes to stay injury-free during training and competition.",
    content: "Sports injuries can be devastating for athletes...",
    date: "2024-01-10",
    author: "Dr. Bilal Hussain",
    tags: ["Sports", "Injury Prevention", "Fitness"],
  },
  {
    id: "stroke-rehab",
    title: "Stroke Rehabilitation: The First 6 Months",
    excerpt: "Why early physiotherapy intervention is crucial for stroke recovery.",
    content: "The first six months after a stroke are critical...",
    date: "2024-01-05",
    author: "Dr. Sana Khan",
    tags: ["Stroke", "Neuro", "Rehabilitation"],
  },
];

export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
];
