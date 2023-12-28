import React from 'react'
import Headers from '../common/headers'
import Button from '../common/button'
import Image from 'next/image'
const Hero = () => {
    const dummy = " eveniet labore officia odit mollitia fugit facere reprehenderit dicta reiciendis doloribus laudantium, minus laborum aut deleniti in!"
    return (

        <div className='bg-btgreen relative w-full h-screen flex flex-col items-center px-36'>
            <div className='w-[40vw] flex flex-col items-center mt-[25vh]'>
                <Headers title='Save time working with Appilo Zone' description={dummy} customClass='text-white text-center' />
                <div className='py-5'>
                    <Button button='Get Started' customClass='bg-btyellow text-black' />
                </div>
            </div>
            <div className='absolute top-2/3 h-full'>
                <Image className='object-cover rounded-xl border md:w-[50vw] aspect-video shadow-lg drop-shadow' src='/dash1.png' width={800} height={600} />
            </div>
        </div>
    )
}

export default Hero