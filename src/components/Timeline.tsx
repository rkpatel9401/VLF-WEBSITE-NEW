import { TIMELINE } from "../data/content";
import { Reveal } from "../lib/motion";
import SectionHeading from "./SectionHeading";

export default function Timeline() {
  return (
    <section aria-label="Company journey" className="relative scroll-mt-24">
      <div className="relative mt-16 lg:mt-20">
        <SectionHeading
          index="09"
          eyebrow="Our Journey"
          title={
            <>
              From One Machine to <em className="italic text-brand-dark">Two Facilities</em>
            </>
          }
          desc="Every year added a capability. Follow the milestones the group was built on."
        />

        {/* desktop: alternating timeline — fits the full width, no scroll */}
        <div className="relative mt-16 hidden lg:block">
          {/* central axis line */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-brand/25" />
{/* continuous looping comet along the axis */}
          <span aria-hidden="true" className="animate-axis-travel absolute top-1/2 z-[5] h-[3px] w-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-brand to-brand shadow-[0_0_12px_rgba(127,168,78,0.8)]" />
          <div className="grid grid-cols-7 gap-2">
            {TIMELINE.map((t, i) => {
              const above = i % 2 === 0;
              return (
                <div key={t.year} className="relative h-[520px]">
                  {/* pulsing bullseye node on axis */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-brand bg-white"
                  >
                    <span className="absolute -inset-1.5 animate-ping rounded-full bg-brand/30" />
                  </span>
                  {/* vertical connector */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 z-0 w-[2px] -translate-x-1/2 bg-brand/50 ${
                      above ? "bottom-1/2 mb-[4px] h-8" : "top-1/2 mt-[4px] h-8"
                    }`}
                  />

                  <Reveal
                    as="article"
                    delay={i * 90}
                    className={`absolute left-1 right-1 rounded-xl border-2 border-ink bg-brand p-3.5 text-white shadow-[0_10px_24px_rgba(127,168,78,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:bg-brand-dark ${
                      above ? "bottom-[calc(50%+14px)]" : "top-[calc(50%+14px)]"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/85 px-2 py-0.5 text-[10.5px] font-semibold tracking-wide">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white" />
                      {t.year}
                    </span>
                    <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/80">{t.category}</p>
                    <h3 className="mt-0.5 font-sans text-[13px] font-bold leading-tight text-ink">{t.title}</h3>
                    <p className="mt-1.5 text-[11px] leading-snug text-white/90">{t.body}</p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* tablet: scrollable slim version */}
        <div className="relative mt-14 hidden md:block lg:hidden">
          <span aria-hidden="true" className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-brand/25" />
          <div className="tl-scroll -mx-10 flex gap-3 overflow-x-auto px-10 pb-4">
            {TIMELINE.map((t, i) => {
              const above = i % 2 === 0;
              return (
                <div key={t.year} className="relative h-[520px] w-[230px] shrink-0">
                  <span aria-hidden="true" className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-brand bg-white">
                    <span className="absolute -inset-1.5 animate-ping rounded-full bg-brand/30" />
                  </span>
                  <span aria-hidden="true" className={`absolute left-1/2 z-0 w-[2px] -translate-x-1/2 bg-brand/50 ${above ? "bottom-1/2 mb-[4px] h-8" : "top-1/2 mt-[4px] h-8"}`} />
                  <Reveal as="article" delay={i * 90} className={`absolute left-1 right-1 rounded-xl border-2 border-ink bg-brand p-3.5 text-white shadow-[0_10px_24px_rgba(127,168,78,0.25)] ${above ? "bottom-[calc(50%+14px)]" : "top-[calc(50%+14px)]"}`}>
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/85 px-2 py-0.5 text-[10.5px] font-semibold">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white" />
                      {t.year}
                    </span>
                    <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/80">{t.category}</p>
                    <h3 className="mt-0.5 font-sans text-[13px] font-bold leading-tight text-ink">{t.title}</h3>
                    <p className="mt-1.5 text-[11px] leading-snug text-white/90">{t.body}</p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* mobile: stacked card timeline */}
        <div className="relative mt-12 sm:mt-14 md:hidden">
          <span aria-hidden="true" className="absolute bottom-2 left-[1.1rem] xs:left-[1.4rem] top-2 w-[2px] bg-brand/25" />
          <div className="space-y-5 sm:space-y-6">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 70} className="relative pl-8 xs:pl-11">
                <span aria-hidden="true" className="absolute left-[1.1rem] xs:left-[1.4rem] top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-[3px] border-brand bg-white">
                  <span className="absolute -inset-1.5 animate-ping rounded-full bg-brand/30" />
                </span>
                <article className="rounded-xl border-2 border-ink bg-brand p-3.5 sm:p-4 text-white shadow-sm">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/85 px-2 py-0.5 text-[10px] sm:text-[10.5px] font-semibold">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white" />
                    {t.year}
                  </span>
                  <p className="mt-2 text-[8.5px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-white/80">{t.category}</p>
                  <h3 className="mt-0.5 font-sans text-[13.5px] sm:text-[14px] font-bold text-ink">{t.title}</h3>
                  <p className="mt-1 text-[11.5px] sm:text-[12px] leading-snug text-white/90">{t.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
