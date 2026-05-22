import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      {/* Sky gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand-50 via-white to-white" />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b" />

      {/* Aurora glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-50 blur-3xl">
        <div className="h-full w-full rounded-full bg-aurora-light animate-aurora-spin opacity-80" />
      </div>

      {/* Soft blobs */}
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full bg-brand-300/50 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-60 -z-10 h-64 w-64 rounded-full bg-brand-200/60 blur-[110px]" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="stagger flex flex-col items-center text-center">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1.5 text-xs font-medium tracking-wide text-brand-800 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Now booking Q3 engagements
          </div>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient-soft">Software, SEO &amp; growth</span>
            <br />
            <span className="text-gradient">engineered for revenue.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base text-ink-600 md:text-lg">
            KS Technology partners with ambitious teams to ship modern software,
            dominate search, and run growth marketing that compounds. One
            partner. One roadmap. Outcomes you can measure.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-cta transition-transform duration-200 hover:translate-y-[-1px] hover:from-brand-600 hover:to-brand-800"
            >
              Start your project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link
              href="#work"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-ink-800 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50"
            >
              <PlayIcon />
              See client outcomes
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500">
            <div className="flex items-center gap-1.5">
              <StarRow />
              <span>4.9 on Clutch · 80+ reviews</span>
            </div>
            <span className="hidden h-3 w-px bg-slate-300 sm:inline-block" />
            <div className="flex items-center gap-1.5">
              <CheckIcon />
              <span>ISO 27001 ready · GDPR compliant</span>
            </div>
            <span className="hidden h-3 w-px bg-slate-300 sm:inline-block" />
            <div className="flex items-center gap-1.5">
              <ShieldIcon />
              <span>NDA-first engagements</span>
            </div>
          </div>
        </div>

        {/* Floating dashboard preview */}
        <div className="relative mx-auto mt-16 max-w-5xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="glow-ring rounded-2xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_40px_120px_-30px_rgba(14,165,233,0.35)]">
              <DashboardPreview />
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-brand-300/50 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5 text-accent-gold">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-xl bg-gradient-to-b from-slate-50 to-white p-5">
      {/* Window dots */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] text-ink-500">
          app.kstechnology.com/dashboard
        </div>
        <div className="hidden gap-1.5 sm:flex">
          <span className="h-2 w-8 rounded-full bg-slate-200" />
          <span className="h-2 w-4 rounded-full bg-slate-200" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-12 gap-4">
        {/* KPI cards */}
        <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-12 md:grid-cols-4">
          {[
            { label: "Revenue", value: "$1.42M", delta: "+38.2%", up: true },
            { label: "Organic Sessions", value: "284K", delta: "+62.4%", up: true },
            { label: "CAC", value: "$24", delta: "−29.1%", up: true },
            { label: "Conv. Rate", value: "5.7%", delta: "+1.8 pts", up: true },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border border-slate-200 bg-white p-3 shadow-soft"
            >
              <div className="text-[10px] uppercase tracking-wider text-ink-500">
                {kpi.label}
              </div>
              <div className="mt-1.5 font-heading text-lg font-semibold tracking-tight text-ink-900">
                {kpi.value}
              </div>
              <div
                className={`mt-0.5 text-[10px] font-medium ${
                  kpi.up ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {kpi.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="col-span-12 rounded-lg border border-slate-200 bg-white p-4 shadow-soft md:col-span-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-ink-500">Compounding growth</div>
              <div className="font-heading text-base font-semibold text-ink-900">
                Organic + paid blended revenue
              </div>
            </div>
            <div className="hidden gap-1 md:flex">
              {["1W", "1M", "3M", "1Y"].map((t, i) => (
                <span
                  key={t}
                  className={`rounded-md px-2 py-0.5 text-[10px] ${
                    i === 2
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-500"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <ChartSVG />
        </div>

        {/* Side list */}
        <div className="col-span-12 rounded-lg border border-slate-200 bg-white p-4 shadow-soft md:col-span-4">
          <div className="text-xs text-ink-500">Top performing pages</div>
          <ul className="mt-3 space-y-3">
            {[
              { p: "/pricing", v: "+412%" },
              { p: "/solutions/seo", v: "+278%" },
              { p: "/blog/scale-saas", v: "+196%" },
              { p: "/case-studies", v: "+128%" },
            ].map((row) => (
              <li
                key={row.p}
                className="flex items-center justify-between text-xs text-ink-700"
              >
                <span className="truncate font-mono text-ink-600">{row.p}</span>
                <span className="font-semibold text-emerald-600">{row.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ChartSVG() {
  return (
    <svg
      viewBox="0 0 600 180"
      className="mt-4 h-40 w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="0"
          x2="600"
          y1={i * 45 + 5}
          y2={i * 45 + 5}
          stroke="rgba(15,23,42,0.06)"
          strokeDasharray="4 6"
        />
      ))}
      <path
        d="M0,160 C60,140 100,130 160,120 C220,110 260,90 320,72 C380,54 440,52 500,30 C540,16 580,10 600,8 L600,180 L0,180 Z"
        fill="url(#area)"
      />
      <path
        d="M0,160 C60,140 100,130 160,120 C220,110 260,90 320,72 C380,54 440,52 500,30 C540,16 580,10 600,8"
        fill="none"
        stroke="url(#line)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* secondary */}
      <path
        d="M0,170 C60,165 100,158 160,150 C220,144 260,138 320,128 C380,118 440,110 500,98 C540,90 580,84 600,82"
        fill="none"
        stroke="rgba(15,23,42,0.22)"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />
    </svg>
  );
}
