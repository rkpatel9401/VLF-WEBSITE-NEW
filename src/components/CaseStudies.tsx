import { useEffect, useRef, useState } from "react";
import { img, MILACRON, OTHER_WORK, SUZLON } from "../data/content";
import { Reveal } from "../lib/motion";
import { IconTick } from "./Icons";
import SectionHeading from "./SectionHeading";

type CaseData = Omit<typeof SUZLON, "video"> & { video?: string; gallery?: string[] };

function CaseBlock({ c, flip }: { c: CaseData; flip?: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const gallery = c.gallery ?? [];
  /* clone the first slide at the end so the loop wraps seamlessly */
  const slides = gallery.length > 1 ? [...gallery, gallery[0]] : gallery;
  const [idx, setIdx] = useState(0);
  const [animate, setAnimate] = useState(true);

  /* auto-advance forward one slide at a time */
  useEffect(() => {
    if (gallery.length <= 1) return;
    const t = window.setInterval(() => {
      setIdx((i) => i + 1);
    }, 4500);
    return () => window.clearInterval(t);
  }, [gallery.length]);

  /* when we reach the cloned first slide, let the wipe finish then
     snap back to the real first slide with the transition off —
     visually seamless because both show the same first image */
  useEffect(() => {
    if (gallery.length <= 1) return;
    if (idx === gallery.length) {
      const id = window.setTimeout(() => {
        setAnimate(false);
        setIdx(0);
      }, 1500);
      return () => window.clearTimeout(id);
    }
    setAnimate(true);
  }, [idx, gallery.length]);

  /* Play the video only while it's actually on screen — paused (and not
     decoding) when scrolled out of view, resumed instantly when visible.
     Same autoplay/loop/muted experience while visible; just no wasted
     CPU/battery/bandwidth rendering frames nobody can see. */
  useEffect(() => {
    if (!c.video) return;
    const el = videoRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const p = el.play();
      if (p !== undefined) p.catch(() => {});
      return;
    }
    const tryPlay = () => {
      const p = el.play();
      if (p !== undefined) p.catch(() => {});
    };
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) tryPlay();
          else el.pause();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    el.addEventListener("loadeddata", tryPlay);
    return () => {
      obs.disconnect();
      el.removeEventListener("loadeddata", tryPlay);
    };
  }, [c.video]);
  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-8">
      {/* text head — label + title (first on mobile so the media sits inside the story) */}
      <div className={`lg:col-span-5 lg:row-start-1 ${flip ? "lg:order-2 lg:col-start-8" : "lg:order-1 lg:col-start-1"}`}>
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-dark">
            {c.label}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h3 className="mt-4 font-display text-3xl xs:text-4xl font-semibold leading-[1.08] tracking-[-0.015em] text-ink sm:text-5xl lg:text-[3.4rem]">
            {c.titleAccent ? (
              <>
                {c.titleAccent.pre}
                <em className="italic text-brand-dark">{c.titleAccent.em}</em>
              </>
            ) : (
              c.title
            )}
          </h3>
        </Reveal>
      </div>

      {/* image / video */}
      <Reveal className={`lg:col-span-7 lg:row-span-2 lg:row-start-1 ${flip ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-6"}`}>
        <figure className="img-zoom crosshair relative overflow-hidden rounded-card border-4 border-ink">
          {c.video ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={c.image}
                aria-label={c.imageAlt}
                className="aspect-[16/10] w-full object-cover pointer-events-none"
                width={1600}
                height={1000}
              >
                <source src={c.video} type="video/mp4" />
              </video>
              <div className="absolute right-2 bottom-2 z-20">
                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 shadow-lift">
                  <img src="/logo.jpg" alt="Veer Laser Fab logo" className="h-full w-full object-contain" />
                </span>
              </div>
            </>
          ) : (
            <>
              {gallery.length > 1 ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <div
                    className={`absolute top-0 bottom-0 left-0 flex will-change-transform ${
                      animate
                        ? "transition-transform duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                        : ""
                    }`}
                    style={{
                      transform: `translateX(-${(idx * 100) / slides.length}%)`,
                      width: `${slides.length * 100}%`,
                    }}
                  >
                    {slides.map((src, i) => (
                      <img
                        key={`${i}-${src}`}
                        src={img(src)}
                        alt={c.imageAlt}
                        width={1600}
                        height={1000}
                        className="h-full shrink-0 object-cover"
                        style={{ width: `${100 / slides.length}%` }}
                      />
                    ))}
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute right-3 bottom-3 flex gap-1.5"
                  >
                    {gallery.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                          i === idx % gallery.length ? "bg-brand" : "bg-white/60"
                        }`}
                      />
                    ))}
                  </span>
                </div>
              ) : (
                <img
                  src={img(c.image)}
                  alt={c.imageAlt}
                  className="aspect-[16/10] w-full object-cover"
                  width={1600}
                  height={1000}
                  loading="lazy"
                />
              )}
            </>
          )}
        </figure>
      </Reveal>

      {/* text rest — client chip, body, includes, tags, footnote */}
      <div className={`lg:col-span-5 ${flip ? "lg:col-start-8" : "lg:col-start-1"}`}>
        <Reveal delay={140}>
          <p className="mt-4 inline-flex items-center gap-2 rounded-btn border border-steel-light bg-canvas px-3.5 py-2 font-sans text-[11px] font-semibold tracking-[0.12em] text-ink">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
            CLIENT — {c.client.toUpperCase()}
          </p>
        </Reveal>
        {/* modern meta strip — sits right after the case study text begins */}
        {!c.video && (
          <Reveal delay={200} className="mt-6">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-light/70 via-white to-canvas p-[1.5px] shadow-[0_10px_28px_rgba(23,24,28,0.08)] transition-shadow duration-500 hover:shadow-[0_14px_36px_rgba(127,168,78,0.22)]">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[14.5px] border border-brand/25 bg-white/90 px-4 py-3 backdrop-blur-sm">
                <span className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-brand-dark">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-brand" />
                  {c.footnote.split("·").filter((p: string) => p.trim() && p.trim() !== "·").join(" · ") ||
                    "Veer Laser Fab"}
                </span>
                <span aria-hidden="true" className="hidden h-4 w-px bg-steel-light sm:block" />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft/60">
                  In-house cut · weld · machine · finish
                </span>
              </div>
            </div>
          </Reveal>
        )}
        <div className="mt-5 space-y-4">
          {c.body.map((p: string, i: number) => (
            <Reveal key={i} delay={180 + i * 70}>
              <p className="text-[15px] leading-[1.7] text-ink-soft/85">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260} className="mt-7">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-steel">
            {c.includes.length === 8 ? "What This Assembly Includes" : "Scope Snapshot"}
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {c.includes.map((item: string) => (
              <li key={item} className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink">
                <IconTick className="h-[18px] w-[18px] shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={320} className="mt-7">
          <div className="flex flex-wrap gap-2">
            {c.tags.map((t: string) => (
              <span
                key={t}
                className="rounded-btn bg-steel-light px-3 py-1.5 font-sans text-[11px] font-medium text-ink-soft transition-colors duration-300 hover:bg-brand-light hover:text-brand-dark"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={360} className="hidden sm:block">
          <p className="mt-7 border-t border-steel-light pt-4 font-sans text-[10px] leading-relaxed tracking-[0.1em] text-steel">
            {c.footnote}
          </p>
        </Reveal>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="wrap">
        <SectionHeading
          index="04"
          eyebrow="Case Studies"
          title={
            <>
              Proof, <em className="italic text-brand-dark">Not Promises.</em>
            </>
          }
          desc="Two flagship programmes that show how Veer Laser Fab runs serial production for OEM clients — documented, batched and delivered on schedule."
        />

        <div className="mt-16 space-y-24 lg:space-y-32">
          <CaseBlock c={SUZLON} />
          <CaseBlock c={MILACRON} flip />
        </div>

        {/* other fabrication work — compact */}
        <div className="mt-10 lg:mt-12">
          <Reveal className="mb-5 flex items-center gap-4">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-dark">
              More Fabrication Work
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-steel-light" />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_WORK.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 90}>
                <article className="group flex h-full items-center gap-3.5 overflow-hidden rounded-xl border border-steel-light bg-white p-3 shadow-[0_4px_14px_rgba(23,24,28,0.05)] transition-all duration-400 hover:border-brand/60 hover:shadow-[0_12px_24px_rgba(127,168,78,0.15)]">
                  <figure className="img-zoom relative h-[64px] w-[88px] shrink-0 overflow-hidden rounded-lg border border-steel-light sm:h-[70px] sm:w-[96px]">
                    <img
                      src={img(w.image)}
                      alt={w.alt}
                      className="h-full w-full object-cover"
                      width={600}
                      height={450}
                      loading="lazy"
                    />
                    <span className="absolute left-1.5 top-1.5 rounded-md bg-ink/85 px-1.5 py-0.5 font-sans text-[8px] font-bold tracking-[0.14em] text-white backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figure>
                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 font-sans text-[12.5px] font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-brand-dark">
                      {w.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[11.5px] leading-snug text-ink-soft/70">{w.caption}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
