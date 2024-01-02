import React from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className='space-y-3 p-5 border-2 rounded-md'>
      <div className="flex items-center">
        <div className='text-purple-400 bg-purple-50 px-2 py-1 text-xs  font-semibold rounded-md'>App-Type</div>

      </div>
      <div className='mt-3 text-xl font-semibold'>Project Name</div>
      <div className="flex items-center gap-2 text-bgdark-grey text-sm">
        <IoCalendarOutline /> Due Date : 14 Aug 2021
      </div>
      <div className='text-bgdark-grey text-xs'>
        <span>Client name </span>- <span>Client Location</span>
      </div>
      <div>
        <div className='flex items-center gap-1'>
          <Image alt='abc' src={'/1.webp'} width={20} height={20} className={'rounded-full aspect-square object-cover'} />
          <div className='text-xs font-semibold'>Developer Name</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard