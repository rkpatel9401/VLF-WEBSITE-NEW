import { Ruler, Building2, Zap, CalendarCheck } from "lucide-react";
import { STATS } from "../data/content";
import { Counter, Reveal } from "../lib/motion";

const STAT_ICONS = [Zap, Ruler, Building2, CalendarCheck];

export default function StatsStrip() {
  return (
    <section aria-label="Key figures" className="relative z-10 pb-4 sm:pb-5 pt-2">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {STATS.map((s, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <Reveal key={s.label} delay={i * 90} className="h-full">
                <div className="group relative flex h-full items-center gap-2 sm:gap-3 overflow-hidden rounded-xl border border-brand/15 bg-white p-2.5 sm:px-3.5 sm:py-2.5 shadow-[0_10px_26px_rgba(23,24,28,0.05)] transition-all duration-400 hover:border-brand/40 hover:shadow-[0_14px_32px_rgba(127,168,78,0.18)]">
                  {/* top accent bar */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand via-brand-dark to-brand opacity-80"
                  />

                  <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-md bg-brand-light text-brand-dark transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.2} />
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-2">
                    <p className="font-display text-base sm:text-lg font-bold leading-none tracking-tight text-ink">
                      <Counter
                        to={s.value}
                        decimals={"decimals" in s ? (s as { decimals?: number }).decimals ?? 0 : 0}
                        prefix={"prefix" in s ? (s as { prefix?: string }).prefix ?? "" : ""}
                        suffix={"suffix" in s ? (s as { suffix?: string }).suffix ?? "" : ""}
                      />
                    </p>
                    <p className="text-[10.5px] sm:text-[11.5px] font-medium leading-tight sm:leading-snug text-ink-soft/75 truncate sm:overflow-visible">
                      {s.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
