import { ArrowRight } from "lucide-react";
import { useFormOverlay } from "../App.jsx";

export default function Hero() {
  const { openForm } = useFormOverlay();

  return (
    <section id="top" className="pt-28 pb-12 md:pt-40 md:pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="animate-fade-up">
          <p className="eyebrow mb-5">Protocolo ESSENZA · Harmonização Facial</p>
          <h1
            className="font-display text-[2.2rem] leading-[1.1] md:text-[3.4rem] md:leading-[1.06] tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            Realce o que já é seu.
            <br />
            <span style={{ color: "var(--gold-deep)" }}>Sem exagero, sem cópia.</span>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] max-w-[420px]" style={{ color: "var(--ink-soft)" }}>
            Harmonização facial que respeita a identidade do seu rosto. Um protocolo médico pensado para quem busca naturalidade — não tendência.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={openForm} className="btn-primary">
              Quero agendar <ArrowRight size={16} />
            </button>
            <a href="#protocolo" className="btn-secondary">
              Conhecer o protocolo
            </a>
          </div>

          {/* Social proof micro */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["/assets/avatar-01.jpg", "/assets/avatar-02.jpg", "/assets/avatar-03.jpg"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Paciente"
                  className="w-9 h-9 rounded-full border-2 border-[var(--cream)] object-cover object-top"
                />
              ))}
            </div>
            <p className="text-[13px]" style={{ color: "var(--ink-soft)" }}>
              <strong className="font-semibold" style={{ color: "var(--ink)" }}>+5.000</strong> pacientes transformadas
            </p>
          </div>
        </div>

        <div className="animate-fade-up-delay">
          <div className="relative">
            <div className="img-lift">
              <img
                src="/assets/dra-emely-02.jpg"
                alt="Dra. Emely Schuindt — Harmonização Facial"
                className="w-full aspect-[3/4] object-cover object-top"
                loading="eager"
              />
            </div>
            {/* Floating glass badge */}
            <div
              className="absolute -bottom-2 left-4 md:left-6 px-5 py-3.5 rounded-2xl"
              style={{
                background: "rgba(251,248,244,0.82)",
                backdropFilter: "blur(40px) saturate(1.8)",
                WebkitBackdropFilter: "blur(40px) saturate(1.8)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06), inset 0 0.5px 0 rgba(255,255,255,0.9)",
                maxWidth: 200,
              }}
            >
              <p className="text-[11px] font-semibold tracking-wide" style={{ color: "var(--gold-deep)" }}>PROTOCOLO ESSENZA</p>
              <p className="text-[13px] mt-0.5 font-medium" style={{ color: "var(--ink)" }}>Resultado natural, sempre.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
