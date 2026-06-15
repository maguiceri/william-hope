import { SlideUp, RevealBlock, ScrollFillText, StaggerItem } from "@/components/AnimatedText";

/* ── Clínicas placeholder — reemplazar con datos y fotos reales ── */
const clinicas = [
  {
    nombre: "Sanatorio Güemes",
    direccion: "Av. Córdoba 3970, CABA",
    telefono: "011 4000-0000",
    accentFrom: "#1961AC",
    accentTo:   "#a73a8d",
  },
  {
    nombre: "Clínica Santa Isabel",
    direccion: "Av. Santa Fe 3816, CABA",
    telefono: "011 4000-0001",
    accentFrom: "#312664",
    accentTo:   "#1961AC",
  },
  {
    nombre: "Centro Médico Hope",
    direccion: "Av. Rivadavia 7400, CABA",
    telefono: "011 4000-0002",
    accentFrom: "#1961AC",
    accentTo:   "#00A4B8",
  },
];

const BuildingIcon = () => (
  <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

export default function NosotrosPage() {
  return (
    <>
      <main className="flex-1">

        {/* ── Video Hero ── */}
        <div className="sticky top-0 z-10">
          <section
            className="relative min-h-screen flex items-end overflow-hidden"
            aria-label="William Hope — quiénes somos"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/familia-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src="/familia.webm" type="video/webm" />
              <source src="/familia.mp4" type="video/mp4" />
            </video>

            {/* Overlay en gradiente para legibilidad */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(to bottom,
                    rgba(49,38,100,0.15) 0%,
                    rgba(49,38,100,0.25) 40%,
                    rgba(49,38,100,0.72) 100%
                  )
                `,
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28">

              {/* Badge año */}
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A4B8]" aria-hidden="true" />
                <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
                  Desde 1971
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-3xl">
                <SlideUp delay={80}>Personas pensando</SlideUp>
                <SlideUp delay={200}>en personas.</SlideUp>
              </h1>

              {/* Scroll indicator */}
              <div className="mt-12 flex items-center gap-3" aria-hidden="true">
                <div className="w-12 h-px bg-white/40" />
                <span className="text-white/50 text-xs font-medium tracking-widest uppercase">
                  Conocé nuestra historia
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* ── Historia ── */}
        <div className="sticky top-0 z-20 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.10)]">
          <section className="py-24 bg-white" aria-labelledby="historia-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Título grande */}
                <div>
                  <h2
                    id="historia-title"
                    className="text-5xl sm:text-6xl xl:text-7xl font-black text-[#312664] leading-[1.05]"
                  >
                    <SlideUp>50 años</SlideUp>
                    <ScrollFillText>cuidando la salud</ScrollFillText>
                  </h2>

                  {/* Año fundación */}
                  <RevealBlock delay={300} className="mt-8 flex items-center gap-2 sm:gap-4">
                    <div className="text-center">
                      <p className="text-2xl sm:text-4xl font-black text-[#1961AC]">1971</p>
                      <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-widest">Fundación</p>
                    </div>
                    <div className="w-px h-10 sm:h-12 bg-[#e4e7f0] flex-shrink-0" />
                    <div className="text-center">
                      <p className="text-2xl sm:text-4xl font-black text-[#a73a8d]">100k+</p>
                      <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-widest">Afiliados</p>
                    </div>
                    <div className="w-px h-10 sm:h-12 bg-[#e4e7f0] flex-shrink-0" />
                    <div className="text-center">
                      <p className="text-2xl sm:text-4xl font-black text-[#00A4B8]">100+</p>
                      <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-widest">Beneficios</p>
                    </div>
                  </RevealBlock>
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-5">
                  <RevealBlock>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      En 1971 nos formamos como Obra Social del Personal de Dirección de Perfumería E.W. Hope, y a lo largo de todos nuestros años de trayectoria nos ocupamos de brindar a todos nuestros afiliados un trato preferencial a cada uno, informándonos acerca de las historia y brindando los servicios de acuerdo a sus necesidades.
                    </p>
                  </RevealBlock>
                  <RevealBlock delay={120}>
                    <p className="text-gray-500 leading-relaxed">
                      Generamos lazos que se traducen en fidelidad y confianza por parte de cada afiliado y prestador de William Hope. Nos dedicamos a brindar servicios otorgando beneficios, optimizando aportes, adaptándonos a las necesidades y solucionando los problemas de quienes confían en nosotros.
                    </p>
                  </RevealBlock>
                </div>

              </div>
            </div>
          </section>
        </div>

        {/* ── Clínicas y Sanatorios ── */}
        <div className="sticky top-0 z-30 rounded-t-[2.5rem] overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.10)]">
          <section className="py-24 bg-[#f6f8fc]" aria-labelledby="clinicas-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-14">
                <RevealBlock className="mb-2">
                  <p className="text-[#1961AC] text-sm font-bold uppercase tracking-widest">
                    Red de prestadores
                  </p>
                </RevealBlock>
                <h2
                  id="clinicas-title"
                  className="text-3xl sm:text-4xl font-black text-[#312664] leading-tight"
                >
                  <SlideUp>Clínicas y Sanatorios</SlideUp>
                  <SlideUp delay={120}><span className="gradient-text">destacados</span></SlideUp>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {clinicas.map((c, i) => (
                  <StaggerItem key={c.nombre} index={i}>
                    <div className="rounded-3xl overflow-hidden border border-[#e4e7f0] bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

                      {/* Imagen placeholder — reemplazar con <Image> cuando haya foto */}
                      <div
                        className="h-48 flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${c.accentFrom}, ${c.accentTo})`,
                        }}
                        aria-hidden="true"
                      >
                        <BuildingIcon />
                      </div>

                      {/* Info */}
                      <div className="p-5 flex flex-col gap-3 flex-1">
                        <div>
                          <p className="font-black text-[#312664] text-base leading-tight">{c.nombre}</p>
                          <p className="text-gray-500 text-sm mt-1 flex items-start gap-1.5">
                            <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {c.direccion}
                          </p>
                        </div>

                        <a
                          href={`tel:${c.telefono.replace(/\D/g, "")}`}
                          className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#1961AC] hover:text-[#312664] transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                          {c.telefono}
                        </a>
                      </div>

                    </div>
                  </StaggerItem>
                ))}
              </div>

            </div>
          </section>
        </div>

      </main>
    </>
  );
}
