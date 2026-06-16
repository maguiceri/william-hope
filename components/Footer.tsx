"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const COLUMNS = [
  {
    id: "afiliados",
    title: "Afiliados",
    links: [
      { label: "Soy afiliado",               href: "/afiliado" },
      { label: "Cartilla online",             href: "https://cartilla.whopesalud.com.ar/auth/login", external: true },
      { label: "Club Hope",                   href: "https://cartilla.whopesalud.com.ar/auth/login", external: true },
      { label: "Factura electrónica",         href: "https://app.comfiar.com.ar/FormLogin.aspx?id=2", external: true },
      { label: "Solicitar credencial física", href: "/credencial-fisica" },
    ],
  },
  {
    id: "cobertura",
    title: "Cobertura",
    links: [
      { label: "Centros médicos",                     href: "/centros-medicos" },
      { label: "Activá tu cobertura antes de viajar", href: "/cobertura-viaje" },
      { label: "Asistencia durante el viaje",         href: "/asistencia-viaje" },
    ],
  },
  {
    id: "tramites",
    title: "Trámites",
    links: [
      { label: "Formulario de adhesión",          href: "/quiero-afiliarme" },
      { label: "Formulario de reintegros",         href: "/formulario-reintegros" },
      { label: "Opción de cambio de obra social",  href: "/cambio-obra-social" },
      { label: "Solicitud de baja",                href: "/solicitud-baja" },
    ],
  },
  {
    id: "institucional",
    title: "Institucional",
    links: [
      { label: "Nosotros",                          href: "/nosotros" },
      { label: "Soy prestador",                     href: "/prestadores" },
      { label: "Blog",                              href: "/blog" },
      { label: "Contacto",                          href: "/contacto" },
      { label: "Defensa de las y los consumidores", href: "/defensa-consumidores" },
    ],
  },
];

const SOCIAL = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/whope.ar",
    icon: (
      <path fill="currentColor" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/whope.ar",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "X",
    href: "https://x.com/whope",
    icon: (
      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/whope",
    icon: (
      <>
        <path fill="currentColor" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect fill="currentColor" x="2" y="9" width="4" height="12" />
        <circle fill="currentColor" cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@whope",
    icon: (
      <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.21 8.21 0 004.84 1.55V6.81a4.85 4.85 0 01-1.07-.12z" />
    ),
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-white/40 transition-transform duration-200 motion-reduce:transition-none flex-shrink-0 ${open ? "rotate-180" : ""}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Footer() {
  const [openCol, setOpenCol] = useState<string | null>(null);

  return (
    <footer className="bg-[#2E2A6B] text-white" aria-label="Pie de página">

      {/* ── Top bar: logo · teléfonos · redes ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 py-8 border-b border-white/10">

          {/* Logo */}
          <Link href="/" aria-label="William Hope — Inicio" className="flex-shrink-0">
            <Image
              src="https://www.whope.com.ar/img/wh-log-o-gradient.png"
              alt="William Hope"
              width={140} height={52}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

            {/* Emergency phones */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#00A4B8] whitespace-nowrap">
                Emergencias 24/7
              </span>
              {[["4000-8888", "tel:40008888"], ["4556-4556", "tel:45564556"]].map(([num, tel]) => (
                <a
                  key={tel}
                  href={tel}
                  className="flex items-center gap-1.5 text-sm font-black text-white hover:text-[#00A4B8] transition-colors whitespace-nowrap"
                  aria-label={`Llamar al ${num}`}
                >
                  <PhoneIcon />
                  {num}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2" role="list" aria-label="Redes sociales">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  role="listitem"
                  className="w-10 h-10 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#a73a8d] hover:border-[#a73a8d] transition-[color,background-color,border-color] duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a73a8d]"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Nav columns ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLUMNS.map((col) => (
            <nav key={col.id} aria-label={col.title}>

              {/* Desktop: always visible */}
              <div className="hidden sm:block">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00A4B8] mb-4 pl-3 border-l-2 border-[#a73a8d]">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 hover:text-white text-sm leading-snug transition-colors block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-white/50 hover:text-white text-sm leading-snug transition-colors block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile: accordion */}
              <div className="sm:hidden border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenCol(openCol === col.id ? null : col.id)}
                  className="w-full flex items-center justify-between py-4 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                  aria-expanded={openCol === col.id}
                  aria-controls={`footer-mobile-${col.id}`}
                >
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-[#00A4B8] pl-3 border-l-2 border-[#a73a8d]">
                    {col.title}
                  </h3>
                  <ChevronDown open={openCol === col.id} />
                </button>
                <div
                  id={`footer-mobile-${col.id}`}
                  className={`overflow-hidden transition-[max-height,padding-bottom] duration-200 motion-reduce:transition-none ${openCol === col.id ? "max-h-72 pb-5" : "max-h-0"}`}
                >
                  <ul className="flex flex-col gap-3 pl-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 hover:text-white text-sm leading-snug transition-colors block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-white/50 hover:text-white text-sm leading-snug transition-colors block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </nav>
          ))}
        </div>
      </div>

      {/* ── Regulatory stripe ── */}
      <div className="bg-[#221b55] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-white/35 text-[10px] leading-relaxed">
            Personería Jurídica – Resol. IGJ Nº 0844 del 24/03/1972 – Reg. Nac. No 4-0190-2 del 01/11/1980.
            Superintendencia de Servicios de Salud - Órgano de Control de Obras Sociales y Entidades de Medicina
            Prepaga - 0800-222-SALUD (72583) -{" "}
            <a
              href="https://www.sssalud.gob.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/55 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded"
            >
              www.sssalud.gob.ar
            </a>{" "}
            - RNOS: 4-0190-2
          </p>
          <p className="text-white/20 text-[10px] mt-2">
            <span suppressHydrationWarning>© {new Date().getFullYear()}</span>
            {" "}William Hope · Todos los derechos reservados.
          </p>
        </div>
      </div>

    </footer>
  );
}
