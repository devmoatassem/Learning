import React from 'react'
import Image from 'next/image'
const DataManageImg = () => {
  return (
    <div className="relative bg-bgSlateLight rounded-3xl mb-20">
      <div className="hero-bg absolute inset-0 h-full w-full"></div>
      <div className="w-full h-full z-30 relative">
        <Image
          src={"/3_162.png"}
          alt="img"
          width={9900}
          height={9900}
          className="w-full object-fill"
        />
      </div>
    </div>
  );
}

export default DataManageImg