import React, { useState, useRef, useEffect, useCallback } from "react";
import { Play, X, ChevronUp, ChevronDown } from "lucide-react";
import { VIDEOS } from "../constants.js";
import { useReveal } from "../hooks/useReveal.js";

/* ─────────────────────────────────────────────
   REELS MODAL — vertical scroll like Instagram
───────────────────────────────────────────── */
function ReelsModal({ startIndex, onClose }) {
  const [currentIdx, setCurrentIdx] = useState(startIndex);
  const [active, setActive] = useState(false);
  const [direction, setDirection] = useState(0); // -1 = up, 1 = down
  const videoRefs = useRef([]);
  const touchStartY = useRef(0);
  const touchDelta = useRef(0);
  const transitioning = useRef(false);

  const video = VIDEOS[currentIdx];

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setActive(true));
    });
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === currentIdx) {
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [currentIdx]);

  const handleClose = useCallback(() => {
    setActive(false);
    setTimeout(onClose, 450);
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

  const navigate = useCallback((dir) => {
    if (transitioning.current) return;
    const next = currentIdx + dir;
    if (next < 0 || next >= VIDEOS.length) return;
    transitioning.current = true;
    setDirection(dir);
    setCurrentIdx(next);
    setTimeout(() => { transitioning.current = false; }, 500);
  }, [currentIdx]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") navigate(-1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [navigate]);

  // Touch swipe
  const handleTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
  const handleTouchMove = (e) => { touchDelta.current = e.touches[0].clientY - touchStartY.current; };
  const handleTouchEnd = () => {
    if (Math.abs(touchDelta.current) > 50) {
      navigate(touchDelta.current < 0 ? 1 : -1);
    }
    touchDelta.current = 0;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-500"
      style={{
        background: active ? "rgba(10,8,6,0.95)" : "rgba(10,8,6,0)",
        backdropFilter: active ? "blur(16px)" : "blur(0)",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      {/* Close */}
      <button
        onClick={handleClose}
        className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
        aria-label="Fechar"
      >
        <X size={18} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 z-10">
        <p className="text-[12px] font-medium tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
          {currentIdx + 1} <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span> {VIDEOS.length}
        </p>
      </div>

      {/* Nav arrows */}
      <div className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        <button
          onClick={() => navigate(-1)}
          disabled={currentIdx === 0}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-15 cursor-pointer"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
          aria-label="Anterior"
        >
          <ChevronUp size={20} />
        </button>
        <button
          onClick={() => navigate(1)}
          disabled={currentIdx === VIDEOS.length - 1}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-15 cursor-pointer"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
          aria-label="Próximo"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Progress bar (left side) */}
      <div className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-10">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > currentIdx ? 1 : -1); setCurrentIdx(i); }}
            className="transition-all duration-400 cursor-pointer rounded-full"
            style={{
              width: i === currentIdx ? 6 : 4,
              height: i === currentIdx ? 24 : 4,
              background: i === currentIdx ? "var(--gold)" : "rgba(255,255,255,0.2)",
            }}
            aria-label={`Vídeo ${i + 1}`}
          />
        ))}
      </div>

      {/* Video container */}
      <div
        className="relative w-full max-w-[380px] mx-auto transition-all duration-500"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "scale(1)" : "scale(0.88)",
          height: "min(80vh, 680px)",
        }}
      >
        {VIDEOS.map((v, i) => {
          const isActive = i === currentIdx;
          const offset = i - currentIdx;
          return (
            <div
              key={v.id}
              className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out"
              style={{
                opacity: isActive ? 1 : 0,
                transform: `translateY(${offset * 60}px) scale(${isActive ? 1 : 0.92})`,
                pointerEvents: isActive ? "auto" : "none",
                filter: isActive ? "none" : "blur(4px)",
              }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.4)" }}>
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload={Math.abs(i - currentIdx) <= 1 ? "metadata" : "none"}
                  className="w-full h-full object-contain"
                  style={{ background: "#000" }}
                />
              </div>
              {/* Caption */}
              <div className="absolute bottom-6 left-0 right-0 text-center px-6">
                <div
                  className="inline-block px-5 py-3 rounded-2xl"
                  style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(12px)" }}
                >
                  <h3 className="font-display text-[15px]" style={{ color: "#fff" }}>{v.title}</h3>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{v.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Swipe hint mobile */}
      <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <p className="text-[11px] animate-pulse" style={{ color: "rgba(255,255,255,0.3)" }}>
          ↕ deslize para navegar
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VIDEO CARD
───────────────────────────────────────────── */
function VideoCard({ video, index, onPlay }) {
  return (
    <button
      onClick={() => onPlay(index)}
      className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-deep)] focus-visible:ring-offset-2 cursor-pointer"
      aria-label={`Assistir: ${video.title}`}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-md transition-shadow duration-500 group-hover:shadow-xl">
        <img
          src={video.poster}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-400 group-hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <Play size={16} fill="var(--ink)" style={{ color: "var(--ink)", marginLeft: 2 }} />
          </div>
        </div>
        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-[12px] font-medium line-clamp-1" style={{ color: "rgba(255,255,255,0.9)" }}>
            {video.title}
          </p>
        </div>
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */
export default function Videos() {
  const [startIndex, setStartIndex] = useState(null);
  const ref = useReveal();

  const handleClose = useCallback(() => setStartIndex(null), []);

  return (
    <>
      <section id="videos" className="py-14 md:py-20 px-6 md:px-10" style={{ background: "var(--cream-alt)" }}>
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="reveal max-w-2xl mb-14">
            <p className="eyebrow mb-5">Conteúdo exclusivo</p>
            <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight tracking-tight" style={{ color: "var(--ink)" }}>
              Ciência, bastidores e transformações.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
              Toque em qualquer vídeo e navegue entre eles como no Instagram.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {VIDEOS.map((v, i) => (
              <VideoCard key={v.id} video={v} index={i} onPlay={setStartIndex} />
            ))}
          </div>
        </div>
      </section>

      {startIndex !== null && <ReelsModal startIndex={startIndex} onClose={handleClose} />}
    </>
  );
}
