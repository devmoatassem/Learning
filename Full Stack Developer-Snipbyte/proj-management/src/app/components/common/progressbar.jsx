import React from 'react'
import { SlCalender } from "react-icons/sl";

const Progressbar = ({ title, percentage, date }) => {
    return (
        <div className='text-bgdark-grey '>
            <div className='text-xs  w-full'>{title}</div>
            <div className='flex items-center gap-2'>
                <div className='bg-bggrey w-[80px] h-2 rounded-full'>
                    <div className={(percentage < 50 ? "bg-btyellow" : percentage < 80 ? "bg-btpurple" : "bg-btgreen") + ` h-full  rounded-full relative `} style={{ width: `${percentage}%` }}></div>
                </div>
                <div className='flex items-center gap-1 text-xs text-bgdark-grey'>
                    <div>
                        <SlCalender />
                    </div>
                    <div>
                        {date}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progressbar;