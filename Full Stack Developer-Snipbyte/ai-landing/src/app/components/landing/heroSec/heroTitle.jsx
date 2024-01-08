import React from "react";
import HeroVisual from "./heroVisual";

const TeroTitle = () => {
  return (
    <div className="py-10 mx-auto w-full md:w-fit">
      <div className="md:flex items-center gap-5">
        <div className="text-4xl lg:text-8xl font-bold tracking-widest">
          BETTER <span className="text-orange-500">DATA</span>
        </div>
        <div className="text-left text-lg text-gray-200">
          TOP-PERFORMING <br /> AGENCY
        </div>
      </div>
      <div className="md:flex items-center gap-5">
        <div className="text-right text-lg text-gray-200">
          PREMIUM <br /> QUALITY
        </div>
        <div className="text-4xl lg:text-8xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-100 to-gray-50">
          OPTIMIZING AI.
        </div>
      </div>
    </div>
  );
};

export default TeroTitle;
