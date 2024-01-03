import React from "react";
import { GrNext } from "react-icons/gr";
import ProfilesArray from "../common/profilesArray";
import { profiles } from "../common/tempdata";
import Button from "../common/button";
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { MdOutlineTableRows } from "react-icons/md";
import { FaTableCellsLarge } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";

const Breadcrumb = () => {
  return (
    <div className="mx-auto w-full px-10 py-5 lg:px-36 2xl:max-w-[1400px]">
      <div className="flex flex-wrap items-center justify-between space-y-5 pb-5 sm:space-y-0">
        <div className="flex items-center gap-3 text-2xl">
          Project{" "}
          <span className="text-xl">
            <GrNext />
          </span>{" "}
          BoardView
        </div>
        <div className="flex flex-wrap items-center gap-2 space-y-5 sm:space-y-0">
          <ProfilesArray
            profiles={profiles.content}
            showadd={false}
            css={" h-12 w-12 bg-btyellow "}
          />
          <Button
            button={"+ Add Member"}
            customClass="bg-btpurple text-white text-sm rounded-lg w-fit px-5"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between space-y-5 sm:space-y-0">
        <div className="flex items-center gap-10 text-lg ">
          <div className="flex items-center gap-3 rounded-md bg-purple-100 px-3 py-2 text-btpurple">
            <VscLayoutSidebarLeftOff /> Board
          </div>
          <div className="flex items-center gap-3 text-bgdark-grey">
            <MdOutlineTableRows /> Timline
          </div>
          <div className="flex items-center gap-3 text-bgdark-grey">
            <FaTableCellsLarge /> Table
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-lg bg-slate-200 p-2 text-sm font-semibold text-bgdark-grey">
            {" "}
            Filter
            <IoFilterSharp />
          </div>
          <div className="rounded-lg bg-slate-200 p-2 text-xl text-bgdark-grey">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
