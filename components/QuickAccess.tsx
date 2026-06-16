import Link from "next/link";

const tiles = [
  {
    href: "/afiliado",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    title: "Soy Afiliado",
    desc: "Credencial, turnos y trámites",
    from: "#1961AC",
    to: "#312664",
  },
  {
    href: "https://cartilla.whopesalud.com.ar/auth/login",
    external: true,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Cartilla Médica",
    desc: "Profesionales y centros",
    from: "#00A4B8",
    to: "#1961AC",
  },
  {
    href: "tel:40008888",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Emergencias",
    desc: "Médico a domicilio 24/7",
    from: "#c0392b",
    to: "#e74c3c",
    highlight: true,
  },
  {
    href: "https://cartilla.whopesalud.com.ar/auth/login",
    external: true,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Club Hope",
    desc: "+100 beneficios exclusivos",
    from: "#a73a8d",
    to: "#312664",
  },
];

export default function QuickAccess() {
  return (
    <section className="border-b border-white/10" aria-label="Accesos rápidos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-0 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {tiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              {...(tile.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{ background: `linear-gradient(135deg, ${tile.from} 0%, ${tile.to} 100%)` }}
              className={`
                group relative overflow-hidden rounded-2xl p-5 sm:p-6 flex flex-col gap-3
                text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5
                transition-all duration-200
                ${tile.highlight ? "ring-2 ring-red-300 ring-offset-1" : ""}
              `}
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-6 translate-x-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <div className="relative z-10">
                <div className="mb-3 opacity-90">{tile.icon}</div>
                <p className="font-black text-base sm:text-lg leading-tight">{tile.title}</p>
                <p className="text-white/75 text-xs sm:text-sm mt-1 leading-snug">{tile.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-white/70 text-xs font-semibold mt-auto">
                <span>Ingresar</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
