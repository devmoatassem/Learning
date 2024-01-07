import React from "react";

const SectionDescrption = ({ customClass = "" }) => {
  return (
    <div
      className={
        "text-gray-200 leading-[30px] tracking-widest font-light " + customClass
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque laborum
      temporibus sapiente hic. Incidunt ducimus aliquid magni esse dolorem velit
      earum deserunt impedit! Consequatur reiciendis laboriosam, cupiditate quae
      maxime nemo?
    </div>
  );
};

export default SectionDescrption;
