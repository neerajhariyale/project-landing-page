import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "SEO Optimization — Technical SEO, content, authority",
  description:
    "SEO that actually moves organic revenue. Technical audits, content engine, and authority building — measured against pipeline, not rankings.",
};

export default function SEOPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Service · SEO"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SEO", href: "/services/seo" },
        ]}
        title={
          <>
            Search that compounds{" "}
            <span className="text-gradient">into revenue.</span>
          </>
        }
        description="No vanity rankings. We build the technical, content, and authority foundation that turns organic search into a predictable acquisition channel."
      />

      <ServiceDetail
        eyebrow="Service · SEO"
        title="SEO Optimization"
        titleAccent="into revenue."
        description=""
        outcomes={[
          { metric: "+62%", label: "Avg organic traffic in 12 months" },
          { metric: "3.4×", label: "Avg organic-attributed pipeline" },
          { metric: "< 90d", label: "Time to first ranking shifts" },
          { metric: "100%", label: "Engagements with a 90-day off-ramp" },
        ]}
        whatYouGet={[
          { title: "Technical SEO audit", body: "Deep crawl, Core Web Vitals, indexation, internal linking, schema, log-file analysis. Prioritized by revenue impact." },
          { title: "Keyword & content strategy", body: "Cluster maps tied to intent stage. Briefs your writers (or ours) can ship from. Updated monthly with search-trend data." },
          { title: "Content production", body: "In-house writers and editors, AI-assisted research, human quality control. 4–20 pieces per month depending on plan." },
          { title: "On-page optimization", body: "Title, meta, schema, internal linking, image optimization, and content refresh — automated where it makes sense." },
          { title: "Authority & link building", body: "Digital PR, partnerships, and content collaborations. No PBNs, no spammy outreach. Quality and relevance over volume." },
          { title: "Reporting that ties to revenue", body: "Looker dashboards mapping rankings to sessions to pipeline. Quarterly business reviews with your leadership team." },
        ]}
        process={[
          { phase: "Audit", body: "Technical and content audit. Opportunity sizing tied to revenue, not traffic. Delivered in week 2." },
          { phase: "Foundation", body: "Fix technical issues, ship schema, rebuild information architecture. Set up tracking and reporting." },
          { phase: "Scale", body: "Content engine running monthly. On-page optimization, internal linking, authority building." },
          { phase: "Compound", body: "Refresh existing rankings, push from page 2 → page 1, expand into adjacent clusters." },
        ]}
        faqs={[
          { q: "How long until we see results?", a: "Technical wins land in 4–8 weeks. Content-driven gains compound over 6–12 months. We report leading indicators (crawl health, ranking velocity) monthly so you don't have to wait." },
          { q: "Do you write the content?", a: "Yes — in-house writers vetted for your domain, with editorial review. AI-assisted research, not AI-generated content. You can also use your own writers and we'll produce the briefs." },
          { q: "Will my engineering team need to be involved?", a: "Some technical changes need engineering. We write the tickets, do the QA, and can ship inside your repo if you give us access — most clients prefer this." },
          { q: "What if I'm in a small niche?", a: "Niche actually works in your favor. Smaller TAM means clearer intent and less competition. We'll size opportunity in the discovery audit before you commit." },
        ]}
        next={{ label: "Get a free SEO audit", href: "/contact" }}
      />

      <CTA />
    </SiteShell>
  );
}
