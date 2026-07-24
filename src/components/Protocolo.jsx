import { Scan, Layers, RefreshCw } from "lucide-react";
import { useReveal, useRevealStagger } from "../hooks/useReveal.js";

const cards = [
  {
    icon: Scan,
    t: "Diagnóstico único",
    d: "Nenhum rosto é igual ao outro, e nenhum plano deveria ser. Tudo começa com a sua anatomia, suas proporções e o que você deseja mudar.",
  },
  {
    icon: Layers,
    t: "Progressão inteligente",
    d: "Os ajustes são feitos em camadas, respeitando o tempo de cada tecido. Nada de uma vez só: o resultado se constrói com naturalidade.",
  },
  {
    icon: RefreshCw,
    t: "Evolução contínua",
    d: "O protocolo acompanha as mudanças naturais do seu rosto ao longo dos anos. O objetivo é equilíbrio, não congelar uma expressão.",
  },
];

export default function Protocolo() {
  const ref = useReveal();
  const cardsRef = useRevealStagger();

  return (
    <section id="protocolo" className="py-14 md:py-20 px-6 md:px-10" style={{ background: "var(--cream-alt)" }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal max-w-2xl mb-12">
          <p className="eyebrow mb-4">O protocolo</p>
          <h2 className="font-display text-[1.8rem] md:text-[2.4rem] leading-[1.12] tracking-tight" style={{ color: "var(--ink)" }}>
            ESSENZA: o método que respeita quem você já é.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
            Três pilares que guiam cada decisão clínica, da primeira consulta ao acompanhamento.
          </p>
        </div>
        <div ref={cardsRef} className="reveal-stagger grid md:grid-cols-3 gap-5">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.t} className="liquid-card p-8 md:p-9">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--gold-glow)" }}
                >
                  <Icon size={20} style={{ color: "var(--gold-deep)" }} />
                </div>
                <h3 className="font-display text-[1.15rem] mb-3 tracking-tight" style={{ color: "var(--ink)" }}>
                  {item.t}
                </h3>
                <p className="text-[14px] leading-[1.75]" style={{ color: "var(--ink-soft)" }}>
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
