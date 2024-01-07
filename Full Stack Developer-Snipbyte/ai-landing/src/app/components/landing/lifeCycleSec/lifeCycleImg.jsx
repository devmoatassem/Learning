import React from "react";
import SectionDescrption from "../common/sectionDescrption";
import SectionTitle from "../common/sectionTitle";
import Image from "next/image";
const LifeCycleImg = () => {
  const imgList = [
    {
      img: "/2.jpg",
    },
    {
      img: "/5.jpg",
    },
    {
      img: "/1.jpg",
    },
  ];
  return (
    <div className="relative bg-bgSlateLight rounded-3xl mb-20 p-16">
      <div className="style-section-bg absolute inset-0 h-full w-full"></div>
      <div className="flex items-start justify-between z-50">
        <div className="space-y-20 max-w-[60%]">
          <SectionTitle />
          <SectionDescrption />
        </div>
        <div className="flex flex-col max-w-[20%]">
          {imgList.map((item, index) => (
            <div key={index} className="">
              <Image
                src={item.img}
                alt="img"
                width={100}
                height={100}
                className="w-[170px] rounded-full object-cover aspect-square border-4 border-blue-500"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-32">
        <Image
          src={"/4.jpg"}
          alt="img"
          width={400}
          height={400}
          className="w-[600px] h-[250px] rounded-full object-cover  border-4 border-blue-500"
        />
      </div>
    </div>
  );
};

export default LifeCycleImg;
