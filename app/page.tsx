import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <LogoMarquee />
      <Services />
      <Process />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <CTA />
    </SiteShell>
  );
}
