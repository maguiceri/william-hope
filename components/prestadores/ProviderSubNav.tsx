"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/prestadores/soy-prestador",          label: "Soy prestador" },
  { href: "/prestadores/quiero-ser-prestador",    label: "Quiero ser prestador" },
  { href: "/prestadores/recomenda-tu-prestador",  label: "Recomendá a tu prestador" },
] as const;

export default function ProviderSubNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Secciones de prestadores" className="mt-8">
      <div
        className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={[
                "flex-shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium",
                "transition-[background-color,color] duration-150 motion-reduce:transition-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138C9E] focus-visible:ring-offset-2",
                active
                  ? "bg-[#2D2A68] text-white"
                  : "text-[#5A5A66] hover:bg-[#E8E9EE] hover:text-[#2D2A68]",
              ].join(" ")}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
