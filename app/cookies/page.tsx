import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What cookies KS Technology uses, what they do, and how to control them.",
};

const cookieTable = (
  <div className="not-prose overflow-hidden rounded-xl border border-slate-200">
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wider text-ink-500">
          <th className="px-4 py-3 font-medium">Cookie</th>
          <th className="px-4 py-3 font-medium">Type</th>
          <th className="px-4 py-3 font-medium">Purpose</th>
          <th className="px-4 py-3 font-medium">Expiry</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 text-ink-700">
        {[
          ["ks_session", "Essential", "Maintains your session on the site.", "Session"],
          ["ks_consent", "Essential", "Stores your cookie consent choices.", "12 months"],
          ["_ga", "Analytics", "Google Analytics — anonymous usage statistics.", "13 months"],
          ["_gid", "Analytics", "Google Analytics — distinguishes users.", "24 hours"],
          ["hubspotutk", "Functional", "HubSpot — identifies visitors for sales follow-up.", "13 months"],
          ["__hssc", "Functional", "HubSpot — current session.", "30 minutes"],
          ["fbp", "Marketing", "Meta Pixel — ad attribution. Only set with consent.", "3 months"],
        ].map(([name, type, purpose, expiry]) => (
          <tr key={name}>
            <td className="px-4 py-3 font-mono text-xs text-ink-800">{name}</td>
            <td className="px-4 py-3">{type}</td>
            <td className="px-4 py-3 text-ink-600">{purpose}</td>
            <td className="px-4 py-3 text-ink-600">{expiry}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const sections = [
  {
    id: "what-are-cookies",
    title: "1. What are cookies?",
    content: (
      <p>
        Cookies are small text files placed on your device by a website you
        visit. They are widely used to make websites work efficiently and
        provide information to site owners. They cannot run programs on your
        device or carry viruses.
      </p>
    ),
  },
  {
    id: "categories",
    title: "2. Categories of cookies we use",
    content: (
      <>
        <p>We group cookies into four categories:</p>
        <ul>
          <li>
            <strong>Essential</strong> — required for the site to work
            (sessions, consent storage). Cannot be disabled.
          </li>
          <li>
            <strong>Functional</strong> — remember preferences and improve
            usability (chat widget, CRM identity).
          </li>
          <li>
            <strong>Analytics</strong> — anonymous statistics on which
            pages are visited (Google Analytics).
          </li>
          <li>
            <strong>Marketing</strong> — used to measure ad performance and
            personalize content. Only loaded if you accept marketing
            cookies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookie-list",
    title: "3. The cookies we set",
    content: (
      <>
        <p>Below is the current list of cookies and what each one does:</p>
        {cookieTable}
        <p className="mt-3 text-sm text-ink-500">
          This list is reviewed quarterly. If we add a new vendor that sets
          cookies, we update this page before the cookie goes live.
        </p>
      </>
    ),
  },
  {
    id: "your-choices",
    title: "4. Your choices",
    content: (
      <>
        <p>You can control cookies in three ways:</p>
        <ul>
          <li>
            <strong>On this site</strong>: use the cookie banner on first
            visit, or click "Cookie settings" in the footer to change
            preferences anytime.
          </li>
          <li>
            <strong>In your browser</strong>: most browsers let you block or
            delete cookies. See your browser's help center for instructions.
          </li>
          <li>
            <strong>Industry opt-outs</strong>:{" "}
            <a href="https://optout.aboutads.info/" target="_blank" rel="noreferrer">
              Digital Advertising Alliance
            </a>{" "}
            and{" "}
            <a href="https://www.youronlinechoices.com/" target="_blank" rel="noreferrer">
              Your Online Choices
            </a>{" "}
            offer collective opt-outs for major ad networks.
          </li>
        </ul>
        <p>
          Blocking essential cookies will break parts of the site (e.g. the
          contact form may not submit).
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "5. Third-party cookies",
    content: (
      <p>
        Some cookies are set by third parties we use (Google, HubSpot, Meta).
        Those cookies are governed by the third party's privacy and cookie
        policies, which you should review. We do not control how those
        parties use the data, but we only enable them once you have
        consented.
      </p>
    ),
  },
  {
    id: "updates",
    title: "6. Updates",
    content: (
      <p>
        We update this Cookie Policy when the cookies we use change.
        Material changes are highlighted at the top of this page and
        require fresh consent.
      </p>
    ),
  },
  {
    id: "contact",
    title: "7. Contact",
    content: (
      <p>
        Questions about cookies? Write to{" "}
        <a href="/contact">hello.kstechnology@gmail.com</a>.
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <SiteShell>
      <LegalLayout
        eyebrow="Legal · Cookies"
        title="Cookie Policy"
        intro="What we set on your device, why, and how to switch it off."
        lastUpdated="May 23, 2026"
        sections={sections}
      />
    </SiteShell>
  );
}
