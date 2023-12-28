import React from 'react'

const QualitiesCard = ({title,description}) => {
  return (
    <div className='flex gap-4 mb-6'>
      <div className='w-7 h-7 p-1.5 bg-btgreen rounded-full fill-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
      </div>
      <div className='space-y-1'>
        <div className='text-xl font-extrabold'>{title}</div>
        <div className='text-sm text-bgdark-grey'>{description}</div>
      </div>
    </div>
  )
}

export default QualitiesCard;