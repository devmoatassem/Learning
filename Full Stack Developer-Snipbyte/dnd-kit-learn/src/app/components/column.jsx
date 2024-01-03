import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Column = ({ id, children, title, addProject }) => {
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
      className="bg-gray-100 border border-gray-300 rounded-md p-2 text-black"
    >
      <div>{title}</div>
      <div>{id}</div>
        <div>{children}</div>
    </div>
  );
};

export default Column;
