import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ProjectCard = ({
  project: { type, title, dueDate, client, developers },
  id,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });

  const assignedDevelopers = developers.map((developer, index) => {
    return (
      <div key={index} className="flex items-center gap-1">
        <Image
          alt="abc"
          src={developer.img}
          width={20}
          height={20}
          className={"aspect-square rounded-full object-cover"}
        />
        <div className="text-xs font-semibold">{developer.name}</div>
      </div>
    );
  });

  const types = type.map((typ, index) => {
    return (
      <div
        key={index}
        className=" rounded-md bg-purple-50 px-2 py-1 text-xs  font-semibold text-purple-400"
      >
        {typ}
      </div>
    );
  });

  return (
   
      <div
        ref={setNodeRef}
        {...attributes}
        style={{
          transition,
          transform: CSS.Translate.toString(transform),
        }}
        {...listeners}
        className="space-y-3 rounded-md border-2 p-5 w-full"
      >
        <div className="flex items-center gap-2">{types}</div>
        <div className="mt-3 text-xl font-semibold">{title}</div>
        <div className="flex items-center gap-2 text-sm text-bgdark-grey">
          <IoCalendarOutline /> Due Date : {dueDate}
        </div>
        <div className="text-xs text-bgdark-grey">
          <span>{client.name}</span>- <span>{client.location}</span>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          {assignedDevelopers}
        </div>
      </div>
 
  );
};

export default ProjectCard;
