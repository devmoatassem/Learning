import React from 'react'

const SpecificationCard = ({icon,iconColor,title="Title", decription="This is description "}) => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center p-11 bg-white rounded-xl shadow-lg my-10'>
        <div className={iconColor+' w-8 p-1 bg-opacity-20 rounded-full'}>
            {icon}
        </div>

        <div className='text-lg font-bold'>{title}</div>
        <div className='text-xs text-center'>{decription}</div>
    </div>
  )
}

export default SpecificationCard;