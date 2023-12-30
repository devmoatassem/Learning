"use client";
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const InfoAccordian = ({ title, description, link }) => {

  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className='bg-[#fcfbff] flex items-start gap-3 p-4 shadow-lg drop-shadow-lg rounded-lg w-full border'>
      <div className='text-2xl mt-1'>
        <button onClick={handleClick}>{open ? <FaAngleUp /> : <FaAngleDown />}</button>
      </div>
      <div className='w-full'>
        <div className='text-btpurple font-semibold text-2xl whitespace-nowrap'>{title}</div>
        {open ?
          <>
            <div className='text-bgdark-grey text-left text-sm py-2'>
              {description}
            </div>
            <Link href={link} className='flex items-center gap-2 text-sm'>

              <div className=' text-btgreen'>
                Learn More
              </div>
              <div>
                <FaArrowRight />
              </div>
            </Link>
          </>
          : null
        }


      </div>
    </div>
  )
}

export default InfoAccordian;