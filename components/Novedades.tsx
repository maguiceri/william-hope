import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Descuento en medicación crónica",
    img: "https://www.whope.com.ar/uploads/news/6568b5eacacb5812.97393972-Credencial%20f%C3%ADsica%20(9).png",
    href: "/novedades/descuento-medicacion-cronica",
    tag: "Medicamentos",
    gradient: "linear-gradient(135deg, #1961AC 0%, #312664 100%)",
  },
  {
    title: "Salud Mental",
    img: "https://www.whope.com.ar/uploads/news/89765c387d1379576.15985191-07-02_febrero_Portada-web_Salud-mental-AA.png",
    href: "/novedades/salud-mental",
    tag: "Bienestar",
    gradient: "linear-gradient(135deg, #00A4B8 0%, #1961AC 100%)",
  },
  {
    title: "Recetas electrónicas obligatorias",
    img: "https://www.whope.com.ar/uploads/news/97668a8b4a61ffb89.24711793-Credencial%20f%C3%ADsica%20(2).png",
    href: "/novedades/recetas-electronicas",
    tag: "Trámites",
    gradient: "linear-gradient(135deg, #312664 0%, #1961AC 100%)",
  },
  {
    title: "Emergencias y visitas a domicilio",
    img: "https://www.whope.com.ar/uploads/news/55765c38eed85ec12.53446606-07-02_febrero_Portada-web_Emergencias-AA.png",
    href: "/novedades/emergencias",
    tag: "Emergencias",
    gradient: "linear-gradient(135deg, #a73a8d 0%, #312664 100%)",
  },
  {
    title: "Requisitos para prestaciones por Diabetes",
    img: "https://www.whope.com.ar/uploads/news/75663c054319ef0e6.29014132-11-01_Enero_Portada-Diabetes_1.png",
    href: "/novedades/diabetes",
    tag: "Cobertura",
    gradient: "linear-gradient(135deg, #1961AC 0%, #00A4B8 100%)",
  },
  {
    title: "Consulta médica virtual",
    img: null,
    href: "/novedades/consulta-virtual",
    tag: "Digital",
    gradient: "linear-gradient(135deg, #00A4B8 0%, #312664 100%)",
  },
  {
    title: "Coseguros",
    img: "https://www.whope.com.ar/uploads/news/19465c38f7e5eb3f2.55136535-07-02_febrero_Portada-web_coseguros-AA.png",
    href: "/novedades/coseguros",
    tag: "Cobertura",
    gradient: "linear-gradient(135deg, #312664 0%, #a73a8d 100%)",
  },
  {
    title: "Cobertura Plan Médico Obligatorio",
    img: "https://www.whope.com.ar/uploads/news/13165c390c42abcc9.01350804-07-02_febrero_Portada-web_cobertura-plan-AA.png",
    href: "/novedades/cobertura-pmo",
    tag: "Cobertura",
    gradient: "linear-gradient(135deg, #1961AC 0%, #312664 100%)",
  },
  {
    title: "Identidad de Género – Ley N° 26.743",
    img: null,
    href: "/novedades/identidad-genero",
    tag: "Derechos",
    gradient: "linear-gradient(135deg, #a73a8d 0%, #00A4B8 100%)",
  },
];

const tagStyles: Record<string, string> = {
  Medicamentos: "bg-blue-100 text-blue-700",
  Bienestar:    "bg-teal-100 text-teal-700",
  Trámites:     "bg-yellow-100 text-yellow-700",
  Emergencias:  "bg-red-100 text-red-700",
  Cobertura:    "bg-purple-100 text-purple-700",
  Digital:      "bg-cyan-100 text-cyan-700",
  Derechos:     "bg-pink-100 text-pink-700",
};

export default function Novedades() {
  return (
    <section className="py-20 bg-[#f6f8fc]" aria-labelledby="novedades-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-[#a73a8d] text-sm font-bold uppercase tracking-widest mb-1">
              Mantenete informado
            </p>
            <h2 id="novedades-title" className="text-3xl sm:text-4xl font-black text-[#312664] leading-tight">
              Novedades
            </h2>
          </div>
          <Link
            href="/novedades"
            className="flex-shrink-0 flex items-center gap-1.5 text-[#1961AC] font-bold text-sm hover:text-[#a73a8d] transition-colors group"
            aria-label="Ver todas las novedades"
          >
            Ver todas
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
            >
              <div
                className="relative aspect-[500/292] w-full overflow-hidden"
                style={{ background: item.img ? undefined : item.gradient }}
              >
                {item.img ? (
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="text-white/30 text-xs font-bold uppercase tracking-widest">William Hope</span>
                  </div>
                )}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${item.img ? (tagStyles[item.tag] ?? "bg-gray-100 text-gray-600") : "bg-white/20 text-white"}`}>
                  {item.tag}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                <h3 className="font-bold text-[#312664] text-sm leading-snug line-clamp-2 group-hover:text-[#a73a8d] transition-colors">
                  {item.title}
                </h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-[#1961AC] group-hover:gap-2 transition-all">
                  Leer más
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/novedades"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-[#1961AC] border-2 border-[#1961AC] hover:bg-[#1961AC] hover:text-white transition-colors text-sm"
          >
            Ver todas las novedades
          </Link>
        </div>
      </div>
    </section>
  );
}
