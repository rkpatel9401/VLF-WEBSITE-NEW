import { useState } from "react";
import { CAPACITY_HIGHLIGHTS, PRODUCTS, type Product } from "../data/content";
import { Reveal } from "../lib/motion";
import SectionHeading from "./SectionHeading";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "process", label: "Process Equipment" },
  { key: "fabricated", label: "Fabricated Components" },
] as const;

export default function Products() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const shown = PRODUCTS.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="products" className="blueprint-grid relative scroll-mt-24 bg-canvas py-24 lg:py-32">
      <div className="wrap">
        <SectionHeading
          index="02"
          eyebrow="What We Build"
          title={
            <>
              Process Equipment & <em className="italic text-brand-dark">Fabricated Components</em>
            </>
          }
          desc="Drawn as engineering line-work below — every item is manufactured to customer drawings in MS, SS304 and SS316."
        />

        <Reveal className="mt-10 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`rounded-btn border px-5 py-2.5 font-sans text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                filter === f.key
                  ? "border-ink bg-ink text-white shadow-lift"
                  : "border-steel-light bg-white text-ink-soft hover:border-brand hover:text-brand-dark"
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div key={filter} className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {shown.map((p: Product, i) => (
            <div key={p.name} className="animate-fade-in-up" style={{ animationDelay: `${i * 40}ms` }}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-card bg-white shadow-[0_10px_26px_rgba(23,24,28,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(127,168,78,0.2)]">
                {/* top brand edge */}
                <span aria-hidden="true" className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-brand via-brand-dark to-brand" />

                {/* image stage */}
                <div className="product-art relative aspect-square overflow-hidden bg-gradient-to-br from-brand-light/40 via-canvas to-white">
                  <figure className="absolute inset-2 sm:inset-3 overflow-hidden rounded-lg border border-ink/10">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* legibility gradient */}
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                    {/* corner ticks */}
                    <span aria-hidden="true" className="absolute left-2 top-2 sm:left-2.5 sm:top-2.5 h-3 w-3 sm:h-4 sm:w-4 border-l-2 border-t-2 border-white/80" />
                    <span aria-hidden="true" className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-r-2 border-white/80" />
                  </figure>

                  {/* index watermark */}
                  <span aria-hidden="true" className="absolute right-2.5 top-2 sm:right-3 sm:top-2.5 font-display text-2xl sm:text-3xl font-bold leading-none text-white/30 drop-shadow-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* accent base-line under image */}
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand via-brand-dark to-brand" />
                </div>

                {/* body */}
                <div className="relative flex flex-1 flex-col p-3.5 sm:p-5">
                  <h3 className="font-display text-[15px] font-semibold leading-snug text-ink sm:text-[18px]">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex items-start gap-1.5 font-sans text-[11.5px] sm:text-[12.5px] leading-relaxed text-ink-soft/75">
                    <span aria-hidden="true" className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{p.spec}</span>
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* capacity highlights bar */}
        <Reveal className="mt-12 sm:mt-14">
          <div className="rounded-card bg-ink px-5 py-7 sm:px-8 sm:py-9">
            <p className="text-center font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-brand">
              Capacity Highlights
            </p>
            <div className="mt-6 sm:mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-x-8 sm:gap-y-6">
              {CAPACITY_HIGHLIGHTS.map((c, idx) => (
                <div key={c.k} className={idx === 4 ? "col-span-2 sm:col-span-1" : ""}>
                  <p className="font-sans text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white/45">{c.k}</p>
                  <p className="mt-1.5 sm:mt-2 font-sans text-base sm:text-lg font-semibold text-white">{c.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
