import HeroSection from "../components/about/HeroSection";
import MissionSection from "../components/about/MissionSection";
// import FeaturesSection from "../components/about/FeaturesSection";
// import WhyChooseUs from "../components/about/WhyChooseUs";
// import TeamSection from "../components/about/TeamSection";

function About() {
  return (
    <div className="bg-[#F7FAF7]">
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <WhyChooseUs />
      <TeamSection />
    </div>
  );
}

export default About;