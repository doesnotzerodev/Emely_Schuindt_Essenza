import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "../constants.js";
import { useReveal } from "../hooks/useReveal.js";

export default function InstagramFeed() {
  const ref = useReveal();

  return (
    <section className="py-16 md:py-20 px-6 md:px-10">
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="eyebrow mb-4">@draemelyschuindt</p>
            <h2
              className="font-display text-3xl md:text-[2.4rem] leading-tight tracking-tight mb-5"
              style={{ color: "var(--ink)" }}
            >
              Acompanhe no Instagram
            </h2>
            <p className="text-[16px] leading-[1.75] mb-8" style={{ color: "var(--ink-soft)" }}>
              Resultados reais, bastidores de procedimentos, dicas de cuidado e conteúdo educativo, tudo em primeira mão no perfil da Dra. Emely.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Seguir no Instagram <Instagram size={16} />
            </a>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div
              className="relative mx-auto"
              style={{ maxWidth: 280 }}
            >
              {/* Phone frame */}
              <div
                className="rounded-[40px] p-3 shadow-2xl"
                style={{
                  background: "var(--ink)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl z-10" style={{ background: "var(--ink)" }} />

                {/* Screen */}
                <div className="rounded-[28px] overflow-hidden">
                  <img
                    src="/assets/instagram-feed.jpg"
                    alt="Feed do Instagram da Dra. Emely Schuindt"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Subtle reflection */}
              <div
                className="absolute -inset-4 rounded-[48px] -z-10"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(196,154,108,0.08) 0%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
