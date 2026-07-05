import { useReveal } from "../hooks/useReveal.js";

const feedbacks = [
  "/assets/feedback-01.jpg",
  "/assets/feedback-02.jpg",
  "/assets/feedback-03.jpg",
  "/assets/feedback-04.jpg",
];

export default function Depoimentos() {
  const ref = useReveal();

  return (
    <section className="py-14 md:py-28 px-6 md:px-10" style={{ background: "var(--cream-alt)" }}>
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Feedbacks reais</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
            Quem viveu, recomenda.
          </h2>
          <p className="mt-4 text-[16px] max-w-lg mx-auto" style={{ color: "var(--ink-soft)" }}>
            Mensagens reais de pacientes — sem edição, sem roteiro.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {feedbacks.map((src, i) => (
            <div key={i} className="img-lift">
              <img
                src={src}
                alt={`Feedback de paciente ${i + 1}`}
                className="w-full aspect-[3/4] object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
