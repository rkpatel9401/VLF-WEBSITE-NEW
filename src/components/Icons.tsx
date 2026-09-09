/* Custom geometric line icons — 2px stroke, Lucide-matched language.
   Drawn for Veer Laser Fab's fabrication processes. */

type P = { className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconLaserCut({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M4 4h16" />
      <path d="M4 4v3M20 4v3" />
      <path d="M10.4 8h3.2l-.9 3h-1.4z" />
      <path d="M12 11v3.5" strokeDasharray="1.5 2.4" />
      <path d="M3 18h18" />
      <path d="M9.6 15.6 8 14.2M14.4 15.6 16 14.2" />
      <path d="M3 21h18" opacity="0.35" />
    </svg>
  );
}

export function IconTubeCut({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <ellipse cx="6.5" cy="12" rx="3" ry="6" />
      <path d="M6.5 6h10.5c1.9 0 3.5 2.7 3.5 6s-1.6 6-3.5 6H6.5" />
      <path d="M14 6.4v11.2" strokeDasharray="2 2.4" />
      <path d="M16.8 4.2 18.6 2.6M18 7.4h2.6M16.8 19.8l1.8 1.6" />
    </svg>
  );
}

export function IconPressBrake({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M12 2.5v4" />
      <path d="M9.4 6.5h5.2L12 11z" />
      <path d="M3 13.5l9 4 9-4" />
      <path d="M5 18v3.5h14V18" />
    </svg>
  );
}

export function IconCncMachining({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M4 4h16v4H4z" />
      <path d="M12 8v2.5" />
      <path d="M9.8 10.5h4.4v3h-4.4z" />
      <path d="M12 13.5v2" />
      <path d="M4 20h16" />
      <path d="M6.5 17h11" opacity="0.35" />
      <path d="M8 20v-1.5M16 20v-1.5" />
    </svg>
  );
}

export function IconWelding({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M14.5 3.5 18 7l-5.5 5.5-3.5-3.5z" />
      <path d="M9 10.5 6.5 13" />
      <path d="M4.5 15 3 16.5M7.5 17.5l-1 2M3.5 12.5 1.5 13" opacity="0.9" />
      <path d="M9 21h12" />
      <path d="M12.5 21c.5-1.6 2-2.5 3.5-2.5s3 .9 3.5 2.5" opacity="0.35" />
    </svg>
  );
}

export function IconStructure({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M3 18.5h18" />
      <path d="M3 18.5 8 8.5h8l5 10" />
      <path d="M8 8.5 12 18.5l4-10" />
      <path d="M12 8.5v-3M9.5 5.5h5" opacity="0.35" />
    </svg>
  );
}

export function IconSheetMetal({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M4 20V7l7-3.5L20 8v12" />
      <path d="M4 7l7 4 9-4" />
      <path d="M11 11v9" />
      <path d="M7 20h13" opacity="0.35" />
    </svg>
  );
}

export function IconVessel({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M8 5.5a4 2.3 0 0 1 8 0V17a4 2.3 0 0 1-8 0z" />
      <ellipse cx="12" cy="5.5" rx="4" ry="2.3" />
      <path d="M9.5 18.8 8.5 22M14.5 18.8l1 3.2" />
      <path d="M16 10h3.5M16 13h2.5" opacity="0.6" />
    </svg>
  );
}

export function IconCrane({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M3 5h18" />
      <path d="M6 5v15M18 5v15" opacity="0.35" />
      <path d="M12 5v4" />
      <circle cx="12" cy="11" r="2" />
      <path d="M12 13v3l-2.5 3h5L12 16" />
    </svg>
  );
}

export function IconSupport({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14.5 12l-2.5-2.5z" />
      <path d="M18 3l1.5 1.5L18 6l-1.5-1.5z" opacity="0.6" />
    </svg>
  );
}

export function IconSeal({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <circle cx="12" cy="9.5" r="6.5" />
      <circle cx="12" cy="9.5" r="3.4" strokeDasharray="2.2 2" opacity="0.7" />
      <path d="m9.6 9.8 1.7 1.7 3.1-3.6" />
      <path d="m8.4 14.9-2 6.1 5.6-2.4 5.6 2.4-2-6.1" />
    </svg>
  );
}

export function IconTick({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" opacity="0.4" />
      <path d="m8.5 12.2 2.6 2.6 4.9-5.6" />
    </svg>
  );
}

export function IconArrowRight({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" {...S} className={className} aria-hidden="true">
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* ---------- Brand logo mark: droplet over three layered V-wings ---------- */
export function LogoMark({ className, tone = "light" }: P & { tone?: "light" | "dark" }) {
  const wing1 = tone === "dark" ? "#FFFFFF" : "#17181C";
  return (
    <svg viewBox="0 0 44 46" className={className} aria-hidden="true">
      <path
        d="M22 3c4.6 5.4 7.4 8.9 7.4 12.4a7.4 7.4 0 1 1-14.8 0C14.6 11.9 17.4 8.4 22 3z"
        fill="#7FA84E"
      />
      <path d="M6 24.5 22 31l16-6.5" stroke={wing1} strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 31.5 22 38l16-6.5" stroke="#A9AFB6" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 38.5 22 45l16-6.5" stroke="#7FA84E" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark({ tone = "light", className }: P & { tone?: "light" | "dark" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className="h-10 w-10 shrink-0" tone={tone} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-black tracking-tight ${
            tone === "dark" ? "text-white" : "text-ink"
          }`}
        >
          VEER
        </span>
        <span className="font-sans text-[0.58rem] font-semibold tracking-[0.34em] text-brand">
          LASER&nbsp;FAB
        </span>
      </span>
    </span>
  );
}
