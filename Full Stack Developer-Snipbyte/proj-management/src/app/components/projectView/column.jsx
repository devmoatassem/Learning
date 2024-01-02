import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import ProjectCard from './projectCard';
const Column = () => {
    return (
        <div className='flex flex-col w-[300px] gap-5 p-5 border rounded-lg '>
            <div className='flex items-center justify-between px-2 py-4' >
                <div className='flex items-center gap-2'>
                    <div className='font-semibold'>Project Category</div>
                    <div className='text-xs py-0.5 text-white bg-btpurple px-2 rounded'>6</div>
                </div>
                <div> <BsThreeDotsVertical /></div>
            </div>
            <div className='border-2 border-dashed border-blue-300 bg-blue-50 flex items-center justify-center py-3 rounded-lg text-blue-500'>
                <FaPlus />
            </div>
            <div><ProjectCard /></div>
        </div>
    )
}

export default Column