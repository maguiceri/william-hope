"use client";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import WilliamHopeLogo from "./WilliamHopeLogo";

// Variable de módulo: sobrevive la navegación cliente pero se resetea al recargar la página
let introPlayed = false;

function StatNumber({
  target,
  prefix = "",
  suffix = "",
  active,
  delay = 0,
  duration = 1400,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
  delay?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const timer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // cubic ease-out
        setCount(Math.round(eased * target));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [active, target, delay, duration]);
  return <>{prefix}{count}{suffix}</>;
}

export default function Hero() {
  const logoColRef = useRef<HTMLDivElement>(null);
  /* Transform que mueve el logo desde su columna hacia el centro de pantalla */
  const [startTransform, setStartTransform] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    // Ya se animó en esta sesión: mostrar contenido inmediatamente
    if (introPlayed) {
      setDone(true);
      document.body.classList.add("intro-done");
      return;
    }
    /* prefers-reduced-motion: skip intro */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      document.body.classList.add("intro-done");
      introPlayed = true;
      return;
    }
    if (!logoColRef.current) return;
    const rect = logoColRef.current.getBoundingClientRect();
    const colCenterX = rect.left + rect.width  / 2;
    const colCenterY = rect.top  + rect.height / 2;
    const vpCenterX  = window.innerWidth  / 2;
    const vpCenterY  = window.innerHeight / 2;
    const dx = vpCenterX - colCenterX;
    const dy = vpCenterY - colCenterY;
    setStartTransform(`translate(${dx}px, ${dy}px) scale(1.35)`);
  }, []);

  useEffect(() => {
    if (introPlayed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // La animación SVG termina a 1200ms; disparamos con mínimo margen
    const t = setTimeout(() => {
      setDone(true);
      document.body.classList.add("intro-done");
      introPlayed = true;
    }, 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden sm:min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse 70% 60% at 0% 0%,   rgba(49,38,100,0.08)   0%, transparent 65%),
          radial-gradient(ellipse 60% 50% at 100% 0%,  rgba(0,164,184,0.07)  0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 100% 100%, rgba(167,58,141,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 55% 45% at 0% 100%,  rgba(49,38,100,0.05)  0%, transparent 60%),
          linear-gradient(135deg, #f4f0ff 0%, #f0f8ff 55%, #eafafc 100%)
        `,
      }}
      aria-label="Portada principal"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Columna izquierda: texto ── */}
          <div className="flex flex-col gap-6">

            <div className="wh-from-bottom inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-[#1961AC]/20 bg-[#1961AC]/6">
              <span className="w-2 h-2 rounded-full bg-[#00A4B8] animate-pulse" aria-hidden="true" />
              <span className="text-[#1961AC] text-xs font-semibold tracking-wide">
                Atención 24 hs · 365 días
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-black text-[#312664] leading-[1.05] tracking-tight">
              <span className="wh-title-line wh-d1">
                <span>Estar cerca,</span>
              </span>
              <span className="wh-title-line wh-d2">
                <span
                  style={{
                    background: "linear-gradient(90deg, #1961AC, #a73a8d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  es salud.
                </span>
              </span>
            </h1>

            <p className="wh-from-bottom wh-d2 text-[#312664]/65 text-lg leading-relaxed max-w-md">
              Personas pensando en personas. Tu bienestar y el de tu familia,
              nuestra prioridad desde hace más de 50 años.
            </p>

            <div className="wh-from-bottom wh-d3 flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/quiero-afiliarme"
                className="px-8 py-4 rounded-full font-bold text-white gradient-brand hover:opacity-90 transition shadow-lg text-center text-base"
              >
                Quiero afiliarme
              </Link>
              <Link
                href="/afiliado"
                className="px-8 py-4 rounded-full font-bold text-[#312664] bg-[#312664]/8 hover:bg-[#312664]/14 border border-[#312664]/20 transition text-center text-base"
              >
                Soy afiliado
              </Link>
            </div>

            <div className="wh-from-bottom wh-d4 flex flex-wrap gap-6 pt-4 border-t border-[#312664]/10">
              {[
                { prefix: "+", target: 50,  suffix: " años", label: "de experiencia",      delay: 0   },
                { prefix: "+", target: 100, suffix: "",      label: "beneficios Club Hope", delay: 120 },
                { prefix: "",  target: 24,  suffix: " / 7",  label: "médico a domicilio",   delay: 240 },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-black text-[#312664] tabular-nums">
                    <StatNumber
                      target={stat.target}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      active={done}
                      delay={stat.delay}
                    />
                  </span>
                  <span className="text-[#312664]/45 text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: logo ──
              Siempre está aquí en el DOM. Durante el intro, un transform
              lo mueve visualmente al centro de la pantalla. Cuando done=true,
              la transición lo regresa a su posición natural en la columna.
          */}
          <div
            ref={logoColRef}
            className="hidden lg:flex items-center justify-center"
            style={{
              /*
                Antes de medir (startTransform null): invisible para evitar flash.
                Durante intro: startTransform lo centra en pantalla.
                Cuando done: transform se quita con transición.
              */
              opacity: (startTransform !== null || done) ? 1 : 0,
              transform: done ? "none" : (startTransform ?? "none"),
              transition: done
                ? "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease"
                : "none",
            }}
          >
            <WilliamHopeLogo width={320} className="max-w-sm xl:max-w-md" />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="wh-from-bottom wh-d5 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        aria-hidden="true"
      >
        <span className="text-[#312664] text-xs font-medium tracking-widest uppercase">Explorá</span>
        <svg className="w-5 h-5 text-[#1961AC] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
