import { useReveal } from "../hooks/useReveal.js";

const items = [
  { value: "+5.000", label: "pacientes atendidas" },
  { value: "ESSENZA", label: "protocolo autoral" },
  { value: "100%", label: "foco em naturalidade" },
  { value: "Dourados", label: "MS, Brasil" },
];

export default function TrustBar() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal py-8 md:py-12 px-6 md:px-10">
      <div className="max-w-5xl mx-auto glass rounded-3xl px-6 py-8 md:px-10 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
          {items.map((item) => (
            <div key={item.label}>
              <p className="font-display text-[1.5rem] md:text-[2rem] tracking-tight" style={{ color: "var(--ink)" }}>
                {item.value}
              </p>
              <p className="text-[12px] mt-1" style={{ color: "var(--ink-soft)" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
