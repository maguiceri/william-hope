import Image from "next/image";
import Link from "next/link";

const groups = [
  {
    title: "Afiliados",
    links: [
      { label: "Soy Afiliado",         href: "/afiliado" },
      { label: "Quiero Afiliarme",      href: "/quiero-afiliarme" },
      { label: "Credencial digital",    href: "/credencial" },
      { label: "Solicitar credencial",  href: "/credencial-fisica" },
      { label: "Solicitud de baja",     href: "/solicitud-baja" },
    ],
  },
  {
    title: "Cobertura",
    links: [
      { label: "Cartilla médica",      href: "/cartilla" },
      { label: "Centros médicos",      href: "/centros-medicos" },
      { label: "Prestadores",          href: "/prestadores" },
      { label: "Cobertura al viajero", href: "/cobertura-viaje" },
      { label: "Club Hope",            href: "/club-hope" },
    ],
  },
  {
    title: "Trámites",
    links: [
      { label: "Formulario de adhesión",   href: "/formulario-adhesion" },
      { label: "Formulario de reintegros", href: "/formulario-reintegros" },
      { label: "Factura electrónica",      href: "/factura-electronica" },
      { label: "Cambio de obra social",    href: "/cambio-obra-social" },
      { label: "Defensa del consumidor",   href: "/defensa-consumidores" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros",                   href: "/nosotros" },
      { label: "Blog",                       href: "/blog" },
      { label: "Estudiantes de Intercambio", href: "/estudiantes" },
      { label: "Contacto",                   href: "/contacto" },
    ],
  },
];

const social = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" strokeWidth="2" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" strokeWidth="2" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#312664] text-white" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cuerpo */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 py-14 border-b border-white/10">

          {/* Marca */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
            <Image
              src="https://www.whope.com.ar/img/wh-log-o-gradient.png"
              alt="William Hope"
              width={140}
              height={52}
              className="h-12 w-auto object-contain"
            />
            <p className="text-white/50 text-xs leading-relaxed">
              Obra social con más de 50 años cuidando la salud de las personas
              y sus familias en toda Argentina.
            </p>
            <div className="flex gap-2">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#a73a8d] hover:border-[#a73a8d] transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    {s.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Grupos de nav */}
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#00A4B8] mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/55 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergencias */}
        <div className="py-5 border-b border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Emergencias 24/7</p>
          <div className="flex gap-6">
            {[["4000-8888", "tel:40008888"], ["4556-4556", "tel:45564556"]].map(([num, tel]) => (
              <a key={tel} href={tel}
                className="flex items-center gap-2 text-white font-black hover:text-[#00A4B8] transition-colors">
                <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {num}
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>
            <span suppressHydrationWarning>© {new Date().getFullYear()}</span>
            {" "}William Hope · Personería Jurídica – Resol. IGJ Nº 0844 del 24/03/1972
          </p>
          <a href="https://www.sssalud.gob.ar" target="_blank" rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors">
            Superintendencia de Servicios de Salud · www.sssalud.gob.ar
          </a>
        </div>
      </div>
    </footer>
  );
}
