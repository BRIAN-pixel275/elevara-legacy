import SEO from "../components/SEO";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import Pillars from "../components/sections/Pillars";
import ProgramsSection from "../components/sections/ProgramsSection";
import WhyChoose from "../components/sections/WhyChoose";
import CTA from "../components/sections/CTA";

function Home() {
  return (
    <>
      <SEO
        title="Elevara Legacy | Empowering Women to Lead & Thrive"
        description="Elevara Legacy empowers women through leadership, entrepreneurship, financial literacy and personal development."
        path="/"
      />

      <Hero />
      <AboutSection />
      <Pillars />
      <ProgramsSection />
      <WhyChoose />
      <CTA />
    </>
  );
}

export default Home;