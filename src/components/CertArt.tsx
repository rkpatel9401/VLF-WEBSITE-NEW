/* Decorative certificate-face artwork for the Certifications carousel.
   Each certificate is drawn with CSS + inline SVG — no image assets needed.
   To use real certificate scans later: add an `image?: string` field to the
   certificate in src/data/content.ts, put the file in /public/certificates/,
   and render <img> instead of the drawn face. */

import type { Certificate } from "../data/content";

export function Seal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 68" className={className} aria-hidden="true">
      <path d="M25 50 20 63l7-3 2.6 4.4L33 54z" fill="#c9a227" />
      <path d="M39 50 44 63l-7-3-2.6 4.4L31 54z" fill="#b8912f" />
      <circle cx="32" cy="32" r="22" fill="#e0b73f" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="#a8821f" strokeWidth="3" strokeDasharray="3.4 2.8" />
      <circle cx="32" cy="32" r="15.5" fill="none" stroke="#a8821f" strokeWidth="1.4" />
      <path d="m32 24.5 2.3 4.7 5.2.7-3.8 3.6.9 5.1-4.6-2.4-4.6 2.4.9-5.1-3.8-3.6 5.2-.7z" fill="#8a6a15" />
    </svg>
  );
}

/* 7×7 decorative QR pattern — stylistic, not scannable */
const QR_M = [
  [1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1],
];

export function QR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 7 7" className={className} aria-hidden="true" shapeRendering="crispEdges">
      {QR_M.flatMap((row, r) =>
        row.map((v, c) =>
          v ? <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="currentColor" /> : null,
        ),
      )}
    </svg>
  );
}

export function Signature({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 26"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M4 18c10-12 16 8 26-2s16 6 26-4 14 6 24-2 16 0 24-4" />
      <path d="M6 23h58" opacity="0.4" strokeWidth="1" />
    </svg>
  );
}

function Emblem({ label, accent }: { label: string; accent: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white font-sans text-[5.5px] font-black tracking-tight sm:h-6 sm:w-6 sm:text-[8px]"
      style={{ color: accent, boxShadow: `0 0 0 1.5px ${accent}33` }}
    >
      {label}
    </span>
  );
}

export function CertPaper({ c }: { c: Certificate }) {
  return (
    <div className="h-full w-full rounded-[9px] bg-[#0d0f12] p-[3%] ring-1 ring-white/10 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.9)]">
      {c.image ? (
        <img
          src={c.image}
          alt={`${c.title} — ${c.subtitle}`}
          className="h-full w-full rounded-[3px] object-cover"
          loading="lazy"
          draggable={false}
        />
      ) : (
      <div
        className="relative flex h-full w-full flex-col overflow-hidden rounded-[3px] bg-[#f8f5ec] text-ink"
        style={{
          backgroundImage:
            "radial-gradient(130% 90% at 50% 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 55%), radial-gradient(100% 70% at 50% 100%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 60%)",
        }}
      >
        {/* ornate double rule */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-[6px] z-10 border" style={{ borderColor: `${c.accent}59` }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-[10px] z-10 border" style={{ borderColor: `${c.accent}26` }} />

        {/* header band */}
        <div
          className="relative flex shrink-0 items-center justify-center gap-1.5 py-2 sm:gap-2.5 sm:py-3"
          style={{ background: `linear-gradient(180deg, ${c.accent}, ${c.accent}dd)` }}
        >
          {c.emblems.map((e, idx) => (
            <Emblem key={idx} label={e} accent={c.accent} />
          ))}
          <span className="font-sans text-[7px] font-bold uppercase tracking-[0.24em] text-white sm:text-[9.5px]">
            {c.badge}
          </span>
        </div>

        {/* body */}
        <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-[9%] text-center">
          <p className="font-sans text-[6px] font-semibold uppercase leading-snug tracking-[0.26em] text-ink/50 sm:text-[8px]">
            {c.docTitle}
          </p>
          <p className="mt-1.5 font-display text-[14px] font-black tracking-tight text-ink sm:mt-2.5 sm:text-[19px]">
            VEER LASER FAB
          </p>
          <span aria-hidden="true" className="mt-1.5 flex items-center gap-1.5 sm:mt-2">
            <span className="h-px w-6" style={{ background: `${c.accent}55` }} />
            <span className="h-1 w-1 rotate-45" style={{ background: c.accent }} />
            <span className="h-px w-6" style={{ background: `${c.accent}55` }} />
          </span>
          <p className="mt-1.5 font-display text-[12px] font-bold leading-tight sm:mt-2 sm:text-[16px]" style={{ color: c.accent }}>
            {c.title}
          </p>
          <p className="mt-1 font-sans text-[6.5px] font-medium leading-snug text-ink-soft/85 sm:text-[8.5px]">{c.subtitle}</p>
          {c.certNo && <p className="mt-1 font-mono text-[6px] tracking-wide text-ink/60 sm:text-[7.5px]">{c.certNo}</p>}
          {c.scope && <p className="mt-0.5 font-sans text-[6px] italic text-ink/55 sm:text-[7.5px]">{c.scope}</p>}
          <p className="mt-1.5 max-w-[92%] font-sans text-[5.5px] uppercase leading-relaxed tracking-[0.16em] text-ink/40 sm:text-[7px]">
            {c.issuer}
          </p>
        </div>

        {/* footer: seal · signature · qr */}
        <div className="relative flex shrink-0 items-end justify-between px-[8%] pb-[5%]">
          <Seal className="h-6 w-6 sm:h-9 sm:w-9" />
          <div className="flex flex-col items-center">
            <Signature className="h-3 w-14 text-ink/70 sm:h-4 sm:w-20" />
            <span className="mt-0.5 border-t border-ink/30 px-3 pt-0.5 font-sans text-[5px] uppercase tracking-[0.2em] text-ink/45 sm:text-[6.5px]">
              Authorised Signatory
            </span>
          </div>
          <QR className="h-5 w-5 text-ink/60 sm:h-7 sm:w-7" />
        </div>
      </div>
      )}
    </div>
  );
}