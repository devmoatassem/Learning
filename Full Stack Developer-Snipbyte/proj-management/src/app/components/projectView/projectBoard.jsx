import React from 'react'
import Column from './column';
import { FaPlus } from "react-icons/fa6";
import { projects1, projects2 } from '../common/tempdata';
const ProjectBoard = () => {
    return (
        <div className='flex flex-wrap items-start justify-around h-full gap-4 px-5 overflow-auto w-full'>
            <Column projList={projects1} />
            <Column projList={projects2} />
            <div className='h-96 w-[300px] border-2 border-dashed border-blue-300 bg-blue-50 flex items-center justify-center rounded-lg text-blue-500'>
                <FaPlus />
            </div>
        </div>
    )
}

export default ProjectBoard;