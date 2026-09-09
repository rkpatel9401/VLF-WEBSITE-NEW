import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES, img } from "../data/content";
import { Reveal } from "../lib/motion";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  /* When the inner scroll box hits its bottom (or top), hand the scroll
     momentum over to the page so the user continues to the next section. */
  useEffect(() => {
    const box = scrollRef.current;
    if (!box) return;
    const onWheel = (e: WheelEvent) => {
      const atBottom = box.scrollTop + box.clientHeight >= box.scrollHeight - 1;
      const atTop = box.scrollTop <= 0;
      if ((e.deltaY > 0 && atBottom) || (e.deltaY < 0 && atTop)) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY, behavior: "auto" });
      }
    };
    box.addEventListener("wheel", onWheel, { passive: false });
    return () => box.removeEventListener("wheel", onWheel);
  }, [cat]);

  const order = [
    "Facilities",
    "Wind Tower Internals",
    "Heavy Structural Fabrication",
    "Laser Cutting",
    "Structural Steel / PEB",
    "Decorative Screens",
    "General Fabrication",
  ];
  const items = GALLERY.filter((g) => cat === "All" || g.category === cat).sort((a, b) => {
    if (cat !== "All") return 0;
    const ia = order.indexOf(a.category);
    const ib = order.indexOf(b.category);
    return (ia === -1 ? order.length : ia) - (ib === -1 ? order.length : ib);
  });

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length));
    },
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  return (
    <section id="gallery" className="relative scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="wrap">
        <SectionHeading
          index="08"
          eyebrow="Gallery"
          title={
            <>
              The Shop Floor, <em className="italic text-brand-dark">In Frames</em>
            </>
          }
          desc="Sparks, galvanised steel and machined faces — a working record of what leaves our bays."
        />

        <Reveal className="mt-10">
          <div className="gallery-tabs -mx-5 flex gap-2 overflow-x-auto px-5 pb-2.5 sm:mx-0 sm:px-0">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCat(c);
                  setLightbox(null);
                }}
                aria-pressed={cat === c}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[12.5px] font-semibold transition-all duration-300 ${
                cat === c
                  ? "border-ink bg-ink text-white"
                  : "border-steel-light bg-white text-ink-soft hover:border-brand hover:text-brand-dark"
              }`}
            >
              {c}
            </button>
            ))}
          </div>
        </Reveal>

        <div
          key={cat}
          ref={scrollRef}
          style={{
            overscrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
          className="gallery-scroll mt-6 sm:mt-8 h-[88vh] sm:h-[82vh] overflow-y-auto rounded-card border border-steel-light bg-neutral-50/60 p-2.5 sm:p-4"
        >
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => (
            <div key={g.src + g.category} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group block w-full text-left"
                aria-label={`View larger: ${g.caption}`}
              >
                <figure className="img-zoom relative overflow-hidden rounded-card">
                  <img
                    src={img(g.src)}
                    alt={g.alt}
                    className="aspect-[4/3] w-full object-cover"
                    width={1200}
                    height={800}
                    loading="lazy"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35"
                  />
                  <span className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4 rounded-btn bg-ink/80 px-2 sm:px-2.5 py-0.5 sm:py-1 font-sans text-[8.5px] sm:text-[9.5px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-white backdrop-blur-sm">
                    {g.category}
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent px-3 pb-2.5 pt-6 sm:px-5 sm:pb-4 sm:pt-10 transition-all duration-500 opacity-95 sm:opacity-0 sm:translate-y-3 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    <span className="font-sans text-[10.5px] sm:text-[11px] tracking-[0.05em] sm:tracking-[0.06em] text-white/90">{g.caption}</span>
                  </figcaption>
                </figure>
              </button>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* lightbox */}
      {lightbox !== null && items[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[lightbox].caption}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/95 p-3 backdrop-blur-sm sm:p-8"
          onClick={close}
          onTouchStart={(e) => {
            const x = e.touches[0].clientX;
            const onTouchEnd = (te: globalThis.TouchEvent) => {
              const dx = te.changedTouches[0].clientX - x;
              if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
              window.removeEventListener("touchend", onTouchEnd);
            };
            window.addEventListener("touchend", onTouchEnd, { once: true });
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery viewer"
            className="absolute right-3 top-3 sm:right-5 sm:top-5 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-btn border border-white/25 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-1.5 top-1/2 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-btn border border-white/25 bg-ink/60 text-white transition-colors hover:border-brand hover:text-brand sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-1.5 top-1/2 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-btn border border-white/25 bg-ink/60 text-white transition-colors hover:border-brand hover:text-brand sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <img
            src={img(items[lightbox].src)}
            alt={items[lightbox].alt}
            className="max-h-[70vh] sm:max-h-[76vh] max-w-full rounded-card object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-3 sm:mt-5 flex items-center justify-between w-full max-w-lg px-2" onClick={(e) => e.stopPropagation()}>
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.08em] text-white/80 line-clamp-2">{items[lightbox].caption}</p>
            <p className="font-sans text-[11px] text-brand shrink-0 ml-3">
              {String(lightbox + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
