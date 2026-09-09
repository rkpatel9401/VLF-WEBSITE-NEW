import type { ReactNode } from "react";
import { Reveal } from "../lib/motion";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  desc,
  tone = "light",
  className = "",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={`flex items-end justify-between gap-6 ${className}`}>
      <div className="max-w-3xl">
        <Reveal>
          <p
            className={`flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] ${
              dark ? "text-brand" : "text-brand-dark"
            }`}
          >
            <span className="inline-block h-2 w-2 bg-brand" aria-hidden="true" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2
            className={`mt-5 font-display text-3xl xs:text-4xl font-semibold leading-[1.08] tracking-[-0.015em] sm:text-5xl lg:text-[3.4rem] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>
        </Reveal>
        {desc && (
          <Reveal delay={160}>
            <p
              className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
                dark ? "text-white/65" : "text-ink-soft/80"
              }`}
            >
              {desc}
            </p>
          </Reveal>
        )}
      </div>
      <span
        aria-hidden="true"
        className={`index-num hidden shrink-0 select-none text-[88px] md:block lg:text-[110px] ${
          dark ? "index-num-dark" : ""
        }`}
      >
        {index}
      </span>
    </div>
  );
}
