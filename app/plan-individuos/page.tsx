"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RevealBlock, SlideUp, StaggerItem } from "@/components/AnimatedText";

// ─── Icons ────────────────────────────────────────────────────────────────────

function PercentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="8" cy="8" r="2.5" /><circle cx="16" cy="16" r="2.5" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}
function PillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M10.5 20.5 3.5 13.5a5 5 0 0 1 7.07-7.07l7 7a5 5 0 0 1-7.07 7.07z" />
      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function ToothIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2C9 2 6.5 4 6.5 7c0 2.5.8 4.5 1.5 6.5.6 1.8 1 4 1 6.5h6c0-2.5.4-4.7 1-6.5.7-2 1.5-4 1.5-6.5C17.5 4 15 2 12 2z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
function HospitalIcon() {
  return (
    <svg className="w-10 h-10 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}
function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

// Accent color for this plan
const A = "#1961AC";

const benefits = [
  { icon: <PercentIcon />, label: "Cuota accesible",           desc: "Plan sin costos ocultos, pensado para el presupuesto individual." },
  { icon: <PillIcon />,    label: "Farmacias 40–100%",         desc: "Descuento en medicamentos según programa de genéricos." },
  { icon: <ShieldCheckIcon />, label: "Sin copagos ni cupones", desc: "Consultá a tu médico sin costo adicional en el momento." },
  { icon: <EyeIcon />,     label: "Óptica incluida",           desc: "Cobertura anual en armazones, lentes y contactología." },
  { icon: <GlobeIcon />,   label: "Viajero internacional",     desc: "Asistencia médica completa en el exterior." },
  { icon: <ToothIcon />,   label: "Odontología completa",      desc: "Preventiva y restauradora sin tope de prestaciones." },
];

type PlanValue = string | boolean;
interface TableRow { id: string; category: string; label: string; plata: PlanValue; oro: PlanValue; }

// TODO: Reemplazar con datos reales del plan INDIVIDUAL
const tableData: TableRow[] = [
  { id: "i1",  category: "Internaciones",  label: "Internación general",         plata: true,              oro: true },
  { id: "i2",  category: "Internaciones",  label: "Cirugía programada",          plata: true,              oro: true },
  { id: "i3",  category: "Internaciones",  label: "UCI / Terapia intensiva",     plata: true,              oro: true },
  { id: "a1",  category: "Ambulatorio",    label: "Consultas médicas",           plata: "Sin copago",      oro: "Sin copago" },
  { id: "a2",  category: "Ambulatorio",    label: "Análisis clínicos",           plata: true,              oro: true },
  { id: "a3",  category: "Ambulatorio",    label: "Estudios por imágenes",       plata: true,              oro: true },
  { id: "m1",  category: "Medicamentos",   label: "Farmacia ambulatoria",        plata: "40% desc.",       oro: "40–100% desc." },
  { id: "m2",  category: "Medicamentos",   label: "Medicación de alto costo",    plata: true,              oro: true },
  { id: "s1",  category: "Salud mental",   label: "Psicología",                  plata: "12 ses./año",     oro: "Ilimitadas" },
  { id: "s2",  category: "Salud mental",   label: "Psiquiatría",                 plata: true,              oro: true },
  { id: "d1",  category: "Dental",         label: "Odontología preventiva",      plata: true,              oro: true },
  { id: "d2",  category: "Dental",         label: "Ortodoncia",                  plata: false,             oro: true },
  { id: "d3",  category: "Dental",         label: "Blanqueamiento",              plata: false,             oro: true },
  { id: "o1",  category: "Óptica",         label: "Armazones y lentes",          plata: "1 armazón/año",  oro: "2 armazones/año" },
  { id: "o2",  category: "Óptica",         label: "Cirugía refractiva",          plata: false,             oro: "Descuento 30%" },
  { id: "in1", category: "Internacional",  label: "Asistencia al viajero",       plata: true,              oro: true },
  { id: "in2", category: "Internacional",  label: "Emergencias internacionales", plata: "USD 50.000",      oro: "USD 100.000" },
];

const clinics = [
  { name: "Hospital Alemán",    address: "Av. Pueyrredón 1640, CABA", specialty: "Alta complejidad",      from: "#312664", to: "#1961AC" },
  { name: "Clínica Adventista", address: "Av. Los Incas 3619, CABA",  specialty: "Internación y cirugía", from: "#1961AC", to: "#00A4B8" },
  { name: "ICBA",               address: "Av. Córdoba 3526, CABA",    specialty: "Cardiología",           from: "#a73a8d", to: "#312664" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function CellValue({ value, hasDiff }: { value: PlanValue; hasDiff: boolean }) {
  if (value === true) return (
    <span className="inline-flex items-center justify-center text-[#00A4B8]">
      <CheckIcon /><span className="sr-only">Incluido</span>
    </span>
  );
  if (value === false) return (
    <>
      <span className="text-gray-300" aria-hidden="true">—</span>
      <span className="sr-only">No incluido</span>
    </>
  );
  return <span className={`text-sm ${hasDiff ? "font-semibold" : "text-gray-600"}`} style={hasDiff ? { color: A } : undefined}>{value as string}</span>;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlanIndividuoPage() {
  const [showDiffsOnly, setShowDiffsOnly] = useState(false);
  const [currentClinic, setCurrentClinic] = useState(0);

  const filteredRows = showDiffsOnly
    ? tableData.filter(r => String(r.plata) !== String(r.oro))
    : tableData;
  const visibleCategories = [...new Set(filteredRows.map(r => r.category))];

  return (
    <>
      <main className="flex-1">

        {/* ── 1. HERO — azul + W blanca ── */}
        <div className="sm:sticky sm:top-0 z-10">
          <section className="relative overflow-hidden bg-[#1961AC]" aria-label="Plan INDIVIDUAL — William Hope">

            <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden">
              <Image
                src="/W_sola-Blanco.png"
                alt=""
                width={1080}
                height={842}
                aria-hidden="true"
                className="absolute object-contain"
                style={{
                  right: "-4%",
                  top: "50%",
                  transform: "translateY(-48%)",
                  width: "clamp(320px, 52vw, 720px)",
                  height: "auto",
                  opacity: 0.18,
                }}
              />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
              <div className="max-w-2xl">

                <RevealBlock>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/40 bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />
                    Plan individual · Para toda la familia
                  </span>
                </RevealBlock>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                  <SlideUp delay={60}>Descubrí</SlideUp>
                  <SlideUp delay={160}><span className="text-white">INDIVIDUAL,</span></SlideUp>
                  <SlideUp delay={260}>el plan para vos.</SlideUp>
                </h1>

                <RevealBlock delay={360}>
                  <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                    Cobertura completa pensada para personas que quieren cuidar su salud sin complicaciones.
                  </p>
                </RevealBlock>

                <RevealBlock delay={440}>
                  <div className="flex flex-wrap items-center gap-5">
                    <Link href="/quiero-afiliarme?plan=individuos" className="px-7 py-3.5 rounded-full gradient-brand text-white font-bold text-sm hover:opacity-90 transition shadow-lg shadow-black/20">
                      Quiero el plan INDIVIDUAL
                    </Link>
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white" aria-hidden="true">
                        <StarIcon />
                      </span>
                      <p className="text-sm text-white/60">
                        <strong className="text-white font-semibold">Sin períodos</strong> de carencia
                      </p>
                    </div>
                  </div>
                </RevealBlock>

              </div>
            </div>
          </section>
        </div>

        {/* ── 2. ¿POR QUÉ INDIVIDUAL? ── */}
        <div className="sm:sticky sm:top-0 z-20 rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-[#f6f8fc] relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <section className="py-24 bg-[#f6f8fc]" aria-labelledby="porque-title">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <RevealBlock className="mb-2">
                  <p className="text-[#1961AC] text-xs font-bold uppercase tracking-widest">Beneficios</p>
                </RevealBlock>
                <h2 id="porque-title" className="text-3xl sm:text-4xl font-black text-[#312664]">
                  <SlideUp>¿Por qué INDIVIDUAL?</SlideUp>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((b, i) => (
                  <StaggerItem key={b.label} index={i}>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e4e7f0] h-full">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-[#1961AC]" style={{ backgroundColor: "rgba(25,97,172,0.10)" }} aria-hidden="true">
                        {b.icon}
                      </div>
                      <div>
                        <p className="font-bold text-[#312664] text-sm mb-0.5">{b.label}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ── 3. QUÉ INCLUYE ── */}
        <div className="sm:sticky sm:top-0 z-30 rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-white relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <section className="py-24 bg-white" aria-labelledby="incluye-title">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-10">
                <RevealBlock className="mb-2">
                  <p className="text-[#1961AC] text-xs font-bold uppercase tracking-widest">Coberturas</p>
                </RevealBlock>
                <h2 id="incluye-title" className="text-3xl sm:text-4xl font-black text-[#312664] mb-6">
                  <SlideUp>Qué incluye tu plan</SlideUp>
                </h2>
                <RevealBlock delay={100}>
                  <button
                    onClick={() => setShowDiffsOnly(d => !d)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-[background-color,color,border-color] duration-150 ${
                      showDiffsOnly
                        ? "bg-[#1961AC] text-white border-[#1961AC]"
                        : "bg-white text-[#312664] border-[#e4e7f0] hover:border-[#1961AC]/50"
                    }`}
                    aria-pressed={showDiffsOnly}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${showDiffsOnly ? "bg-white" : "bg-[#1961AC]"}`} aria-hidden="true" />
                    {showDiffsOnly ? "Ver todo" : "Ver solo diferencias"}
                  </button>
                </RevealBlock>
              </div>

              {/* Desktop table */}
              <div className="hidden md:block">
                <table className="w-full border-collapse" aria-label="Comparativa PLATA vs ORO">
                  <colgroup>
                    <col style={{ width: "50%" }} /><col style={{ width: "25%" }} /><col style={{ width: "25%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" className="text-left pb-4 text-sm font-semibold text-gray-400">Prestación</th>
                      <th scope="col" className="pb-4 px-4 text-center">
                        <div className="rounded-xl border border-[#e4e7f0] py-3 px-4">
                          <p className="text-[#312664] font-black text-base">PLATA</p>
                          <p className="text-gray-400 text-xs mt-0.5">Cobertura esencial</p>
                        </div>
                      </th>
                      <th scope="col" className="pb-4 px-4 text-center">
                        <div className="rounded-xl gradient-brand py-3 px-4">
                          <p className="text-white font-black text-base">ORO</p>
                          <p className="text-white/70 text-xs mt-0.5">Cobertura completa</p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleCategories.flatMap(cat => [
                      <tr key={`cat-${cat}`} className="border-t-2 border-[#f0f0f5]">
                        <td colSpan={3} className="pt-5 pb-2">
                          <span className="text-xs font-bold text-[#1961AC] uppercase tracking-wider">{cat}</span>
                        </td>
                      </tr>,
                      ...filteredRows.filter(r => r.category === cat).map(row => {
                        const diff = String(row.plata) !== String(row.oro);
                        return (
                          <tr key={row.id} className="border-b border-[#f6f6f9] hover:bg-[#fafafe] transition-colors">
                            <th scope="row" className="py-3.5 pr-6 text-sm text-gray-600 font-normal text-left">{row.label}</th>
                            <td className="py-3.5 px-4 text-center tabular-nums">
                              <CellValue value={row.plata} hasDiff={false} />
                            </td>
                            <td className="py-3.5 px-4 text-center tabular-nums border-x border-[#1961AC]/8" style={{ backgroundColor: "rgba(25,97,172,0.025)" }}>
                              <CellValue value={row.oro} hasDiff={diff} />
                            </td>
                          </tr>
                        );
                      }),
                    ])}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td />
                      <td className="pt-8 pb-2 px-4">
                        <Link href="/quiero-afiliarme?plan=plata" className="block py-3 px-6 rounded-full border-2 border-[#312664] text-[#312664] text-center font-bold text-sm hover:bg-[#312664] hover:text-white transition-[background-color,color] duration-150">
                          Elegir PLATA
                        </Link>
                      </td>
                      <td className="pt-8 pb-2 px-4">
                        <Link href="/quiero-afiliarme?plan=oro" className="block py-3 px-6 rounded-full gradient-brand text-white text-center font-bold text-sm hover:opacity-90 transition shadow-md shadow-[#1961AC]/15">
                          Elegir ORO
                        </Link>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-4">
                {(["plata", "oro"] as const).map(plan => {
                  const isOro = plan === "oro";
                  return (
                    <div key={plan} className={`rounded-2xl overflow-hidden border ${isOro ? "border-[#1961AC]/25 shadow-lg shadow-[#1961AC]/10" : "border-[#e4e7f0]"}`}>
                      <div className={`px-5 py-4 ${isOro ? "gradient-brand" : "bg-[#f6f8fc]"}`}>
                        <p className={`font-black text-lg ${isOro ? "text-white" : "text-[#312664]"}`}>{plan.toUpperCase()}</p>
                        <p className={`text-xs mt-0.5 ${isOro ? "text-white/70" : "text-gray-400"}`}>{isOro ? "Cobertura completa" : "Cobertura esencial"}</p>
                      </div>
                      <div className="p-5 divide-y divide-[#f0f0f5]">
                        {filteredRows.map(row => {
                          const value = isOro ? row.oro : row.plata;
                          const diff = String(row.plata) !== String(row.oro);
                          return (
                            <div key={row.id} className="flex items-center justify-between py-2.5">
                              <span className="text-sm text-gray-600 pr-4">{row.label}</span>
                              <span className={`text-sm flex-shrink-0 ${isOro && diff ? "font-semibold" : ""}`} style={isOro && diff ? { color: A } : undefined}>
                                {value === true ? <span className="text-[#00A4B8]"><CheckIcon /></span>
                                  : value === false ? <span className="text-gray-300">—</span>
                                  : value as string}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="px-5 pb-5">
                        <Link href={`/quiero-afiliarme?plan=${plan}`} className={`block py-3 text-center rounded-full font-bold text-sm transition ${isOro ? "gradient-brand text-white hover:opacity-90 shadow-md" : "border-2 border-[#312664] text-[#312664] hover:bg-[#312664] hover:text-white"}`}>
                          Elegir {plan.toUpperCase()}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        </div>

        {/* ── 4. DÓNDE TE ATENDÉS ── */}
        <div className="sm:sticky sm:top-0 z-[38] rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-[#f6f8fc] relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <section className="py-24 bg-[#f6f8fc]" aria-labelledby="clinicas-title">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-12">
                <RevealBlock className="mb-2">
                  <p className="text-[#1961AC] text-xs font-bold uppercase tracking-widest">Red de prestadores</p>
                </RevealBlock>
                <h2 id="clinicas-title" className="text-3xl sm:text-4xl font-black text-[#312664]">
                  <SlideUp>Dónde te atendés</SlideUp>
                </h2>
              </div>

              <div className="md:hidden overflow-hidden rounded-3xl border border-[#e4e7f0]">
                <div className="flex transition-transform duration-300 ease-out motion-reduce:transition-none" style={{ transform: `translateX(-${currentClinic * 100}%)` }} aria-live="polite">
                  {clinics.map(c => (
                    <div key={c.name} className="w-full flex-shrink-0 bg-white">
                      <div className="h-48 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }} aria-hidden="true">
                        <HospitalIcon />
                      </div>
                      <div className="p-5">
                        <p className="font-black text-[#312664] text-lg">{c.name}</p>
                        <p className="text-[#1961AC] text-xs font-semibold uppercase tracking-wide mt-0.5 mb-3">{c.specialty}</p>
                        <p className="text-gray-500 text-sm flex items-start gap-1.5"><MapPinIcon />{c.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-3 gap-5">
                {clinics.map((c, i) => (
                  <StaggerItem key={c.name} index={i}>
                    <div className="rounded-3xl overflow-hidden border border-[#e4e7f0] bg-white hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow] duration-300 motion-reduce:transition-none h-full">
                      <div className="h-44 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }} aria-hidden="true">
                        <HospitalIcon />
                      </div>
                      <div className="p-5">
                        <p className="font-black text-[#312664] text-base">{c.name}</p>
                        <p className="text-[#1961AC] text-xs font-semibold uppercase tracking-wide mt-0.5 mb-3">{c.specialty}</p>
                        <p className="text-gray-500 text-sm flex items-start gap-1.5"><MapPinIcon />{c.address}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2.5 mt-8">
                <button onClick={() => setCurrentClinic(p => Math.max(0, p - 1))} disabled={currentClinic === 0} className="p-2 rounded-full text-[#312664]/40 hover:text-[#312664] hover:bg-white transition disabled:opacity-30 md:hidden" aria-label="Anterior">
                  <ChevronLeftIcon />
                </button>
                {clinics.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentClinic(i)}
                    className={`flex items-center py-3 rounded-full transition-[width] duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1961AC]/50 group ${i === currentClinic ? "w-6" : "w-2"}`}
                    aria-label={c.name}
                    aria-current={i === currentClinic ? "true" : undefined}
                  >
                    <span className={`block h-2 w-full rounded-full transition-colors duration-200 ${i === currentClinic ? "bg-[#1961AC]" : "bg-[#1961AC]/30 group-hover:bg-[#1961AC]/60"}`} />
                  </button>
                ))}
                <button onClick={() => setCurrentClinic(p => Math.min(clinics.length - 1, p + 1))} disabled={currentClinic === clinics.length - 1} className="p-2 rounded-full text-[#312664]/40 hover:text-[#312664] hover:bg-white transition disabled:opacity-30 md:hidden" aria-label="Siguiente">
                  <ChevronRightIcon />
                </button>
              </div>

            </div>
          </section>
        </div>

        {/* ── 5. CTA CIERRE ── */}
        <div className="sm:sticky sm:top-0 z-[42] rounded-t-[2.5rem] overflow-hidden sm:min-h-screen gradient-brand relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <section className="gradient-brand py-20 px-4 sm:px-6 lg:px-8 text-center" aria-label="Afiliarse al plan INDIVIDUAL">
            <RevealBlock>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">William Hope · Plan INDIVIDUAL</p>
            </RevealBlock>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              <SlideUp delay={60}>Tu salud,</SlideUp>
              <SlideUp delay={180}>nuestra prioridad.</SlideUp>
            </h2>
            <RevealBlock delay={320}>
              <Link href="/quiero-afiliarme?plan=individuos" className="inline-block mt-8 px-9 py-4 rounded-full bg-white text-[#312664] font-black text-sm hover:bg-white/90 transition shadow-xl shadow-black/15">
                ¡Quiero afiliarme!
              </Link>
            </RevealBlock>
          </section>
        </div>

      </main>
    </>
  );
}
