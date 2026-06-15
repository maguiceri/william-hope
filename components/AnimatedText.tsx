"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

function useScrollReveal<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// Cada ítem de una grilla aparece de abajo con delay escalonado por índice
export function StaggerItem({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.06);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(52px)",
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Fade + slide-up sutil — para eyebrows y párrafos
export function RevealBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Clip slide-up — para líneas de titular (efecto cinemático)
export function SlideUp({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLSpanElement>();
  return (
    <span ref={ref} className={`block overflow-hidden ${className}`}>
      <span
        style={{
          display: "block",
          transform: visible ? "translateY(0)" : "translateY(108%)",
          transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

// Stagger palabras — cada palabra entra escalonada desde abajo
export function StaggerWords({
  text,
  className = "",
  baseDelay = 0,
  stagger = 75,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  stagger?: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLSpanElement>();
  const words = text.split(" ");
  return (
    <span ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ verticalAlign: "bottom" }}
        >
          <span
            style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}

// Text scramble — letras aleatorias que se "acomodan"
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@!";

export function ScrambleText({
  text,
  className = "",
  duration = 900,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLSpanElement>(0.5);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const frames = Math.floor(duration / 45);
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      const progress = frame / frames;
      const resolved = Math.floor(progress * text.length);
      setDisplay(
        text.split("").map((char, i) => {
          if (char === " ") return " ";
          if (i < resolved) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      if (frame >= frames) { setDisplay(text); clearInterval(id); }
    }, 45);
    return () => clearInterval(id);
  }, [visible, text, duration]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}

// Scroll-driven gradient fill — se pinta de izquierda a derecha al scrollear
// (y se despinta al subir: efecto completamente reversible)
export function ScrollFillText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    const overlay = overlayRef.current;
    if (!el || !overlay) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      overlay.style.clipPath = "none";
      return;
    }

    let raf: number;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // empieza a pintar cuando el elemento entra al 85% del viewport, completa al 35%
        const progress = Math.min(1, Math.max(0, (vh * 0.85 - rect.top) / (vh * 0.5)));
        overlay.style.clipPath = `inset(0 ${((1 - progress) * 100).toFixed(2)}% 0 0)`;
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span
      ref={wrapRef}
      className={`relative inline-block ${className}`}
      aria-label={children}
    >
      {/* Base: texto apagado (sin pintar) */}
      <span className="text-[#312664]/20" aria-hidden="true">{children}</span>
      {/* Overlay: gradiente que se revela de izquierda a derecha */}
      <span
        ref={overlayRef}
        className="absolute inset-0 gradient-text"
        aria-hidden="true"
        style={{ clipPath: "inset(0 100% 0 0)" }}
      >
        {children}
      </span>
    </span>
  );
}

// Typewriter — revela carácter por carácter
export function TypewriterText({
  text,
  className = "",
  speed = 42,
  delay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLSpanElement>(0.4);
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(text);
      return;
    }
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [visible, delay, text]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {typed || " "}
      {typed.length > 0 && typed.length < text.length && (
        <span
          aria-hidden="true"
          style={{ opacity: 0.6, animation: "wh-blink 0.8s step-end infinite" }}
        >
          |
        </span>
      )}
    </span>
  );
}
