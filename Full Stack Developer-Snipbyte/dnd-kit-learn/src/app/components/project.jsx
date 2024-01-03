import React from 'react'
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Project = ({id, title}) => {


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


  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      {...listeners}
      className="border-2 rounded bg-white p-2"
    >
      <div>{title}</div>
      <div>{id}</div>
    </div>
  );
}

export default Project