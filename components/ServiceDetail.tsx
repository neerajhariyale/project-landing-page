import Link from "next/link";

type Bullet = { title: string; body: string };
type Step = { phase: string; body: string };

export type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  whatYouGet: Bullet[];
  process: Step[];
  outcomes: { metric: string; label: string }[];
  faqs: { q: string; a: string }[];
  next?: { label: string; href: string };
};

export default function ServiceDetail({
  whatYouGet,
  process,
  outcomes,
  faqs,
  next,
}: ServiceDetailProps) {
  return (
    <>
      {/* Outcomes ribbon */}
      <section className="relative bg-white pb-16 pt-4">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-8 shadow-soft md:p-10">
            <div className="pointer-events-none absolute -top-20 -left-10 h-48 w-48 rounded-full bg-brand-300/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-brand-200/60 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
              {outcomes.map((o) => (
                <div key={o.label}>
                  <div className="font-heading text-3xl font-semibold tracking-tight text-gradient md:text-4xl">
                    {o.metric}
                  </div>
                  <div className="mt-1 text-sm text-ink-600">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              What you get
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Inside the engagement.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 stagger">
            {whatYouGet.map((b) => (
              <div
                key={b.title}
                className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-ink-900">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-600">{b.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-slate-50/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              Engagement flow
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              How a project actually runs.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <div
                key={s.phase}
                className="hover-lift relative rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="font-heading text-3xl font-semibold tracking-tight text-gradient">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-heading text-base font-semibold text-ink-900">
                  {s.phase}
                </h3>
                <p className="mt-1.5 text-sm text-ink-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-700">
              FAQ
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Common questions.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft">
            {faqs.map((f, i) => (
              <details key={i} className="group cursor-pointer p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-heading text-base font-semibold text-ink-900">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-ink-600 transition-transform duration-200 group-open:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-ink-600">{f.a}</p>
              </details>
            ))}
          </div>

          {next && (
            <div className="mt-10 text-center">
              <Link
                href={next.href}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-3.5 text-sm font-semibold text-white shadow-cta transition-all duration-200 hover:translate-y-[-1px] hover:from-brand-700 hover:to-brand-900"
              >
                {next.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
