import React from "react";
import { FaFacebookF } from "react-icons/fa";

const SocialsArray = () => {
  const iconList = [
    {
      icon: <FaFacebookF />,
    },
    {
      icon: <FaFacebookF />,
    },
    {
      icon: <FaFacebookF />,
    },
    {
      icon: <FaFacebookF />,
    },
  ];
  return (
    <div className="flex items-center gap-4">
      {iconList.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#26292e] text-white cursor-pointer hover:text-bgSlate hover:bg-opacity-80"
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default SocialsArray;
