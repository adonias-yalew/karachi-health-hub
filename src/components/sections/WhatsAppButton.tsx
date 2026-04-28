import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/content";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp?.replace(/\+/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-medium text-sm">Chat on WhatsApp</span>
    </a>
  );
}
