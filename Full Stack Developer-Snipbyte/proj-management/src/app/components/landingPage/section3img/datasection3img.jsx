import React from 'react'
import Lazyloading from './lazyloading'
import VerticalProfile from './verticalProfile'
import Profile from './profile'

const Datasection3img = () => {
    return (
        <div className='max-w-[500px] mx-auto pl-10 px-5 md:px-0 py-20 md:py-0 mb-20 md:mb-0'>
            <div className='relative'>
                <div className='bg-white shadow-lg p-8 rounded-lg space-y-10 w-[90%] '>
                    <Lazyloading />
                    <Lazyloading />
                    <Lazyloading />
                </div>
                <div className='absolute right-0 md:right-5 -bottom-40 md:-bottom-20'>
                    <VerticalProfile />
                </div>
                <div className='absolute z-50 -top-5 right-0 md:right-10 w-80'>
                    <Profile circle={true} name={"Ether Edward"} bgcolor={"bg-btblue"} />
                </div>
                <div className='absolute z-50 bottom-20 -left-10 w-60'>
                    <Profile circle={false} name={"Ether Edward"} bgcolor={"bg-btyellow"} />
                </div>
            </div>
        </div>
    )
}

export default Datasection3img