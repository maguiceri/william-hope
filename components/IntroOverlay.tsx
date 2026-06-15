"use client";
import { useEffect, useState } from "react";
import WilliamHopeLogo from "./WilliamHopeLogo";

/*
  Secuencia:
  0 – 3.2s  → logo se dibuja centrado (sin fondo, background siempre visible)
  3.2s       → logo se mueve hacia la derecha y escala hacia su posición final en el Hero
  3.8s       → intro-done: header baja, título y subtítulo aparecen
  4.5s       → logo flotante desaparece, logo del Hero ya está visible
*/
export default function IntroOverlay() {
  const [phase, setPhase] = useState<"drawing" | "moving" | "done">("drawing");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("intro-done");
      setPhase("done");
      return;
    }
    const t1 = setTimeout(() => setPhase("moving"),                          3200);
    const t2 = setTimeout(() => document.body.classList.add("intro-done"),   3800);
    const t3 = setTimeout(() => setPhase("done"),                            4600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  const moving = phase === "moving";

  return (
    <div
      aria-hidden="true"
      style={{
        position:      "fixed",
        left:          moving ? "73%"  : "50%",
        top:           moving ? "42%"  : "50%",
        transform:     moving
          ? "translate(-50%, -50%) scale(0.58)"
          : "translate(-50%, -50%) scale(1)",
        opacity:       moving ? 0 : 1,
        zIndex:        100,
        pointerEvents: "none",
        /* sin background: el gradiente de la página siempre se ve */
        transition:    moving
          ? [
              "left      0.75s cubic-bezier(0.4,0,0.2,1)",
              "top       0.75s cubic-bezier(0.4,0,0.2,1)",
              "transform 0.75s cubic-bezier(0.4,0,0.2,1)",
              "opacity   0.45s ease 0.55s",   /* fade empieza luego de que llega */
            ].join(", ")
          : "none",
      }}
    >
      <WilliamHopeLogo width={300} />
    </div>
  );
}
