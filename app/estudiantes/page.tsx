"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RevealBlock, SlideUp, StaggerItem } from "@/components/AnimatedText";

const YT_VIDEO = "Nsv13fFNFOM";

// ── Translations ───────────────────────────────────────────────────────────────

const T = {
  es: {
    // Hero
    heroBadge:   "Argentina · Cobertura internacional",
    hero1:       "La primera cobertura",
    hero2:       "para estudiantes",
    hero3:       "de intercambio.",
    heroSub:     "¿Viniste a estudiar a Argentina? Te cuidamos durante toda tu estadía con atención en español y en inglés.",
    langBtn:     "English",
    back:        "Volver",

    // Landing cards
    cardEnrollTitle: "Quiero afiliarme",
    cardEnrollSub:   "Comenzá tu proceso de afiliación.",
    cardEnrollCta:   "Comenzar",
    cardMemberTitle: "Soy afiliado",
    cardMemberSub:   "Accedé a los servicios para afiliados.",
    cardMemberCta:   "Ingresar",

    // Quiero afiliarme view
    enrollTitle: "La primera cobertura para estudiantes de intercambio.",
    enrollBody:  "Nos preocupamos y ocupamos. Nuestro servicio de excelencia se distingue por el trato preferencial para con todos nuestros afiliados, porque priorizamos el contacto directo, los escuchamos, los contenemos y estamos cerca para brindar soluciones.",
    videoTitle:  "Conocé Williams Hope",
    pickUni:     "Elegí tu universidad",
    pickUniSub:  "Seleccioná tu institución para comenzar el proceso de afiliación.",
    uniEnroll:   "Iniciar afiliación",
    uniMissing:  "¿No encontrás tu universidad?",
    uniContact:  "Consultanos",

    // Soy afiliado view
    memberHeading: "Servicios para afiliados",
    memberSub:     "Todo lo que necesitás, en un solo lugar.",
    mostUsed:      "Lo más usado",
    tutHeading:    "Tutoriales",
    tut1Title:     "Inducción de estudiantes extranjeros",
    tut1Body:      "En William Hope ofrecemos cobertura para estudiantes de intercambio que vienen a estudiar a Argentina porque creemos y creamos: creemos en tu deseo de seguir creciendo y en la necesidad de estar respaldado en ese camino. Por eso creamos la primera cobertura para estudiantes de intercambio. Tu futuro es ahora y con William Hope no estás solo. Nuestra cobertura te ofrece un servicio médico de excelencia y atención personalizada. Porque sabemos de la importancia de un contacto directo, de sentirse escuchado y contenido. William Hope, es salud.",
    tut2Title:     "¿Cómo utilizar la Cartilla Online?",
    tut2Body:      "Desde William Hope queremos hacerte cada vez más fácil el acceso a toda la información y los beneficios que te ofrecemos. Mirá los siguientes videos y aprendé a utilizar nuestra APP. Descargala y accedé a la mejor cobertura desde la comodidad de tu celular.",
    tut3Title:     "¿Cómo utilizar el Servicio Médico Online?",
    tut3Body:      "Llamando al Doctor: Nuestro servicio de consulta médica virtual es fácil y práctico de usar. Solo necesitás tener actualizada la App de William Hope en tu celular para empezar a usarla, o ingresar a la Cartilla Web.",

    // Most-used labels
    mu1: "Llamar al médico",
    mu2: "Cartilla online",
    mu3: "Credencial digital",
    mu4: "Solicitar reintegro",
    mu5: "Emergencias",
    mu6: "Autorizar estudios",
  },
  en: {
    // Hero
    heroBadge:   "Argentina · International coverage",
    hero1:       "The first coverage",
    hero2:       "for exchange",
    hero3:       "students.",
    heroSub:     "Did you come to study in Argentina? We take care of you throughout your stay with support in Spanish and English.",
    langBtn:     "Español",
    back:        "Back",

    // Landing cards
    cardEnrollTitle: "I want to enroll",
    cardEnrollSub:   "Start your enrollment process.",
    cardEnrollCta:   "Get started",
    cardMemberTitle: "I'm already enrolled",
    cardMemberSub:   "Access services for members.",
    cardMemberCta:   "Sign in",

    // Quiero afiliarme view
    enrollTitle: "The first coverage for exchange students.",
    enrollBody:  "We care and we act. Our excellence service stands out for the preferential treatment of all our members, because we prioritize direct contact — we listen, we support, and we are always close to provide solutions.",
    videoTitle:  "Meet Williams Hope",
    pickUni:     "Choose your university",
    pickUniSub:  "Select your institution to begin the enrollment process.",
    uniEnroll:   "Start enrollment",
    uniMissing:  "Can't find your university?",
    uniContact:  "Contact us",

    // Soy afiliado view
    memberHeading: "Member services",
    memberSub:     "Everything you need, in one place.",
    mostUsed:      "Most used",
    tutHeading:    "Tutorials",
    tut1Title:     "Exchange student orientation",
    tut1Body:      "At William Hope we offer coverage for exchange students coming to study in Argentina because we believe and we create: We believe in your desire to keep growing and in the need to be supported on that path. That's why we created the first coverage for exchange students. Your future is now and with William Hope you're not alone. Our coverage offers excellent medical service and personalized attention. Because we know the importance of direct contact, of feeling listened to and supported. William Hope, is health.",
    tut2Title:     "How to use the Online Medical Network?",
    tut2Body:      "At William Hope we want to make it easier and easier for you to access all the information and benefits we offer. Watch the following videos and learn to use our APP. Download it and access the best coverage from the comfort of your phone.",
    tut3Title:     "How to use the Online Medical Service?",
    tut3Body:      "Calling the Doctor: Our new virtual medical consultation service is easy and practical to use. You just need to have the William Hope App updated on your phone to start using it, or log in to the Web Medical Network.",

    // Most-used labels
    mu1: "Call a doctor",
    mu2: "Medical network",
    mu3: "Digital ID card",
    mu4: "Reimbursement",
    mu5: "Emergencies",
    mu6: "Authorize studies",
  },
} as const;

