import HeroSection from "@/components/home/HeroSection";

import CoreServices from "@/components/home/CoreServices";
import OurTeam from "@/components/home/OurTeam";
import ServiceProcess from "@/components/home/ServiceProcess";
import SuccessCases from "@/components/home/SuccessCases";
import FAQ from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import CompanyDetails from "@/components/home/CompanyDetails";
import ServiceCards from "@/components/home/ServiceCards";
import HomeSectionTracker from "@/analytics/HomeSectionTracker";
import JobSection from "@/components/home/JobSection";

export default function Home() {
  return (
    <>
      <HomeSectionTracker />
      <HeroSection />
      <ServiceCards />
      <CoreServices />
      <JobSection />

      <CompanyDetails />
      <OurTeam />
      <ServiceProcess />
      <SuccessCases />
      <FAQ />

      <Contact />
    </>
  );
}
