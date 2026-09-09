import {
  ArrowUpDown,
  Building2,
  Car,
  CircuitBoard,
  Cog,
  Factory,
  FlaskConical,
  Plug,
  RadioTower,
  Ship,
  Tractor,
  TrainFront,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { INDUSTRIES } from "../data/content";
import { Reveal } from "../lib/motion";
import SectionHeading from "./SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  CircuitBoard,
  ArrowUpDown,
  Car,
  Ship,
  Wind,
  FlaskConical,
  Cog,
  TrainFront,
  Plug,
  Tractor,
  Building2,
  Zap,
  Factory,
  RadioTower,
};

export default function Industries() {
  return (
    <section id="industries" className="blueprint-grid relative scroll-mt-24 bg-canvas py-24 lg:py-32">
      <div className="wrap">
        <SectionHeading
          index="05"
          eyebrow="Industries Served"
          title={
            <>
              Fourteen Sectors. <em className="italic text-brand-dark">One Tolerance Standard.</em>
            </>
          }
          desc="From control panels to wind towers — if it's metal and it matters, it's been through our machines."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[ind.icon] ?? Factory;
            return (
              <Reveal key={ind.name} delay={(i % 7) * 60}>
                <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-card bg-ink p-3 pt-4 sm:p-4 sm:pt-5 text-center shadow-[0_12px_26px_rgba(23,24,28,0.22)] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:ring-brand hover:shadow-[0_20px_40px_rgba(127,168,78,0.35)]">
                  {/* animated sheen sweep */}
                  <span
                    aria-hidden="true"
                    className="animate-sheen pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent"
                    style={{ animationDelay: `${(i % 7) * 0.6}s` }}
                  />
                  {/* permanent top accent */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-light to-brand opacity-90"
                  />
                  {/* brand corner brackets */}
                  <span aria-hidden="true" className="absolute left-2 top-2 sm:left-2.5 sm:top-2.5 h-2.5 w-2.5 sm:h-3 sm:w-3 border-l-2 border-t-2 border-brand" />
                  <span aria-hidden="true" className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 h-2.5 w-2.5 sm:h-3 sm:w-3 border-b-2 border-r-2 border-brand" />
                  {/* ghost number */}
                  <span aria-hidden="true" className="absolute right-2.5 top-2.5 sm:right-3 sm:top-3 font-display text-3xl sm:text-4xl font-bold leading-none text-white/8">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-xl sm:rounded-2xl bg-brand/15 text-brand ring-1 ring-brand/30 transition-all duration-400 group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-2.5 sm:mt-3.5 text-[12px] sm:text-[13px] font-semibold leading-snug text-white">
                    {ind.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-auto block pt-2 sm:pt-3 font-sans text-[8.5px] sm:text-[9px] font-bold tracking-[0.18em] sm:tracking-[0.2em] text-brand/80"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
