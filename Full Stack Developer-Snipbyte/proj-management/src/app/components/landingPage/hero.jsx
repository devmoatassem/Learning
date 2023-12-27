import React from 'react'
import Headers from '../common/headers'
import Button from '../common/button'
const Hero = () => {
    const dummy = " eveniet labore officia odit mollitia fugit facere reprehenderit dicta reiciendis doloribus laudantium, minus laborum aut deleniti in!"
    return (
        <div className='bg-btgreen w-full h-screen flex flex-col items-center justify-center px-36'>
            <div className='w-[40vw]'>
                <Headers title='Save time working with Appilo Zone' description={dummy} customClass='text-white text-center' />
            </div>
            <div className='py-5'>
                <Button button='Get Started' customClass='bg-btyellow text-black'/>
            </div>
        </div>
    )
}

export default Hero