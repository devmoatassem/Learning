import Image from "next/image";
import HeroSec from "./components/landing/heroSec/HeroSec";

export default function Home() {
  return (
    <div className="bg-bgSlate text-white w-full h-full">
      <div className="max-w-7xl mx-auto">
        <HeroSec />
      </div>
    </div>
  );
}
