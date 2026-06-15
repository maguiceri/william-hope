import Link from "next/link";
import { RevealBlock, SlideUp, ScrollFillText } from "@/components/AnimatedText";

const stats = [
  { value: "+50",    unit: "años",       label: "brindando cobertura médica", dark: true },
  { value: "100k",   unit: "afiliados",  label: "en todo el país",            dark: false },
  { value: "24 / 7", unit: "horas",      label: "de atención disponible",     dark: false },
  { value: "100+",   unit: "beneficios", label: "exclusivos en Club Hope",    dark: true },
];

export default function Nosotros() {
  return (
    <section className="py-20 bg-white overflow-hidden" aria-labelledby="nosotros-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <RevealBlock>
                <p className="text-[#a73a8d] text-sm font-bold uppercase tracking-widest">
                  Sobre nosotros
                </p>
              </RevealBlock>
              <h2 id="nosotros-title" className="text-4xl sm:text-5xl font-black text-[#312664] leading-tight">
                <SlideUp>Nos renovamos</SlideUp>
                <ScrollFillText>para vos.</ScrollFillText>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lo más importante para William Hope son las personas. Somos{" "}
                <strong className="text-[#1961AC] font-bold">personas pensando en personas</strong>,
                y trabajamos cada día para brindarte la cobertura que merecés,
                con la calidez y cercanía que te hace sentir acompañado.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Con más de 50 años en el sistema de salud argentino, renovamos
                constantemente nuestros servicios para estar donde vos estés,
                cuando más nos necesitás.
              </p>
            </div>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 w-fit px-7 py-3.5 rounded-full font-bold text-white gradient-brand hover:opacity-90 transition shadow-md"
            >
              Conocé más sobre nosotros
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`rounded-3xl p-6 flex flex-col gap-1 ${
                  s.dark
                    ? "gradient-brand text-white"
                    : "bg-[#f6f8fc] border border-[#e4e7f0]"
                }`}
              >
                <div className={`flex items-baseline gap-1 ${s.dark ? "text-white" : "text-[#312664]"}`}>
                  <span className="text-4xl font-black leading-none">{s.value}</span>
                  <span className="text-sm font-bold opacity-75">{s.unit}</span>
                </div>
                <p className={`text-sm leading-snug font-medium ${s.dark ? "text-white/75" : "text-gray-500"}`}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
