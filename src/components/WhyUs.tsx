import { Award, Factory, Layers, Ship, Workflow, Zap, type LucideIcon } from "lucide-react";
import { WHY_US } from "../data/content";
import { Reveal } from "../lib/motion";
import SectionHeading from "./SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  Factory,
  Zap,
  Layers,
  Award,
  Ship,
  Workflow,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="blueprint-grid relative scroll-mt-24 bg-canvas py-16 sm:py-24 lg:py-32">
      <div className="wrap">
        <SectionHeading
          index="07"
          eyebrow="Why Choose Us"
          title={
            <>
              The Fabricator OEMs <em className="italic text-brand-dark">Keep Coming Back To</em>
            </>
          }
        />

        <div className="mt-10 sm:mt-14 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => {
            const Icon = ICONS[w.icon] ?? Factory;
            return (
              <Reveal key={w.title} delay={(i % 3) * 90}>
                <article className="spec-card group h-full rounded-card border border-steel-light bg-white p-5 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="font-sans text-sm font-semibold tracking-[0.1em] text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="h-6 w-6 text-steel transition-colors duration-300 group-hover:text-brand"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="mt-4 sm:mt-6 font-sans text-base sm:text-lg font-semibold text-ink">{w.title}</h3>
                  <p className="mt-2 sm:mt-3 text-[13.5px] sm:text-[14px] leading-relaxed text-ink-soft/75">{w.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
