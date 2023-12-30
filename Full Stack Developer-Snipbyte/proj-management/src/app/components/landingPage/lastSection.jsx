import React from 'react'
import Headers from '../common/headers'
import InfoAccordian from './infoAccordian'
import PartnersList from './partnersList'
import Lastsectionimg from '../common/lastSectionImg'

const LastSection = () => {
    const dummy = "Eveniet labore officia odit mollitia fugit facere reprehenderit dicta reiciendis doloribus laudantium, minus laborum aut deleniti in!"
    return (

        <div className='w-full h-full py-28'>
            <div className='flex flex-col items-center justify-center px-10 lg:px-36 2xl:max-w-[1400px] mx-auto'>
                <div className='md:w-[40vw]'>
                    <Headers title='Save time working with Appilo Zone' description={dummy} customClass='text-bgdark-grey text-center' headingColor="text-btpurple" />
                </div>
                <div className='md:flex w-full py-20 gap-20'>
                    <div className='md:w-1/2'>
                        <Lastsectionimg />
                    </div>
                    <div className='md:w-1/2 space-y-10 py-10'>

                        <InfoAccordian title={"Title "} description={dummy} link={"/"} />

                        <InfoAccordian title={"Title"} description={dummy} link={"/"} />
                    </div>
                </div>
                <div className='mt-10'>
                    <PartnersList />
                </div>
            </div>

        </div>
    )
}

export default LastSection