import { useReveal } from "../hooks/useReveal.js";

export default function Sobre() {
  const ref = useReveal();

  return (
    <section id="sobre" className="py-14 md:py-28 px-6 md:px-10">
      <div ref={ref} className="reveal max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="img-lift">
              <img
                src="/assets/dra-emely-01.jpg"
                alt="Dra. Emely Schuindt"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-3 md:-right-6 px-5 py-3.5 rounded-2xl"
              style={{
                background: "rgba(251,248,244,0.82)",
                backdropFilter: "blur(40px) saturate(1.8)",
                WebkitBackdropFilter: "blur(40px) saturate(1.8)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06), inset 0 0.5px 0 rgba(255,255,255,0.9)",
              }}
            >
              <p className="font-display text-[1rem]" style={{ color: "var(--ink)" }}>Naturalidade</p>
              <p className="text-[11px] mt-0.5" style={{ color: "var(--ink-soft)" }}>acima de tendência</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="eyebrow mb-4">Quem é a Dra. Emely</p>
          <h2
            className="font-display text-[1.8rem] md:text-[2.4rem] leading-[1.12] tracking-tight mb-6"
            style={{ color: "var(--ink)" }}
          >
            A ciência de realçar sem descaracterizar.
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.8]" style={{ color: "var(--ink-soft)" }}>
            <p>
              Médica especialista em harmonização facial, a Dra. Emely Schuindt desenvolveu o Protocolo ESSENZA a partir de uma obsessão: como devolver equilíbrio ao rosto sem apagar quem a pessoa é?
            </p>
            <p>
              Com mais de 5.000 pacientes acompanhadas e presença nos maiores congressos de estética do mundo — incluindo o AMWC na Coreia — ela traz para Dourados o que há de mais atual em medicina regenerativa e harmonização natural.
            </p>
            <p>
              Cada procedimento é planejado como quem compõe: com proporção, ritmo e respeito à geometria única do rosto.
            </p>
          </div>
          <div className="mt-8 w-12 h-[1.5px] rounded-full" style={{ background: "var(--gold)" }} />
        </div>
      </div>
    </section>
  );
}