type Lang = keyof typeof T;
type View = null | "afiliarme" | "afiliado";

// ── Universities ───────────────────────────────────────────────────────────────

const UNIS = [
  { name: "UBA",               full: "Universidad de Buenos Aires",        from: "#003087", to: "#0052CC" },
  { name: "UTDT",              full: "Univ. Torcuato Di Tella",            from: "#1961AC", to: "#00A4B8" },
  { name: "Austral",           full: "Universidad Austral",                from: "#312664", to: "#1961AC" },
  { name: "U. de Palermo",     full: "Universidad de Palermo",             from: "#a73a8d", to: "#312664" },
  { name: "ITBA",              full: "Inst. Tecnológico de Bs. As.",       from: "#00A4B8", to: "#1961AC" },
  { name: "San Andrés",        full: "Universidad de San Andrés",          from: "#1961AC", to: "#a73a8d" },
  { name: "UADE",              full: "Univ. Argentina de la Empresa",      from: "#312664", to: "#00A4B8" },
  { name: "Siglo 21",          full: "Universidad Siglo 21",               from: "#a73a8d", to: "#1961AC" },
];

// ── Most-used items ────────────────────────────────────────────────────────────

const MU_ICONS = [
  // phone
  <svg key="mu1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.07 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>,
  // grid
  <svg key="mu2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>,
  // id card
  <svg key="mu3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="8" cy="12" r="2" />
    <path d="M14 10h4M14 14h2" />
  </svg>,
  // wallet
  <svg key="mu4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5z" />
    <path d="M16 12h2" />
  </svg>,
  // alert circle
  <svg key="mu5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>,
  // clipboard check
  <svg key="mu6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12l2 2 4-4" />
  </svg>,
];

const MU_COLORS = ["#00A4B8", "#1961AC", "#312664", "#a73a8d", "#DC2626", "#00A4B8"];
const MU_KEYS  = ["mu1","mu2","mu3","mu4","mu5","mu6"] as const;

