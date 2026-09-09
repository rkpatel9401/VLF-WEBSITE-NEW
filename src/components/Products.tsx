import { useState } from "react";
import { CAPACITY_HIGHLIGHTS, PRODUCTS, type Product } from "../data/content";
import { Reveal } from "../lib/motion";
import SectionHeading from "./SectionHeading";

/* ---------- engineering line-art drawings for product cards ---------- */
function ProductArt({ art }: { art: string }) {
  const g = (() => {
    switch (art) {
      case "vessel":
        return (
          <>
            <ellipse cx="60" cy="28" rx="22" ry="8" />
            <path d="M38 28v52a22 8 0 0 0 44 0V28" />
            <path d="M45 83l-6 15M75 83l6 15" />
            <path d="M82 46h14M82 60h10" opacity="0.55" />
            <path d="M52 20v8M68 20v8" opacity="0.55" />
          </>
        );
      case "jacketed":
        return (
          <>
            <ellipse cx="60" cy="30" rx="18" ry="6.5" />
            <path d="M42 30v44a18 6.5 0 0 0 36 0V30" />
            <path d="M34 38c-4 14-4 24 0 36M86 38c4 14 4 24 0 36" />
            <path d="M34 38 42 34M34 74l8-3M86 38l-8-4M86 74l-8-3" strokeDasharray="3 3" opacity="0.6" />
            <path d="M50 82l-4 14M70 82l4 14" />
          </>
        );
      case "tank":
        return (
          <>
            <ellipse cx="40" cy="58" rx="9" ry="24" />
            <path d="M40 34h38c7 0 12 10 12 24s-5 24-12 24H40" />
            <path d="M50 82v14M76 82v14" />
            <path d="M90 48h8M90 68h8" opacity="0.55" />
          </>
        );
      case "open":
        return (
          <>
            <ellipse cx="60" cy="26" rx="24" ry="7" />
            <path d="M36 26v52a24 7 0 0 0 48 0V26" />
            <path d="M60 14v52" />
            <path d="M48 62h24" />
            <path d="M52 14h16" opacity="0.55" />
          </>
        );
      case "hex":
        return (
          <>
            <rect x="28" y="44" width="64" height="32" rx="6" />
            <path d="M42 44V30h8v14M70 44V30h8v14" />
            <path d="M28 55h64M28 65h64" strokeDasharray="4 4" opacity="0.55" />
            <path d="M92 60h10" />
          </>
        );
      case "mill":
        return (
          <>
            <path d="M30 44v12a30 16 0 0 0 60 0V44" />
            <circle cx="50" cy="58" r="8" />
            <circle cx="70" cy="58" r="8" />
            <rect x="50" y="24" width="20" height="12" rx="2" />
            <path d="M60 36v8" />
            <path d="M36 90h48" opacity="0.55" />
          </>
        );
      case "ballmill":
        return (
          <>
            <circle cx="60" cy="56" r="27" />
            <circle cx="60" cy="56" r="17" strokeDasharray="4 4" opacity="0.55" />
            <circle cx="52" cy="68" r="4" />
            <circle cx="64" cy="71" r="3.4" />
            <circle cx="71" cy="63" r="3" />
            <path d="M38 90h44" />
          </>
        );
      case "boiler":
        return (
          <>
            <rect x="42" y="26" width="36" height="60" rx="8" />
            <path d="M52 26V12h16v14" />
            <circle cx="60" cy="44" r="6" />
            <path d="M60 44l3-3" />
            <circle cx="60" cy="68" r="8" opacity="0.7" />
            <path d="M34 92h52" opacity="0.55" />
          </>
        );
      case "chimney":
        return (
          <>
            <path d="M50 92l5-64h10l5 64" />
            <path d="M46 92h28" />
            <path d="M52 60h16M53 44h14" strokeDasharray="3 3" opacity="0.55" />
            <path d="M60 28v-6M52 24l-3-5M68 24l3-5" opacity="0.55" />
          </>
        );
      case "cyclone":
        return (
          <>
            <rect x="44" y="28" width="32" height="16" />
            <path d="M44 44 60 86l16-42" />
            <rect x="24" y="30" width="20" height="12" />
            <path d="M54 28V14h12v14" />
            <path d="M60 86v8" opacity="0.55" />
          </>
        );
      case "plant":
        return (
          <>
            <rect x="22" y="82" width="76" height="10" />
            <circle cx="42" cy="62" r="13" />
            <rect x="66" y="48" width="22" height="34" />
            <path d="M55 62h11" />
            <path d="M88 48V32h6v16" />
            <path d="M42 49v-9" opacity="0.55" />
          </>
        );
      case "enclosure":
        return (
          <>
            <rect x="38" y="22" width="44" height="74" rx="3" />
            <path d="M66 54v10" />
            <path d="M46 32h14M46 38h14M46 44h14" opacity="0.55" />
            <path d="M46 84h14" opacity="0.55" />
          </>
        );
      case "tray":
        return (
          <>
            <path d="M26 82 52 40h42" />
            <path d="M38 90 64 48h30" />
            <path d="M34 70l12 6M42 57l12 6M50 44l12 6" opacity="0.6" />
            <path d="M94 40v8M26 82v8" opacity="0.55" />
          </>
        );
      case "transfo":
        return (
          <>
            <rect x="32" y="42" width="52" height="42" rx="3" />
            <path d="M42 42V28M58 42V24M74 42V28" />
            <circle cx="42" cy="26" r="2.6" />
            <circle cx="58" cy="22" r="2.6" />
            <circle cx="74" cy="26" r="2.6" />
            <path d="M84 50h10v26H84M87 54v18M91 54v18" opacity="0.6" />
            <path d="M38 90h40" opacity="0.55" />
          </>
        );
      case "wind":
        return (
          <>
            <path d="M50 14h20l7 80H43z" />
            <path d="M46 58h28" />
            <path d="M58 58v24M54 63h8M54 70h8M54 77h8" opacity="0.6" />
            <ellipse cx="60" cy="14" rx="10" ry="3" opacity="0.55" />
          </>
        );
      case "auto":
        return (
          <>
            <path d="M30 28h46v18H50v44H30z" />
            <circle cx="40" cy="37" r="4" />
            <circle cx="40" cy="62" r="4" />
            <path d="M76 34h16M84 30v8" opacity="0.55" />
            <path d="M24 96h26M30 90v12" opacity="0.55" />
          </>
        );
      case "truss":
        return (
          <>
            <path d="M22 84h76" />
            <path d="M22 84 42 44h36l20 40" />
            <path d="M42 44 60 84l18-40" />
            <path d="M60 44v40" opacity="0.55" />
          </>
        );
      case "part":
        return (
          <>
            <rect x="30" y="24" width="60" height="72" rx="4" />
            <circle cx="60" cy="52" r="15" />
            <circle cx="40" cy="34" r="3" />
            <circle cx="80" cy="34" r="3" />
            <circle cx="40" cy="86" r="3" />
            <circle cx="80" cy="86" r="3" />
            <path d="M45 52h-9M75 52h9" strokeDasharray="3 3" opacity="0.55" />
          </>
        );
      default:
        return <circle cx="60" cy="60" r="30" />;
    }
  })();

  return (
    <svg viewBox="0 0 120 120" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full p-5" aria-hidden="true">
      {g}
    </svg>
  );
}

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
