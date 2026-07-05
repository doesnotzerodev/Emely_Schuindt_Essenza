import { useReveal } from "../hooks/useReveal.js";
import { Scan, Layers, RefreshCw } from "lucide-react";

const cards = [
  {
    icon: Scan,
    t: "Diagnóstico único",
    d: "Seu rosto não é comparado a nenhum outro. Cada plano nasce da sua anatomia, das suas proporções e do que você deseja — não de um padrão.",
  },
  {
    icon: Layers,
    t: "Progressão inteligente",
    d: "Nada de uma vez só. Os ajustes são feitos em camadas, respeitando o tempo do tecido e garantindo resultado que vive bem no dia a dia.",
  },
  {
    icon: RefreshCw,
    t: "Evolução contínua",
    d: "Seu rosto muda com o tempo — e o protocolo acompanha. O objetivo é manter o equilíbrio ao longo dos anos, não congelar uma expressão.",
  },
];

export default function Protocolo() {
  const ref = useReveal();

  return (
    <section id="protocolo" className="py-16 md:py-32 px-6 md:px-10" style={{ background: "var(--cream-alt)" }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal max-w-2xl mb-16">
          <p className="eyebrow mb-5">O protocolo</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
            ESSENZA: o método que respeita quem você já é.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
            Não é um procedimento isolado — é uma filosofia de cuidado. Três pilares que guiam cada decisão clínica.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.t} className="liquid-card p-9 md:p-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(185,141,99,0.1)" }}
                >
                  <Icon size={22} style={{ color: "var(--gold-deep)" }} />
                </div>
                <h3 className="font-display text-xl mb-4 tracking-tight" style={{ color: "var(--ink)" }}>
                  {item.t}
                </h3>
                <p className="text-[15px] leading-[1.8]" style={{ color: "var(--ink-soft)" }}>
                  {item.d}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
