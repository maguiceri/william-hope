"use client";

import { ReactNode, useRef, useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

export type FormVariant = "contacto" | "postulacion" | "recomendacion";

// ── Icons ────────────────────────────────────────────────────────────────────

function UserIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      <line x1="12" y1="12" x2="12.01" y2="12" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="w-7 h-7 text-[#138C9E]" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

// ── Shared field helpers ─────────────────────────────────────────────────────

const baseInput = [
  "rounded-[10px] px-[13px] py-[11px] border text-sm text-[#2D2A68]",
  "placeholder:text-[#B8BAC4] bg-white outline-none w-full",
  "transition-[border-color,box-shadow] duration-150 motion-reduce:transition-none",
].join(" ");

const fieldNormal = "border-[#D9DBE3] focus:border-[#138C9E] focus:ring-2 focus:ring-[#138C9E]/20";
const fieldError  = "border-red-400 ring-1 ring-red-300 focus:ring-2 focus:ring-red-300";

function Label({ htmlFor, children, required }: { htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-[13px] font-medium text-[#2D2A68]">
      {children}
      {required && <span className="text-[#A12C8E] ml-0.5" aria-hidden="true">*</span>}
    </label>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return <p id={`${id}-err`} role="alert" className="text-red-500 text-xs">{msg}</p>;
}

function BlockHeader({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[#A12C8E]">{icon}</span>
      <span className="text-xs font-bold uppercase tracking-widest text-[#A12C8E]">{label}</span>
    </div>
  );
}

// ── Meta config ──────────────────────────────────────────────────────────────

const FORM_META = {
  contacto: {
    eyebrow: undefined as string | undefined,
    title: "Contactanos",
    intro: "Completá el formulario y te respondemos a la brevedad.",
    cta: "Enviar",
    successTitle: "¡Mensaje enviado!",
    successMsg: "Gracias por contactarte. Te respondemos en los próximos días hábiles.",
  },
  postulacion: {
    eyebrow: "Quiero ser prestador",
    title: "Sumate a nuestra cartilla",
    intro: "Completá el formulario con tus datos y adjuntá tu CV. Nos ponemos en contacto con vos en los próximos días.",
    cta: "Enviar postulación",
    successTitle: "¡Postulación enviada!",
    successMsg: "Revisamos tus datos y nos ponemos en contacto con vos si tu perfil se ajusta a nuestra cartilla.",
  },
  recomendacion: {
    eyebrow: "Recomendá a tu prestador",
    title: "Sumá tus médicos a la cartilla",
    intro: "¿Conocés a un profesional que debería estar en nuestra cartilla? Completá el formulario y lo evaluamos.",
    cta: "Enviar recomendación",
    successTitle: "¡Gracias por tu recomendación!",
    successMsg: "Revisamos los datos del profesional y actualizamos nuestra cartilla si corresponde.",
  },
};

const REQUIRED: Record<FormVariant, string[]> = {
  contacto:      ["nombre", "mail", "telefono"],
  postulacion:   ["nombreProf", "mailProf", "telefonoProf"],
  recomendacion: ["nombreProf", "mailProf", "nombreAfiliado", "mailAfiliado"],
};

// ── Main component ───────────────────────────────────────────────────────────

export default function ProviderForm({ variant }: { variant: FormVariant }) {
  const [fields, setFields]     = useState<Record<string, string>>({});
  const [errors, setErrors]     = useState<Record<string, string>>({});
  const [cvFile, setCvFile]     = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [sent, setSent]         = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const meta = FORM_META[variant];

  // ── Field updater ──
  const upd = (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFields(f => ({ ...f, [k]: e.target.value }));
      setErrors(er => { const n = { ...er }; delete n[k]; return n; });
    };

  // ── Submit ──
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    REQUIRED[variant].forEach(k => {
      if (!fields[k]?.trim()) errs[k] = "Este campo es obligatorio";
    });
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // TODO: POST al endpoint de formularios
    setSent(true);
  };

  // ── Field renderers ──
  const inp = (
    id: string, label: string,
    opts: { type?: string; required?: boolean; placeholder?: string } = {},
  ) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} required={opts.required}>{label}</Label>
      <input
        id={id} name={id} type={opts.type ?? "text"}
        placeholder={opts.placeholder ?? ""}
        value={fields[id] ?? ""}
        onChange={upd(id)}
        aria-invalid={!!errors[id]}
        aria-describedby={errors[id] ? `${id}-err` : undefined}
        className={`${baseInput} ${errors[id] ? fieldError : fieldNormal}`}
      />
      <FieldError id={id} msg={errors[id]} />
    </div>
  );

  const txta = (
    id: string, label: string,
    opts: { required?: boolean; placeholder?: string; rows?: number } = {},
  ) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} required={opts.required}>{label}</Label>
      <textarea
        id={id} name={id}
        placeholder={opts.placeholder ?? ""}
        value={fields[id] ?? ""}
        onChange={upd(id)}
        rows={opts.rows ?? 4}
        aria-invalid={!!errors[id]}
        aria-describedby={errors[id] ? `${id}-err` : undefined}
        className={`${baseInput} resize-none ${errors[id] ? fieldError : fieldNormal}`}
      />
      <FieldError id={id} msg={errors[id]} />
    </div>
  );

  const sel = (
    id: string, label: string,
    options: string[],
    opts: { required?: boolean } = {},
  ) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} required={opts.required}>{label}</Label>
      <select
        id={id} name={id}
        value={fields[id] ?? ""}
        onChange={upd(id)}
        aria-invalid={!!errors[id]}
        className={`${baseInput} ${errors[id] ? fieldError : fieldNormal} cursor-pointer`}
      >
        <option value="" disabled>Seleccioná una opción</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <FieldError id={id} msg={errors[id]} />
    </div>
  );

  // ── Dropzone ──
  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped?.type === "application/pdf") setCvFile(dropped);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected?.type === "application/pdf") setCvFile(selected);
  };

  const dropzone = (
    <div className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-[#2D2A68]">Curriculum vitae</span>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleFileDrop}
        aria-label="Subir CV en PDF"
        className={[
          "w-full border-2 border-dashed rounded-[10px] px-4 py-8 flex flex-col items-center gap-2",
          "transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-[#138C9E] focus-visible:ring-offset-2",
          dragging
            ? "border-[#A12C8E] bg-[#FBF4FA]"
            : "border-[#D0A8D0] bg-[#FBF6FC] hover:border-[#A12C8E] hover:bg-[#FBF4FA]",
        ].join(" ")}
      >
        <span className="text-[#A12C8E]"><UploadIcon /></span>
        {cvFile ? (
          <span className="text-sm font-medium text-[#2D2A68] break-all">{cvFile.name}</span>
        ) : (
          <>
            <span className="text-sm text-[#5A5A66] font-medium">
              Arrastrá tu CV o{" "}
              <span className="text-[#A12C8E] underline underline-offset-2">hacé clic</span>
            </span>
            <span className="text-xs text-[#5A5A66]/60">PDF · hasta 5 MB</span>
          </>
        )}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        onChange={handleFileSelect}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );

  // ── Form fields per variant ──

  const fieldsContacto = (
    <div className="flex flex-col gap-4">
      {sel("tipoConsulta", "Tipo de consulta", [
        "Soy prestador",
        "Autorización de práctica",
        "Liquidación / Pago",
        "Baja de cartilla",
        "Otro",
      ])}
      {inp("nombre", "Nombre del profesional / institución / farmacia", { required: true, placeholder: "Dr. Juan Pérez / Farmacia El Sol" })}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {inp("mail", "Mail", { type: "email", required: true, placeholder: "correo@dominio.com" })}
        {inp("telefono", "Teléfono de contacto", { type: "tel", required: true, placeholder: "11 1234-5678" })}
      </div>
      {txta("mensaje", "Mensaje", { placeholder: "Describí el motivo de tu consulta…", rows: 4 })}
    </div>
  );

  const fieldsPostulacion = (
    <div className="flex flex-col gap-5">
      <div>
        <BlockHeader icon={<UserIcon />} label="Datos del profesional" />
        <div className="flex flex-col gap-4">
          {inp("nombreProf", "Nombre y apellido", { required: true, placeholder: "Dra. María Fernández" })}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inp("mailProf", "Mail", { type: "email", required: true, placeholder: "profesional@dominio.com" })}
            {inp("telefonoProf", "Teléfono", { type: "tel", required: true, placeholder: "11 1234-5678" })}
          </div>
        </div>
      </div>

      <hr className="border-[#E8E9EE]" />

      <div>
        <BlockHeader icon={<BuildingIcon />} label="Datos del consultorio" />
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inp("direccion", "Dirección", { placeholder: "Av. Corrientes 1234, Piso 3" })}
            {inp("localidad", "Localidad", { placeholder: "Buenos Aires" })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inp("telefonoConsultorio", "Teléfono del consultorio", { type: "tel", placeholder: "11 4000-0000" })}
            {inp("especialidad", "Especialidad", { placeholder: "Cardiología" })}
          </div>
          {txta("aclaracion", "Mensaje / aclaración", { placeholder: "Contanos lo que necesités aclarar…", rows: 3 })}
        </div>
      </div>

      <hr className="border-[#E8E9EE]" />

      <div>
        <BlockHeader icon={<UploadIcon />} label="Adjuntá tu CV" />
        {dropzone}
      </div>
    </div>
  );

  const fieldsRecomendacion = (
    <div className="flex flex-col gap-5">
      <div>
        <BlockHeader icon={<UserIcon />} label="Datos del profesional" />
        <div className="flex flex-col gap-4">
          {inp("nombreProf", "Nombre y apellido", { required: true, placeholder: "Dr. Carlos Méndez" })}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inp("mailProf", "Mail", { type: "email", required: true, placeholder: "profesional@dominio.com" })}
            {inp("telefonoProf", "Teléfono", { type: "tel", placeholder: "11 1234-5678" })}
          </div>
        </div>
      </div>

      <hr className="border-[#E8E9EE]" />

      <div>
        <BlockHeader icon={<BuildingIcon />} label="Datos del consultorio" />
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inp("direccion", "Dirección", { placeholder: "Av. Santa Fe 2100" })}
            {inp("localidad", "Localidad", { placeholder: "Buenos Aires" })}
          </div>
          {inp("telefonoConsultorio", "Teléfono del consultorio", { type: "tel", placeholder: "11 4000-0000" })}
          {txta("especialidades", "Especialidades que realiza", {
            placeholder: "Ej. Clínica médica, Cardiología…",
            rows: 3,
          })}
        </div>
      </div>

      <hr className="border-[#E8E9EE]" />

      <div>
        <BlockHeader icon={<StarIcon />} label="Quién recomienda" />
        <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-[#F0F8FF] border border-[#D0E8F5] text-xs text-[#5A5A66] leading-relaxed">
          <span className="text-[#138C9E] mt-0.5 flex-shrink-0"><InfoIcon /></span>
          <span>Necesitamos tus datos para dar seguimiento a la recomendación. No los compartimos con el profesional sin tu consentimiento.</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inp("nombreAfiliado", "Tu nombre y apellido", { required: true, placeholder: "Ana García" })}
            {inp("mailAfiliado", "Tu mail", { type: "email", required: true, placeholder: "afiliado@dominio.com" })}
          </div>
        </div>
      </div>
    </div>
  );

  // ── Success state ──
  const successMsg = (
    <div className="text-center py-8">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#138C9E]/10">
          <CheckCircleIcon />
        </div>
      </div>
      <h3 className="font-medium text-[#2D2A68] text-lg mb-2">{meta.successTitle}</h3>
      <p className="text-[#5A5A66] text-sm max-w-xs mx-auto">{meta.successMsg}</p>
    </div>
  );

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <section
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #2D2A68 0%, #138C9E 52%, #A12C8E 100%)" }}
      aria-labelledby={`form-${variant}-heading`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-10">
          {meta.eyebrow && (
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
              {meta.eyebrow}
            </p>
          )}
          <h2
            id={`form-${variant}-heading`}
            className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3 text-balance"
          >
            {meta.title}
          </h2>
          <p className="text-white/70 text-base max-w-md mx-auto leading-relaxed">{meta.intro}</p>
        </div>

        {/* White card */}
        <div className="bg-white rounded-[18px] p-6 sm:p-[30px] max-w-[580px] mx-auto shadow-2xl">
          {sent ? successMsg : (
            <form onSubmit={handleSubmit} noValidate>
              {variant === "contacto"      && fieldsContacto}
              {variant === "postulacion"   && fieldsPostulacion}
              {variant === "recomendacion" && fieldsRecomendacion}

              <button
                type="submit"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full
                  text-white font-medium text-sm
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#138C9E]
                  hover:opacity-90 transition-opacity duration-150 motion-reduce:transition-none"
                style={{ background: "linear-gradient(135deg, #2D2A68 0%, #138C9E 52%, #A12C8E 100%)" }}
              >
                {variant === "contacto" ? <SendIcon /> : <ArrowRightIcon />}
                {meta.cta}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
