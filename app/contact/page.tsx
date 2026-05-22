import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Contact — Let's build something together",
  description:
    "Tell us about your project. A partner — not a sales rep — responds within one business day.",
};

const offices = [
  {
    city: "Bhopal",
    country: "Madhya Pradesh, India",
    address: "MP Nagar, Bhopal — 462011",
    phone: "+91 *********",
    email: "hello.kstechnology@gmail.com",
  },
  {
    city: "Remote",
    country: "Worldwide",
    address: "Distributed team — async-first across multiple time zones",
    phone: "+91 *********",
    email: "hello.kstechnology@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        title={
          <>
            Let's build something{" "}
            <span className="text-gradient">that compounds.</span>
          </>
        }
        description="Tell us where you want to grow. A partner — not a sales rep — responds personally within one business day with a candid view of what is possible."
      />

      <CTA />

      {/* Offices */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              Offices
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Where to find us.
            </h2>
            <p className="mt-4 text-ink-600">
              Headquartered in Bhopal, India — distributed worldwide. Async-first by design, so projects move 24/7.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 stagger">
            {offices.map((o) => (
              <div
                key={o.city}
                className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <div className="font-heading text-xl font-semibold tracking-tight text-ink-900">
                    {o.city}
                  </div>
                  <span className="rounded-full border border-brand-200 bg-brand-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand-700">
                    {o.country}
                  </span>
                </div>
                <p className="mt-4 text-sm text-ink-600">{o.address}</p>
                <div className="mt-5 space-y-2 border-t border-slate-200 pt-4 text-sm">
                  <a
                    href={`tel:${o.phone}`}
                    className="flex items-center gap-2 text-ink-700 hover:text-brand-700"
                  >
                    <PhoneIcon /> {o.phone}
                  </a>
                  <a
                    href={`mailto:${o.email}`}
                    className="flex items-center gap-2 text-ink-700 hover:text-brand-700"
                  >
                    <MailIcon /> {o.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative bg-slate-50/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { v: "< 24h", l: "Average response time" },
              { v: "NDA-first", l: "Standard on every engagement" },
              { v: "30-day", l: "Off-ramp on every contract" },
              { v: "Zero", l: "Junior staff on your account" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-heading text-2xl font-semibold tracking-tight text-gradient md:text-3xl">
                  {s.v}
                </div>
                <div className="mt-1 text-sm text-ink-600">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-brand-600">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-brand-600">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
