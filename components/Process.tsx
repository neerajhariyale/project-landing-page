import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    duration: "Week 1",
    description:
      "We audit your stack, funnel, and market. You walk out with a prioritized roadmap and revenue model — even if we don't engage.",
    bullets: ["Tech & SEO audit", "Funnel teardown", "Opportunity sizing"],
  },
  {
    number: "02",
    title: "Design",
    duration: "Week 2–3",
    description:
      "Architect, design, and content strategy in parallel. We move fast because the right plan eliminates 80% of rework.",
    bullets: ["System architecture", "UI/UX flows", "Content & SEO plan"],
  },
  {
    number: "03",
    title: "Build",
    duration: "Week 3–10",
    description:
      "Weekly demos, shipped increments, and live dashboards. You always know what is built, what is shipping, and what it earns.",
    bullets: ["2-week sprints", "Live demo loops", "Dedicated Slack channel"],
  },
  {
    number: "04",
    title: "Scale",
    duration: "Month 3+",
    description:
      "We become your growth engine. Continuous SEO, paid scaling, CRO, and product iterations driven by data.",
    bullets: ["CRO & A/B testing", "Paid scaling", "Quarterly OKRs"],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-slate-50/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A process built for{" "}
              <span className="text-gradient">speed and certainty.</span>
            </>
          }
          description="No mystery decks. No 6-month strategy slop. You see progress in the first week and impact in the first month."
        />

        <div className="relative mt-16">
          {/* Connecting line for desktop */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-300 to-transparent lg:block" />

          <ol className="space-y-12 lg:space-y-24">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={s.number}
                  className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Node */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                    <div className="relative h-3 w-3">
                      <div className="absolute inset-0 animate-pulse-soft rounded-full bg-brand-500" />
                      <div className="absolute -inset-2 rounded-full border border-brand-300" />
                    </div>
                  </div>

                  {/* Left column */}
                  <div
                    className={`order-2 ${
                      isLeft
                        ? "lg:order-1 lg:pr-16 lg:text-right"
                        : "lg:order-2 lg:pl-16"
                    }`}
                  >
                    {isLeft ? (
                      <NumberCard number={s.number} total={steps.length} />
                    ) : (
                      <TextBlock step={s} />
                    )}
                  </div>

                  {/* Right column */}
                  <div
                    className={`order-1 ${
                      isLeft
                        ? "lg:order-2 lg:pl-16"
                        : "lg:order-1 lg:pr-16 lg:text-right"
                    }`}
                  >
                    {isLeft ? (
                      <TextBlock step={s} />
                    ) : (
                      <NumberCard number={s.number} total={steps.length} />
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function NumberCard({ number, total }: { number: string; total: number }) {
  return (
    <div className="hover-lift relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-200 to-brand-400 opacity-60 blur-2xl" />
      <div className="relative">
        <div className="font-heading text-7xl font-semibold leading-none tracking-tighter text-gradient">
          {number}
        </div>
        <div className="mt-3 text-sm text-ink-500">
          Step {parseInt(number)} of {total}
        </div>
      </div>
    </div>
  );
}

function TextBlock({
  step,
}: {
  step: (typeof stepType)[number];
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-[11px] font-medium tracking-wider text-brand-700">
          {step.duration}
        </span>
      </div>
      <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
        {step.title}
      </h3>
      <p className="mt-3 text-ink-600">{step.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2 lg:justify-start">
        {step.bullets.map((b) => (
          <li
            key={b}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-ink-700"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

const stepType = steps;
