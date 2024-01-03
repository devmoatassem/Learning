import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import ProjectCard from "./projectCard";
const Column = ({ projList }) => {
  const projects = projList.map((proj,index) => {
    return (
      <div key={index}>
        <ProjectCard proj={proj} />
      </div>
    );
  });
  return (
    <div className="flex w-[300px] flex-col gap-5 rounded-lg border p-5 ">
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex items-center gap-2">
          <div className="font-semibold">Project Category</div>
          <div className="rounded bg-btpurple px-2 py-0.5 text-xs text-white">
            6
          </div>
        </div>
        <div>
          {" "}
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 py-3 text-blue-500">
        <FaPlus />
      </div>
      {projects}
    </div>
  );
};

export default Column;
