"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Column from "./column";
import ProjectCard from "./projectCard";
import { projects } from "../common/tempdata";
import Input from "../common/input";
import Select from "react-select";
import { FaPlus } from "react-icons/fa6";
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
import Button from "../common/button";

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
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("modal opened");
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement("body");
  const mltoptions = [
    { value: "dev1", label: "Developer 1" },
    { value: "dev2", label: "Developer 2" },
    { value: "dev3", label: "Developer 3" },
  ];

  const optionsStyle = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      borderColor: "#e5e7eb",
      width: "100%",
      padding: "0.1rem",

      borderRadius: "0.5rem",
      // boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      outline: "none",
      // borderColor: state.isFocused ? "grey" : "red",
      // outline: state.isFocused ? "none" : "orange",
      outline: "none",
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        outline: "none",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "0.875rem",
    }),
  };
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="mx-auto w-full px-10 py-5 lg:px-36 2xl:max-w-[1400px]">
      {/* /////////////////////////////////////////////////////////////////////////// */}

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="relative">
            <div className="absolute right-0 top-0">
              <button onClick={closeModal}>X</button>
            </div>
            <div className="pb-5 text-lg font-semibold">Project Details</div>
          </div>

          <form className="w-[300px]">
            <Input
              label="Title"
              type="text"
              placeholder="Enter Project Title"
            />
            <label htmlFor="categories" className="text-xs font-semibold">
              Project Domain
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={mltoptions}
              isMulti={true}
              styles={optionsStyle}
              className="mb-3 rounded-lg shadow-sm"
            />

            <Input label="Client Name" type="text" placeholder="Client Name" />
            <div className="text-sm">
              <Input label="Due Date" type="date" placeholder="none" />
            </div>

            <label htmlFor="developers" className="text-xs font-semibold">
              Assign Developers
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={mltoptions}
              isMulti={true}
              className="rounded-lg shadow-sm"
              // styles={{
              //   menuPortal: (provided, state) => ({
              //     ...provided,
              //     outline: state.isFocused
              //       ? "1px solid red"
              //       : provided.outline,
              //   }),
              // }}
              // classNames={{
              //   control: (state) =>
              //     state.isFocused ? "border-red-600 outline-red" : "border-grey-300",
              // }}
              styles={optionsStyle}
            />
            <div className="pt-5">
              <Button
                button={"Add Project"}
                customClass="bg-btgreen text-white text-sm rounded-lg w-fit px-5"
              />
            </div>
          </form>
        </Modal>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
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
                size={container.projects.length}
                openModal={setIsOpen}
                isOpenModal={modalIsOpen}
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
          <DragOverlay>
            {activeId ? (
              <ProjectCard
                key={activeId}
                id={activeId}
                project={
                  findValueOfItems(activeId, "item")?.projects.find(
                    (item) => item.id === activeId,
                  )
                }
                isDragging={true}
              />
            ) : null}
            </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default ProjectBoard;