// ── Helpers ────────────────────────────────────────────────────────────────────

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function YTEmbed({ title }: { title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${YT_VIDEO}`}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function EstudiantesPage() {
  return (
    <Suspense>
      <EstudiantesContent />
    </Suspense>
  );
}

function EstudiantesContent() {
  const searchParams      = useSearchParams();
  const [lang, setLang]   = useState<Lang>("es");
  const [view, setView]   = useState<View>(null);
  const t = T[lang];

  // Pre-select view from URL, e.g. /estudiantes?view=afiliado
  useEffect(() => {
    const v = searchParams.get("view");
    if (v === "afiliado" || v === "afiliarme") setView(v);
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  function toggleLang() {
    setLang(l => l === "es" ? "en" : "es");
  }

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 1. HERO — always sticky ── */}
        <div className="sticky top-0 z-10">
          <section
            className="relative overflow-hidden bg-[#312664]"
            aria-label={lang === "es" ? "Cobertura para estudiantes de intercambio" : "Coverage for exchange students"}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 30%, rgba(0,164,184,0.22) 0%, transparent 55%), radial-gradient(circle at 15% 70%, rgba(167,58,141,0.18) 0%, transparent 50%)",
              }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className="max-w-2xl">

                <RevealBlock>
                  <div className="flex items-center justify-between mb-8 gap-4">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00A4B8]/40 bg-[#00A4B8]/15 text-[#00A4B8] text-xs font-bold uppercase tracking-wider">
                      <GlobeIcon />
                      {t.heroBadge}
                    </span>
                    <button
                      type="button"
                      onClick={toggleLang}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-bold hover:bg-white/18 transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                      aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
                    >
                      <GlobeIcon />
                      {t.langBtn}
                    </button>
                  </div>
                </RevealBlock>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                  <SlideUp delay={60}>{t.hero1}</SlideUp>
                  <SlideUp delay={160}>{t.hero2}</SlideUp>
                  <SlideUp delay={260}><span className="text-[#00A4B8]">{t.hero3}</span></SlideUp>
                </h1>

                <RevealBlock delay={360}>
                  <p className="text-white/60 text-lg leading-relaxed max-w-xl">{t.heroSub}</p>
                </RevealBlock>

              </div>
            </div>
          </section>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            VIEW: NULL — Landing cards
        ══════════════════════════════════════════════════════════════════════ */}
        {!view && (
          <div className="sticky top-0 z-20 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.10)]">
            <section className="py-20 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="landing-title">
              <div className="max-w-3xl mx-auto">

                <RevealBlock className="text-center mb-10">
                  <p className="text-[#00A4B8] text-xs font-bold uppercase tracking-widest mb-2">
                    {lang === "es" ? "Estudiantes de intercambio" : "Exchange students"}
                  </p>
                  <h2 id="landing-title" className="text-2xl sm:text-3xl font-black text-[#312664] text-balance">
                    {lang === "es" ? "¿Cómo podemos ayudarte?" : "How can we help you?"}
                  </h2>
                </RevealBlock>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <StaggerItem index={0}>
                    <button
                      type="button"
                      onClick={() => setView("afiliarme")}
                      className="group w-full text-left flex flex-col gap-5 p-7 rounded-3xl border-2 border-[#00A4B8]/20 bg-white hover:border-[#00A4B8] hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 focus-visible:ring-2 focus-visible:ring-[#00A4B8] focus-visible:outline-none"
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#00A4B8]/10 text-[#00A4B8]" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                          <rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-xl font-black text-[#312664] leading-tight mb-1">{t.cardEnrollTitle}</p>
                        <p className="text-sm text-gray-400">{t.cardEnrollSub}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#00A4B8] text-sm font-bold">
                        {t.cardEnrollCta}
                        <ArrowIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  </StaggerItem>

                  <StaggerItem index={1}>
                    <button
                      type="button"
                      onClick={() => setView("afiliado")}
                      className="group w-full text-left flex flex-col gap-5 p-7 rounded-3xl border-2 border-[#312664]/15 bg-white hover:border-[#312664] hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 focus-visible:ring-2 focus-visible:ring-[#312664] focus-visible:outline-none"
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#312664]/8 text-[#312664]" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                          <rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="8" cy="12" r="2" />
                          <path d="M14 10h4M14 14h2" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-xl font-black text-[#312664] leading-tight mb-1">{t.cardMemberTitle}</p>
                        <p className="text-sm text-gray-400">{t.cardMemberSub}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#312664] text-sm font-bold">
                        {t.cardMemberCta}
                        <ArrowIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  </StaggerItem>

                </div>
              </div>
            </section>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════════
            VIEW: AFILIARME — Info + video, then universities
        ══════════════════════════════════════════════════════════════════════ */}
        {view === "afiliarme" && (
          <>
            {/* Info + video */}
            <div className="sticky top-0 z-20 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.10)]">
              <section className="py-16 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="enroll-title">
                <div className="max-w-6xl mx-auto">

                  <button
                    type="button"
                    onClick={() => setView(null)}
                    className="flex items-center gap-1.5 text-[#00A4B8] text-sm font-semibold mb-10 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4B8] rounded"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    {t.back}
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: text */}
                    <div>
                      <RevealBlock>
                        <p className="text-[#00A4B8] text-xs font-bold uppercase tracking-widest mb-4">
                          {lang === "es" ? "Quiero afiliarme" : "I want to enroll"}
                        </p>
                      </RevealBlock>
                      <h2 id="enroll-title" className="text-3xl sm:text-4xl font-black text-[#312664] leading-tight mb-6 text-balance">
                        <SlideUp>{t.enrollTitle}</SlideUp>
                      </h2>
                      <RevealBlock delay={120}>
                        <p className="text-gray-500 text-lg leading-relaxed">{t.enrollBody}</p>
                      </RevealBlock>
                    </div>

                    {/* Right: YouTube */}
                    <RevealBlock delay={80}>
                      <YTEmbed title={t.videoTitle} />
                    </RevealBlock>
                  </div>

                </div>
              </section>
            </div>

            {/* Universities */}
            <div className="sticky top-0 z-30 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.08)]">
              <section className="py-20 bg-[#f6f8fc] px-4 sm:px-6 lg:px-8" aria-labelledby="uni-title">
                <div className="max-w-5xl mx-auto">

                  <div className="text-center mb-12">
                    <RevealBlock>
                      <p className="text-[#00A4B8] text-xs font-bold uppercase tracking-widest mb-2">
                        {lang === "es" ? "Red universitaria" : "University network"}
                      </p>
                    </RevealBlock>
                    <h2 id="uni-title" className="text-2xl sm:text-3xl font-black text-[#312664] text-balance">
                      <SlideUp>{t.pickUni}</SlideUp>
                    </h2>
                    <RevealBlock delay={100}>
                      <p className="text-gray-400 mt-3 text-sm max-w-lg mx-auto">{t.pickUniSub}</p>
                    </RevealBlock>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {UNIS.map((u, i) => (
                      <StaggerItem key={u.name} index={i}>
                        <Link
                          href="/quiero-afiliarme"
                          className="group block rounded-2xl overflow-hidden border border-[#e4e7f0] bg-white hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-200"
                        >
                          <div
                            className="h-20 flex items-center justify-center"
                            style={{ background: `linear-gradient(135deg, ${u.from}, ${u.to})` }}
                            aria-hidden="true"
                          >
                            <span className="text-white font-black text-sm tracking-tight text-center px-2">{u.name}</span>
                          </div>
                          <div className="px-3 py-2.5">
                            <p className="text-[10px] text-gray-400 leading-snug">{u.full}</p>
                            <p className="text-[10px] font-semibold text-[#00A4B8] mt-1 group-hover:underline">{t.uniEnroll} →</p>
                          </div>
                        </Link>
                      </StaggerItem>
                    ))}
                  </div>

                  <RevealBlock delay={300} className="mt-8 text-center">
                    <p className="text-xs text-gray-400">
                      {t.uniMissing}{" "}
                      <Link href="/contacto" className="text-[#00A4B8] font-semibold hover:underline">{t.uniContact}</Link>
                    </p>
                  </RevealBlock>

                </div>
              </section>
            </div>
          </>
        )}

        {/* ══════════════════════════════════════════════════════════════════════
            VIEW: AFILIADO — Most used + Tutorials
        ══════════════════════════════════════════════════════════════════════ */}
        {view === "afiliado" && (
          <>
            {/* Most used */}
            <div className="sticky top-0 z-20 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.10)]">
              <section className="py-16 bg-white px-4 sm:px-6 lg:px-8" aria-labelledby="member-title">
                <div className="max-w-5xl mx-auto">

                  <button
                    type="button"
                    onClick={() => setView(null)}
                    className="flex items-center gap-1.5 text-[#312664] text-sm font-semibold mb-10 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#312664] rounded"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    {t.back}
                  </button>

                  <RevealBlock className="mb-2">
                    <p className="text-[#00A4B8] text-xs font-bold uppercase tracking-widest">{lang === "es" ? "Soy afiliado" : "I'm a member"}</p>
                  </RevealBlock>
                  <h2 id="member-title" className="text-2xl sm:text-3xl font-black text-[#312664] mb-2">
                    <SlideUp>{t.memberHeading}</SlideUp>
                  </h2>
                  <RevealBlock delay={80}>
                    <p className="text-gray-400 text-sm mb-10">{t.memberSub}</p>
                  </RevealBlock>

                  <h3 className="text-xs font-bold text-[#312664]/50 uppercase tracking-widest mb-5">{t.mostUsed}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {MU_KEYS.map((key, i) => (
                      <StaggerItem key={key} index={i}>
                        <button
                          type="button"
                          className="group w-full flex flex-col items-center gap-3 p-5 rounded-2xl border border-[#e4e7f0] bg-white hover:shadow-md hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 text-center focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-[#00A4B8]"
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: `${MU_COLORS[i]}15`, color: MU_COLORS[i] }}
                            aria-hidden="true"
                          >
                            {MU_ICONS[i]}
                          </div>
                          <span className="text-xs font-semibold text-[#312664] leading-tight">{t[key]}</span>
                        </button>
                      </StaggerItem>
                    ))}
                  </div>

                </div>
              </section>
            </div>

            {/* Tutorials */}
            <div className="sticky top-0 z-30 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.08)]">
              <section className="py-20 bg-[#f6f8fc] px-4 sm:px-6 lg:px-8" aria-labelledby="tut-title">
                <div className="max-w-5xl mx-auto">

                  <RevealBlock className="mb-2">
                    <p className="text-[#00A4B8] text-xs font-bold uppercase tracking-widest">{lang === "es" ? "Aprendé con nosotros" : "Learn with us"}</p>
                  </RevealBlock>
                  <h2 id="tut-title" className="text-2xl sm:text-3xl font-black text-[#312664] mb-12">
                    <SlideUp>{t.tutHeading}</SlideUp>
                  </h2>

                  <div className="flex flex-col gap-14">
                    {(
                      [
                        { titleKey: "tut1Title" as const, bodyKey: "tut1Body" as const, num: "01" },
                        { titleKey: "tut2Title" as const, bodyKey: "tut2Body" as const, num: "02" },
                        { titleKey: "tut3Title" as const, bodyKey: "tut3Body" as const, num: "03" },
                      ]
                    ).map(({ titleKey, bodyKey, num }, i) => (
                      <RevealBlock key={num} delay={i * 80}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                          {/* Text */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-xs font-black text-[#00A4B8]/50 tabular-nums">{num}</span>
                              <div className="h-px flex-1 bg-[#00A4B8]/20" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-black text-[#312664] mb-3 leading-tight">{t[titleKey]}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{t[bodyKey]}</p>
                          </div>
                          {/* Video */}
                          <YTEmbed title={t[titleKey]} />
                        </div>
                      </RevealBlock>
                    ))}
                  </div>

                </div>
              </section>
            </div>
          </>
        )}

      </main>
      <Footer />
    </>
  );
}
