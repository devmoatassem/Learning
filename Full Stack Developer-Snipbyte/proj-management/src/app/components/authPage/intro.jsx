import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className='relative h-full w-full rounded-xl overflow-hidden'>
            <div className='absolute w-full h-full -z-50'>
                <Image alt='SnipByte' src='/auth-bg.svg' height={"1000"} width={"1000"} className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col items-center justify-between h-full text-center text-white py-10 px-20'>
                <div>
                    <div className='font-extrabold text-3xl whitespace-nowrap'>Welcome to SnipByte</div>
                    <div className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div>
                    <div className='font-semibold text-2xl whitespace-nowrap'>Welcome to SnipByte</div>
                    <div className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>

            </div>

        </div>
    )
}

export default Intro