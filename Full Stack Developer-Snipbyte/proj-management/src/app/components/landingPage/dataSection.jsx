import React from 'react'
import Headers from '../common/headers'
import QualitiesCard from '../common/qualitiesCard'
import Button from '../common/button'
import ProfilesArray from './profilesArray'

const DataSection = ({ right, logo, img, header, data, button }) => {

  // const details=""
  // if (data.type === 'profiles') {
      
  //   details = <ProfilesArray profiles={data.content} />
  // }
  // else if (data.type === 'list') {
  //   details = data.content.map((quality, index) => {
  //     return (
  //       <div key={index} className='mb-5'>
  //         <QualitiesCard title={quality.title} description={quality.description} />
  //       </div>
  //     )
  //   })
  // }




return (
  <div className={'md:flex items-start px-36 py-28' + (right ? " flex-row-reverse" : " ")}>
    <div className='md:w-1/2 flex flex-col'>
      <div className={logo.class + ' flex items-center w-12 h-12 p-2 bg-opacity-20 rounded-full mb-10'}>
        {logo.icon}
      </div>
      <div className='mb-5'>
        <Headers title={header.title} description={header.description} customClass='text-bgdark-grey text-left' headingColor="text-btpurple" />
      </div>
      <div className='mb-5 '>
        {
        data.type==="list"?data.content.map((quality, index) => {
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
    <div>
      {"Image"}
    </div>
  </div>
)
}

export default DataSection