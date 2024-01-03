import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Column = ({ id, children, title, size, addProject }) => {
  // const addProj = () => {
  //   const tempProj = [...projects];
  //   tempProj.push(exampleP);
  //   setProjects(tempProj);
  // };

  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });

  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      {...listeners}
      className="flex w-full flex-col gap-5 rounded-lg border p-5 "
    >
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex items-center gap-2">
          <div className="font-semibold">{title}</div>
          <div className="rounded bg-btpurple px-2 py-0.5 text-xs text-white">
            {size}
          </div>
        </div>
        <div>
          {" "}
          <BsThreeDotsVertical />
        </div>
      </div>
      <div
        onClick={addProject}
        className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 py-3 text-blue-500"
      >
        <FaPlus />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Column;
