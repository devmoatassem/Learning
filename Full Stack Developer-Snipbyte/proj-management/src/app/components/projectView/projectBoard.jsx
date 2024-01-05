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
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  // arrayMove, imported in custom hook
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import Button from "../common/button";

import { useDragHandlers, findValueOfItems } from "./customHook/useDragHandlers";

const ProjectBoard = () => {
  const [containers, setContainers] = useState(projects);
  const [activeId, setActiveId] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  // Custom Hook for DND Handlers
  const [handleDragStart, handleDragMove, handleDragEnd] = useDragHandlers(
    containers,
    setContainers,
    activeId,
    setActiveId,
  );

  // DND Sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

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
                project={findValueOfItems(
                  activeId,
                  "item",
                  containers,
                )?.projects.find((item) => item.id === activeId)}
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
