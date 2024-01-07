import React from "react";
import LinePattern from "../common/linePattern";
import SectionTitle from "../common/sectionTitle";
import SocialsArray from "../common/socialsArray";
import SectionDescrption from "../common/sectionDescrption";
import DataManageImg from "./dataManageImg";

const DataManage = () => {
  return (
    <div className="mx-auto w-full space-y-10 pt-32">
      <div className="flex items-start justify-between">
        <div className="max-w-[60%]">
          <SectionTitle />
        </div>
        <div className="max-w-[40%]">
          
            <LinePattern />
        

          <SectionDescrption customClass="text-right" />
        </div>
      </div>
      <div className="flex items-start justify-between"></div>
      <div>
        <DataManageImg />
      </div>
    </div>
  );
};

export default DataManage;
