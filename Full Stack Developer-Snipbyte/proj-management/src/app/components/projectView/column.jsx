"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import ProjectCard from "./projectCard";
// import { DndContext, Draggable, Droppable } from "@dnd-kit/core";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const exampleP = {
  type: ["Web-App", "Mobile"],
  dueDate: "14 Aug 2021",
  name: "Project 6",
  client: {
    name: "Client 1",
    location: "Location 1",
  },
  developers: [
    {
      name: "Developer 6",
      img: "/1.webp",
    },
    {
      name: "Developer 64",
      img: "/1.webp",
    },
    {
      name: "Developer 3",
      img: "/1.webp",
    },
  ],
};

const Column = ({ projList }) => {


  const [projects, setProjects] = useState(
    projList.map((project) => ({
      ...project,
      id: project.name, // Add a unique id property to each language
    })),
  );

  const projectsRendered = projects.map((proj, index) => {
    return <ProjectCard proj={proj} id={proj.id} key={index} />;
  });

  const addProj = () => {
    const tempProj = [...projects];
    tempProj.push(exampleP);
    setProjects(tempProj);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setProjects((projects) => {
        const oldIndex = projects.findIndex((proj) => proj.name === active.id);
        const newIndex = projects.findIndex((proj) => proj.name === over.id);

        return arrayMove(projects, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
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
        <div
          onClick={addProj}
          className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 py-3 text-blue-500"
        >
          <FaPlus />
        </div>
        <SortableContext
          items={projects}
          strategy={verticalListSortingStrategy}
        >
          {projectsRendered}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default Column;
