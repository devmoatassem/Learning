import React from 'react'
import Column from './column';
import { FaPlus } from "react-icons/fa6";
const ProjectBoard = () => {
    return (
        <div className='flex flex-wrap items-start justify-around h-full gap-4 px-5 overflow-auto w-full'>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <div className='h-96 w-[300px] border-2 border-dashed border-blue-300 bg-blue-50 flex items-center justify-center rounded-lg text-blue-500'>
                <FaPlus />
            </div>
        </div>
    )
}

export default ProjectBoard;