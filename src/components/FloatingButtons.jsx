import React from "react";
import { MessageCircle, Instagram } from "lucide-react";
import { WHATSAPP_NUMBER, INSTAGRAM_URL } from "../constants.js";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer pulse-ring"
        style={{
          background: "var(--ink)",
          color: "var(--cream)",
          boxShadow: "0 8px 28px rgba(26,23,20,0.25)",
          borderRadius: "16px",
        }}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.7)",
          color: "var(--gold-deep)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          borderRadius: "16px",
        }}
        aria-label="Ver Instagram"
      >
        <Instagram size={20} />
      </a>
    </div>
  );
}
