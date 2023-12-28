import React from 'react'
import Headers from '../common/headers'
import InfoAccordian from './infoAccordian'
import PartnersList from './partnersList'

const LastSection = () => {
    const dummy = "Eveniet labore officia odit mollitia fugit facere reprehenderit dicta reiciendis doloribus laudantium, minus laborum aut deleniti in!"
    return (
        <div className='bg-bggrey w-full h-full flex flex-col items-center justify-center px-36 py-28'>
            <div className='w-[40vw]'>
                <Headers title='Save time working with Appilo Zone' description={dummy} customClass='text-bgdark-grey text-center' headingColor="text-btpurple" />
            </div>
            <div className='md:flex w-full'>
                <div className='md:w-1/2'>
                    image
                </div>
                <div className='md:w-1/2 space-y-10'>
                    <div className='w-full'>
                        <InfoAccordian title={"Title "} description={dummy} link={"/"} />
                    </div>

                    <InfoAccordian title={"Title"} description={dummy} link={"/"} />
                </div>
            </div>
            <div className='mt-10'>
                <PartnersList />
            </div>
        </div>
    )
}

export default LastSection