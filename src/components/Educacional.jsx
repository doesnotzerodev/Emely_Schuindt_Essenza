import { useReveal } from "../hooks/useReveal.js";

const posts = [
  "/assets/educacional-01.jpg",
  "/assets/educacional-02.jpg",
];

export default function Educacional() {
  const ref = useReveal();

  return (
    <section className="py-14 md:py-28 px-6 md:px-10" style={{ background: "var(--cream-alt)" }}>
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-5">Educacional</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
            Entenda antes de decidir.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
            Conteúdo direto da Dra. Emely — o que esperar de cada procedimento.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {posts.map((src, i) => (
            <div key={i} className="img-lift">
              <img
                src={src}
                alt={`Conteúdo educacional ${i + 1}`}
                className="w-full aspect-[3/4] object-cover object-top rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
