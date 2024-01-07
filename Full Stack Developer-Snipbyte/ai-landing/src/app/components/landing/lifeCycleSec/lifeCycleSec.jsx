import React from "react";
import LinePattern from "../common/linePattern";
import SectionTitle from "../common/sectionTitle";
import SocialsArray from "../common/socialsArray";
import SectionDescrption from "../common/sectionDescrption";
import LifeCycleImg from "./lifeCycleImg";

const LifeCycleSec = () => {
  return (
    <div className="mx-auto w-full space-y-10">
      <div className="flex items-start justify-between">
        <div className="max-w-[60%]">
          <SectionTitle />
        </div>
        <div className="w-[40%]">
          <LinePattern />
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div className="max-w-[60%]">
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
