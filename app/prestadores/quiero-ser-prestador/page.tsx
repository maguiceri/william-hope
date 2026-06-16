import { RevealBlock, SlideUp } from "@/components/AnimatedText";
import ProviderSubNav from "@/components/prestadores/ProviderSubNav";
import ProviderForm from "@/components/prestadores/ProviderForm";

export default function QuieroSerPrestadorPage() {
  return (
    <main className="flex-1">

      {/* 1 · Intro */}
      <div className="sm:sticky sm:top-0 z-10">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-14 pb-10" aria-labelledby="quiero-prestador-heading">
          <div className="max-w-7xl mx-auto">
            <RevealBlock>
              <p className="text-[#A12C8E] text-xs font-bold uppercase tracking-widest mb-3">
                Prestadores
              </p>
            </RevealBlock>
            <h1
              id="quiero-prestador-heading"
              className="text-4xl sm:text-5xl font-black text-[#2D2A68] leading-[1.05] tracking-tight mb-3 text-balance"
            >
              <SlideUp delay={40}>Sumate a nuestra</SlideUp>
              <SlideUp delay={140}>cartilla.</SlideUp>
            </h1>
            <RevealBlock delay={180}>
              <p className="text-[#5A5A66] text-lg leading-relaxed max-w-xl">
                Completá el formulario con tus datos y nos ponemos en contacto con vos para sumarte a nuestra red de prestadores.
              </p>
            </RevealBlock>
            <RevealBlock delay={240}>
              <ProviderSubNav />
            </RevealBlock>
          </div>
        </section>
      </div>

      {/* 2 · Formulario de postulación */}
      <div className="sm:sticky sm:top-0 z-20 rounded-t-[2.5rem] overflow-hidden sm:min-h-screen bg-[#2D2A68] relative">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none z-10" aria-hidden="true" />
          <ProviderForm variant="postulacion" />
      </div>

    </main>
  );
}
