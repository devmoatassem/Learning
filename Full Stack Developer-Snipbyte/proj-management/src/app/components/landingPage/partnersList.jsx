import React from 'react'
import Image from 'next/image'
const logos = [
    {
        name: "logo1",
        path:"/brandsSVG/spotify.svg"
    },
    {
        name: "logo1",
        path:"/brandsSVG/slack.svg"
    },
    {
        name: "logo1",
        path:"/brandsSVG/dropbox.svg"
    },
    {
        name: "logo1",
        path:"/brandsSVG/webflow.svg"
    },
    {
        name: "logo1",
        path:"/brandsSVG/zoom.svg"
    },
]

const brandlist = logos.map((logo,index)=>{ 
    return (
       <Image key={index} src={logo.path} alt={logo.name} width={200} height={200} className='h-4 mx-auto md:h-7 my-5 lg:my-0' />
    )
})

const PartnersList = () => {
  return (
    <div className='flex flex-wrap justify-between items-center py-8 px-4 shadow-lg drop-shadow rounded-lg'>
        {brandlist}
    </div>
  )
}

export default PartnersList