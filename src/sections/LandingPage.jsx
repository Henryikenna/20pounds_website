import React from "react";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Pillars from "../components/Pillars";
import WhyJoin from "../components/WhyJoin";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Story />
      <Pillars />
      <WhyJoin />
      <Testimonials />
      <Contact />
      <FAQ />
    </main>
  );
};

export default LandingPage;
