const logos = [
  "Northstar",
  "Helios",
  "Cobalt",
  "Verdant",
  "Lumen",
  "Aperture",
  "Orbital",
  "Quanta",
  "Foundry",
  "Mosaic",
];

export default function LogoMarquee() {
  return (
    <section
      aria-label="Trusted by"
      className="relative border-y border-slate-200 bg-slate-50/60 py-10"
    >
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-500">
          Trusted by teams shipping at scale
        </p>
        <div className="relative mt-7 mask-fade-r overflow-hidden">
          <div className="flex w-max gap-12 animate-marquee">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap text-ink-500"
              >
                <DotIcon />
                <span className="font-heading text-lg font-semibold tracking-tight text-ink-700">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DotIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="3" fill="#0EA5E9" opacity="0.45" />
      <circle cx="12" cy="12" r="8" fill="none" stroke="#0EA5E9" opacity="0.25" />
    </svg>
  );
}
