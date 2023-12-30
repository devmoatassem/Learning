import React from 'react'
import Image from 'next/image'
import '../common/custom.css'
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Section2img = () => {
    return (
        <div className='max-w-[500px] px-5 md:px-0 py-20 md:py-0 mb-20 md:mb-0'>
            <div className=' relative'>
                <svg className='-z-50' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#e4f4f3" d="M47.3,-61.3C57.5,-47.9,59.3,-29.3,62.4,-11.1C65.5,7.1,69.9,25,64.1,38.9C58.3,52.7,42.3,62.6,24.5,70.3C6.7,78,-12.9,83.7,-26.5,76.9C-40.2,70.2,-47.9,51.1,-54.7,34.1C-61.6,17,-67.7,2,-64.4,-10.5C-61.1,-22.9,-48.5,-32.9,-36.3,-45.9C-24,-59,-12,-75.1,3.3,-79.1C18.6,-83,37.1,-74.7,47.3,-61.3Z" transform="translate(100 100)" />
                </svg>
                <div className='z-50 w-72 absolute -top-16 right-10 '>
                    <Image alt='abc' src='/2.png' width={400} height={200} className='mask-image1' />
                </div>
                <div className='z-50 w-72 absolute top-52'>
                    <Image alt='abc' src='/2.png' width={600} height={400} className='mask-image2' />
                </div>


                <div className='flex items-center gap-5 bg-white w-fit p-3 rounded-md absolute -bottom-60 md:bottom-auto md:top-1/2 right-4 z-50'>
                    <div className='font-semibold text-lg relative'>
                        <FaRegBell />
                        <div className='w-2 h-2 bg-orange-400 rounded-full absolute top-0'></div>
                    </div>
                    <div><Image alt='abc' src='/2.png' width={40} height={40} className='rounded-lg object-cover aspect-square' /></div>
                    <div className='w-[110px]'>
                        <div className='text-sm font-bold'>Your Name</div>
                        <div className='text-xs font-light'>Administrator</div>
                    </div>
                    <div className='font-bold text-lg border-2 rounded-md p-0.5'><IoIosArrowDown /></div>
                </div>


                <div className='flex flex-col items-center bg-white w-fit px-10 py-4 rounded-lg absolute top-32 z-50'>
                    <div className='text-sm font-bold'>Visitors</div>
                    <div className='text-xs font-light pb-2'>avrg</div>
                    <div className='text-purple-600 text-2xl font-semibold'>820</div>
                    <div className='flex text-xs items-center text-purple-600'>
                        <div>per day</div>
                        <div><IoIosArrowDown /></div>
                    </div>
                </div>

                <div className='w-2 h-2 bg-btgreen rounded-full absolute top-20 left-10'></div>
                <div className='w-1 h-1 bg-btgreen rounded-full absolute top-36 right-2'></div>
                <div className='w-1 h-1 bg-btgreen rounded-full absolute top-32 right-6'></div> 
                <div className='w-1 h-1 bg-btgreen rounded-full absolute top-40 right-5'></div> 
            </div>


        </div>
    )
}

export default Section2img