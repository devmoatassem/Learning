import React from 'react'
import Headers from '../common/headers'
import QualitiesCard from '../common/qualitiesCard'
import Button from '../common/button'
import ProfilesArray from './profilesArray'

const DataSection = ({ right, logo, img, header, data, button }) => {

  return (
    <div className={'bg-[#f8f9fd] md:flex items-start flex-wrap px-36 py-28 w-full 2xl:max-w-[1400px] mx-auto ' + (right ? " flex-row-reverse" : " ")}>
      <div className='md:w-1/2 flex flex-col'>
        <div className={logo.class + ' flex items-center w-12 h-12 p-2 bg-opacity-20 rounded-full mb-10'}>
          {logo.icon}
        </div>
        <div className='mb-5'>
          <Headers title={header.title} description={header.description} customClass='text-bgdark-grey text-left' headingColor="text-btpurple" />
        </div>
        <div className='mb-5 '>
          {
            data.type === "list" ? data.content.map((quality, index) => {
              return (
                <div key={index} className='mb-5'>
                  <QualitiesCard title={quality.title} description={quality.description} />
                </div>
              )
            })
              : <ProfilesArray profiles={data.content} />
          }
        </div>
        <div><Button button={button.title} customClass={button.class} /></div>
      </div>
      <div className='md:w-1/2 '>
        {img}
      </div>
    </div>
  )
}

export default DataSection