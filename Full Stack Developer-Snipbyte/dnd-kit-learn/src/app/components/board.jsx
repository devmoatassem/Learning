"use client";
import React from "react";
import Column from "./column";
import Project from "./project";
import { useState } from "react";

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

const Board = () => {
  const [containers, setContainers] = useState([
    {
      id: "container-1",
      title: "Container 1",
      items: [
        {
          id: "item-1",
          title: "Item 1",
        },
        {
          id: "item-2",
          title: "Item 2",
        },
        {
          id: "item-3",
          title: "Item 3",
        },
        {
          id: "item-4",
          title: "Item 4",
        },
      ],
    },
    {
      id: "container-2",
      title: "Container 2",
      items: [
        {
          id: "item-5",
          title: "Item 5",
        },
        {
          id: "item-6",
          title: "Item 6",
        },
        {
          id: "item-7",
          title: "Item 7",
        },
        {
          id: "item-8",
          title: "Item 8",
        },
      ],
    },
  ]);


  
  const [activeId, setActiveId] = useState(null);
  const [currentContainerId, setCurrentContainerId] = useState();
  const [containerName, setContainerName] = useState("");
  const [itemName, setItemName] = useState("");

  // DND Handlers
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Find the value of the items
  function findValueOfItems(id, type) {
    if (type === "container") {
      return containers.find((item) => item.id === id);
    }
    if (type === "item") {
      return containers.find((container) =>
        container.items.find((item) => item.id === id)
      );
    }
  }

  const findItemTitle = (id) => {
    const container = findValueOfItems(id, "item");
    if (!container) return "";
    const item = container.items.find((item) => item.id === id);
    if (!item) return "";
    return item.title;
  };

  const findContainerTitle = (id) => {
    const container = findValueOfItems(id, "container");
    if (!container) return "";
    return container.title;
  };

  const findContainerItems = (id) => {
    const container = findValueOfItems(id, "container");
    if (!container) return [];
    return container.items;
  };

  const handleDragStart = (event) => {
    const { active } = event;
    const { id } = active;
    setActiveId(id);
  };
  const handleDragMove = (event) => {
    const { active, over } = event;

    // Handle Items Sorting
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
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
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );
      const overitemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id
      );
      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeitemIndex,
          overitemIndex
        );

        setContainers(newItems);
      } else {
        // In different containers
        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1
        );
        newItems[overContainerIndex].items.splice(
          overitemIndex,
          0,
          removeditem
        );
        setContainers(newItems);
      }
    }

    // Handling Item Drop Into a Container
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
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );

      // Remove the active item from the active container and add it to the over container
      let newItems = [...containers];
      const [removeditem] = newItems[activeContainerIndex].items.splice(
        activeitemIndex,
        1
      );
      newItems[overContainerIndex].items.push(removeditem);
      setContainers(newItems);
    }
  };
  
  



    function handleDragEnd(event) {
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
          (container) => container.id === active.id
        );
        const overContainerIndex = containers.findIndex(
          (container) => container.id === over.id
        );
        // Swap the active and over container
        let newItems = [...containers];
        newItems = arrayMove(
          newItems,
          activeContainerIndex,
          overContainerIndex
        );
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
          (container) => container.id === activeContainer.id
        );
        const overContainerIndex = containers.findIndex(
          (container) => container.id === overContainer.id
        );
        // Find the index of the active and over item
        const activeitemIndex = activeContainer.items.findIndex(
          (item) => item.id === active.id
        );
        const overitemIndex = overContainer.items.findIndex(
          (item) => item.id === over.id
        );

        // In the same container
        if (activeContainerIndex === overContainerIndex) {
          let newItems = [...containers];
          newItems[activeContainerIndex].items = arrayMove(
            newItems[activeContainerIndex].items,
            activeitemIndex,
            overitemIndex
          );
          setContainers(newItems);
        } else {
          // In different containers
          let newItems = [...containers];
          const [removeditem] = newItems[activeContainerIndex].items.splice(
            activeitemIndex,
            1
          );
          newItems[overContainerIndex].items.splice(
            overitemIndex,
            0,
            removeditem
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
          (container) => container.id === activeContainer.id
        );
        const overContainerIndex = containers.findIndex(
          (container) => container.id === overContainer.id
        );
        // Find the index of the active and over item
        const activeitemIndex = activeContainer.items.findIndex(
          (item) => item.id === active.id
        );

        let newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1
        );
        newItems[overContainerIndex].items.push(removeditem);
        setContainers(newItems);
      }
      setActiveId(null);
    }

  return (
    <div className="bg-black text-white">
      <div>This is board and below we have columns</div>
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
                title={container.title}
                id={container.id}
              >
                <SortableContext items={container.items.map((i) => i.id)}>
                  <div className="flex flex-col items-start gap-3">
                    {container.items.map((i) => (
                      <Project key={i.id} id={i.id} title={i.title} />
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

export default Board;
