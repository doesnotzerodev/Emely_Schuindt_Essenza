import { useReveal } from "../hooks/useReveal.js";

const steps = [
  { n: "01", t: "Avaliação", d: "Uma conversa real sobre o que você enxerga, o que incomoda e o que gostaria de mudar. Sem julgamento." },
  { n: "02", t: "Plano personalizado", d: "Um protocolo desenhado para o seu rosto — com proporção, ritmo e clareza do que será feito em cada etapa." },
  { n: "03", t: "Procedimento", d: "Execução segura e precisa. Cada aplicação é pensada milimetricamente para o resultado mais natural possível." },
  { n: "04", t: "Acompanhamento", d: "Retornos para avaliar, ajustar e garantir que o resultado evoluiu como planejado. Você não fica sozinha." },
];

export default function ComoFunciona() {
  const ref = useReveal();

  return (
    <section className="py-16 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal max-w-2xl mb-16">
          <p className="eyebrow mb-5">Sua jornada</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
            Do primeiro contato ao resultado — cada passo com acompanhamento.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="liquid-card p-8">
              <span className="font-display text-3xl" style={{ color: "var(--gold-soft)" }}>{s.n}</span>
              <h3 className="font-display text-lg mt-5 mb-3 tracking-tight" style={{ color: "var(--ink)" }}>{s.t}</h3>
              <p className="text-[14px] leading-[1.75]" style={{ color: "var(--ink-soft)" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
