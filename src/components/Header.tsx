import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../data/content";

const SECTION_IDS = ["facilities", "products", "services", "work", "industries", "gallery", "about", "contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  /* While a smooth scroll (nav click) is in flight, the scroll-spy must not
     fight it — otherwise the highlight flickers through intermediate
     sections. We suppress spy updates until scrolling settles. */
  const suppressSpyUntil = useRef(0);

  useEffect(() => {
    /* Which section is currently in view?
       Deterministic position check — works no matter when lazy sections
       mount, requires no observers, and can never "lose" a section. */
    const computeActive = (): string => {
      const line = window.innerHeight * 0.35; /* active zone: top 35% of viewport */
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }
      /* Products and Capabilities share one tab ("What We Do") — highlight it
         while the visitor is anywhere in either section. */
      if (current === "products") current = "services";
      return current;
    };

    /* rAF-batched: at most one state update per frame, and only when a value
       actually changes — avoids a React re-render on every scroll event. */
    let raf = 0;
    let lastScrolled: boolean | null = null;
    let lastProgress = -1;
    let lastActive = "";
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const scrolled = window.scrollY > 36;
        if (scrolled !== lastScrolled) {
          lastScrolled = scrolled;
          setScrolled(scrolled);
        }
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
        if (Math.abs(progress - lastProgress) > 0.05) {
          lastProgress = progress;
          setProgress(progress);
        }
        if (Date.now() >= suppressSpyUntil.current) {
          const a = computeActive();
          if (a !== lastActive) {
            lastActive = a;
            setActive(a);
          }
        }
      });
    };
    onScroll();
    /* Sections below the fold mount asynchronously (lazy chunks). Re-run the
       spy a few times after load so the highlight is correct even before the
       user scrolls. The scroll handler itself re-reads the DOM every tick,
       so it can never go stale. */
    const timers = [600, 1500, 3000].map((ms) => window.setTimeout(onScroll, ms));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      timers.forEach((t) => window.clearTimeout(t));
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* Clicking a tab: highlight it IMMEDIATELY, then hold the spy off until the
     smooth scroll has settled (no scroll events for 150 ms, capped at 2 s).
     After that the scroll-spy takes over again automatically. */
  const onNavClick = (id: string) => {
    setActive(id);
    suppressSpyUntil.current = Date.now() + 2000;
    let timer = 0;
    const settle = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        window.removeEventListener("scroll", settle);
        suppressSpyUntil.current = 0;
      }, 150);
    };
    window.addEventListener("scroll", settle, { passive: true });
    settle();
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Escape closes the mobile menu */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onDark = open || !scrolled;

  return (
    <>
      {/* scroll progress hairline */}
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[70] h-[3px] bg-brand transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          open
            ? "bg-transparent"
            : scrolled
              ? "bg-white/95 shadow-[0_1px_0_rgba(23,24,28,0.08),0_10px_30px_rgba(23,24,28,0.06)] backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
        <div
          className={`wrap flex items-center justify-between transition-all duration-500 ${
            scrolled && !open ? "h-16 md:h-[72px]" : "h-16 md:h-[88px]"
          }`}
        >
          <a href="#top" aria-label="Veer Laser Fab — home" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-sm md:h-14 md:w-14">
              <img
                src="/logo.jpg"
                alt="Veer Laser Fab logo"
                className="h-full w-full rounded-[0.65rem] object-contain"
              />
            </span>
            <span className={`flex flex-col leading-none ${onDark ? "text-white" : "text-ink"}`}>
              <span className="font-display text-lg font-extrabold tracking-tight md:text-[1.3rem]">
                VEER LASER FAB
              </span>
              <span className="mt-1 font-sans text-[9px] font-semibold uppercase tracking-[0.28em] text-brand">
                Precision Metal Fabrication
              </span>
            </span>
          </a>

          {/* single rounded tab container */}
          <nav
            aria-label="Primary"
            className={`hidden items-center gap-1 rounded-full border p-1.5 lg:flex ${
              onDark
                ? "border-white/20 bg-white/10 backdrop-blur-md"
                : "border-ink/10 bg-white/85 shadow-sm backdrop-blur-md"
            }`}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => onNavClick(l.href.slice(1))}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-semibold transition-all duration-300 ${
                  active === l.href.slice(1)
                    ? "bg-brand text-white shadow-sm"
                    : onDark
                      ? "text-white/85 hover:bg-white/15 hover:text-white"
                      : "text-ink/75 hover:bg-brand-light/70 hover:text-brand-dark"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`flex h-11 w-11 items-center justify-center rounded-btn border transition-colors lg:hidden ${
                onDark
                  ? "border-white/25 text-white hover:border-brand"
                  : "border-ink/15 text-ink hover:border-brand"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="blueprint-grid-dark flex h-full flex-col overflow-y-auto px-6 pb-10 pt-20 sm:pt-24">
          <nav aria-label="Mobile" className="flex flex-col gap-0.5">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => {
                  setOpen(false);
                  onNavClick(l.href.slice(1));
                }}
                className={`group flex items-center gap-3.5 border-b border-white/10 py-3.5 transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${100 + i * 45}ms` : "0ms" }}
              >
                <span className="font-sans text-xs font-semibold text-brand">0{i + 1}</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-white transition-colors group-hover:text-brand">
                  {l.label}
                </span>
              </a>
            ))}
          </nav>
          <div
            className={`mt-6 space-y-3 pt-4 border-t border-white/10 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "480ms" : "0ms" }}
          >
            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT.phoneHref[0]}
                className="inline-flex items-center gap-2 rounded-btn border border-white/20 bg-white/5 px-3 py-2 text-xs font-medium text-white/90"
              >
                📞 {CONTACT.phones[0]}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-btn border border-white/20 bg-white/5 px-3 py-2 text-xs font-medium text-white/90"
              >
                ✉️ {CONTACT.email}
              </a>
            </div>
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/40">
              Kathwada GIDC · Kuha — Ahmedabad
            </p>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full py-3 text-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
