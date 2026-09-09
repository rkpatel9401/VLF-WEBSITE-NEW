import { CAPACITY_TABLE, PERFORMANCE_CHIPS, SERVICES } from "../data/content";
import { Reveal } from "../lib/motion";
import { IconTick } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="wrap">
        <SectionHeading
          index="03"
          eyebrow="What We Do — End to End"
          title={
            <>
              Eight Capabilities. <em className="italic text-brand-dark">One Roof.</em>
            </>
          }
          desc="From raw plate to finished, assembled component — cutting, forming, machining, welding and finishing without a single hand-off outside the group."
        />

        {/* service grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            return (
              <Reveal key={s.title} delay={(i % 4) * 80}>
                <article className="group relative h-full overflow-hidden rounded-card border-2 border-ink bg-white shadow-[0_6px_20px_rgba(23,24,28,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand hover:shadow-[0_18px_40px_rgba(127,168,78,0.18)]">
                  <figure className="img-zoom relative aspect-[16/10] overflow-hidden bg-canvas">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent transition-colors duration-500 group-hover:from-brand-dark/80 group-hover:via-ink/30"
                    />
                    <span className="absolute left-4 top-3 font-display text-[2.2rem] font-bold leading-none text-white/25 transition-colors duration-500 group-hover:text-white/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="absolute bottom-3 left-4 right-4 font-display text-[17px] font-semibold leading-snug text-white drop-shadow">
                      {s.title}
                    </h3>
                  </figure>
                  <div className="relative p-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-light/70 px-2.5 py-1 font-sans text-[8.5px] font-bold uppercase tracking-[0.2em] text-brand-dark">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                      Capability {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 flex items-start gap-2.5 font-sans text-[13px] font-normal leading-relaxed text-ink-soft/80">
                      <IconTick className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                      <span>{s.line}</span>
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-4 block h-px w-10 bg-gradient-to-r from-brand via-brand-dark to-transparent transition-all duration-500 group-hover:w-full"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* capacity table */}
        <div className="mt-16 sm:mt-20">
          <Reveal className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-brand font-display text-base sm:text-lg text-white shadow-[0_6px_14px_rgba(127,168,78,0.35)]">
              ⚡
            </span>
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-2xl">
              Fiber Laser Cutting Capacity —{" "}
              <em className="italic text-brand-dark">Sheet</em>
            </h3>
            <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-brand/50 to-transparent sm:block" />
          </Reveal>
          <Reveal>
            <div className="w-full overflow-hidden rounded-card border border-steel-light bg-white shadow-[0_14px_36px_rgba(23,24,28,0.07)]">
              <table className="w-full table-fixed border-collapse text-left">
                <thead>
                  <tr className="bg-ink text-white">
                    <th
                      scope="col"
                      className="w-[38%] xs:w-[40%] sm:w-[35%] px-2.5 py-3 sm:px-5 sm:py-3.5 font-sans text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em]"
                    >
                      Material
                    </th>
                    <th
                      scope="col"
                      className="w-[18%] sm:w-[17%] px-1.5 py-3 sm:px-5 sm:py-3.5 text-center sm:text-right font-sans text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em]"
                    >
                      <span className="hidden sm:inline">Min (mm)</span>
                      <span className="sm:hidden">Min</span>
                    </th>
                    <th
                      scope="col"
                      className="w-[22%] sm:w-[24%] px-1.5 py-3 sm:px-5 sm:py-3.5 text-right font-sans text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em]"
                    >
                      <span className="hidden sm:inline">Unit 1 Max (2 kW)</span>
                      <span className="sm:hidden leading-tight block">
                        Unit 1<span className="block text-[8px] text-brand font-normal">2 kW</span>
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="w-[22%] sm:w-[24%] px-2 py-3 sm:px-5 sm:py-3.5 text-right font-sans text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em]"
                    >
                      <span className="hidden sm:inline">Unit 2 Max (12 kW)</span>
                      <span className="sm:hidden leading-tight block">
                        Unit 2<span className="block text-[8px] text-brand font-normal">12 kW</span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CAPACITY_TABLE.rows.map((r, ri) => (
                    <tr
                      key={r[0]}
                      className={`border-t border-steel-light/40 transition-colors duration-200 hover:bg-brand-light/40 ${
                        ri % 2 === 1 ? "bg-canvas/60" : "bg-white"
                      }`}
                    >
                      {/* Material name */}
                      <td className="px-2.5 py-2.5 sm:px-5 sm:py-3.5 text-[11.5px] xs:text-[12.5px] sm:text-[14px] font-medium leading-snug text-ink">
                        {r[0]}
                      </td>
                      {/* Min thickness */}
                      <td className="px-1.5 py-2.5 sm:px-5 sm:py-3.5 text-center sm:text-right font-sans text-[11.5px] xs:text-[12.5px] sm:text-[14px] font-semibold tabular-nums text-ink">
                        {r[1]} <span className="text-[9px] text-steel font-normal sm:hidden">mm</span>
                      </td>
                      {/* Unit 1 Max (2kW) */}
                      <td className="px-1.5 py-2.5 sm:px-5 sm:py-3.5 text-right font-sans text-[11.5px] xs:text-[12.5px] sm:text-[14px] font-semibold tabular-nums text-ink">
                        {r[2]} <span className="text-[9px] text-steel font-normal sm:hidden">mm</span>
                      </td>
                      {/* Unit 2 Max (12kW) */}
                      <td className="px-2 py-2.5 sm:px-5 sm:py-3.5 text-right font-sans text-[11.5px] xs:text-[12.5px] sm:text-[14px] font-bold tabular-nums text-brand-dark">
                        {r[3]} <span className="text-[9px] text-brand-dark/75 font-normal sm:hidden">mm</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-2.5 text-left font-sans text-[10.5px] sm:text-[11px] tracking-[0.04em] sm:tracking-[0.08em] text-steel">
              * Thickness capacities in mm on standard-grade sheets; test cuts available upon request for customer qualification.
            </p>
          </Reveal>
        </div>

        {/* performance chips — responsive badges on mobile, single row on desktop */}
        <Reveal className="mt-10 sm:mt-12">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-1.5 rounded-card border border-white/10 bg-ink p-2 sm:px-3 sm:py-1.5 shadow-[0_12px_28px_rgba(23,24,28,0.18)]">
            {PERFORMANCE_CHIPS.map((c, i) => (
              <span
                key={c}
                title={c}
                className="group flex min-w-0 sm:flex-1 animate-fade-in-up items-center justify-center gap-1 whitespace-nowrap rounded-full bg-white/5 sm:bg-transparent px-2.5 py-1 sm:px-1.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.02em] text-white/90 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <IconTick className="h-3.5 w-3.5 shrink-0 text-brand" />
                <span className="whitespace-nowrap sm:truncate">{c}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
