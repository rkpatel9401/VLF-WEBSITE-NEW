import { CLIENTS } from "../data/content";
import { Reveal } from "../lib/motion";
import SectionHeading from "./SectionHeading";

export default function Clients() {
  return (
    <section id="clients" className="relative scroll-mt-24 overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      <div className="wrap">
        <SectionHeading
          index="06"
          eyebrow="Clients"
          title={
            <>
              Trusted by India's Leading Manufacturers &{" "}
              <em className="italic text-brand-dark">International OEM Clients</em> Since 2018.
            </>
          }
        />
      </div>

      <Reveal className="mt-10 sm:mt-14">
        <div
          className="marquee-hover relative overflow-hidden py-4"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center"
              >
                {CLIENTS.map((c) => (
                  <span key={`${copy}-${c.name}`} className="mx-5 sm:mx-8 flex items-center gap-5 sm:gap-8">
                    <img
                      key={`${copy}-${c.name}-img`}
                      src={c.logo}
                      alt={c.name}
                      title={c.name}
                      loading="lazy"
                      className="h-9 sm:h-12 w-auto max-w-[120px] sm:max-w-[150px] object-contain transition-transform duration-300 hover:scale-105"
                    />
                    <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-brand/50" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6" delay={120}>
        <p className="text-center font-sans text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.2em] text-steel px-4">
          REPEAT PROGRAMMES · MULTI-YEAR SUPPLY AGREEMENTS · EXPORT DISPATCHES
        </p>
      </Reveal>
    </section>
  );
}
