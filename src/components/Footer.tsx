import { ArrowUp } from "lucide-react";
import { CONTACT, FOOTER_TAGLINES, INDUSTRIES, NAV_LINKS } from "../data/content";

/* ---------- Social media — official brand colours + working links ---------- */
type Social = {
  label: string;
  href: string;
  aria: string;
  color: string;
  icon: React.ReactNode;
};

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 3.99zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[19px] w-[19px]" aria-hidden="true">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[19px] w-[19px]" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.9 9.88zM20.5 3.49A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.44-8.42z" />
  </svg>
);

const SOCIAL_LINKS: Social[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919974091289",
    aria: "Chat with Veer Laser Fab on WhatsApp",
    color: "#25D366",
    icon: <WhatsAppIcon />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sheetmetallasercut",
    aria: "Veer Laser Fab on Facebook",
    color: "#1877F2",
    icon: <FacebookIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/veerlaserfab",
    aria: "Veer Laser Fab on Instagram",
    color: "#E1306C",
    icon: <InstagramIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/veerlaserfab/",
    aria: "Veer Laser Fab on LinkedIn",
    color: "#0A66C2",
    icon: <LinkedInIcon />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@veerlaserfab3043",
    aria: "Veer Laser Fab on YouTube",
    color: "#FF0000",
    icon: <YouTubeIcon />,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white/60">
      <div className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        {/* brand */}
        <div className="lg:col-span-4">
          <a href="#top" aria-label="Back to top — Veer Laser Fab" className="inline-block">
            <span className="flex h-16 w-auto items-center rounded-btn bg-white px-4 shadow-lift">
              <img
                src="/logo.jpg"
                alt="Veer Laser Fab logo"
                className="h-12 w-auto object-contain"
              />
            </span>
          </a>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/55">
            Precision laser cutting, CNC fabrication and metal engineering from Ahmedabad — serving
            OEM and export clients across two facilities since 2018.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {FOOTER_TAGLINES.map((t) => (
              <span
                key={t}
                className="rounded-btn border border-white/15 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* quick links */}
        <nav aria-label="Footer" className="lg:col-span-2">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.26em] text-brand">Explore</p>
          <ul className="mt-5 space-y-2.5">
            {[...NAV_LINKS, { label: "Products", href: "#products" }, { label: "Certifications", href: "#certifications" }].map((l) => (
              <li key={l.href + l.label}>
                <a href={l.href} className="text-[13.5px] font-medium text-white/60 transition-colors duration-300 hover:text-brand">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* industries */}
        <div className="lg:col-span-3">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.26em] text-brand">
            Industries
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {INDUSTRIES.map((i) => (
              <li key={i.name}>
                <a href="#industries" className="text-[12.5px] font-medium text-white/60 transition-colors duration-300 hover:text-brand">
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div className="lg:col-span-3">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.26em] text-brand">Contact</p>
          <div className="mt-5 space-y-5">
            {[CONTACT.unit1, CONTACT.unit2].map((u) => (
              <div key={u.label}>
                <p className="font-sans text-[13px] font-semibold text-white">{u.label}</p>
                <p className="mt-1 font-sans text-[11.5px] leading-relaxed text-white/50">{u.address}</p>
              </div>
            ))}
            <div className="space-y-1.5">
              {CONTACT.phones.map((p, i) => (
                <a key={p} href={CONTACT.phoneHref[i]} className="block w-fit font-sans text-[12.5px] text-white/70 transition-colors hover:text-brand">
                  {p}
                </a>
              ))}
              <a href={`mailto:${CONTACT.email}`} className="block w-fit font-sans text-[12.5px] text-white/70 transition-colors hover:text-brand">
                {CONTACT.email}
              </a>
            </div>
            {/* social media */}
            <div className="pt-1">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Follow Us
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.aria}
                    title={s.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-btn border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-white/10 hover:bg-[var(--sc)]"
                    style={{ "--sc": s.color } as React.CSSProperties}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {["ISO 9001:2015", "MSME", "GST", "IEC"].map((b) => (
                <span key={b} className="rounded-btn border border-brand/30 bg-brand/10 px-2.5 py-1 font-sans text-[9.5px] font-semibold tracking-[0.14em] text-brand">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="font-sans text-[11px] tracking-[0.08em] text-white/40">
            © {new Date().getFullYear()} Veer Laser Fab · GSTIN 24CIVPP0310F1ZF · All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="hidden font-sans text-[10px] tracking-[0.3em] text-white/35 md:block">
              MADE WITH PRECISION IN AHMEDABAD
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-btn border border-white/20 text-white/70 transition-all duration-300 hover:border-brand hover:text-brand"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
