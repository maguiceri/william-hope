import Image from "next/image";
import Link from "next/link";
import { ScrambleText } from "@/components/AnimatedText";

const categories = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    label: "Turismo",
    desc: "Hoteles, agencias y escapadas",
    count: "40+",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 18m18-6H3" />
      </svg>
    ),
    label: "Gastronomía",
    desc: "Restaurantes y cafeterías",
    count: "30+",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    label: "Bienestar",
    desc: "Gimnasios y centros de salud",
    count: "25+",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
      </svg>
    ),
    label: "Comercios",
    desc: "Descuentos en tiendas",
    count: "15+",
  },
];

export default function ClubHope() {
  return (
    <section className="py-20 gradient-dark relative overflow-hidden" aria-labelledby="clubhope-title">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Identidad */}
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Image
                  src="https://www.whope.com.ar/img/logo.svg"
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={24}
                  className="brightness-0 invert opacity-90"
                />
              </div>
              <div>
                <p className="text-[#00A4B8] text-xs font-bold uppercase tracking-widest">Programa exclusivo</p>
                <h2 id="clubhope-title" className="text-3xl font-black text-white leading-tight">
                  <ScrambleText text="Club Hope" duration={1100} />
                </h2>
              </div>
            </div>

            <p className="text-white/75 text-lg leading-relaxed">
              Como afiliado de William Hope, accedés a más de{" "}
              <strong className="text-white">100 beneficios exclusivos</strong>{" "}
              en turismo, gastronomía, bienestar y más. Todo desde la app, en un toque.
            </p>

            {/* Instrucción de acceso */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/8 border border-white/15">
              <div className="w-8 h-8 rounded-xl gradient-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 4.5h3" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Cómo acceder</p>
                <p className="text-white/60 text-xs mt-0.5 leading-snug">
                  Descargá la app William Hope → tocá "Club Hope" → ¡listo!
                </p>
              </div>
            </div>

            <Link
              href="/club-hope"
              className="inline-flex items-center gap-2 w-fit px-7 py-3.5 rounded-full font-bold text-[#312664] bg-white hover:bg-gray-50 transition shadow-lg"
            >
              Descubrí los beneficios
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Categorías */}
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="p-5 rounded-2xl bg-white/8 border border-white/15 hover:bg-white/15 transition-colors flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00A4B8]">
                    {cat.icon}
                  </div>
                  <span className="text-xl font-black text-white/80">{cat.count}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{cat.label}</p>
                  <p className="text-white/55 text-xs mt-0.5">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
