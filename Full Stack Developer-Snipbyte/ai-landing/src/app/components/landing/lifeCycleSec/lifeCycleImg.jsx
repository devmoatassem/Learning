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
    <div className="relative bg-bgSlateLight rounded-3xl mb-20 p-8 lg:p-16 ">
      <div className="style-section-bg absolute inset-0 h-full w-full"></div>
      <div className="md:flex items-start justify-between z-50 mb-20 md:mb-0">
        <div className="space-y-20 lg:max-w-[60%]">
          <SectionTitle />
          <SectionDescrption />
        </div>
        <div className="flex flex-col items-center gap-1 w-full lg:max-w-[20%]">
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
      <div className="absolute -bottom-20 lg:-bottom-32 left-6 lg:left-auto">
        <Image
          src={"/4.jpg"}
          alt="img"
          width={400}
          height={400}
          className="w-[70vw] h-[150px] lg:w-[600px] lg:h-[250px] rounded-full object-cover border-4 border-blue-500"
        />
      </div>
    </div>
  );
};

export default LifeCycleImg;
