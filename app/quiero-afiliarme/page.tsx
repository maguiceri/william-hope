"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// ─── Plan selection data ──────────────────────────────────────────────────────

const SmIcon = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    {d2 && <path strokeLinecap="round" strokeLinejoin="round" d={d2} />}
  </svg>
);

const PLANES = [
  {
    id: "now",
    name: "Plan NOW",
    subtitle: "Para jóvenes de 18 a 30 años.",
    accent: "#a73a8d",
    headerIcon: <SmIcon d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    benefits: [
      { icon: <SmIcon d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.038 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.038-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />, text: "Asistencia al viajero incluida" },
      { icon: <SmIcon d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />, text: "Odontología y ortodoncia" },
      { icon: <SmIcon d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" d2="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />, text: "Descuentos en Ópticas" },
      { icon: <SmIcon d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />, text: "Descuentos en Farmacias" },
    ],
  },
  {
    id: "individuos",
    name: "Plan Individuos",
    subtitle: "Para afiliados y grupos familiares.",
    accent: "#1961AC",
    headerIcon: <SmIcon d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />,
    benefits: [
      { icon: <SmIcon d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />, text: "Centros médicos de primer nivel" },
      { icon: <SmIcon d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />, text: "Plan Materno Infantil" },
      { icon: <SmIcon d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />, text: "Odontología y ortodoncia" },
      { icon: <SmIcon d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" d2="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />, text: "Anteojos y lentes de contacto" },
    ],
  },
  {
    id: "empresas",
    name: "Plan Empresas",
    subtitle: "Para los colaboradores de tu empresa.",
    accent: "#00A4B8",
    headerIcon: <SmIcon d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
    benefits: [
      { icon: <SmIcon d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />, text: "Cobertura desde el día del ingreso" },
      { icon: <SmIcon d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />, text: "Acuerdo con Obras Sociales" },
      { icon: <SmIcon d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />, text: "Plan especial para Pasantes" },
      { icon: <SmIcon d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />, text: "Charlas de prevención in company" },
    ],
  },
  {
    id: "estudiantes",
    name: "Estudiantes de Intercambio",
    subtitle: "Para estudiantes internacionales en Argentina.",
    accent: "#00A4B8",
    headerIcon: <SmIcon d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
    benefits: [
      { icon: <SmIcon d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.038 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.038-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />, text: "Asistencia al viajero incluida" },
      { icon: <SmIcon d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />, text: "Urgencias y emergencias 24 horas" },
      { icon: <SmIcon d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" d2="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />, text: "Red de prestadores en todo el país" },
      { icon: <SmIcon d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />, text: "Descuentos en Farmacias" },
    ],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type FormData = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  coberturaActual: string;
  trabajando: string;
  regimen: string;
  dni: string;
  cuil: string;
};

type ErrorMap   = Partial<Record<keyof FormData, string>>;
type TouchedMap = Partial<Record<keyof FormData, boolean>>;

const EMPTY: FormData = {
  nombre: "", apellido: "", email: "", telefono: "",
  coberturaActual: "", trabajando: "", regimen: "",
  dni: "", cuil: "",
};

// ─── Validation ───────────────────────────────────────────────────────────────

const EMAIL_RE  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIGITS_RE = /^\d+$/;

function validateField(field: keyof FormData, value: string): string {
  switch (field) {
    case "nombre":         return value.trim() ? "" : "Ingresá tu nombre.";
    case "apellido":       return value.trim() ? "" : "Ingresá tu apellido.";
    case "email":
      if (!value.trim()) return "Ingresá tu email.";
      if (!EMAIL_RE.test(value)) return "El email no tiene un formato válido.";
      return "";
    case "telefono":       return value.trim() ? "" : "Ingresá tu teléfono.";
    case "coberturaActual": return value ? "" : "Seleccioná una opción.";
    case "trabajando":     return value ? "" : "Seleccioná una opción.";
    case "dni":
      if (!value.trim()) return "Ingresá tu DNI.";
      if (!DIGITS_RE.test(value)) return "El DNI solo puede contener números.";
      return "";
    case "cuil":
      if (!value.trim()) return "Ingresá tu CUIL.";
      if (!DIGITS_RE.test(value.replace(/-/g, ""))) return "El CUIL solo puede contener números.";
      return "";
    default: return "";
  }
}

const STEP_REQUIRED: Record<number, (keyof FormData)[]> = {
  1: ["nombre", "apellido", "email", "telefono"],
  2: ["coberturaActual", "trabajando"],
  3: ["dni", "cuil"],
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
    <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
  </svg>
);
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-4 h-4 flex-shrink-0">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const BENEFITS = [
  { Icon: ShieldCheckIcon, title: "Cobertura desde el primer día",    desc: "Sin períodos de carencia en prestaciones básicas." },
  { Icon: SparkleIcon,     title: "Más de 100 beneficios",            desc: "Descuentos, actividades y servicios exclusivos para afiliados." },
  { Icon: MapIcon,         title: "Red en todo el país",              desc: "Clínicas y médicos en todas las provincias." },
  { Icon: ClockIcon,       title: "Atención personalizada",           desc: "Un asesor disponible cuando lo necesitás." },
];

