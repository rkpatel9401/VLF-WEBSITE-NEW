import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, SERVICE_OPTIONS } from "../data/content";
import { Reveal } from "../lib/motion";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "success" | "error";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  honey: "",
};

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-[12px] font-medium text-danger">{error}</p>}
    </div>
  );
}

const inputCls = (invalid?: boolean) =>
  `w-full rounded-btn border bg-white px-4 py-3 text-base text-ink placeholder:text-steel/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand/25 ${
    invalid ? "border-danger" : "border-steel-light focus:border-brand"
  }`;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [refNo, setRefNo] = useState("");

  const set = (k: keyof typeof initialForm) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: "" }));
  };

  const validate = () => {
    const er: Record<string, string> = {};
    if (form.name.trim().length < 2) er.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Please enter a valid email address.";
    if (form.phone.replace(/\D/g, "").length < 7) er.phone = "Please enter a valid phone number.";
    if (!form.service) er.service = "Please select a service.";
    if (form.message.trim().length < 10) er.message = "Tell us a little more (10+ characters).";
    return er;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length > 0) return;
    if (form.honey) {
      /* honeypot tripped — silently accept */
      setStatus("success");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/veerlaserfab@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Website enquiry — ${form.service}`,
          _captcha: "false",
          _template: "table",
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setRefNo(`VLF-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section id="contact" className="blueprint-grid relative scroll-mt-24 bg-canvas py-24 lg:py-32">
        <div className="wrap">
          <SectionHeading
            index="11"
            eyebrow="Contact"
            title={
              <>
                Send the Drawing. <em className="italic text-brand-dark">We'll Send the Quote.</em>
              </>
            }
            desc="DXF, DWG, STEP or a napkin sketch — our estimation team responds within one working day."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* form */}
            <Reveal className="lg:col-span-6">
              <div className="rounded-card border-2 border-ink bg-white p-5 sm:p-9 shadow-[0_14px_36px_rgba(23,24,28,0.08)]">
                {status === "success" ? (
                  <div className="animate-fade-in-up flex flex-col items-start py-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-btn bg-brand-light text-brand-dark">
                      <CheckCircle2 className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                      Enquiry received. Talk soon.
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft/80">
                      Our estimation team will revert within one working day. Keep your drawings handy —
                      we may come back with a technical question or two.
                    </p>
                    {refNo && (
                      <p className="mt-4 font-sans text-[12px] tracking-[0.14em] text-brand-dark">
                        REFERENCE — {refNo}
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setForm(initialForm);
                        setStatus("idle");
                      }}
                      className="btn btn-ghost-dark mt-8"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <h3 className="font-display text-2xl font-semibold text-ink">Request a Quote</h3>
                    <p className="mt-2 text-sm text-ink-soft/70">
                      Fields marked <span className="text-danger">*</span> are required.
                    </p>

                    {/* honeypot */}
                    <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden">
                      <label htmlFor="vf-honey">Leave this empty</label>
                      <input id="vf-honey" tabIndex={-1} autoComplete="off" value={form.honey} onChange={set("honey")} />
                    </div>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <Field label="Name *" htmlFor="vf-name" error={errors.name}>
                        <input id="vf-name" autoComplete="name" aria-invalid={!!errors.name || undefined} className={inputCls(!!errors.name)} placeholder="Your full name" value={form.name} onChange={set("name")} />
                      </Field>
                      <Field label="Company" htmlFor="vf-company">
                        <input id="vf-company" autoComplete="organization" className={inputCls()} placeholder="Company name" value={form.company} onChange={set("company")} />
                      </Field>
                      <Field label="Email *" htmlFor="vf-email" error={errors.email}>
                        <input id="vf-email" type="email" autoComplete="email" aria-invalid={!!errors.email || undefined} className={inputCls(!!errors.email)} placeholder="you@company.com" value={form.email} onChange={set("email")} />
                      </Field>
                      <Field label="Phone *" htmlFor="vf-phone" error={errors.phone}>
                        <input id="vf-phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone || undefined} className={inputCls(!!errors.phone)} placeholder="+91 …" value={form.phone} onChange={set("phone")} />
                      </Field>
                    </div>

                    <div className="mt-5">
                      <Field label="Service Interested In *" htmlFor="vf-service" error={errors.service}>
                        <select id="vf-service" className={inputCls(!!errors.service)} value={form.service} onChange={set("service")}>
                          <option value="">Select a service…</option>
                          {SERVICE_OPTIONS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <div className="mt-5">
                      <Field label="Message *" htmlFor="vf-message" error={errors.message}>
                        <textarea
                          id="vf-message"
                          rows={5}
                          className={`${inputCls(!!errors.message)} resize-y`}
                          placeholder="Material, thickness, quantities, target date — anything that helps us quote faster."
                          value={form.message}
                          onChange={set("message")}
                        />
                      </Field>
                    </div>

                    {status === "error" && (
                      <p className="mt-5 rounded-btn border border-danger/40 bg-danger/5 px-4 py-3 text-[13px] font-medium text-danger">
                        We couldn't send that just now. Please email us directly at{" "}
                        <a href={`mailto:${CONTACT.email}`} className="underline">
                          {CONTACT.email}
                        </a>{" "}
                        — we reply fast.
                      </p>
                    )}

                    <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-7 w-full disabled:opacity-70">
                      {status === "sending" ? (
                        <>
                          <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                          Sending…
                        </>
                      ) : (
                        "Send Enquiry"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* details + maps */}
            <div className="lg:col-span-6">
              <Reveal delay={100}>
                <div className="rounded-card border border-ink/60 bg-white p-7 shadow-[0_14px_36px_rgba(23,24,28,0.08)] sm:p-8">
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                      <p className="flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-dark">
                        <Phone className="h-4 w-4" strokeWidth={2} /> Call
                      </p>
                      <div className="mt-3 space-y-1.5">
                        {CONTACT.phones.map((p, i) => (
                          <a key={p} href={CONTACT.phoneHref[i]} className="block font-sans text-[13.5px] font-medium text-ink underline-draw w-fit">
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-dark">
                        <Mail className="h-4 w-4" strokeWidth={2} /> Email
                      </p>
                      <a href={`mailto:${CONTACT.email}`} className="mt-3 block w-fit font-sans text-[13.5px] font-medium text-ink underline-draw">
                        {CONTACT.email}
                      </a>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-dark">
                        <Clock className="h-4 w-4" strokeWidth={2} /> Hours
                      </p>
                      <p className="mt-3 font-sans text-[13.5px] font-medium text-ink">Mon–Sat</p>
                      <p className="font-sans text-[12px] text-ink-soft/60">09:00 – 19:00 IST</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="mt-6 space-y-6">
                {[CONTACT.unit1, CONTACT.unit2].map((u, i) => (
                  <Reveal key={u.label} delay={160 + i * 90}>
                    <div className="overflow-hidden rounded-card border border-ink/60 bg-white">
                      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
                        <p className="flex items-center gap-2.5 font-sans text-[15px] font-semibold text-ink">
                          <MapPin className="h-[18px] w-[18px] text-brand" strokeWidth={2} />
                          {u.label}
                        </p>
                        <span className="rounded-btn bg-brand-light px-2.5 py-1 font-sans text-[10px] font-semibold tracking-[0.14em] text-brand-dark">
                          EST. {u.established}
                        </span>
                      </div>
                      <p className="px-6 pb-4 font-sans text-[12px] leading-relaxed text-ink-soft/65">{u.address}</p>
                      <div className="relative">
                        <iframe
                          title={`Map — ${u.label}`}
                          src={`https://www.google.com/maps?q=${encodeURIComponent(u.mapQuery)}&output=embed`}
                          className="pointer-events-none h-[210px] w-full border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          allowFullScreen
                        />
                        <a
                          href={u.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${u.label} location in Google Maps`}
                          className="absolute inset-0 z-10 flex items-end justify-end p-3"
                        >
                          <span className="rounded-btn bg-ink/85 px-3 py-1.5 font-sans text-[10px] font-semibold tracking-[0.12em] text-white backdrop-blur-sm transition-colors duration-300">
                            Open Location
                          </span>
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* closing CTA band */}
      <section aria-label="Request a quote" className="blueprint-grid-dark relative overflow-hidden bg-ink py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-[0.1]"
          style={{ background: "radial-gradient(closest-side, #C9DDA0, transparent 70%)" }}
        />
        <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Ready When You Are
            </p>
            <h2 className="mt-3 sm:mt-4 font-display text-3xl xs:text-4xl sm:text-5xl font-semibold leading-[1.08] text-white">
              Let's Build Something <em className="italic text-brand">Precise</em> Together.
            </h2>
          </Reveal>
          <Reveal delay={140} className="w-full sm:w-auto shrink-0">
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 sm:w-auto">
              <a href="#contact" className="btn btn-primary w-full sm:w-auto px-7 py-3.5 text-center sm:py-[0.95rem]">
                Request a Quote
              </a>
              <a href={CONTACT.phoneHref[0]} className="btn btn-ghost-light justify-center w-full sm:w-auto px-6 py-3.5 sm:py-[0.95rem]">
                <Phone className="h-4 w-4" strokeWidth={2} />
                {CONTACT.phones[0]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
