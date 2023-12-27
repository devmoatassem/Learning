import Button from "./components/common/button";
import Headers from "./components/common/headers";
import FeatureCard from "./components/common/featureCard";
import SpecificationCard from "./components/common/specificationCard";
import ProfilesArray from "./components/landingPage/profilesArray";
import Section from "./components/landingPage/section";
import Hero from "./components/landingPage/hero";

export default function Home() {
  return (
    <>
    <div className="m-0">
    <Hero />
      <Section />
      <Button />
      <Headers />
      <FeatureCard />
      <SpecificationCard />
      <ProfilesArray />
    </div>
      
    </>
  );
}
