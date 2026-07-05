import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../constants.js";
import { useReveal } from "../hooks/useReveal.js";
import { useFormOverlay } from "../App.jsx";

function FaqItem({ q, a, open, onToggle, index }) {
  return (
    <div
      className="liquid-card mb-3 overflow-hidden transition-all duration-500"
      style={{
        borderColor: open ? "rgba(196,154,108,0.25)" : undefined,
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-5 p-6 md:p-7 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span
            className="font-display text-[13px] w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
            style={{
              background: open ? "var(--gold-glow)" : "rgba(196,154,108,0.06)",
              color: "var(--gold-deep)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="font-display text-[17px] md:text-lg tracking-tight transition-colors duration-300"
            style={{ color: open ? "var(--gold-deep)" : "var(--ink)" }}
          >
            {q}
          </span>
        </div>
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400"
          style={{
            background: open ? "var(--gold-glow)" : "rgba(0,0,0,0.03)",
            color: "var(--gold-deep)",
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <div
        className="transition-all duration-500 ease-out"
        style={{
          maxHeight: open ? 300 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <div className="px-6 md:px-7 pb-6 md:pb-7 pl-[4.25rem] md:pl-[4.75rem]">
          <p className="text-[15px] leading-[1.85]" style={{ color: "var(--ink-soft)" }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  const ref = useReveal();
  const { openForm } = useFormOverlay();

  return (
    <section id="faq" className="py-14 md:py-28 px-6 md:px-10" style={{ background: "var(--cream-alt)" }}>
      <div ref={ref} className="reveal max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Dúvidas frequentes</p>
          <h2
            className="font-display text-3xl md:text-[2.5rem] leading-tight tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            Tudo que você quer saber<br className="hidden md:block" /> antes de agendar.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed max-w-lg mx-auto" style={{ color: "var(--ink-soft)" }}>
            Se a sua dúvida não está aqui, fale com a gente pelo WhatsApp.
          </p>
        </div>

        <div>
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              index={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-10 text-center">
          <p className="text-[14px] mb-4" style={{ color: "var(--ink-soft)" }}>
            Ainda tem dúvidas? A equipe da Dra. Emely pode te ajudar.
          </p>
          <button onClick={openForm} className="btn-primary">
            Falar com a clínica
          </button>
        </div>
      </div>
    </section>
  );
}
