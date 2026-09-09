import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CERTIFICATIONS, QUALITY_QUOTE } from "../data/content";
import { Reveal, usePrefersReducedMotion } from "../lib/motion";
import { CertPaper } from "./CertArt";

const AUTOPLAY_MS = 10000;

export default function Certifications() {
  const total = CERTIFICATIONS.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const touchX = useRef<number | null>(null);

  const go = useCallback((dir: 1 | -1) => setActive((a) => (a + dir + total) % total), [total]);

  /* autoplay — pauses on hover / focus / hidden tab / reduced motion */
  useEffect(() => {
    if (paused || reduced || total < 2) return;
    const t = setInterval(() => {
      if (!document.hidden) setActive((a) => (a + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, reduced, total]);

  /* shortest signed offset around the circular deck: -⌊n/2⌋ … ⌈n/2⌉ */
  const offsets = useMemo(
    () =>
      CERTIFICATIONS.map((_, i) => {
        let off = i - active;
        if (off > total / 2) off -= total;
        if (off < -total / 2) off += total;
        return off;
      }),
    [active, total],
  );

  const slideStyle = (off: number): CSSProperties => {
    const a = Math.abs(off);
    if (a > 2) {
      const dir = Math.sign(off) || 1;
      return { transform: `translate(-50%, -50%) translateX(${dir * 115}%) scale(0.55)`, opacity: 0, zIndex: 10, pointerEvents: "none" };
    }
    if (off === 0) return { transform: "translate(-50%, -50%)", opacity: 1, zIndex: 30, pointerEvents: "none", filter: "none" };
    const s = Math.sign(off);
    return {
      transform: `translate(-50%, -50%) translateX(${off * 42}%) scale(${a === 1 ? 0.82 : 0.64}) rotateY(${s * (a === 1 ? -20 : -30)}deg)`,
      opacity: a === 1 ? 0.92 : 0.55,
      filter: `brightness(${a === 1 ? 0.72 : 0.5})`,
      zIndex: 20 - a,
    };
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const x0 = touchX.current;
    touchX.current = null;
    setPaused(false);
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  const cert = CERTIFICATIONS[active];

  return (
    <section id="certifications" className="blueprint-grid-dark relative scroll-mt-24 overflow-hidden bg-ink py-24 lg:py-32">
      {/* soft green glow, kept restrained */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(closest-side, #C9DDA0, transparent 70%)" }}
      />

      <div className="wrap relative">
        <Reveal>
          <p className="flex items-center justify-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
            <span aria-hidden="true" className="h-px w-10 bg-brand/60" />
            Certifications & Quality
            <span aria-hidden="true" className="h-px w-10 bg-brand/60" />
          </p>
        </Reveal>
        <Reveal delay={110}>
          <h2 className="mt-6 text-center font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
            Certified. Audited. <em className="italic text-brand">Trusted.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-white/60">
            TÜV SÜD certified quality, environmental and safety management systems adhering strictly
            to ISO standards — alongside OEM vendor approvals and zero-defect heavy fabrication protocols.
          </p>
        </Reveal>

        {/* ---------- 3D certificate deck ---------- */}
        <Reveal delay={180}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Veer Laser Fab certifications"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="relative mx-auto mt-14 w-full max-w-5xl select-none rounded-card outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
            style={{ perspective: "1400px" }}
          >
            {/* prev / next */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous certificate"
              className="absolute -left-1 top-1/2 z-40 flex h-10 w-10 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/80 text-white/90 backdrop-blur transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-ink sm:left-2 lg:h-12 lg:w-12"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next certificate"
              className="absolute -right-1 top-1/2 z-40 flex h-10 w-10 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/80 text-white/90 backdrop-blur transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-ink sm:right-2 lg:h-12 lg:w-12"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
            </button>

            {/* deck */}
            <div className="relative h-[235px] sm:h-[315px] lg:h-[355px]">
              {CERTIFICATIONS.map((c, i) => {
                const off = offsets[i];
                return (
                  <div
                    key={c.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${total} — ${c.title}`}
                    aria-hidden={off !== 0}
                    onClick={() => off !== 0 && setActive(i)}
                    className={`absolute left-1/2 top-1/2 aspect-[0.72] h-[210px] sm:h-[290px] lg:h-[330px] ${off !== 0 ? "cursor-pointer" : ""} ${reduced ? "" : "transition-all duration-700"}`}
                    style={{ ...slideStyle(off), transitionTimingFunction: "var(--ease-out-expo)", willChange: "transform, opacity" }}
                  >
                    <CertPaper c={c} />
                  </div>
                );
              })}
              {/* floor glow */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] bottom-0 h-8 rounded-[100%] bg-black/70 blur-xl" />
            </div>

            {/* dots */}
            <div className="mt-8 flex items-center justify-center gap-2.5">
              {CERTIFICATIONS.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show certificate ${i + 1}: ${c.title}`}
                  aria-current={i === active ? "true" : undefined}
                  className={`relative h-2 overflow-hidden rounded-full transition-all duration-500 ${i === active ? "w-8 bg-white/15" : "w-2 bg-white/25 hover:bg-white/50"}`}
                >
                  {i === active &&
                    (reduced || paused ? (
                      <span className="absolute inset-0 rounded-full bg-brand" />
                    ) : (
                      <span key={active} className="cert-dot-fill absolute inset-0 rounded-full bg-brand" />
                    ))}
                </button>
              ))}
            </div>

            {/* active caption */}
            <div aria-live="polite" className="mt-6 text-center">
              <div key={active} className="animate-fade-in-up">
                <p className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {cert.title} <span className="text-brand">· {cert.subtitle}</span>
                </p>
                <p className="mt-2 font-sans text-[12px] tracking-wide text-white/50">
                  {[cert.issuer, cert.certNo].filter(Boolean).join("  ·  ")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-lg italic leading-relaxed text-white/40">
            “{QUALITY_QUOTE}”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
