import { useReveal } from "../hooks/useReveal.js";
import { useFormOverlay } from "../App.jsx";
import { ArrowRight } from "lucide-react";

const cases = [
  { src: "/assets/resultado-01.jpg", note: "Harmonização de perfil" },
  { src: "/assets/resultado-02.jpg", note: "Contorno e proporção" },
  { src: "/assets/resultado-03.jpg", note: "Rejuvenescimento facial" },
  { src: "/assets/resultado-04.jpg", note: "Equilíbrio e naturalidade" },
  { src: "/assets/resultado-05.jpg", note: "Definição de mandíbula" },
];

export default function Resultados() {
  const ref = useReveal();
  const { openForm } = useFormOverlay();

  return (
    <section id="resultados" className="py-14 md:py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal max-w-2xl mb-14">
          <p className="eyebrow mb-5">Resultados reais</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
            O melhor resultado é aquele que ninguém percebe, só sente.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
            Sem filtros, sem edição. Apenas o antes e depois do Protocolo ESSENZA.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {cases.map((c) => (
            <div key={c.src} className="group">
              <div className="img-lift">
                <img
                  src={c.src}
                  alt={`Resultado: ${c.note}`}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-[12px] text-center" style={{ color: "var(--ink-soft)" }}>{c.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={openForm} className="btn-primary">
            Quero esse resultado <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
