import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How KS Technology collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "intro",
    title: "1. Introduction",
    content: (
      <>
        <p>
          KS Technology ("we", "us", "our") respects your privacy. This Privacy
          Policy explains what personal data we collect when you visit our
          website, fill out a form, apply for a job, or engage us for services,
          and how we use, store, and protect that data.
        </p>
        <p>
          By using this website you agree to the practices described here. If
          you do not agree, please do not use the site or share information
          with us.
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "2. Data we collect",
    content: (
      <>
        <p>We collect only what is necessary to do business with you:</p>
        <ul>
          <li>
            <strong>Contact information</strong> you provide via forms: name,
            email, phone number, company, role.
          </li>
          <li>
            <strong>Project details</strong> you choose to share when
            requesting a proposal or audit.
          </li>
          <li>
            <strong>Application data</strong> if you apply for a job: CV
            link, college, degree, year of study, availability.
          </li>
          <li>
            <strong>Usage data</strong>: pages visited, time on site,
            referring source, device type. Collected via cookies — see our{" "}
            <a href="/cookies">Cookie Policy</a>.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> collect sensitive personal data (health,
          religion, biometrics) unless you voluntarily share it.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-data",
    title: "3. How we use your data",
    content: (
      <>
        <ul>
          <li>To respond to your enquiry or proposal request.</li>
          <li>To evaluate your job application and contact you about it.</li>
          <li>To deliver and improve the services you have engaged us for.</li>
          <li>
            To send transactional communication (proposals, invoices,
            project updates).
          </li>
          <li>
            To send marketing communication only with your explicit opt-in.
            You can unsubscribe at any time.
          </li>
          <li>To meet legal, tax, and accounting obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. Who we share data with",
    content: (
      <>
        <p>
          We never sell your data. We share it only with vetted processors
          required to run the business:
        </p>
        <ul>
          <li>
            <strong>Operational tools</strong>: HubSpot (CRM), Google
            Workspace (email + docs), Slack (communication), Vercel
            (hosting), AWS / GCP (infrastructure).
          </li>
          <li>
            <strong>Payment & accounting</strong>: Stripe, Razorpay, and our
            registered accountants.
          </li>
          <li>
            <strong>Legal authorities</strong> only when compelled by valid
            legal process.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "5. Retention",
    content: (
      <p>
        We keep enquiry and project data for the duration of our engagement
        plus 7 years (for tax compliance). Job application data is kept for
        12 months after the application date, then deleted unless you ask us
        to keep it on file longer. You can request deletion at any time.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "6. Your rights",
    content: (
      <>
        <p>You can ask us to:</p>
        <ul>
          <li>Show you what personal data we hold about you.</li>
          <li>Correct anything that is inaccurate.</li>
          <li>Delete your data (subject to legal retention rules).</li>
          <li>Stop using your data for marketing.</li>
          <li>Export your data in a portable format.</li>
        </ul>
        <p>
          Email <strong>hello.kstechnology@gmail.com</strong> and we will
          action your request within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "7. Security",
    content: (
      <p>
        We use TLS in transit, encryption at rest, role-based access, and
        SSO where supported. All vendors are reviewed for security
        certifications (SOC 2 / ISO 27001) before onboarding. No system is
        perfectly secure — but we treat your data the way we would want ours
        treated.
      </p>
    ),
  },
  {
    id: "international",
    title: "8. International transfers",
    content: (
      <p>
        Our team operates from India, the US, and remotely worldwide. Your
        data may be processed in any of these regions. We rely on Standard
        Contractual Clauses (SCCs) and equivalent safeguards when
        transferring data between jurisdictions.
      </p>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to this policy",
    content: (
      <p>
        We may update this policy as the business or regulations change.
        Material changes will be announced on this page with a revised
        "Last updated" date. We recommend you review it occasionally.
      </p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact",
    content: (
      <p>
        Privacy questions? Write to{" "}
        <a href="/contact">hello.kstechnology@gmail.com</a> — we usually
        reply within one business day.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <SiteShell>
      <LegalLayout
        eyebrow="Legal · Privacy"
        title="Privacy Policy"
        intro="A plain-English explanation of what data we collect, why, and how to control it."
        lastUpdated="May 23, 2026"
        sections={sections}
      />
    </SiteShell>
  );
}
