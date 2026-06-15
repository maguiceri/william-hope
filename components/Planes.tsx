import Link from "next/link";
import { RevealBlock, StaggerWords, StaggerItem } from "@/components/AnimatedText";

const Icon = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    {d2 && <path strokeLinecap="round" strokeLinejoin="round" d={d2} />}
  </svg>
);

const ic = {
  globe:      <Icon d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.038 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.038-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
  sparkles:   <Icon d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
  eye:        <Icon d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" d2="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
  plus:       <Icon d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
  hospital:   <Icon d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />,
  users:      <Icon d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
  shield:     <Icon d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
  document:   <Icon d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />,
  cap:        <Icon d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
  megaphone:  <Icon d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />,
  chart:      <Icon d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
  clock:      <Icon d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
  map:        <Icon d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" d2="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
};

const planes = [
  {
    href: "/plan-now",
    name: "Plan NOW",
    subtitle: "Para jóvenes de 18 a 30 años.",
    cta: "/plan-now",
    accent: "#a73a8d",
    headerIcon: <Icon d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    benefits: [
      { icon: ic.globe,    text: "Asistencia al viajero incluida" },
      { icon: ic.sparkles, text: "Odontología y ortodoncia" },
      { icon: ic.eye,      text: "Descuentos en Ópticas" },
      { icon: ic.plus,     text: "Descuentos en Farmacias" },
    ],
  },
  {
    href: "/plan-individuos",
    name: "Plan Individuos",
    subtitle: "Para afiliados y grupos familiares.",
    cta: "/plan-individuos",
    accent: "#1961AC",
    headerIcon: <Icon d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />,
    benefits: [
      { icon: ic.hospital, text: "Centros médicos de primer nivel" },
      { icon: ic.users,    text: "Plan Materno Infantil" },
      { icon: ic.sparkles, text: "Odontología y ortodoncia" },
      { icon: ic.eye,      text: "Anteojos y lentes de contacto" },
    ],
  },
  {
    href: "/plan-empresas",
    name: "Plan Empresas",
    subtitle: "Para los colaboradores de tu empresa.",
    cta: "/plan-empresas",
    accent: "#312664",
    headerIcon: <Icon d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
    benefits: [
      { icon: ic.shield,    text: "Cobertura desde el día del ingreso" },
      { icon: ic.document,  text: "Acuerdo con Obras Sociales" },
      { icon: ic.cap,       text: "Plan especial para Pasantes" },
      { icon: ic.megaphone, text: "Charlas de prevención in company" },
    ],
  },
  {
    href: "/estudiantes",
    name: "Estudiantes de Intercambio",
    subtitle: "Para estudiantes internacionales en Argentina.",
    cta: "/estudiantes",
    accent: "#00A4B8",
    headerIcon: <Icon d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
    benefits: [
      { icon: ic.globe,  text: "Asistencia al viajero incluida" },
      { icon: ic.clock,  text: "Urgencias y emergencias 24 horas" },
      { icon: ic.map,    text: "Red de prestadores en todo el país" },
      { icon: ic.plus,   text: "Descuentos en Farmacias" },
    ],
  },
];

export default function Planes() {
  return (
    <section className="py-20 bg-white" aria-labelledby="planes-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <RevealBlock className="mb-2">
            <p className="text-[#a73a8d] text-sm font-bold uppercase tracking-widest">
              Cobertura para cada necesidad
            </p>
          </RevealBlock>
          <h2 id="planes-title" className="text-3xl sm:text-4xl font-black text-[#312664] leading-tight">
            <StaggerWords text="Elegí tu plan" stagger={90} />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {planes.map((plan, i) => (
            <StaggerItem key={plan.href} index={i}>
              <Link
                href={plan.href}
                className="group relative overflow-hidden rounded-3xl border border-[#e4e7f0] bg-white hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col gap-4 h-full"
              >
                {/* Tira de acento */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: plan.accent }}
                  aria-hidden="true"
                />

                {/* Cabecera */}
                <div className="flex items-start gap-3 pt-1">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${plan.accent}14`, color: plan.accent }}
                  >
                    {plan.headerIcon}
                  </div>
                  <div>
                    <p className="text-base font-black text-[#312664] leading-tight">{plan.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">{plan.subtitle}</p>
                  </div>
                </div>

                {/* Separador */}
                <div className="h-px bg-[#f0f0f5]" />

                {/* Beneficios */}
                <ul className="flex flex-col gap-2 flex-1">
                  {plan.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ background: `${plan.accent}12`, color: plan.accent }}
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full border transition-all duration-200"
                    style={{ borderColor: plan.accent, color: plan.accent }}
                  >
                    Conocé más beneficios
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </div>

      </div>
    </section>
  );
}
