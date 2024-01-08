import React from "react";
import LinePattern from "../common/linePattern";
import SectionTitle from "../common/sectionTitle";
import SocialsArray from "../common/socialsArray";
import SectionDescrption from "../common/sectionDescrption";
import LifeCycleImg from "./lifeCycleImg";

const LifeCycleSec = () => {
  return (
    <div className="mx-auto w-full space-y-10">
      <div className="md:flex items-start justify-between">
        <div className="lg:max-w-[60%]">
          <SectionTitle />
        </div>
        <div className="lg:w-[40%]">
          <LinePattern />
        </div>
      </div>
      <div className="md:flex items-start justify-between">
        <div className="lg:max-w-[60%]">
          <SectionDescrption/>
        </div>
        <div>
          <SocialsArray />
        </div>
      </div>
      <div>
        <LifeCycleImg/>
      </div>
    </div>
  );
};

export default LifeCycleSec;
