import { useEffect, useState } from "react";
import { FACILITIES, img, type Machine } from "../data/content";
import { Reveal } from "../lib/motion";
import {
  IconCrane,
  IconCncMachining,
  IconLaserCut,
  IconPressBrake,
  IconSupport,
  IconTubeCut,
} from "./Icons";
import SectionHeading from "./SectionHeading";

const MACHINE_ICONS: Record<Machine["icon"], (p: { className?: string }) => JSX.Element> = {
  laser: IconLaserCut,
  tube: IconTubeCut,
  brake: IconPressBrake,
  cnc: IconCncMachining,
  support: IconSupport,
  crane: IconCrane,
};

const UNIT_IDS = ["unit1", "unit2"] as const;

type Facility = (typeof FACILITIES)[number];

/* One unit's full panel: photo + meta on the left, machine register on the right */
function UnitPanel({ unit }: { unit: Facility }) {
  return (
    <div className="animate-fade-in-up">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* image + meta */}
            <div className="lg:col-span-5">
              <figure className="crosshair relative overflow-hidden rounded-2xl border-2 border-ink/80 bg-steel-light/40 shadow-[0_10px_30px_rgba(23,24,28,0.12)]">
                <img
                  src={img(unit.image)}
                  alt={unit.imageAlt}
                  className="img-zoom aspect-[4/5] w-full object-contain p-2 lg:aspect-[3/4]"
                  width={1200}
                  height={1500}
                  loading="lazy"
                />
              </figure>
              <div className="mt-6 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-btn border border-steel-light bg-white px-3 py-1.5 font-sans text-[11px] font-semibold tracking-[0.12em] text-ink">
                    {unit.established}
                  </span>
                  <span className="rounded-btn border border-steel-light bg-white px-3 py-1.5 font-sans text-[11px] font-semibold tracking-[0.12em] text-ink">
                    {unit.area} COVERED
                  </span>
                  {unit.badge && (
                    <span className="rounded-btn bg-brand px-3 py-1.5 font-sans text-[11px] font-semibold tracking-[0.12em] text-white">
                      {unit.badge}
                    </span>
                  )}
                </div>
                <p className="font-sans text-[12px] leading-relaxed text-ink-soft/65">{unit.address}</p>
                <p className="text-[15px] leading-relaxed text-ink-soft/85">{unit.blurb}</p>
              </div>

            </div>

            {/* machine spec cards */}
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand font-display text-sm font-bold text-white shadow-[0_6px_14px_rgba(127,168,78,0.35)]">
                  ⚙
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  Machinery Register —{" "}
                  <em className="italic text-brand-dark">{unit.name}</em>
                </h3>
                <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-brand/50 to-transparent sm:block" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {unit.machines.map((m, i) => {
                  const Icon = MACHINE_ICONS[m.icon];
                  return (
                    <Reveal key={m.name} delay={i * 70} className="h-full">
                      <article className="group relative h-full overflow-hidden rounded-card border border-brand/40 bg-white shadow-[0_14px_34px_rgba(23,24,28,0.08)] transition-all duration-500">
                        {/* permanent top accent */}
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-100 bg-gradient-to-r from-brand via-brand-dark to-brand"
                        />
                        {/* permanent corner glow */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/15 blur-2xl opacity-100"
                        />

                        {/* header band */}
                        <div className="relative flex items-start gap-3.5 border-b border-steel-light bg-canvas/70 px-5 py-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand bg-brand text-white shadow-[0_6px_16px_rgba(127,168,78,0.35)]">
                            <Icon className="h-5.5 w-5.5" />
                          </span>
                          <div className="min-w-0">
                            <span aria-hidden="true" className="block font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-steel">
                              Machine 0{i + 1}
                            </span>
                            <h4 className="mt-0.5 font-display text-[15.5px] font-semibold leading-snug text-ink">
                              {m.name}
                            </h4>
                          </div>
                        </div>

                        {/* model chip */}
                        <div className="px-5 pt-3.5">
                          <p className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-light to-brand-light/40 px-3 py-1 font-sans text-[10.5px] font-bold uppercase tracking-[0.08em] text-brand-dark ring-1 ring-brand/60">
                            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-brand" />
                            {m.model}
                          </p>
                        </div>

                        {/* spec rows */}
                        <dl className="mt-3 px-5 pb-5">
                          {m.specs.map((s) => (
                            <div
                              key={s.k}
                              className="group/spec flex items-baseline justify-between gap-4 border-b border-dashed border-steel-light py-2 last:border-0"
                            >
                              <dt className="flex items-center gap-2 text-[12px] font-medium text-ink-soft/60 transition-colors duration-200 group-hover/spec:text-ink-soft">
                                <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-brand/60" />
                                {s.k}
                              </dt>
                              <dd className="text-right font-sans text-[13px] font-semibold tabular-nums text-ink">
                                {s.v}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
    </div>
  );
}

export default function Facilities() {
  const [activeId, setActiveId] = useState<"unit1" | "unit2">("unit2");
  const unit = FACILITIES.find((f) => f.id === activeId)!;

  /* Desktop: default to Unit 2, then switch to Unit 1 every 60 seconds */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveId((cur) => UNIT_IDS[(UNIT_IDS.indexOf(cur) + 1) % UNIT_IDS.length]);
    }, 60000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="facilities" className="blueprint-grid relative scroll-mt-24 bg-canvas py-24 lg:py-32">
      <div className="wrap">
        <SectionHeading
          index="01"
          eyebrow="Facilities"
          title={
            <>
              Two Units. <em className="italic text-brand-dark">One Standard.</em>
            </>
          }
          desc="12,000+ m² of combined production floor across Kathwada and Kuha — every machine listed below is on our floor, not a subcontractor's."
        />

        {/* Desktop: interactive toggle (hidden on mobile) — default Unit 2, auto-switches every 60s */}
        <Reveal className="mt-12 hidden lg:block">
          <div className="grid grid-cols-2 gap-3" role="tablist" aria-label="Production units">
            {FACILITIES.map((f) => {
              const activeUnit = f.id === activeId;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={activeUnit}
                  onClick={() => setActiveId(f.id)}
                  className={`group flex items-center justify-between gap-4 rounded-2xl border px-6 py-5 text-left transition-all duration-400 ${
                    activeUnit
                      ? "border-ink/60 bg-black text-white shadow-[0_14px_30px_rgba(23,24,28,0.25)] ring-1 ring-ink/30"
                      : "border-steel-light bg-white hover:border-brand/40 hover:bg-brand-light/30"
                  }`}
                >
                  <span>
                    <span
                      className={`block font-display text-xl font-semibold ${
                        activeUnit ? "text-white" : "text-ink"
                      }`}
                    >
                      {f.name}
                    </span>
                    <span
                      className={`mt-1 block font-sans text-[11px] font-medium tracking-[0.14em] ${
                        activeUnit ? "text-white/70" : "text-ink-soft/60"
                      }`}
                    >
                      {f.location.toUpperCase()} · {f.established}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                      activeUnit ? "border-brand bg-brand" : "border-steel group-hover:border-brand"
                    }`}
                  >
                    {activeUnit && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Mobile: both units stacked — Unit 1 first, then Unit 2, each with a static unit container (no switching) */}
        <div className="mt-12 space-y-20 lg:hidden">
          {FACILITIES.map((f) => (
            <div key={f.id}>
              <div
                aria-hidden="true"
                className="flex items-center justify-between gap-3 rounded-2xl border border-ink/60 bg-black px-4 py-3.5 text-left shadow-[0_14px_30px_rgba(23,24,28,0.25)] ring-1 ring-ink/30"
              >
                <span>
                  <span className="block font-display text-lg font-semibold text-white">{f.name}</span>
                  <span className="mt-1 block font-sans text-[10px] font-medium tracking-[0.12em] text-white/70">
                    {f.location.toUpperCase()} · {f.established}
                  </span>
                </span>
                <span aria-hidden="true" className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              </div>
              <div className="mt-8">
                <UnitPanel unit={f} />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: active unit panel */}
        <div key={unit.id} className="mt-12 hidden animate-fade-in-up lg:block">
          <UnitPanel unit={unit} />
        </div>

          <Reveal className="mt-10">
            <p className="rounded-2xl border border-ink/10 bg-ink px-4 py-3.5 sm:px-6 sm:py-4 text-center font-sans text-[10px] sm:text-[11px] font-semibold leading-relaxed tracking-[0.1em] sm:tracking-[0.16em] text-white shadow-[0_14px_32px_rgba(23,24,28,0.25)]">
              ALL OPERATIONS UNDER ISO 9001:2015 DOCUMENTED WORKFLOWS · IN-HOUSE QC & INSPECTION ·
              EOT-SERVED BAYS
            </p>
          </Reveal>
      </div>
    </section>
  );
}
