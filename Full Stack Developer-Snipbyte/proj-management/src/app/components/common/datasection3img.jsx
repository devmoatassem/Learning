import React from 'react'
import Lazyloading from './section3img/lazyloading'
import VerticalProfile from './section3img/verticalProfile'
import Profile from './section3img/profile'

const Datasection3img = () => {
    return (
        <div className='max-w-[500px] mx-auto pl-10 '>
            <div className='relative'>
                <div className='bg-white shadow-lg p-8 rounded-lg space-y-10 w-[90%] '>
                    <Lazyloading />
                    <Lazyloading />
                    <Lazyloading />
                </div>
                <div className='absolute right-5 -bottom-20'>
                    <VerticalProfile />
                </div>
                <div className='absolute z-50 -top-5 right-10 w-80'>
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