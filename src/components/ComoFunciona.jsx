import { useReveal, useRevealStagger } from "../hooks/useReveal.js";

const steps = [
  { n: "01", t: "Avaliação", d: "Uma conversa honesta sobre o que você enxerga, o que incomoda e o que gostaria de mudar. Sem julgamento, sem pressa." },
  { n: "02", t: "Plano sob medida", d: "Um protocolo desenhado exclusivamente para o seu rosto — com clareza de cada etapa e o que esperar." },
  { n: "03", t: "Procedimento", d: "Execução segura, precisa e milimétrica. Cada aplicação pensada para o resultado mais natural possível." },
  { n: "04", t: "Acompanhamento", d: "Retornos para avaliar, ajustar e garantir que tudo evoluiu como planejado. Você não fica sozinha." },
];

export default function ComoFunciona() {
  const ref = useReveal();
  const stepsRef = useRevealStagger();

  return (
    <section className="py-14 md:py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal max-w-2xl mb-12">
          <p className="eyebrow mb-4">Sua jornada</p>
          <h2 className="font-display text-[1.8rem] md:text-[2.4rem] leading-[1.12] tracking-tight" style={{ color: "var(--ink)" }}>
            Do primeiro contato ao resultado — com acompanhamento em cada passo.
          </h2>
        </div>
        <div ref={stepsRef} className="reveal-stagger grid md:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="liquid-card p-7">
              <span className="font-display text-[1.8rem]" style={{ color: "var(--gold-soft)" }}>{s.n}</span>
              <h3 className="font-display text-[1.05rem] mt-4 mb-2.5 tracking-tight" style={{ color: "var(--ink)" }}>{s.t}</h3>
              <p className="text-[13px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
