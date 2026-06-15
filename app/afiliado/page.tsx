"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RevealBlock, SlideUp, StaggerItem } from "@/components/AnimatedText";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    label: "Cartilla online",
    description: "Encontrá médicos, clínicas y especialistas de tu red.",
    href: "/cartilla",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    accent: "#1961AC",
  },
  {
    label: "Comunidad Hope",
    description: "Beneficios exclusivos, descuentos y actividades para vos.",
    href: "/comunidad-hope",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    accent: "#a73a8d",
  },
  {
    label: "Formularios",
    description: "Descargá autorizaciones, reintegros y trámites.",
    href: "/formularios",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    accent: "#312664",
  },
  {
    label: "Factura electrónica",
    description: "Consultá y descargá tus comprobantes fiscales.",
    href: "/factura-electronica",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    accent: "#00A4B8",
  },
  {
    label: "Contactos",
    description: "Comunicate con nosotros por el canal que prefieras.",
    href: "/contacto",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    accent: "#1961AC",
  },
];

export default function AfiliadoPage() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero con buscador ── */}
        <section className="relative overflow-hidden bg-[#312664] pt-20 pb-28 px-4 sm:px-6 lg:px-8">
          {/* Fondo decorativo */}
          <div
            className="absolute inset-0 opacity-20"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #a73a8d 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1961AC 0%, transparent 45%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <RevealBlock>
              <p className="text-[#00A4B8] text-xs font-bold uppercase tracking-widest mb-4">
                Portal del afiliado
              </p>
            </RevealBlock>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-4">
              <SlideUp delay={60}>Gestioná tu plan</SlideUp>
              <SlideUp delay={180}>en un solo lugar.</SlideUp>
            </h1>

            <RevealBlock delay={280}>
              <p className="text-white/60 text-lg mb-10">
                Todo lo que necesitás como afiliado, en un click.
              </p>
            </RevealBlock>

            {/* Buscador */}
            <RevealBlock delay={360}>
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
                  </svg>
                </div>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscá un prestador, especialidad o zona…"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-[#312664] placeholder-gray-400 text-sm font-medium shadow-xl outline-none focus:ring-2 focus:ring-[#1961AC]/40 transition"
                  aria-label="Buscador de prestadores"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 transition"
                    aria-label="Limpiar búsqueda"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ── Cards de servicios ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f6f8fc]" aria-label="Servicios para afiliados">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cards.map((card, i) => (
                <StaggerItem key={card.label} index={i}>
                  <Link
                    href={card.href}
                    className="group flex flex-col gap-4 p-6 rounded-3xl bg-white border border-[#e4e7f0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    {/* Icono */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${card.accent}14`, color: card.accent }}
                    >
                      {card.icon}
                    </div>

                    {/* Texto */}
                    <div className="flex-1">
                      <p
                        className="font-black text-base text-[#312664] mb-1.5 group-hover:transition-colors"
                        style={{ color: "#312664" }}
                      >
                        {card.label}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className="self-end w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5"
                      style={{ backgroundColor: `${card.accent}14`, color: card.accent }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>

            {/* ── Banner estudiantes de intercambio ── */}
            <RevealBlock delay={300} className="mt-6">
              <Link
                href="/estudiantes?view=afiliado"
                className="group flex items-center justify-between gap-4 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#00A4B8] to-[#1961AC] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-black text-white text-base leading-tight">¿Sos estudiante de intercambio?</p>
                    <p className="text-white/75 text-sm mt-0.5 leading-snug">Accedé a tu sección con tutoriales e info bilingüe.</p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </RevealBlock>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
