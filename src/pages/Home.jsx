import Hero from "../components/home/Hero.jsx";
import TrustBar from "../components/home/TrustBar.jsx";
import ClientMarquee from "../components/home/ClientMarquee.jsx";
import ServicesGrid from "../components/home/ServicesGrid.jsx";
import FibreBand from "../components/home/FibreBand.jsx";
import InfraSection from "../components/home/InfraSection.jsx";
import Sectors from "../components/home/Sectors.jsx";
import Testimonial from "../components/home/Testimonial.jsx";
import CTA from "../components/home/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ClientMarquee />
      <ServicesGrid />
      <FibreBand />
      <InfraSection />
      <Sectors />
      <Testimonial />
      <CTA />
    </>
  );
}
