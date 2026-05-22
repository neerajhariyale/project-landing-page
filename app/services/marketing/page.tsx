import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Performance Marketing — Paid acquisition that pays back",
  description:
    "Paid acquisition built around unit economics. Creative testing, attribution, and channel scaling for SaaS and DTC.",
};

export default function MarketingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Service · Marketing"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Marketing", href: "/services/marketing" },
        ]}
        title={
          <>
            Paid acquisition{" "}
            <span className="text-gradient">that actually pays back.</span>
          </>
        }
        description="We don't optimize for ROAS theatre. We build acquisition engines around payback periods, contribution margin, and LTV — and we'll show you the spreadsheet."
      />

      <ServiceDetail
        eyebrow="Service · Marketing"
        title="Performance Marketing"
        titleAccent="that actually pays back."
        description=""
        outcomes={[
          { metric: "−42%", label: "Avg CAC reduction in 6 months" },
          { metric: "3.1×", label: "Avg blended ROAS lift" },
          { metric: "100+", label: "Creatives shipped per quarter" },
          { metric: "Weekly", label: "Performance reviews & creative cuts" },
        ]}
        whatYouGet={[
          { title: "Channel strategy", body: "Where to spend, where not to. We rank channels by your business model, not by what's trending on LinkedIn." },
          { title: "Creative engine", body: "30–100 creatives per quarter. Static, video, UGC. Pre-test concepts before spending big." },
          { title: "Account management", body: "Daily monitoring on Google, Meta, LinkedIn, TikTok, Reddit. Bidding, budget pacing, audience hygiene." },
          { title: "Landing pages & CRO", body: "Lightning-fast LPs paired with each campaign. Built by the same engineers who ship your product." },
          { title: "Attribution & MMM", body: "Server-side tracking, multi-touch attribution, and lightweight MMM for budgets > $50k/mo." },
          { title: "Real reporting", body: "A live dashboard your CFO can read. Spend, CAC, payback, contribution — not just ROAS." },
        ]}
        process={[
          { phase: "Diagnose", body: "Funnel teardown, channel audit, unit-economics model. We tell you what to fix before we touch ad spend." },
          { phase: "Foundation", body: "Tracking, attribution, landing pages, creative library. Built in the first 2–3 weeks." },
          { phase: "Test", body: "Structured tests on creative, audience, offer. 10–15% of budget reserved for experimentation each month." },
          { phase: "Scale", body: "Pour spend into winners. Pause losers. Continuously refresh creative. Quarterly strategy reviews." },
        ]}
        faqs={[
          { q: "What's the minimum monthly spend?", a: "We typically start at $20k/mo in ad spend so testing isn't statistically dead-on-arrival. Below that, our SEO and content services usually return more." },
          { q: "Who owns the ad accounts?", a: "You do. Always. We work in your accounts and hand them back the day the engagement ends. No client lock-in tactics." },
          { q: "Can you run creative for us?", a: "Yes — in-house designers, motion artists, and UGC vendors. You can also bring your own creative team and we'll only do strategy + media buying." },
          { q: "What about iOS 17 and signal loss?", a: "We default to server-side tracking, conversion APIs, and modeled conversions. We've built this for ~40 brands post-ATT, so it's a solved problem on our side." },
        ]}
        next={{ label: "Get a paid audit", href: "/contact" }}
      />

      <CTA />
    </SiteShell>
  );
}
