"use client";
import React, { useState } from "react";

import { FaPlus } from "react-icons/fa6";
import Column from "./column";
import ProjectCard from "./projectCard";
import { projects } from "../common/tempdata";
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

const ProjectBoard = () => {
  const [containers, setContainers] = useState(projects);
  const [activeId, setActiveId] = useState(null);

  // DND Sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  //   ///////////////////////////////////////////////////////////////////
  // Main DND Handlers Functions
  // /////////////////////////////////////////////////////////////////////////
  // Find the value of the items
  function findValueOfItems(id, type) {
    if (type === "container") {
      return containers.find((item) => item.id === id);
    }
    if (type === "item") {
      return containers.find((container) =>
        container.projects.find((item) => item.id === id),
      );
    }
  }

  const handleDragStart = (event) => {
    const { active } = event;
    const { id } = active;
    setActiveId(id);
  };

  // handle project drag move
  const handleDragMove = (event) => {
    const { active, over } = event;

    // Handle Items Sorting
    if (
      active.id.toString().includes("project") &&
      over?.id.toString().includes("project") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active container and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;

      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.projects.findIndex(
        (item) => item.id === active.id,
      );
      const overitemIndex = overContainer.projects.findIndex(
        (item) => item.id === over.id,
      );
      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].projects = arrayMove(
          newItems[activeContainerIndex].projects,
          activeitemIndex,
          overitemIndex,
        );

        setContainers(newItems);
      } else {
        // In different containers
        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].projects.splice(
          activeitemIndex,
          1,
        );
        newItems[overContainerIndex].projects.splice(
          overitemIndex,
          0,
          removeditem,
        );
        setContainers(newItems);
      }
    }

    // Handling Item Drop Into a Container
    if (
      active.id.toString().includes("project") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "container");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;

      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.projects.findIndex(
        (item) => item.id === active.id,
      );

      // Remove the active item from the active container and add it to the over container
      let newItems = [...containers];
      const [removeditem] = newItems[activeContainerIndex].projects.splice(
        activeitemIndex,
        1,
      );
      newItems[overContainerIndex].projects.push(removeditem);
      setContainers(newItems);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Handling Container Sorting
    if (
      active.id.toString().includes("container") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === active.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === over.id,
      );
      // Swap the active and over container
      let newItems = [...containers];
      newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex);
      setContainers(newItems);
    }

    // Handling item Sorting
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );
      // Find the index of the active and over item
      const activeitemIndex = activeContainer.projects.findIndex(
        (item) => item.id === active.id,
      );
      const overitemIndex = overContainer.projects.findIndex(
        (item) => item.id === over.id,
      );

      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].projects = arrayMove(
          newItems[activeContainerIndex].projects,
          activeitemIndex,
          overitemIndex,
        );
        setContainers(newItems);
      } else {
        // In different containers
        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].projects.splice(
          activeitemIndex,
          1,
        );
        newItems[overContainerIndex].projects.splice(
          overitemIndex,
          0,
          removeditem,
        );
        setContainers(newItems);
      }
    }
    // Handling item dropping into Container
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "container");

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );
      // Find the index of the active and over item
      const activeitemIndex = activeContainer.projects.findIndex(
        (item) => item.id === active.id,
      );

      let newItems = [...containers];
      const [removeditem] = newItems[activeContainerIndex].projects.splice(
        activeitemIndex,
        1,
      );
      newItems[overContainerIndex].projects.push(removeditem);
      setContainers(newItems);
    }
    setActiveId(null);
  };

  //   /////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="mx-auto w-full px-10 lg:px-36 py-5 2xl:max-w-[1400px]">
      <div className="grid grid-cols-3 gap-6">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragMove={handleDragMove}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={containers.map((i) => i.id)}>
            {containers.map((container) => (
              <Column
                key={container.id}
                title={container.categorty}
                id={container.id}
              >
                <SortableContext items={container.projects.map((i) => i.id)}>
                  <div className="flex flex-col items-start gap-3">
                    {container.projects.map((proj) => (
                      <ProjectCard key={proj.id} id={proj.id} project={proj} />
                    ))}
                  </div>
                </SortableContext>
              </Column>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default ProjectBoard;

//  <div className="grid grid-cols-4 gap-4">
//   {/* <Column projList={projects1} />
//         <Column projList={projects2} /> */}

//   {/* <div className='h-96 w-[300px] border-2 border-dashed border-blue-300 bg-blue-50 flex items-center justify-center rounded-lg text-blue-500'>
//             <FaPlus />
//         </div> */}
// </div>
