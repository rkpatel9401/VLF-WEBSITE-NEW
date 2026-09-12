import { useEffect, useRef, useState } from "react";
import { HERO, img } from "../data/content";
import { Scramble, usePrefersReducedMotion } from "../lib/motion";
import StatsStrip from "./StatsStrip";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  /* gentle parallax on the hero background only */
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${window.scrollY * 0.16}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section id="top" className={`relative flex min-h-screen items-end overflow-hidden bg-ink min-h-[640px] sm:min-h-[720px] ${loaded ? "hero-in" : ""}`}>
      {/* background photo with parallax wrapper + slow zoom.
          Art direction: dedicated portrait shot on phones (<md),
          original wide shot on md+ screens. */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <picture>
          <source
            media="(max-width: 767.98px)"
            srcSet={img("/images/hero-mobile.jpg")}
            width={2160}
            height={3840}
          />
          <img
            src={img("/images/hero-background.webp")}
            alt="Veer Laser Fab precision CNC fiber laser cutting machine head in operation"
            className="animate-hero-zoom h-full w-full object-cover object-[70%_60%] md:object-center"
            width={2048}
            height={1120}
            {...({ fetchpriority: "high" } as object)}
            decoding="async"
          />
        </picture>
      </div>
      {/* legibility gradient + brand green tint */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(23,24,28,0.95) 0%, rgba(23,24,28,0.55) 35%, rgba(23,24,28,0.15) 65%, rgba(23,24,28,0.35) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "linear-gradient(115deg, rgba(127,168,78,0.18) 0%, rgba(127,168,78,0) 55%)",
        }}
      />

      {/* vertical side rail */}
      <p
        aria-hidden="true"
        className="absolute bottom-40 right-7 hidden font-sans text-[10px] font-medium tracking-[0.4em] text-white/40 [writing-mode:vertical-rl] xl:block"
      >
        VEER LASER FAB — AHMEDABAD, GUJARAT — EST. 2018
      </p>

      <div className="wrap relative z-10 w-full pb-36 pt-24 xs:pb-40 xs:pt-28 sm:pb-44 sm:pt-40 md:pb-48 lg:pb-52">
        <div className="max-w-[840px]">
          <p className="mb-4 sm:mb-7 flex items-center gap-2.5 sm:gap-3">
            <span aria-hidden="true" className="inline-block h-2 w-2 bg-brand" />
            <Scramble
              text={HERO.eyebrow}
              className="font-sans text-[9.5px] xs:text-[10px] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-brand sm:text-xs"
            />
          </p>

          <h1 className="font-display text-[2.15rem] xs:text-[2.65rem] font-bold leading-[1.04] tracking-[-0.02em] text-white sm:text-6xl lg:text-[5.1rem]">
            <span className="mask-line">
              <span>{HERO.titleLines[0]}</span>
            </span>
            <span className="mask-line">
              <span className="italic text-brand" style={{ transitionDelay: "120ms" }}>
                {HERO.titleLines[1]}
              </span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "240ms" }}>{HERO.titleLines[2]}</span>
            </span>
          </h1>

          <p
            className={`mt-4 sm:mt-7 max-w-[600px] text-[14.5px] xs:text-base leading-relaxed text-white/75 transition-all duration-1000 sm:text-lg ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "420ms" }}
          >
            {HERO.sub}
          </p>
        </div>
      </div>

      {/* key figures strip pinned to the bottom of the hero */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 transition-all duration-1000 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <StatsStrip />
      </div>
    </section>
  );
}
