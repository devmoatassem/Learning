import React from 'react'
import { FaDownload } from "react-icons/fa";

const NoName = () => {
    return (
        <div className='bg-blue-50 rounded-xl py-6 px-10 text-center space-y-2'>
            <div className='text-xs font-semibold'>Your earnings this month</div>
            <div className='font-extrabold text-3xl'>$12000</div>
            <div className='text-xs font-light text-gray-500'>1st Feb 2021</div>
            <div className='flex items-center justify-center p-5 rounded-xl border-2 border-blue-500 text-blue-500 bg-transparent gap-3'>
                <div className='text-base'><FaDownload /></div>
                <div className='text-xs'>Download All Assignments</div>
            </div>
        </div>
    )
}

export default NoName