import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of KS Technology's website and services.",
};

const sections = [
  {
    id: "intro",
    title: "1. Acceptance of terms",
    content: (
      <p>
        These Terms of Service ("Terms") govern your access to and use of the
        KS Technology website and any services we provide. By visiting the
        site or engaging us, you agree to be bound by these Terms. If you do
        not agree, please do not use the site or engage our services.
      </p>
    ),
  },
  {
    id: "services",
    title: "2. Services",
    content: (
      <>
        <p>
          KS Technology provides software engineering, SEO, performance
          marketing, design, data, and AI consulting services. The specific
          scope of work, deliverables, timeline, and fees for an engagement
          are documented in a separate Statement of Work (SOW) or Master
          Services Agreement (MSA).
        </p>
        <p>
          Where there is a conflict between the SOW/MSA and these Terms, the
          SOW/MSA prevails.
        </p>
      </>
    ),
  },
  {
    id: "use-of-site",
    title: "3. Use of the website",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Scrape, copy, or reproduce site content without permission.</li>
          <li>
            Attempt to gain unauthorized access to any system, account, or
            data.
          </li>
          <li>Use the site to send spam or unlawful communications.</li>
          <li>
            Reverse engineer or interfere with the operation of the site.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    title: "4. Intellectual property",
    content: (
      <>
        <p>
          All website content (text, logos, design, code unless explicitly
          open-sourced) is owned by KS Technology and protected by
          intellectual property laws.
        </p>
        <p>
          For client engagements: work product produced for you under an SOW
          is transferred to you on full payment, except for our pre-existing
          tools, libraries, and methodologies, which we license to you for
          internal use as part of the deliverable.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    title: "5. Fees and payment",
    content: (
      <>
        <p>
          Fees, currency, taxes, and payment schedule are specified in the
          relevant SOW. Default payment terms are <strong>Net 15</strong>{" "}
          from invoice date. Late payments may accrue interest at 1.5% per
          month or the maximum rate permitted by law, whichever is lower.
        </p>
        <p>
          Engagements run month-to-month with a <strong>30-day off-ramp</strong>{" "}
          clause unless otherwise agreed in writing.
        </p>
      </>
    ),
  },
  {
    id: "warranties",
    title: "6. Warranties and disclaimers",
    content: (
      <>
        <p>
          We warrant that services will be performed in a professional,
          workmanlike manner consistent with industry standards. We do not
          warrant any specific business outcome (revenue, rankings, leads) —
          while we have a strong track record, results depend on factors
          outside our control.
        </p>
        <p>
          The website is provided <strong>"as is"</strong> without warranties
          of any kind. To the maximum extent permitted by law, we disclaim
          all implied warranties.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "7. Limitation of liability",
    content: (
      <p>
        To the maximum extent permitted by law, KS Technology's total
        liability for any claim arising from these Terms or an engagement
        is limited to the fees actually paid by you in the 3 months
        preceding the claim. We are not liable for indirect, incidental,
        consequential, or punitive damages.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "8. Indemnity",
    content: (
      <p>
        You agree to indemnify KS Technology from any third-party claim
        arising out of your misuse of the site, your violation of these
        Terms, or your violation of any law.
      </p>
    ),
  },
  {
    id: "termination",
    title: "9. Termination",
    content: (
      <p>
        We may suspend or terminate your access to the site at any time for
        violation of these Terms. Termination of a paid engagement is
        governed by the relevant SOW. The 30-day off-ramp clause applies by
        default.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "10. Governing law",
    content: (
      <p>
        These Terms are governed by the laws of India. Any dispute arising
        from these Terms or an engagement will be resolved by arbitration
        seated in Bhopal, Madhya Pradesh, except where mandatory
        consumer-protection law of your jurisdiction applies.
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes",
    content: (
      <p>
        We may revise these Terms. Material changes will be announced on
        this page with a revised "Last updated" date. Continued use of the
        site after changes constitutes acceptance.
      </p>
    ),
  },
  {
    id: "contact",
    title: "12. Contact",
    content: (
      <p>
        Questions about these Terms? Write to{" "}
        <a href="/contact">hello.kstechnology@gmail.com</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <SiteShell>
      <LegalLayout
        eyebrow="Legal · Terms"
        title="Terms of Service"
        intro="The rules of the road for using our site and engaging our services."
        lastUpdated="May 23, 2026"
        sections={sections}
      />
    </SiteShell>
  );
}
