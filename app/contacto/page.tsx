"use client";

import Link from "next/link";
import { RevealBlock, SlideUp, StaggerItem } from "@/components/AnimatedText";

// ── Icons ─────────────────────────────────────────────────────────────────────

function PhoneIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function ClockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MailIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const CHANNELS = [
  {
    id: "telefonica",
    Icon: PhoneIcon,
    title: "Atención telefónica",
    schedule: "Lun a Vie · 9 a 17 hs",
    phones: [
      { display: "4815-0747",       href: "tel:48150747",      label: "Llamar al 4815-0747" },
      { display: "0800-333-94673",  href: "tel:080033394673",  label: "Llamar a la línea gratuita 0800-333-94673", tag: "Gratuito" },
    ],
    cta: null,
  },
  {
    id: "coordinador",
    Icon: ClockIcon,
    title: "Centro coordinador",
    schedule: "Lun a Vie 17 a 9 hs · Sáb, Dom y Feriados 24 hs",
    phones: [
      { display: "0810-222-4673", href: "tel:08102224673", label: "Llamar al 0810-222-4673" },
    ],
    cta: null,
  },
  {
    id: "email",
    Icon: MailIcon,
    title: "Escribinos",
    schedule: "Te respondemos en 24 hs hábiles",
    phones: [],
    cta: { label: "Ir al formulario", href: "/contacto/formulario", external: false }, // TODO ruta del formulario
  },
  {
    id: "whatsapp",
    Icon: WhatsAppIcon,
    title: "WhatsApp",
    schedule: "Lun a Vie · 9 a 17 hs",
    phones: [],
    cta: { label: "Abrir WhatsApp", href: "https://wa.me/5491100000000", external: true }, // TODO número de WhatsApp
  },
] as const;

