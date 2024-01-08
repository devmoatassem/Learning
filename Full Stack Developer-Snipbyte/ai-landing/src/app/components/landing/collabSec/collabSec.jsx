import React from "react";
import SectionTitle from "../common/sectionTitle";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const list = [
  {
    title: "Seamless Integration",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
  },
  {
    title: "Quick Response Time",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
  },
  {
    title: "Well Trained Staff",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit officiis mollitia dolorum. Dolores dicta iste quo id asperiores quam non.",
  },
];

const CollabSec = () => {
  return (
    <div className="max-auto w-full">
      <div className="grid md:grid-cols-2 place-content-between">
        <div className="flex flex-col w-full gap-4">
          <div className="w-full">
            <SectionTitle title="COLLABORATE WITH US" />
          </div>
          {list.map((item, index) => (
            <div key={index} className="lg:max-w-[50%]">
              <div className="flex items-center gap-4 py-3">
                <div className="text-center text-sm p-1.5 font-light rounded-full bg-orange-500 text-white">
                  <FaCheck />
                </div>
                <div className="font-semibold text-gray-200">{item.title}</div>
              </div>
              <div className="text-xs text-gray-200 tracking-widest font-light">
                {index === 0 ? item.description : null}
              </div>
            </div>
          ))}
          <div className="py-4">
            <button className="bg-bgSlateLight border-2 text-white px-10 py-3 rounded-md font-semibold text-lg">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="flex flex-col md:ml-auto">
          <div className="text-xs ml-auto  lg:max-w-[70%] text-gray-200 tracking-widest font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            iusto amet? Corporis, omnis! Deserunt corporis repellat qui
            laboriosam perferendis, iusto cumque molestiae earum adipisci
            impedit quam nesciunt, quisquam eos hic.
          </div>
          <div>
            <Image
              src={"/ai-nuclear.png"}
              alt="img"
              width={9900}
              height={9900}
              className="w-full h- object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollabSec;
