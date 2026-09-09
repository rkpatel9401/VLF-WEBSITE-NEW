import { FOUNDER_QUOTE, img, STORY, VALUES } from "../data/content";
import { Reveal } from "../lib/motion";
import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";

export default function About() {
  return (
    <section id="about" className="blueprint-grid relative scroll-mt-24 bg-canvas py-24 lg:py-32">
      <div className="wrap">
        {/* our journey — comes first */}
        <Timeline />

        <div className="mt-24 grid items-start gap-14 lg:mt-32 lg:grid-cols-12 lg:gap-16">
          {/* image column */}
          <div className="lg:col-span-5">
            <Reveal className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-4 -top-4 hidden h-full w-full rounded-card border border-brand/40 sm:block"
              />
              <figure className="crosshair relative overflow-hidden rounded-card">
                <img
                  src={img("/images/about-us.jpg")}
                  alt="Veer Laser Fab welder in green coveralls fabricating a steel assembly on the Kathwada shop floor"
                  className="img-zoom aspect-[9/16] w-full object-cover"
                  width={1024}
                  height={1280}
                  loading="lazy"
                />
                <figcaption className="sr-only">Fabrication floor, Unit 1, Kathwada GIDC</figcaption>
              </figure>
              <div className="absolute -bottom-6 right-4 rounded-btn bg-ink px-5 py-4 shadow-lift sm:right-6">
                <p className="font-sans text-xs font-semibold tracking-[0.12em] text-white">
                  EST. 2018 — KATHWADA GIDC
                </p>
                <p className="mt-1 font-sans text-[10px] tracking-[0.14em] text-brand">
                  50+ SKILLED TEAM MEMBERS
                </p>
              </div>
            </Reveal>
          </div>

          {/* content column */}
          <div className="lg:col-span-7">
            <SectionHeading
              index="10"
              eyebrow="Who We Are"
              title={
                <>
                  A Precision Manufacturing Group{" "}
                  <em className="italic text-brand-dark">Built From the Ground Up</em>
                </>
              }
            />

            <div className="mt-9 space-y-5">
              {STORY.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p
                    className={`leading-[1.7] text-ink-soft/85 ${
                      i === 0 ? "text-lg font-medium text-ink" : "text-base"
                    }`}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <blockquote className="mt-10 border-l-[3px] border-brand pl-6 sm:pl-8">
                <p className="font-display text-2xl font-medium italic leading-snug text-ink sm:text-[1.7rem]">
                  “{FOUNDER_QUOTE.text}”
                </p>
                <cite className="mt-4 block font-sans text-xs font-semibold not-italic tracking-[0.18em] text-brand-dark">
                  — {FOUNDER_QUOTE.author.toUpperCase()} · {FOUNDER_QUOTE.role.toUpperCase()}
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* five values */}
        <div className="mt-24">
          <Reveal className="mb-8 flex items-center gap-4">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-dark">
              The Five Tolerances We Never Relax
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-steel-light" />
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
                <div className="spec-card group relative h-full overflow-hidden rounded-card border border-steel-light bg-white p-4 sm:p-6">
                  <span
                    aria-hidden="true"
                    className="absolute left-4 sm:left-6 top-0 h-1 w-8 sm:w-10 rounded-b-full bg-brand"
                  />
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 sm:mt-3 text-[12px] sm:text-[13px] leading-relaxed text-ink-soft/75">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