// ─── Steps ────────────────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, label: "Tus datos" },
  { id: 2, label: "Tu situación" },
  { id: 3, label: "Para afiliarte" },
];

// ─── Field wrapper ────────────────────────────────────────────────────────────

function Field({
  id, label, required, error, children,
}: {
  id: string; label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-[#2E2A6B]">
        {label}
        {required && <span className="text-[#A73A8E] ml-0.5" aria-label="requerido">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500 leading-tight" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls = (hasError?: boolean) =>
  `w-full px-4 py-3 rounded-xl border text-sm font-medium text-[#2E2A6B] placeholder-gray-300 bg-white outline-none transition-[border-color,box-shadow] duration-150 ${
    hasError
      ? "border-red-400 focus-visible:border-red-400 focus-visible:ring-2 focus-visible:ring-red-200"
      : "border-[#E5E7EF] focus-visible:border-[#A73A8E] focus-visible:ring-2 focus-visible:ring-[#A73A8E]/15"
  }`;

const selectCls = (hasError?: boolean) =>
  `w-full px-4 py-3 rounded-xl border text-sm font-medium text-[#2E2A6B] bg-white outline-none transition-[border-color,box-shadow] duration-150 appearance-none cursor-pointer ${
    hasError
      ? "border-red-400 focus-visible:border-red-400 focus-visible:ring-2 focus-visible:ring-red-200"
      : "border-[#E5E7EF] focus-visible:border-[#A73A8E] focus-visible:ring-2 focus-visible:ring-[#A73A8E]/15"
  }`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FormPage() {
  return (
    <Suspense>
      <FormContent />
    </Suspense>
  );
}

function FormContent() {
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [step, setStep]           = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData]           = useState<FormData>(EMPTY);
  const [errors, setErrors]       = useState<ErrorMap>({});
  const [touched, setTouched]     = useState<TouchedMap>({});
  const headingRef = useRef<HTMLHeadingElement>(null);
  const planSectionRef = useRef<HTMLHeadingElement>(null);

  // Pre-select plan from URL param, e.g. /quiero-afiliarme?plan=now
  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan && PLANES.some(p => p.id === plan)) {
      setSelectedPlan(plan);
    }
  }, [searchParams]);

  function choosePlan(id: string) {
    setSelectedPlan(id);
    setStep(1);
    // Scroll to top so form starts visible
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  function change(field: keyof FormData, value: string) {
    setData(d => ({ ...d, [field]: value }));
    if (touched[field]) {
      setErrors(e => ({ ...e, [field]: validateField(field, value) }));
    }
  }

  function blur(field: keyof FormData) {
    setTouched(t => ({ ...t, [field]: true }));
    setErrors(e => ({ ...e, [field]: validateField(field, data[field]) }));
  }

  function showError(field: keyof FormData) {
    return touched[field] ? errors[field] : undefined;
  }

  function ariaError(field: keyof FormData) {
    const hasErr = !!(touched[field] && errors[field]);
    return {
      "aria-invalid": hasErr || undefined,
      "aria-describedby": hasErr ? `${field}-error` : undefined,
    };
  }

  function advance() {
    const required = STEP_REQUIRED[step] ?? [];
    const newErrors: ErrorMap    = { ...errors };
    const newTouched: TouchedMap = { ...touched };
    let firstInvalid: string | null = null;
    let valid = true;
    for (const f of required) {
      newTouched[f] = true;
      const err = validateField(f, data[f]);
      newErrors[f] = err;
      if (err && !firstInvalid) firstInvalid = f;
      if (err) valid = false;
    }
    setTouched(newTouched);
    setErrors(newErrors);
    if (!valid) {
      // Focus the first invalid field so keyboard/SR users land on the error
      if (firstInvalid) {
        (document.getElementById(firstInvalid) as HTMLElement | null)?.focus();
      }
      return;
    }
    if (step === 3) {
      setSubmitted(true);
    } else {
      setStep(s => s + 1);
    }
  }

  const PAGE_BG = {
    background: "#F7F8FC",
    backgroundImage: "radial-gradient(circle, rgba(46,42,107,0.055) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  };

  // ── Success screen ──
  if (submitted) {
    return (
      <>
        <main
          className="flex-1 min-h-[80vh] flex items-center justify-center px-4 py-20"
          style={PAGE_BG}
        >
          <div className="bg-white rounded-3xl shadow-sm border border-[#E5E7EF] p-12 text-center max-w-md w-full">
            <div className="flex justify-center mb-5 text-[#A73A8E]" aria-hidden="true">
              <CheckCircleIcon />
            </div>
            <h1 className="text-2xl font-black text-[#2E2A6B] mb-3">
              ¡Listo!
            </h1>
            <p className="text-gray-500 leading-relaxed mb-8">
              Te contactamos dentro de las{" "}
              <strong className="text-[#2E2A6B] font-semibold">24 horas</strong>.
              Revisá tu casilla de email por si necesitamos más información.
            </p>
            <Link
              href="/home"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-brand text-white font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Volver al inicio
            </Link>
          </div>
        </main>
      </>
    );
  }

  // ── Plan selection ──
  if (!selectedPlan) {
    return (
      <>
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8" style={PAGE_BG}>
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <p className="text-[#A73A8E] text-xs font-bold uppercase tracking-widest mb-2">
                Afiliación
              </p>
              <h1
                ref={planSectionRef}
                className="text-3xl sm:text-4xl font-black text-[#2E2A6B] text-balance"
              >
                Elegí tu plan
              </h1>
              <p className="text-gray-500 mt-3 text-base">
                ¿Para quién buscás cobertura? Elegí y te llevamos al siguiente paso.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PLANES.filter(p => p.id !== "estudiantes").map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => choosePlan(plan.id)}
                  className="group relative overflow-hidden rounded-3xl border border-[#e4e7f0] bg-white hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 p-5 flex flex-col gap-4 h-full text-left focus-visible:ring-2 focus-visible:outline-none"
                  style={{ ["--tw-ring-color" as string]: plan.accent + "60" }}
                >
                  {/* Accent strip */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: plan.accent }}
                    aria-hidden="true"
                  />

                  {/* Header */}
                  <div className="flex items-start gap-3 pt-1">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${plan.accent}14`, color: plan.accent }}
                      aria-hidden="true"
                    >
                      {plan.headerIcon}
                    </div>
                    <div>
                      <p className="text-base font-black text-[#2E2A6B] leading-tight">{plan.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-snug">{plan.subtitle}</p>
                    </div>
                  </div>

                  <div className="h-px bg-[#f0f0f5]" />

                  {/* Benefits */}
                  <ul className="flex flex-col gap-2 flex-1">
                    {plan.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <div
                          className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                          style={{ background: `${plan.accent}12`, color: plan.accent }}
                          aria-hidden="true"
                        >
                          {b.icon}
                        </div>
                        <span className="text-[#1a1535]/80 text-xs leading-snug">{b.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-1">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full border transition-[background-color,color] duration-200"
                      style={{ borderColor: plan.accent, color: plan.accent }}
                      aria-hidden="true"
                    >
                      Seleccionar este plan
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Estudiantes link */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/estudiantes"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-[#e4e7f0] bg-white hover:border-[#00A4B8]/40 hover:shadow-md transition-[border-color,box-shadow] duration-200"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#00A4B8]/10 text-[#00A4B8] flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-[#2E2A6B]">¿Sos estudiante de intercambio?</p>
                  <p className="text-xs text-gray-400">Mirá tu cobertura →</p>
                </div>
              </Link>
            </div>

          </div>
        </main>
      </>
    );
  }

  const activePlan = PLANES.find(p => p.id === selectedPlan)!;

  // ── Form ──
  return (
    <>
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8" style={PAGE_BG}>
        <div className="max-w-5xl mx-auto">

          {/* Back nav */}
          <button
            type="button"
            onClick={() => setSelectedPlan(null)}
            className="group inline-flex items-center gap-1.5 mb-6 text-sm font-semibold text-[#2E2A6B]/50 hover:text-[#2E2A6B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E2A6B]/20 rounded-full"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform motion-reduce:transition-none"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Ver todos los planes
          </button>

          {/* Plan selected badge + back */}
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="text-[#A73A8E] text-xs font-bold uppercase tracking-widest mb-1">
                Formulario de afiliación
              </p>
              <h1 className="text-3xl sm:text-4xl font-black text-[#2E2A6B] text-balance">
                Quiero afiliarme
              </h1>
            </div>
            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E7EF] text-sm font-semibold text-[#2E2A6B]/60 hover:text-[#2E2A6B] hover:border-[#2E2A6B]/30 transition-[border-color,color] focus-visible:ring-2 focus-visible:ring-[#2E2A6B]/20 focus-visible:outline-none mt-1"
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: activePlan.accent }}
                aria-hidden="true"
              />
              {activePlan.name}
              <span className="text-[#2E2A6B]/35 text-xs font-normal">· Cambiar</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">

            {/* ── Form card ── */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EF] p-6 sm:p-8">

              {/* Progress */}
              <div className="mb-8" role="status" aria-live="polite" aria-label={`Paso ${step} de 3: ${STEPS[step - 1].label}`}>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs font-semibold text-[#2E2A6B]/45 uppercase tracking-wider">
                    Paso {step} de 3
                  </span>
                  <span className="text-xs font-bold text-[#A73A8E]">
                    {STEPS[step - 1].label}
                  </span>
                </div>
                <div
                  className="flex gap-1.5"
                  role="progressbar"
                  aria-valuenow={step}
                  aria-valuemin={1}
                  aria-valuemax={3}
                >
                  {STEPS.map((s) => (
                    <div
                      key={s.id}
                      className={`h-1.5 flex-1 rounded-full motion-reduce:transition-none transition-[background-color] duration-300 ${
                        s.id <= step ? "bg-[#A73A8E]" : "bg-[#E5E7EF]"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex mt-2" aria-hidden="true">
                  {STEPS.map((s) => (
                    <p
                      key={s.id}
                      className="flex-1 text-center text-[10px] font-semibold transition-colors duration-200"
                      style={{
                        color: s.id === step ? "#A73A8E" : s.id < step ? "#2E2A6B" : "#C4C8D8",
                      }}
                    >
                      {s.label}
                    </p>
                  ))}
                </div>
              </div>

              {/* Step heading — receives focus on step change */}
              <h2
                ref={headingRef}
                tabIndex={-1}
                className="text-lg font-black text-[#2E2A6B] mb-6 text-balance focus-visible:outline-none"
              >
                {step === 1 && "Tus datos personales"}
                {step === 2 && "Tu situación actual"}
                {step === 3 && "Para completar tu afiliación"}
              </h2>

              {/* ── Step 1: Tus datos ── */}
              {step === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="nombre" label="Nombre" required error={showError("nombre")}>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Ej.: María…"
                      value={data.nombre}
                      onChange={e => change("nombre", e.target.value)}
                      onBlur={() => blur("nombre")}
                      className={inputCls(!!(touched.nombre && errors.nombre))}
                      {...ariaError("nombre")}
                    />
                  </Field>

                  <Field id="apellido" label="Apellido" required error={showError("apellido")}>
                    <input
                      id="apellido"
                      name="apellido"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Ej.: González…"
                      value={data.apellido}
                      onChange={e => change("apellido", e.target.value)}
                      onBlur={() => blur("apellido")}
                      className={inputCls(!!(touched.apellido && errors.apellido))}
                      {...ariaError("apellido")}
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field id="email" label="Email" required error={showError("email")}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        spellCheck={false}
                        placeholder="nombre@email.com…"
                        value={data.email}
                        onChange={e => change("email", e.target.value)}
                        onBlur={() => blur("email")}
                        className={inputCls(!!(touched.email && errors.email))}
                        {...ariaError("email")}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field id="telefono" label="Teléfono" required error={showError("telefono")}>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        autoComplete="tel"
                        placeholder="11 1234-5678…"
                        value={data.telefono}
                        onChange={e => change("telefono", e.target.value)}
                        onBlur={() => blur("telefono")}
                        className={inputCls(!!(touched.telefono && errors.telefono))}
                        {...ariaError("telefono")}
                      />
                    </Field>
                  </div>
                </div>
              )}

              {/* ── Step 2: Tu situación ── */}
              {step === 2 && (
                <div className="flex flex-col gap-5">
                  <Field id="coberturaActual" label="Cobertura médica actual" required error={showError("coberturaActual")}>
                    <div className="relative">
                      <select
                        id="coberturaActual"
                        name="coberturaActual"
                        value={data.coberturaActual}
                        onChange={e => change("coberturaActual", e.target.value)}
                        onBlur={() => blur("coberturaActual")}
                        className={selectCls(!!(touched.coberturaActual && errors.coberturaActual))}
                        {...ariaError("coberturaActual")}
                      >
                        <option value="">Seleccioná…</option>
                        {/* TODO: cargar opciones reales */}
                        <option value="ninguna">Sin cobertura</option>
                        <option value="obra_social">Obra social</option>
                        <option value="prepaga">Prepaga</option>
                        <option value="pami">PAMI</option>
                        <option value="otro">Otro</option>
                      </select>
                      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#2E2A6B]/40">
                        <ChevronIcon />
                      </div>
                    </div>
                  </Field>

                  <Field id="trabajando" label="¿Estás trabajando actualmente?" required error={showError("trabajando")}>
                    <div className="relative">
                      <select
                        id="trabajando"
                        name="trabajando"
                        value={data.trabajando}
                        onChange={e => change("trabajando", e.target.value)}
                        onBlur={() => blur("trabajando")}
                        className={selectCls(!!(touched.trabajando && errors.trabajando))}
                        {...ariaError("trabajando")}
                      >
                        <option value="">Seleccioná…</option>
                        {/* TODO: cargar opciones reales */}
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="independiente">Trabajo independiente</option>
                      </select>
                      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#2E2A6B]/40">
                        <ChevronIcon />
                      </div>
                    </div>
                  </Field>

                  <Field id="regimen" label="Régimen de trabajo">
                    <div className="relative">
                      <select
                        id="regimen"
                        name="regimen"
                        value={data.regimen}
                        onChange={e => change("regimen", e.target.value)}
                        className={selectCls()}
                      >
                        <option value="">Seleccioná…</option>
                        {/* TODO: cargar opciones reales */}
                        <option value="relacion_dependencia">Relación de dependencia</option>
                        <option value="monotributo">Monotributo</option>
                        <option value="autonomo">Autónomo</option>
                        <option value="sin_empleo">Sin empleo activo</option>
                      </select>
                      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#2E2A6B]/40">
                        <ChevronIcon />
                      </div>
                    </div>
                  </Field>
                </div>
              )}

              {/* ── Step 3: Para afiliarte ── */}
              {step === 3 && (
                <div className="flex flex-col gap-5">
                  <p className="text-sm text-gray-400 -mt-2 leading-relaxed">
                    Esta información solo se usa para verificar tu identidad en el proceso de afiliación.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field id="dni" label="DNI" required error={showError("dni")}>
                      <input
                        id="dni"
                        name="dni"
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        placeholder="12345678…"
                        value={data.dni}
                        maxLength={8}
                        onChange={e => change("dni", e.target.value.replace(/\D/g, ""))}
                        onBlur={() => blur("dni")}
                        className={inputCls(!!(touched.dni && errors.dni))}
                        {...ariaError("dni")}
                      />
                    </Field>

                    <Field id="cuil" label="CUIL" required error={showError("cuil")}>
                      <input
                        id="cuil"
                        name="cuil"
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        placeholder="20123456780…"
                        value={data.cuil}
                        maxLength={11}
                        onChange={e => change("cuil", e.target.value.replace(/\D/g, ""))}
                        onBlur={() => blur("cuil")}
                        className={inputCls(!!(touched.cuil && errors.cuil))}
                        {...ariaError("cuil")}
                      />
                    </Field>
                  </div>
                </div>
              )}

              {/* Privacy note */}
              <div className="mt-6 flex items-center gap-2 text-[#2E2A6B]/35">
                <span aria-hidden="true"><LockIcon /></span>
                <p className="text-xs leading-tight">
                  Tus datos están protegidos. Solo los usamos para contactarte.
                </p>
              </div>

              {/* Navigation */}
              <div className={`mt-8 flex items-center ${step > 1 ? "justify-between" : "justify-end"}`}>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(s => s - 1)}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#2E2A6B]/50 hover:text-[#2E2A6B] hover:bg-[#2E2A6B]/6 transition-[background-color,color] focus-visible:ring-2 focus-visible:ring-[#2E2A6B]/30 focus-visible:outline-none"
                  >
                    ← Atrás
                  </button>
                )}
                <button
                  type="button"
                  onClick={advance}
                  className="px-7 py-3 rounded-full gradient-brand text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-sm shadow-[#A73A8E]/20 focus-visible:ring-2 focus-visible:ring-[#A73A8E]/50 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  {step === 3 ? "Enviar" : "Continuar →"}
                </button>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:sticky lg:top-24 flex flex-col gap-4">

              {/* Benefits */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EF] p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0694b3] mb-5">
                  ¿Por qué William Hope?
                </p>
                <ul className="flex flex-col gap-4">
                  {BENEFITS.map(({ Icon, title, desc }) => (
                    <li key={title} className="flex items-start gap-3">
                      <span aria-hidden="true" className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-[#0694b3]/10 text-[#0694b3]">
                        <Icon />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#2E2A6B] leading-snug">{title}</p>
                        <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EF] p-6">
                <p className="text-xs text-gray-400 mb-3">¿Preferís hablar con alguien?</p>
                <a
                  href="tel:40008888"
                  className="flex items-center gap-3 group"
                  aria-label="Llamar al 4000-8888"
                >
                  <span aria-hidden="true" className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#A73A8E]/10 text-[#A73A8E] flex-shrink-0 group-hover:bg-[#A73A8E]/18 transition-colors">
                    <PhoneIcon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-lg font-black text-[#2E2A6B] group-hover:text-[#A73A8E] transition-colors leading-none">
                      4000-8888
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Te contactamos en 24 hs</p>
                  </div>
                </a>
              </div>
            </aside>

          </div>

          {/* Required legend */}
          <p className="text-xs text-gray-400 mt-4 text-center">
            <span className="text-[#A73A8E]" aria-hidden="true">*</span>{" "}
            Campos requeridos
          </p>

        </div>
      </main>
    </>
  );
}
