import React, { useState, useEffect } from "react";
import { X, MessageCircle, ShieldCheck, Clock } from "lucide-react";
import { useFormOverlay } from "../App.jsx";
import { WHATSAPP_NUMBER } from "../constants.js";

const PROCEDIMENTOS = [
  "Protocolo ESSENZA",
  "Harmonização facial",
  "Bioestimulador de colágeno",
  "Ainda não sei",
];

export default function FormOverlay() {
  const { formOpen, closeForm } = useFormOverlay();
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({ nome: "", telefone: "", procedimento: "" });

  useEffect(() => {
    if (formOpen) {
      setMounted(true);
      setForm({ nome: "", telefone: "", procedimento: "" });
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setActive(true));
      });
    } else {
      setActive(false);
      document.body.style.overflow = "";
      const t = setTimeout(() => setMounted(false), 500);
      return () => clearTimeout(t);
    }
  }, [formOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeForm();
    };
    if (formOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [formOpen, closeForm]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const setField = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const buildMessage = () => {
    const lines = ["Olá! Vim pelo site da Dra. Emely Schuindt."];
    if (form.nome) lines.push(`Meu nome é ${form.nome}.`);
    if (form.procedimento) lines.push(`Tenho interesse em: ${form.procedimento}.`);
    lines.push("Gostaria de agendar uma avaliação. 🙏");
    return lines.join("\n\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    closeForm();
  };

  if (!mounted) return null;

  const inputClass =
    "w-full px-4 py-3 text-[14px] bg-white/70 border border-[var(--line)] rounded-xl transition-all duration-200 focus:outline-none focus:border-[var(--gold-deep)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(185,141,99,0.1)] placeholder:text-[var(--ink-soft)]/40";
  const labelClass = "text-[11px] tracking-wider uppercase block mb-1.5 font-semibold";

  return (
    <div className="form-overlay" role="dialog" aria-modal="true" aria-label="Agendar avaliação">
      <div className={`form-backdrop ${active ? "active" : ""}`} onClick={closeForm} />

      <div className={`form-panel ${active ? "active" : ""}`} style={{ maxWidth: "420px" }}>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-1">
          <div>
            <p className="eyebrow mb-2">Agendar avaliação</p>
            <p className="font-display text-[1.35rem] leading-snug" style={{ color: "var(--ink)" }}>
              Vamos conversar? ✨
            </p>
          </div>
          <button
            onClick={closeForm}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-[var(--cream-alt)] hover:scale-110 cursor-pointer"
            aria-label="Fechar"
          >
            <X size={18} style={{ color: "var(--ink)" }} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-3">
          <p className="text-[13.5px] mb-5 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Preencha rapidinho e caia direto no WhatsApp da clínica.
          </p>

          <form onSubmit={handleSubmit} className="form-step space-y-4">
            <div>
              <label className={labelClass} style={{ color: "var(--ink-soft)" }}>Seu nome *</label>
              <input autoFocus required value={form.nome} onChange={update("nome")} className={inputClass} placeholder="Como podemos te chamar?" />
            </div>

            <div>
              <label className={labelClass} style={{ color: "var(--ink-soft)" }}>Seu WhatsApp *</label>
              <input required value={form.telefone} onChange={update("telefone")} className={inputClass} placeholder="(00) 00000-0000" inputMode="tel" />
            </div>

            <div>
              <label className={labelClass} style={{ color: "var(--ink-soft)" }}>Interesse (opcional)</label>
              <div className="flex flex-wrap gap-2">
                {PROCEDIMENTOS.map((p) => (
                  <button
                    type="button"
                    key={p}
                    onClick={() => setField("procedimento", form.procedimento === p ? "" : p)}
                    className={`chip ${form.procedimento === p ? "selected" : ""}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-primary w-full !justify-center !mt-2 !rounded-xl">
              Falar no WhatsApp agora <MessageCircle size={16} />
            </button>
          </form>

          {/* Sinais de confiança */}
          <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-5 pt-5 border-t border-[var(--line)]">
            {[
              { icon: ShieldCheck, label: "Sem compromisso" },
              { icon: Clock, label: "Resposta rápida" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 text-[11.5px] font-medium" style={{ color: "var(--ink-soft)" }}>
                <Icon size={13} style={{ color: "var(--gold-deep)" }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
