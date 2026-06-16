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
    <section className="py-20 relative sm:min-h-screen flex flex-col justify-center" aria-labelledby="clubhope-title">
      {/* Mesh gradient — smoke blobs with brand palette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-20 w-[580px] h-[500px] rounded-full opacity-50"
          style={{ background: "radial-gradient(ellipse at center, #00A4B8 0%, transparent 68%)", filter: "blur(72px)" }} />
        <div className="absolute -bottom-40 -left-20 w-[520px] h-[480px] rounded-full opacity-45"
          style={{ background: "radial-gradient(ellipse at center, #a73a8d 0%, transparent 68%)", filter: "blur(80px)" }} />
        <div className="absolute top-1/2 -translate-y-1/2 left-[30%] w-[380px] h-[380px] rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse at center, #1961AC 0%, transparent 68%)", filter: "blur(64px)" }} />
        <div className="absolute -top-10 left-[10%] w-[280px] h-[280px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse at center, #312664 0%, transparent 65%)", filter: "blur(50px)" }} />
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

            {/* Descargá la app */}
            <div className="flex items-center gap-5">
              {/* QR — solo desktop: el usuario lo escanea con el celular desde la compu */}
              <div className="hidden lg:flex flex-col items-center gap-2 flex-shrink-0">
                {/* TODO: Cuando tengan la URL de descarga, instalar qrcode.react y reemplazar
                    este <img> por <QRCodeSVG value="URL_APP" size={80} bgColor="#fff" /> */}
                <div className="bg-white p-2 rounded-xl shadow-sm">
                  <img
                    src="/badges/qr-app.svg"
                    alt="Código QR para descargar la app William Hope"
                    width={80}
                    height={80}
                    className="block"
                  />
                </div>
                <p className="text-white/45 text-[9px] font-bold uppercase tracking-widest text-center leading-snug">
                  Escaneá para<br />descargar
                </p>
              </div>

              {/* Separador vertical — solo desktop */}
              <div className="hidden lg:block w-px h-[5.5rem] bg-white/15 flex-shrink-0" aria-hidden="true" />

              {/* Badges de tiendas */}
              <div className="flex flex-col gap-2.5">
                {/* TODO: Reemplazar href="#" con la URL real de la app en App Store */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar William Hope en App Store"
                  className="flex items-center gap-3 px-4 h-[42px] rounded-xl bg-white hover:bg-gray-50 transition-colors motion-reduce:transition-none w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2E2A6B]"
                >
                  {/* Apple logo */}
                  <svg className="w-6 h-6 flex-shrink-0 text-[#111]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.46 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                  </svg>
                  <div className="leading-tight">
                    <p className="text-[9px] text-gray-500 font-normal">Descargá en el</p>
                    <p className="text-[13.5px] text-[#111] font-bold -mt-px">App Store</p>
                  </div>
                </a>

                {/* TODO: Reemplazar href="#" con la URL real de la app en Google Play */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar William Hope en Google Play"
                  className="flex items-center gap-3 px-4 h-[42px] rounded-xl bg-white hover:bg-gray-50 transition-colors motion-reduce:transition-none w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2E2A6B]"
                >
                  {/* Google Play colorful icon */}
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M3 5.764v12.472L14.4 12z" />
                    <path fill="#34A853" d="M14.4 12l2.822 2.822-11.71 6.713z" />
                    <path fill="#FBBC04" d="M14.4 12L20.2 8.709v6.582z" />
                    <path fill="#EA4335" d="M5.512 4.465l11.71 6.713L14.4 12z" />
                  </svg>
                  <div className="leading-tight">
                    <p className="text-[9px] text-gray-500 font-normal">Disponible en</p>
                    <p className="text-[13.5px] text-[#111] font-bold -mt-px">Google Play</p>
                  </div>
                </a>
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
