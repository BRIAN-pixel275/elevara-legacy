import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import Pillars from "../components/sections/Pillars";
import ProgramsSection from "../components/sections/ProgramsSection";
import WhyChoose from "../components/sections/WhyChoose";
import CTA from "../components/sections/CTA";

function Home() {
  return (
    <>
     <Helmet>

        <title>Home | Elevara Legacy</title>

        <meta
            name="description"
            content="Empowering women through leadership, financial literacy, entrepreneurship and personal development."
        />

    </Helmet>
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