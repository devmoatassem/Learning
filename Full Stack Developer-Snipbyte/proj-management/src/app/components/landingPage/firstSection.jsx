import React from 'react'
import Headers from '../common/headers'
import SpecificationCard from './firstsection/specificationCard'

const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>

]



const Section = () => {
    const dummy = "Eveniet labore officia odit mollitia fugit facere reprehenderit dicta reiciendis doloribus laudantium, minus laborum aut deleniti in!"
    return (
        <div className='bg-bggrey w-full h-full py-28'>
            <div className='2xl:max-w-[1400px] mx-auto px-10 lg:px-36 flex flex-col items-center justify-center'>
                <div className='text-btpurple font-medium py-3 mt-[20vh]'># Installing and Enjoying Process</div>
                <div className='md:w-[40vw]'>
                    <Headers title='Save time working with Appilo Zone' description={dummy} customClass='text-bgdark-grey text-center' headingColor="text-btpurple" />
                </div>
                <div className='md:grid grid-cols-3 gap-6 justify-between'>
                    <SpecificationCard icon={icons[0]} decription={dummy} iconColor="bg-btpink fill-btpink" />
                    <SpecificationCard icon={icons[1]} decription={dummy} iconColor="bg-btgreen fill-btgreen" />
                    <SpecificationCard icon={icons[2]} decription={dummy} iconColor="bg-btyellow fill-btyellow" />
                </div>
            </div>

        </div>
    )
}

export default Section;