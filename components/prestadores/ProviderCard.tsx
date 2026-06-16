import { ReactNode } from "react";

// ── Meta icons ──────────────────────────────────────────────────────────────

export function RefreshIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export interface ProviderCardProps {
  title: string;
  accent: string;
  icon: ReactNode;
  description: ReactNode;
  meta: string;
  metaType: "refresh" | "calendar";
  label: string;
  href?: string;
}

export default function ProviderCard({
  title, accent, icon, description, meta, metaType, label, href = "#",
}: ProviderCardProps) {
  return (
    <div className="h-full flex flex-col bg-white border border-[#E8E9EE] rounded-2xl p-[22px] hover:shadow-lg hover:-translate-y-0.5 transition-[box-shadow,transform] duration-200 motion-reduce:transition-none">

      <div
        className="w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
        style={{ backgroundColor: `${accent}1A` }}
        aria-hidden="true"
      >
        <span style={{ color: accent }} className="[&_svg]:w-5 [&_svg]:h-5">{icon}</span>
      </div>

      <h3 className="font-medium text-[#2D2A68] text-base mb-2 leading-snug">{title}</h3>

      <div className="text-[#5A5A66] text-sm leading-relaxed flex-1 mb-3">{description}</div>

      <div className="flex items-center gap-1.5 text-xs text-[#5A5A66]/70 mb-5">
        <span style={{ color: accent }}>
          {metaType === "refresh" ? <RefreshIcon /> : <CalendarIcon />}
        </span>
        <span>{meta}</span>
      </div>

      <a
        href={href}
        download
        className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium
          transition-[background-color,color] duration-150 motion-reduce:transition-none
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138C9E] focus-visible:ring-offset-2"
        style={{ borderColor: accent, color: accent }}
      >
        <DownloadIcon />
        {label}
      </a>
    </div>
  );
}
