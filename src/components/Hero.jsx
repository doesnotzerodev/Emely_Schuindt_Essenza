import { ArrowRight } from "lucide-react";
import { useFormOverlay } from "../App.jsx";

export default function Hero() {
  const { openForm } = useFormOverlay();

  return (
    <section id="top" className="pt-28 pb-10 md:pt-36 md:pb-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="animate-fade-up">
          <p className="eyebrow mb-4">Protocolo ESSENZA · Harmonização Facial</p>
          <h1
            className="font-display text-[2rem] leading-[1.12] md:text-[3.2rem] md:leading-[1.08] tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            Realce o que já é seu.
            <br />
            <span style={{ color: "var(--gold-deep)" }}>Sem exagero, sem cópia.</span>
          </h1>
          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.7] max-w-[400px]" style={{ color: "var(--ink-soft)" }}>
            Harmonização facial que respeita a identidade do seu rosto. Um protocolo médico pensado para quem busca naturalidade — não tendência.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={openForm} className="btn-primary">
              Quero agendar <ArrowRight size={15} />
            </button>
            <a href="#protocolo" className="btn-secondary">
              Conhecer o protocolo
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["/assets/avatar-01.jpg", "/assets/avatar-02.jpg", "/assets/avatar-03.jpg"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Paciente"
                  className="w-8 h-8 rounded-full border-2 border-[var(--cream)] object-cover object-top"
                />
              ))}
            </div>
            <p className="text-[12px]" style={{ color: "var(--ink-soft)" }}>
              <strong className="font-semibold" style={{ color: "var(--ink)" }}>+5.000</strong> pacientes transformadas
            </p>
          </div>
        </div>

        <div className="animate-fade-up-delay">
          <div className="img-lift">
            <img
              src="/assets/dra-emely-02.jpg"
              alt="Dra. Emely Schuindt — Harmonização Facial"
              className="w-full aspect-[3/4] object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
