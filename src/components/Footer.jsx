import { Instagram, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { INSTAGRAM_URL, MAPS_URL, whatsappLink } from "../constants.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 px-6 md:px-10" style={{ borderTop: "1px solid var(--line-solid)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display text-2xl mb-4" style={{ color: "var(--ink)" }}>
              Dra. Emely Schuindt
            </p>
            <p className="text-[15px] leading-[1.75] max-w-sm" style={{ color: "var(--ink-soft)" }}>
              Harmonização facial com ciência, proporção e respeito à identidade de cada rosto. Protocolo ESSENZA · Dourados/MS.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { href: INSTAGRAM_URL, icon: Instagram, label: "Instagram" },
                { href: whatsappLink(), icon: MessageCircle, label: "WhatsApp" },
                { href: MAPS_URL, icon: MapPin, label: "Maps" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: "var(--gold-glow)", color: "var(--gold-deep)" }}
                  aria-label={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--gold-deep)" }}>
              Navegação
            </p>
            <ul className="space-y-3">
              {["Sobre", "Protocolo", "Resultados", "Conteúdo", "Dúvidas", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-[14px] transition-colors duration-200 hover:text-[var(--gold-deep)]"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--gold-deep)" }}>
              Contato
            </p>
            <ul className="space-y-3 text-[14px]" style={{ color: "var(--ink-soft)" }}>
              <li>Av. Pres. Vargas, 1695</li>
              <li>Sala 212 · Medical Center</li>
              <li>Dourados/MS · Brasil</li>
              <li className="pt-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--gold-deep)] transition-colors"
                >
                  (67) 99262-4229
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--line-solid)" }}
        >
          <p className="text-[12px]" style={{ color: "var(--ink-soft)" }}>
            © {year} Dra. Emely Schuindt · Todos os direitos reservados
          </p>
          <p className="text-[12px] flex items-center gap-1.5" style={{ color: "var(--ink-soft)" }}>
            Design & Dev por{" "}
            <a
              href="https://dnzcentral.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-semibold transition-colors hover:text-[var(--gold-deep)]"
              style={{ color: "var(--ink-mid)" }}
            >
              DNZ <ArrowUpRight size={10} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
