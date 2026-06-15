import Link from "next/link";
import { RevealBlock, SlideUp, ScrollFillText } from "@/components/AnimatedText";

export default function CTABanner() {
  return (
    <section className="py-20 bg-white" aria-labelledby="cta-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <RevealBlock className="mb-3">
          <p className="text-[#a73a8d] text-sm font-bold uppercase tracking-widest">
            Siempre disponibles
          </p>
        </RevealBlock>
        <h2 id="cta-title" className="text-4xl sm:text-5xl font-black text-[#312664] leading-tight mb-4">
          <SlideUp>Estamos cerca tuyo.</SlideUp>
          <ScrollFillText>Donde vos estés.</ScrollFillText>
        </h2>
        <p className="text-gray-500 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Contactanos para cualquier consulta o ante una emergencia.
          Disponibles las 24 horas, los 365 días del año.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">

          {/* Contacto */}
          <Link
            href="/contacto"
            className="group flex flex-col items-center gap-3 p-7 rounded-3xl border-2 border-[#1961AC] hover:bg-[#1961AC] transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#1961AC]/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg className="w-6 h-6 text-[#1961AC] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="font-black text-[#1961AC] group-hover:text-white text-lg transition-colors">Contactanos</p>
              <p className="text-gray-400 group-hover:text-white/70 text-sm transition-colors">Formulario de contacto</p>
            </div>
          </Link>

          {/* Emergencias */}
          <a
            href="tel:40008888"
            className="group flex flex-col items-center gap-3 p-7 rounded-3xl bg-red-50 border-2 border-red-200 hover:bg-red-600 hover:border-red-600 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="font-black text-red-600 group-hover:text-white text-lg transition-colors">Emergencias</p>
              <p className="text-red-400 group-hover:text-white/70 text-sm font-semibold transition-colors">
                4000-8888 · 4556-4556
              </p>
            </div>
          </a>
        </div>

        {/* Señal regulatoria */}
        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <span>
            Supervisado por la{" "}
            <a href="https://www.sssalud.gob.ar" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-gray-600 transition-colors">
              Superintendencia de Servicios de Salud
            </a>
            {" "}· 0800-222-SALUD (72583)
          </span>
        </div>
      </div>
    </section>
  );
}
