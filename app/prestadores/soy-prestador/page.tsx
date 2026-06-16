import { ReactNode } from "react";
import { RevealBlock, SlideUp, StaggerItem } from "@/components/AnimatedText";
import ProviderSubNav from "@/components/prestadores/ProviderSubNav";
import ProviderCard from "@/components/prestadores/ProviderCard";
import ProviderForm from "@/components/prestadores/ProviderForm";

// ── Card icons ───────────────────────────────────────────────────────────────

function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="9" width="20" height="6" rx="3" />
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  );
}

function CalendarGridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ToothIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C9 2 6.5 4 6.5 7c0 1.8.6 3.5 1.1 5.2.5 2 1 4 1.5 6.3.2.8.6 1.5 1.3 1.5.7 0 1.1-.7 1.3-1.5.3-1.5.6-3 .9-4.3h.8c.3 1.3.6 2.8.9 4.3.2.8.6 1.5 1.3 1.5.7 0 1.1-.7 1.3-1.5.5-2.3 1-4.3 1.5-6.3.5-1.7 1.1-3.4 1.1-5.2C19.5 4 17 2 14 2c-1 0-1.5.3-2 .3S13 2 12 2z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="14" y2="16" />
    </svg>
  );
}

// ── Card data ────────────────────────────────────────────────────────────────

interface CardDef {
  title: string;
  accent: string;
  icon: ReactNode;
  description: ReactNode;
  meta: string;
  metaType: "refresh" | "calendar";
  label: string;
}

const CARDS: CardDef[] = [
  {
    title: "Diabetes",
    accent: "#138C9E",
    icon: <DropletIcon />,
    description: (
      <>
        Formulario para prestaciones por diabetes. Envialo en PDF a{" "}
        <a href="mailto:formulariosdiabetes@whope.com.ar"
          className="text-[#138C9E] underline underline-offset-2 hover:text-[#2D2A68] transition-colors">
          formulariosdiabetes@whope.com.ar
        </a>
        .
      </>
    ),
    meta: "Actualizar cada 6 meses",
    metaType: "refresh",
    label: "Descargar formulario",
  },
  {
    title: "Medicamentos crónicos",
    accent: "#A12C8E",
    icon: <PillIcon />,
    description: (
      <>
        Requisito previo a recibir prestaciones por enfermedades crónicas. Envialo en PDF a{" "}
        <a href="mailto:medicamentos@whope.com.ar"
          className="text-[#A12C8E] underline underline-offset-2 hover:text-[#2D2A68] transition-colors">
          medicamentos@whope.com.ar
        </a>
        .
      </>
    ),
    meta: "Actualizar cada 6 meses",
    metaType: "refresh",
    label: "Descargar formulario",
  },
  {
    title: "Prácticas mensuales",
    accent: "#2D2A68",
    icon: <CalendarGridIcon />,
    description: "Tené siempre a mano tu planilla de prácticas mensuales. Presentala dentro del mes en curso.",
    meta: "Presentación mensual",
    metaType: "calendar",
    label: "Descargar planilla",
  },
  {
    title: "Consultas en domicilios y consultorios",
    accent: "#138C9E",
    icon: <HomeIcon />,
    description: (
      <>
        Planilla de registro para consultas realizadas en domicilio o consultorio particular. Presentala junto con las prácticas mensuales.
      </>
    ),
    meta: "Presentación mensual",
    metaType: "calendar",
    label: "Descargar planilla",
  },
  {
    title: "Odontología · Autorizaciones",
    accent: "#A12C8E",
    icon: <ToothIcon />,
    description: (
      <>
        Formulario de autorización para prestaciones odontológicas. Envialo a{" "}
        <a href="mailto:odontologia@whope.com.ar"
          className="text-[#A12C8E] underline underline-offset-2 hover:text-[#2D2A68] transition-colors">
          odontologia@whope.com.ar
        </a>{" "}
        antes de realizar la práctica.
      </>
    ),
    meta: "Previo a cada práctica",
    metaType: "refresh",
    label: "Descargar formulario",
  },
  {
    title: "Odontología · Ficha catastral",
    accent: "#2D2A68",
    icon: <ClipboardIcon />,
    description: "Ficha catastral odontológica del afiliado. Completala en la primera consulta y actualizala anualmente para mantener el registro vigente.",
    meta: "Actualizar anualmente",
    metaType: "refresh",
    label: "Descargar ficha",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SoyPrestadorPage() {
  return (
    <main className="flex-1">

      {/* 1 · Intro */}
      <div className="sm:sticky sm:top-0 z-10">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-14 pb-10" aria-labelledby="prestadores-heading">
          <div className="max-w-7xl mx-auto">
            <RevealBlock>
              <p className="text-[#A12C8E] text-xs font-bold uppercase tracking-widest mb-3">
                Prestadores
              </p>
            </RevealBlock>
            <h1
              id="prestadores-heading"
              className="text-4xl sm:text-5xl font-black text-[#2D2A68] leading-[1.05] tracking-tight mb-3 text-balance"
            >
              <SlideUp delay={40}>Tu día a día,</SlideUp>
              <SlideUp delay={140}>más fácil.</SlideUp>
            </h1>
            <RevealBlock delay={180}>
              <p className="text-[#5A5A66] text-lg leading-relaxed max-w-xl">
                Accedé a los formularios y planillas que necesitás para operar con William Hope.
              </p>
            </RevealBlock>
            <RevealBlock delay={240}>
              <ProviderSubNav />
            </RevealBlock>
          </div>
        </section>
      </div>

      {/* 2 · Herramientas — sin sticky: la grilla puede ser más alta que el viewport */}
      <div className="z-20 rounded-t-[2.5rem] overflow-hidden bg-[#F6F8FC]">
        <section className="bg-[#F6F8FC] px-4 sm:px-6 lg:px-8 py-14 sm:py-20" aria-labelledby="herramientas-heading">
          <div className="max-w-7xl mx-auto">

            <RevealBlock className="mb-2">
              <p className="text-[#A12C8E] text-xs font-bold uppercase tracking-widest">Soy prestador</p>
            </RevealBlock>
            <h2
              id="herramientas-heading"
              className="text-2xl sm:text-3xl font-black text-[#2D2A68] mb-3 text-balance"
            >
              <SlideUp delay={60}>Herramientas para tu día a día</SlideUp>
            </h2>
            <RevealBlock delay={120}>
              <p className="text-[#5A5A66] text-base mb-10 max-w-lg">
                Descargá los formularios y planillas actualizados para gestionar tus prestaciones.
              </p>
            </RevealBlock>

            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
            >
              {CARDS.map((card, i) => (
                <StaggerItem key={card.title} index={i} className="h-full">
                  <ProviderCard {...card} />
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 3 · Formulario de contacto */}
      <div className="sm:sticky sm:top-0 z-30 rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-[#2D2A68] relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <ProviderForm variant="contacto" />
      </div>

    </main>
  );
}
