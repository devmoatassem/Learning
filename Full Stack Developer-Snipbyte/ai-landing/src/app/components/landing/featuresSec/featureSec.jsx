"use client";
import React from "react";
import SectionTitle from "../common/sectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./card";
import "../styles/customStyles.css";
import { MdPermPhoneMsg } from "react-icons/md";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};



const cardlist = [
  {
    title: "Ask Anything",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
    icon: <MdPermPhoneMsg />,
    iconbg: "bg-orange-500",
  },
  {
    title: "Improve Everyday",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
    icon: <MdPermPhoneMsg />,
    iconbg: "bg-green-500",
  },
  {
    title: "Connect Everywhere",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
    icon: <MdPermPhoneMsg />,
    iconbg: "bg-red-500",
  },
  {
    title: "Do Whatever",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
    icon: <MdPermPhoneMsg />,
    iconbg: "bg-blue-500",
  },
  {
    title: "Ask Anything",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
    icon: <MdPermPhoneMsg />,
    iconbg: "bg-red-500",
  },
  {
    title: "Ask Anything",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
    icon: <MdPermPhoneMsg />,
    iconbg: "bg-orange-500",
  },
  {
    title: "Ask Anything",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
    icon: <MdPermPhoneMsg />,
    iconbg: "bg-pink-500",
  },
];
const FeatureSec = () => {
  return (
    <div>
      <div className="mx-auto w-full space-y-10">
        <div className="text-center">
          <SectionTitle title="CHAT SMARTER, NOT HARDER WITH BRAINWAVE" />
        </div>
        <div className="h-full py-10">
          <Carousel
            // draggable={false}
            responsive={responsive}
            // showDots={true}
            // infinite={true}
            partialVisible={true}
            ssr={true}
          >
            {cardlist.map((item, index) => (
                <Card
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                iconbg={item.iconbg}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeatureSec;
