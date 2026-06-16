"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type SimpleItem   = { label: string; href: string; dropdown?: never };
type DropdownItem = { label: string; href?: never; dropdown: { label: string; href: string }[] };
type NavItem = SimpleItem | DropdownItem;

const navItems: NavItem[] = [
  { label: "Inicio",    href: "/home" },
  { label: "Nosotros",     href: "/nosotros" },
  { label: "Soy afiliado", href: "/afiliado" },
  { label: "Prestadores",    href: "/prestadores" },
  { label: "Comunidad Hope", href: "/comunidad-hope" },
  { label: "Contacto",       href: "/contacto" },
];

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Header() {
  const [drawerOpen, setDrawerOpen]       = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [hovered, setHovered]             = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  // On pages other than home the intro sequence never runs,
  // so we set intro-done immediately so the header becomes visible.
  useEffect(() => {
    if (pathname !== "/home" && pathname !== "/") {
      document.body.classList.add("intro-done");
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      {/* Pill navbar */}
      <div className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-3">
        {/* Gradient border ring — intensifica al hacer scroll */}
        <div
          className={`
            wh-from-top max-w-6xl mx-auto p-[1.5px] rounded-2xl
            transition-all duration-300
            ${scrolled
              ? "bg-gradient-to-r from-[#1961AC] via-[#a73a8d] to-[#00A4B8] shadow-lg shadow-[#1961AC]/12"
              : "bg-gradient-to-r from-[#1961AC]/28 via-[#a73a8d]/28 to-[#00A4B8]/28 shadow-md shadow-black/5"
            }
          `}
        >
        <nav
          aria-label="Navegación principal"
          className={`
            flex items-center justify-between
            px-4 sm:px-5 h-14 rounded-[14.5px]
            transition-all duration-300
            ${scrolled
              ? "bg-white/92 backdrop-blur-xl"
              : "bg-white/72 backdrop-blur-md"
            }
          `}
        >
          {/* Logo */}
          <Link href="/home" className="flex-shrink-0" aria-label="William Hope — Inicio">
            <Image
              src="https://www.whope.com.ar/img/logo.svg"
              alt="William Hope"
              width={148} height={44} priority
              className="h-8" style={{ width: "auto" }}
            />
          </Link>

          {/* Nav — desktop */}
          <ul className="hidden lg:flex items-center gap-0.5 text-sm font-medium">
            {navItems.map((item) =>
              item.dropdown ? (
                /* Ítem con dropdown */
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHovered(item.label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-[#312664]/80 hover:text-[#312664] hover:bg-[#312664]/6 transition-colors whitespace-nowrap"
                    aria-haspopup="true"
                    aria-expanded={hovered === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${hovered === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Panel dropdown */}
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-150 ${
                      hovered === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                    onMouseEnter={() => setHovered(item.label)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="bg-white/92 backdrop-blur-xl rounded-xl shadow-lg border border-white/60 py-1.5 min-w-[190px]">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 mx-1 text-sm text-[#312664]/80 hover:text-[#312664] hover:bg-[#312664]/5 rounded-lg transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                /* Ítem simple */
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-1.5 rounded-xl text-[#312664]/80 hover:text-[#312664] hover:bg-[#312664]/6 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTAs — desktop */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a
              href="tel:40008888"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-[#DC2626] bg-[#DC2626]/8 hover:bg-[#DC2626]/14 border border-[#DC2626]/20 transition-[background-color] whitespace-nowrap"
              aria-label="Teléfono de emergencias 4000-8888"
            >
              <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.07 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span className="hidden xl:inline">Emergencias · </span>4000-8888
            </a>
            <a
              href="https://cartilla.whopesalud.com.ar/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-[#00A4B8] bg-[#00A4B8]/8 hover:bg-[#00A4B8]/14 border border-[#00A4B8]/25 transition-[background-color,color] whitespace-nowrap"
            >
              Cartilla
            </a>
            <Link
              href="/quiero-afiliarme"
              className="px-5 py-2 rounded-full text-sm font-bold text-white gradient-brand hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap"
            >
              Afiliate ahora
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl hover:bg-[#312664]/6 transition-colors gap-1.5"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label={drawerOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-5 h-0.5 bg-[#1961AC] rounded-full transition-all duration-200 origin-center ${drawerOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1961AC] rounded-full transition-all duration-200 ${drawerOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1961AC] rounded-full transition-all duration-200 origin-center ${drawerOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 lg:hidden ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer — mobile */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menú de navegación"
        className={`fixed top-0 right-0 z-50 h-full w-[min(18rem,calc(100vw-3rem))] flex flex-col transform transition-transform duration-300 ease-out lg:hidden
          bg-white/90 backdrop-blur-xl shadow-2xl border-l border-white/60
          ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100/80">
          <Image src="https://www.whope.com.ar/img/logo.svg" alt="William Hope" width={120} height={36} className="h-8" style={{ width: "auto" }} />
          <button
            className="w-11 h-11 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={() => setDrawerOpen(false)}
            aria-label="Cerrar menú"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.label}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-[#312664] font-semibold hover:bg-[#312664]/5 transition-colors text-sm"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 text-[#312664]/40 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileExpanded === item.label ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-4 mb-1 flex flex-col gap-0.5 border-l-2 border-[#a73a8d]/20 pl-3">
                      {item.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block px-2 py-2.5 rounded-lg text-sm text-[#312664]/70 hover:text-[#a73a8d] hover:bg-[#a73a8d]/5 transition-colors font-medium"
                            onClick={() => setDrawerOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-3 rounded-xl text-[#312664] font-semibold hover:bg-[#312664]/5 hover:text-[#a73a8d] transition-colors text-sm"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="px-4 pt-4 pb-2 border-t border-gray-100/80 flex flex-col gap-2">
          <a
            href="tel:40008888"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-semibold text-[#DC2626] bg-[#DC2626]/8 border border-[#DC2626]/20 hover:bg-[#DC2626]/14 transition-colors text-sm"
            aria-label="Teléfono de emergencias 4000-8888"
          >
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.07 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Emergencias · 4000-8888
          </a>
          <Link
            href="/quiero-afiliarme"
            className="flex items-center justify-center w-full py-3 rounded-full font-bold text-white gradient-brand hover:opacity-90 transition-opacity text-sm shadow-md"
            onClick={() => setDrawerOpen(false)}
          >
            Afiliate ahora
          </Link>
        </div>
      </div>
    </>
  );
}
