import Image from "next/image";
import HeroSec from "./components/landing/heroSec/HeroSec";
import LifeCycleSec from "./components/landing/lifeCycleSec/lifeCycleSec";
import DataManage from "./components/landing/dataManageSec/dataManage";
import Faq from "./components/landing/faqSec/faq";
import FeatureSec from "./components/landing/featuresSec/featureSec";
import CollabSec from "./components/landing/collabSec/collabSec";
import Footer from "./components/landing/common/footer/footer";

export default function Home() {
  return (
    <div className="bg-bgSlate text-white w-full h-full lg:px-20 px-10">
      <div className="lg:max-w-7xl mx-auto space-y-20">
        <HeroSec />
        <FeatureSec/>
        <LifeCycleSec/>
        <DataManage/>
        <CollabSec/>
        <Faq/>
        <Footer/> 
      </div>
    </div>
  );
}