const SUCURSALES = [
  {
    name: "Oficinas Centro",
    address: "Av. Córdoba 1345, piso 5º/14º",
    phone: "4815-0747",
    tel: "tel:48150747",
    mapsDir: "https://www.google.com/maps/dir/?api=1&destination=Av.+C%C3%B3rdoba+1345%2C+Buenos+Aires",
  },
  {
    name: "Sucursal Belgrano",
    address: "José Hernández 2460",
    phone: "2823-2311",
    tel: "tel:28232311",
    mapsDir: "https://www.google.com/maps/dir/?api=1&destination=Jos%C3%A9+Hern%C3%A1ndez+2460%2C+Buenos+Aires",
  },
  {
    name: "Sucursal San Isidro",
    address: "Juan Segundo Fernández 69",
    phone: "4859-1617",
    tel: "tel:48591617",
    mapsDir: "https://www.google.com/maps/dir/?api=1&destination=Juan+Segundo+Fern%C3%A1ndez+69%2C+San+Isidro",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ContactoPage() {
  return (
    <main className="flex-1">

      {/* ── 1. ENCABEZADO + EMERGENCIAS ── */}
      <div className="sm:sticky sm:top-0 z-10">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-14 pb-10" aria-labelledby="contacto-heading">
          <div className="max-w-4xl mx-auto">
            <RevealBlock>
              <p className="text-[#00A4B8] text-xs font-black uppercase tracking-widest mb-3">William Hope</p>
            </RevealBlock>
            <h1 id="contacto-heading" className="text-4xl sm:text-5xl font-black text-[#2E2A6B] leading-[1.05] tracking-tight mb-3 text-balance">
              <SlideUp delay={40}>Contacto</SlideUp>
            </h1>
            <RevealBlock delay={140}>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                Estamos cerca tuyo, donde vos estás. Elegí cómo contactarnos.
              </p>
            </RevealBlock>

            {/* Emergencias integradas */}
            <RevealBlock delay={220}>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl bg-red-50 border border-red-100">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#DC2626] flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#DC2626] font-black text-[10px] uppercase tracking-widest leading-none mb-1.5">
                      Emergencias · 24 hs todos los días
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      {[{ n: "4000-8888", t: "tel:40008888" }, { n: "4556-4556", t: "tel:45564556" }].map((p) => (
                        <a key={p.t} href={p.t}
                          aria-label={`Llamar al ${p.n}`}
                          className="text-red-900 font-black text-2xl tabular-nums hover:text-[#DC2626] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626]/40 rounded"
                        >
                          {p.n}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <a href="tel:40008888"
                  aria-label="Llamar ahora al número de emergencias"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DC2626] text-white font-black text-sm hover:bg-red-700 transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626]/50 shadow-sm"
                >
                  <PhoneIcon className="w-3.5 h-3.5" />
                  Llamar ahora
                </a>
              </div>
            </RevealBlock>
          </div>
        </section>
      </div>

      {/* ── 2. CANALES DE CONTACTO ── */}
      <div className="sm:sticky sm:top-0 z-20 rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-[#F6F8FC] relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
        <section className="bg-[#F6F8FC] px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="canales-heading">
          <div className="max-w-4xl mx-auto">

            <RevealBlock>
              <p className="text-[#00A4B8] text-xs font-black uppercase tracking-widest mb-2">Canales disponibles</p>
            </RevealBlock>
            <h2 id="canales-heading" className="text-2xl sm:text-3xl font-black text-[#2E2A6B] mb-10 text-balance">
              <SlideUp delay={60}>Elegí cómo comunicarte</SlideUp>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CHANNELS.map((ch, i) => (
                <StaggerItem key={ch.id} index={i}>
                  <article
                    className="bg-white rounded-2xl border border-[#e4e7f0] p-6 flex flex-col gap-4 h-full"
                    aria-labelledby={`channel-${ch.id}-title`}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#00A4B8]/10 text-[#00A4B8] flex items-center justify-center flex-shrink-0">
                        <ch.Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 id={`channel-${ch.id}-title`} className="font-black text-[#2E2A6B] text-base leading-tight">
                          {ch.title}
                        </h3>
                        <p className="text-gray-400 text-xs mt-0.5 leading-snug">{ch.schedule}</p>
                      </div>
                    </div>

                    {/* Phone numbers */}
                    {ch.phones.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {ch.phones.map((p) => (
                          <div key={p.href} className="flex items-center justify-between gap-2">
                            <a
                              href={p.href}
                              aria-label={p.label}
                              className="text-[#2E2A6B] font-black text-lg hover:text-[#00A4B8] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4B8]/40 rounded tabular-nums"
                            >
                              {p.display}
                            </a>
                            {"tag" in p && p.tag && (
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A4B8] bg-[#00A4B8]/10 px-2 py-0.5 rounded-full">
                                {p.tag}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA button */}
                    {ch.cta && (
                      <div className="mt-auto pt-2">
                        {ch.cta.external ? (
                          <a
                            href={ch.cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${ch.title} — ${ch.cta.label}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00A4B8] text-white font-bold text-sm hover:bg-[#0694b3] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4B8]/50"
                          >
                            {ch.id === "whatsapp" && <WhatsAppIcon className="w-4 h-4" />}
                            {ch.cta.label}
                          </a>
                        ) : (
                          <Link
                            href={ch.cta.href}
                            aria-label={`${ch.title} — ${ch.cta.label}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E2A6B] text-white font-bold text-sm hover:bg-[#3d3880] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E2A6B]/50"
                          >
                            {ch.cta.label}
                            <ArrowIcon />
                          </Link>
                        )}
                      </div>
                    )}
                  </article>
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── 3. SUCURSALES ── */}
      <div className="sm:sticky sm:top-0 z-30 rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-white relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="sucursales-heading">
          <div className="max-w-4xl mx-auto">

            <RevealBlock>
              <p className="text-[#00A4B8] text-xs font-black uppercase tracking-widest mb-2">Encontranos</p>
            </RevealBlock>
            <h2 id="sucursales-heading" className="text-2xl sm:text-3xl font-black text-[#2E2A6B] mb-8 text-balance">
              <SlideUp delay={60}>Nuestras sucursales</SlideUp>
            </h2>

            {/* Google Maps embed */}
            <RevealBlock className="mb-8">
              <div className="rounded-2xl overflow-hidden border border-[#e4e7f0] shadow-sm aspect-[16/7] relative bg-[#F6F8FC]">
                <iframe
                  title="Ubicación de las sucursales de William Hope en Buenos Aires"
                  src="https://www.google.com/maps?q=Av.+C%C3%B3rdoba+1345%2C+Buenos+Aires%2C+Argentina&output=embed&z=13"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </RevealBlock>

            {/* Branch cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SUCURSALES.map((s, i) => (
                <StaggerItem key={s.name} index={i}>
                  <article
                    className="bg-[#F6F8FC] rounded-2xl border border-[#e4e7f0] p-5 flex flex-col gap-4"
                    aria-labelledby={`branch-${i}-name`}
                  >
                    <div className="flex items-start gap-2.5">
                      <MapPinIcon className="w-4 h-4 text-[#a73a8d] mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 id={`branch-${i}-name`} className="font-black text-[#2E2A6B] text-sm leading-tight">
                          {s.name}
                        </h3>
                        <p className="text-gray-500 text-xs mt-1 leading-snug">{s.address}</p>
                      </div>
                    </div>

                    <a
                      href={s.tel}
                      aria-label={`Llamar a ${s.name} al ${s.phone}`}
                      className="flex items-center gap-2 text-[#2E2A6B] font-black text-base hover:text-[#00A4B8] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4B8]/40 rounded w-fit tabular-nums"
                    >
                      <PhoneIcon className="w-3.5 h-3.5" />
                      {s.phone}
                    </a>

                    <a
                      href={s.mapsDir}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Cómo llegar a ${s.name}, ${s.address}`}
                      className="flex items-center gap-1.5 text-[#00A4B8] text-xs font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4B8]/40 rounded w-fit"
                    >
                      Cómo llegar
                      <ArrowIcon className="w-3 h-3" />
                    </a>
                  </article>
                </StaggerItem>
              ))}
            </div>

          </div>
        </section>
      </div>

    </main>
  );
}
