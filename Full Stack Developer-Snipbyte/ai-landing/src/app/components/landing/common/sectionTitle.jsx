import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="w-full">
      <div className="text-4xl lg:text-6xl font-bold leading-snug tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-100 to-gray-50">
        {title ? (
          title
        ) : (
          <>
            DATA-FIRST <br /> ML LIFECYCLE
          </>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
