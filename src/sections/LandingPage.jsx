// import React from "react";
// import Hero from "../components/Hero";
// import Story from "../components/Story";
// import Pillars from "../components/Pillars";
// import WhyJoin from "../components/WhyJoin";
// import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";
// import FAQ from "../components/FAQ";

// const LandingPage = () => {
//   return (
//     <main>
//       <Hero />
//       <Story />
//       <Pillars />
//       <WhyJoin />
//       <Testimonials />
//       <Contact />
//       <FAQ />
//     </main>
//   );
// };

// export default LandingPage;











import React from "react";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Pillars from "../components/Pillars";
import WhyJoin from "../components/WhyJoin";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import ScrollFadeIn from "../components/ScrollFadeIn";

const LandingPage = () => {
  return (
    <main>
      {/* Hero doesn't need fade-in as it's immediately visible */}
      <Hero />
      
      <ScrollFadeIn direction="up" delay={0}>
        <Story />
      </ScrollFadeIn>
      
      <ScrollFadeIn direction="up" delay={0}>
        <Pillars />
      </ScrollFadeIn>
      
      <ScrollFadeIn direction="up" delay={0}>
        <WhyJoin />
      </ScrollFadeIn>
      
      <ScrollFadeIn direction="up" delay={0}>
        <Testimonials />
      </ScrollFadeIn>
      
      <ScrollFadeIn direction="up" delay={0}>
        <Contact />
      </ScrollFadeIn>
      
      <ScrollFadeIn direction="up" delay={0}>
        <FAQ />
      </ScrollFadeIn>
    </main>
  );
};

export default LandingPage;