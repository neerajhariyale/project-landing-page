import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Software Engineering — Web apps, APIs, AI features",
  description:
    "Production-grade software built by senior engineers. Next.js, TypeScript, AWS / GCP, and modern AI workflows.",
};

export default function SoftwarePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Service · Software"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Software", href: "/services/software" },
        ]}
        title={
          <>
            Software that ships{" "}
            <span className="text-gradient">on Friday, not someday.</span>
          </>
        }
        description="We build the products, internal tools, and AI features that move revenue — using a modern, AI-augmented stack and senior engineers only."
      />

      <ServiceDetail
        eyebrow="Service · Software"
        title="Software Engineering"
        titleAccent="on Friday, not someday."
        description=""
        outcomes={[
          { metric: "11 wks", label: "Avg time to first production launch" },
          { metric: "98+", label: "Median Lighthouse score" },
          { metric: "0", label: "Junior engineers on your account" },
          { metric: "24h", label: "Median pull-request review time" },
        ]}
        whatYouGet={[
          { title: "Senior-only engineering pod", body: "Staff and senior engineers with 8+ years across SaaS, fintech, and e-commerce. No bait-and-switch." },
          { title: "Modern stack as default", body: "Next.js, TypeScript, tRPC, Postgres, Prisma, Vercel/AWS, OpenAI/Anthropic SDKs — picked when they fit, not because they're trendy." },
          { title: "AI features baked in", body: "RAG pipelines, agentic workflows, fine-tuned classifiers — shipped behind feature flags with eval dashboards." },
          { title: "Cloud architecture & DevOps", body: "Infrastructure-as-code, CI/CD, observability, on-call runbooks. We leave the lights on, not the bills." },
          { title: "Live demo loop", body: "Friday demos every week. Working software you can poke at — no slides, no status decks." },
          { title: "Production handover", body: "Documented architecture, runbooks, and a 30-day warranty on every release. Your team picks up clean code." },
        ]}
        process={[
          { phase: "Discovery", body: "Audit existing system. Define success metrics, scope, and milestones in 1 week." },
          { phase: "Architecture", body: "System design, data model, infra plan. Approved before a line of code is written." },
          { phase: "Sprints", body: "2-week sprints, Friday demos, shipped to staging every week, prod every fortnight." },
          { phase: "Handover", body: "Documentation, knowledge transfer, and a transition window where we shadow your team." },
        ]}
        faqs={[
          { q: "Do you work with our existing codebase?", a: "Yes — we audit it first, document what's there, and ship inside your conventions. We don't rewrite for the sake of rewriting." },
          { q: "Can you embed inside our team?", a: "Yes. We can run as a self-contained pod or as embedded engineers reporting into your tech lead. Both models are common." },
          { q: "How do you handle IP and code ownership?", a: "You own everything from day one. NDA-first engagements. Source pushed to your GitHub org from sprint 1." },
          { q: "What about post-launch support?", a: "Every release ships with a 30-day warranty. We also offer monthly retainers for ongoing maintenance, observability, and feature work." },
        ]}
        next={{ label: "Start a software project", href: "/contact" }}
      />

      <CTA />
    </SiteShell>
  );
}
