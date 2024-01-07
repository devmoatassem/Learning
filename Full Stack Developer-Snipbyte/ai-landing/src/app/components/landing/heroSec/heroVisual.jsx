import React from "react";
import "../styles/customStyles.css";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const HeroVisual = () => {
  return (
    <div className="relative h-96 bg-bgSlateLight rounded-3xl my-20">
      <div className="hero-bg absolute inset-0 h-full w-full"></div>
      <Image
        src={"/woman-with-robot-head.png"}
        width={300}
        height={300}
        alt="Women robot"
        className="absolute bottom-0 right-0 w-[500px] h-[300px]]"
      />
      <div className="mx-10 py-10 space-y-10 z-50">
        <div className="relative">
          <div className="overflow-clip absolute text-clip bg-orange-600 text-3xl p-2 rounded-full">
            <GoArrowUpRight />
          </div>
          <div>
            <Image
              src={"/hands-on-laptop.png"}
              width={300}
              height={300}
              alt="Women robot"
              className="w-[300px] aspect-video rounded-3xl object-cover clip-image"
            />
          </div>
        </div>

        <div className="max-w-[500px] text-gray-200 font-light tracking-widest leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          reiciendis velit vero architecto quam rem qui iusto dolorem soluta,
          facere alias enim.
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
