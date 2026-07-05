import { MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { MAPS_URL, WHATSAPP_NUMBER } from "../constants.js";
import { useFormOverlay } from "../App.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Contato() {
  const { openForm } = useFormOverlay();
  const ref = useReveal();

  return (
    <section id="contato" className="py-14 md:py-28 px-6 md:px-10">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        {/* CTA band */}
        <div
          className="glass rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="eyebrow mb-5">Dê o próximo passo</p>
            <h2 className="font-display text-3xl md:text-[2.4rem] leading-tight tracking-tight mb-5" style={{ color: "var(--ink)" }}>
              Sua transformação começa com uma conversa.
            </h2>
            <p className="text-[16px] leading-[1.75] mb-8" style={{ color: "var(--ink-soft)" }}>
              A avaliação é gratuita, sem compromisso e 100% personalizada. Você sai com clareza do que pode ser feito — sem pressão.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openForm} className="btn-primary">
                Agendar avaliação <ArrowRight size={16} />
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp direto <MessageCircle size={15} />
              </a>
            </div>
          </div>

          <div>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-5" style={{ border: "1px solid var(--line)" }}>
              <iframe
                src="https://maps.google.com/maps?q=Av.+Pres.+Vargas,+1695+-+Sala+212,+Medical+Center,+Dourados,+MS&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização — Dra. Emely Schuindt, Dourados/MS"
              />
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="shrink-0 mt-1" style={{ color: "var(--gold-deep)" }} />
              <p className="text-[14px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Av. Pres. Vargas, 1695 — Sala 212, Medical Center · Dourados/MS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
