import React from "react";
import { MdPermPhoneMsg } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ title, description, icon, iconbg }) => {
  return (
    <div className="relative mx-2 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className={`w-full h-full bg-gradient-to-r from-blue-500 via-orange-500 to-slate-500`}></div>
      </div>
      <div className="relative z-10 flex flex-col justify-between gap-20 p-10 bg-bgSlate bg-opacity-90 m-0.5  rounded-3xl">
        <div className="space-y-5 ">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-xs text-gray-300">
            {description}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className={"text-bgSlate p-2 rounded-lg "+iconbg}>
            {icon}
          </div>
          <div className="flex items-center gap-5">
            <div className="text-xs font-semibold">EXPLORE MORE</div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
