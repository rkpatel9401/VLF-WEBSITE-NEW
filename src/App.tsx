import { lazy, Suspense, useEffect, type ReactNode } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Products from "./components/Products";
import Footer from "./components/Footer";

/* Progressive loading strategy:
   - The first viewport + the first sections the user reads (Facilities,
     Products) ship in the main bundle and render instantly.
   - Everything below is code-split. Its chunks start downloading in the
     BACKGROUND right after first paint (see prefetch below) — while the
     user is still busy reading the top sections — so by the time they
     scroll further, everything below is already loaded. */
const Services = lazy(() => import("./components/Services"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const Industries = lazy(() => import("./components/Industries"));
const Clients = lazy(() => import("./components/Clients"));
const Certifications = lazy(() => import("./components/Certifications"));
const WhyUs = lazy(() => import("./components/WhyUs"));
const Gallery = lazy(() => import("./components/Gallery"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const BELOW_FOLD = [
  () => import("./components/Services"),
  () => import("./components/CaseStudies"),
  () => import("./components/Industries"),
  () => import("./components/Clients"),
  () => import("./components/Certifications"),
  () => import("./components/WhyUs"),
  () => import("./components/Gallery"),
  () => import("./components/About"),
  () => import("./components/Contact"),
];

function Section({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default function App() {
  /* Start every page load from the top, not a previously-scrolled position */
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  /* Prefetch everything below the fold in the background, starting right
     after the first paint (capped so it never waits for long idle periods). */
  useEffect(() => {
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const run = () => BELOW_FOLD.forEach((load) => void load().catch(() => {}));
    let id: number | undefined;
    if (typeof w.requestIdleCallback === "function") {
      id = w.requestIdleCallback(run, { timeout: 1200 });
    } else {
      id = window.setTimeout(run, 600);
    }
    return () => {
      if (typeof w.requestIdleCallback === "function" && id !== undefined) {
        w.cancelIdleCallback?.(id);
      } else if (id !== undefined) {
        window.clearTimeout(id);
      }
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Facilities />
        <Products />
        <Section>
          <Services />
        </Section>
        <Section>
          <CaseStudies />
        </Section>
        <Section>
          <Industries />
        </Section>
        <Section>
          <Clients />
        </Section>
        <Section>
          <Certifications />
        </Section>
        <Section>
          <WhyUs />
        </Section>
        <Section>
          <Gallery />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Contact />
        </Section>
      </main>
      <Footer />
      {/* film-grain ambient layer */}
      <div className="noise-overlay" aria-hidden="true" />
    </div>
  );
}
