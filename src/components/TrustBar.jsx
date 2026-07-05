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
    <section ref={ref} className="reveal py-10 px-6 md:px-10">
      <div className="max-w-5xl mx-auto glass rounded-3xl px-8 py-10 md:px-12 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {items.map((item) => (
            <div key={item.label}>
              <p className="font-display text-2xl md:text-3xl tracking-tight" style={{ color: "var(--ink)" }}>
                {item.value}
              </p>
              <p className="text-[13px] mt-1.5" style={{ color: "var(--ink-soft)" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
