import { arrayMove } from "@dnd-kit/sortable";

export const findValueOfItems = (id, type, containers) => {
  if (type === "container") {
    return containers.find((item) => item.id === id);
  }
  if (type === "item") {
    return containers.find((container) =>
      container.projects.find((item) => item.id === id),
    );
  }
};

const handleDragStart = (
  event,
  containers,
  setContainers,
  activeId,
  setActiveId,
) => {
  const { active } = event;
  const { id } = active;
  setActiveId(id);
};

// handle project drag move
const handleDragMove = (
  event,
  containers,
  setContainers,
  activeId,
  setActiveId,
) => {
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
    const activeContainer = findValueOfItems(active.id, "item", containers);
    const overContainer = findValueOfItems(over.id, "item", containers);

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
    const activeContainer = findValueOfItems(active.id, "item", containers);
    const overContainer = findValueOfItems(over.id, "container", containers);

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

const handleDragEnd = (
  event,
  containers,
  setContainers,
  activeId,
  setActiveId,
) => {
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
    const activeContainer = findValueOfItems(active.id, "item", containers);
    const overContainer = findValueOfItems(over.id, "item", containers);

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
    const activeContainer = findValueOfItems(active.id, "item", containers);
    const overContainer = findValueOfItems(over.id, "container", containers);

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

export const useDragHandlers = (
  containers,
  setContainers,
  activeId,
  setActiveId,
) => {
  return [
    (event) =>
      handleDragStart(event, containers, setContainers, activeId, setActiveId),
    (event) =>
      handleDragMove(event, containers, setContainers, activeId, setActiveId),
    (event) =>
      handleDragEnd(event, containers, setContainers, activeId, setActiveId),
  ];
};
