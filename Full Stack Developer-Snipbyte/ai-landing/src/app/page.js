import Image from "next/image";
import HeroSec from "./components/landing/heroSec/HeroSec";
import LifeCycleSec from "./components/landing/lifeCycleSec/lifeCycleSec";
import DataManage from "./components/landing/dataManageSec/dataManage";
import Faq from "./components/landing/faqSec/faq";

export default function Home() {
  return (
    <div className="bg-bgSlate text-white w-full h-full px-20 ">
      <div className="max-w-7xl mx-auto space-y-20">
        <HeroSec />
        <LifeCycleSec/>
        <DataManage/>
        <Faq/>
      </div>
    </div>
  );
}
