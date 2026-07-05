import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants.js";
import { useFormOverlay } from "../App.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openForm } = useFormOverlay();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(251,248,244,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.6)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.6)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,154,108,0.12)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide" style={{ color: "var(--ink)" }}>
          Dra. Emely Schuindt
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[13px] tracking-wide transition-opacity duration-300 hover:opacity-70"
              style={{ color: "var(--ink-soft)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={openForm}
          className="btn-primary hidden md:inline-flex !py-2.5 !px-5 !text-[13px] !gap-0"
        >
          Agendar avaliação
        </button>

        <button className="md:hidden cursor-pointer" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: open ? 380 : 0, opacity: open ? 1 : 0 }}
      >
        <div className="glass-strong mx-4 mb-4 rounded-2xl px-6 py-6 flex flex-col gap-5" style={{ background: "rgba(251,248,244,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.6)", borderRadius: "20px" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium"
              style={{ color: "var(--ink)" }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); openForm(); }}
            className="btn-primary !justify-center mt-2"
          >
            Agendar avaliação
          </button>
        </div>
      </div>
    </header>
  );
}
