import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Header = () => {
    return (
        <div className='flex items-center justify-between py-5 border-b px-5'>
            <div className='relative w-[500px]'>
                <input type="text" placeholder='Search Here' className='w-full pl-10 placeholder:text-sm placeholder:text-bgdark-grey py-2 px-5 border rounded-lg' />
                <div className='absolute top-3 left-3 mt-0.5 text-bgdark-grey'>
                    <FaSearch />
                </div>

            </div>
            <div className='bg-bggrey p-2 rounded-full text-bgdark-grey'>
                <FaRegBell />
            </div>

        </div>
    )
}

export default Header