import React from 'react'
import Image from 'next/image'
import { FaXTwitter, FaInstagram, FaFacebookF, FaRegCopyright } from "react-icons/fa6";

const VerticalProfile = () => {
    return (
        <div className='flex flex-col gap-3 items-center w-40 relative bg-white rounded-lg shadow-lg px-2 py-3'>
            <div className='absolute -top-5'>
                <Image alt='abc' src='/2.png' width={50} height={50} className='rounded-full object-cover aspect-square' />
            </div>
            <div className='text-center mt-10'>
                <div className='text-sm font-semibold '>Ralph Edwards</div>
                <div className='text-bgdark-grey text-xs'>UI Designer</div>
            </div>
            <div className='bg-bggrey h-0.5 w-full'></div>
            <div className='flex items-center text-xs gap-5 py-2'>
                <div><FaFacebookF /></div>
                <div className='p-2 bg-blue-100 aspect-square rounded-full text-blue-600'><FaInstagram /></div>
                <div><FaXTwitter /></div>
            </div>
        </div>
    )
}

export default VerticalProfile