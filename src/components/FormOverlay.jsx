import React, { useState, useEffect } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { useFormOverlay } from "../App.jsx";
import { WHATSAPP_NUMBER } from "../constants.js";

export default function FormOverlay() {
  const { formOpen, closeForm } = useFormOverlay();
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    nome: "", telefone: "", cidade: "", idade: "", instagram: "",
    procedimento: "", objetivo: "", origem: "", mensagem: "",
  });

  useEffect(() => {
    if (formOpen) {
      setMounted(true);
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

  const buildMessage = () => {
    const lines = ["Olá! Vim pelo site da clínica."];
    if (form.nome) lines.push(`Meu nome é ${form.nome}.`);
    if (form.idade) lines.push(`Tenho ${form.idade} anos.`);
    if (form.cidade) lines.push(`Moro em ${form.cidade}.`);
    if (form.telefone) lines.push(`Meu telefone: ${form.telefone}.`);
    if (form.instagram) lines.push(`Instagram: ${form.instagram}.`);
    if (form.procedimento) lines.push(`Interesse em: ${form.procedimento}.`);
    if (form.objetivo) lines.push(`Objetivo: ${form.objetivo}.`);
    if (form.origem) lines.push(`Conheci a clínica por: ${form.origem}.`);
    if (form.mensagem) lines.push(`${form.mensagem}`);
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

  return (
    <div className="form-overlay" role="dialog" aria-modal="true" aria-label="Formulário de agendamento">
      <div
        className={`form-backdrop ${active ? "active" : ""}`}
        onClick={closeForm}
      />
      <div className={`form-panel ${active ? "active" : ""}`}>
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-[var(--line)] bg-[var(--cream)]">
          <div>
            <p className="font-display text-lg" style={{ color: "var(--ink)" }}>Agendar avaliação</p>
          </div>
          <button
            onClick={closeForm}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-[var(--cream-alt)] hover:scale-110 cursor-pointer"
            aria-label="Fechar"
          >
            <X size={18} style={{ color: "var(--ink)" }} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="text-[14px] mb-6 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Preencha abaixo e envie direto pelo WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] tracking-wider uppercase block mb-1.5 font-semibold" style={{ color: "var(--ink-soft)" }}>Nome *</label>
                <input required value={form.nome} onChange={update("nome")} className={inputClass} />
              </div>
              <div>
                <label className="text-[11px] tracking-wider uppercase block mb-1.5 font-semibold" style={{ color: "var(--ink-soft)" }}>Telefone *</label>
                <input required value={form.telefone} onChange={update("telefone")} className={inputClass} placeholder="(00) 00000-0000" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] tracking-wider uppercase block mb-1.5 font-semibold" style={{ color: "var(--ink-soft)" }}>Cidade</label>
                <input value={form.cidade} onChange={update("cidade")} className={inputClass} />
              </div>
              <div>
                <label className="text-[11px] tracking-wider uppercase block mb-1.5 font-semibold" style={{ color: "var(--ink-soft)" }}>Idade</label>
                <input value={form.idade} onChange={update("idade")} className={inputClass} />
              </div>
            </div>

            <div>
              <label className="text-[11px] tracking-wider uppercase block mb-1.5 font-semibold" style={{ color: "var(--ink-soft)" }}>Instagram</label>
              <input value={form.instagram} onChange={update("instagram")} className={inputClass} placeholder="@seuinstagram" />
            </div>

            <div>
              <label className="text-[11px] tracking-wider uppercase block mb-1.5 font-semibold" style={{ color: "var(--ink-soft)" }}>Procedimento</label>
              <select value={form.procedimento} onChange={update("procedimento")} className={inputClass}>
                <option value="">Selecione</option>
                <option value="Protocolo ESSENZA">Protocolo ESSENZA</option>
                <option value="Harmonização facial">Harmonização facial</option>
                <option value="Bioestimulador">Bioestimulador de colágeno</option>
                <option value="Avaliação geral">Avaliação geral</option>
                <option value="Ainda não sei">Ainda não sei</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] tracking-wider uppercase block mb-1.5 font-semibold" style={{ color: "var(--ink-soft)" }}>Objetivo</label>
              <textarea value={form.objetivo} onChange={update("objetivo")} rows={2} className={inputClass} placeholder="O que gostaria de melhorar?" />
            </div>

            <div>
              <label className="text-[11px] tracking-wider uppercase block mb-1.5 font-semibold" style={{ color: "var(--ink-soft)" }}>Como nos encontrou</label>
              <select value={form.origem} onChange={update("origem")} className={inputClass}>
                <option value="">Selecione</option>
                <option value="Instagram">Instagram</option>
                <option value="Indicação">Indicação</option>
                <option value="Google">Google</option>
                <option value="TikTok">TikTok</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] tracking-wider uppercase block mb-1.5 font-semibold" style={{ color: "var(--ink-soft)" }}>Algo mais?</label>
              <textarea value={form.mensagem} onChange={update("mensagem")} rows={2} className={inputClass} placeholder="Opcional..." />
            </div>

            <button
              type="submit"
              className="btn-primary w-full !justify-center !mt-5 !rounded-xl"
            >
              Enviar pelo WhatsApp <MessageCircle size={16} />
            </button>

            <p className="text-[11px] text-center mt-3 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Seus dados são usados exclusivamente para contato.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
