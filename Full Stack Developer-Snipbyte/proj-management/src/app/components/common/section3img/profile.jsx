import React from 'react'
import Image from 'next/image'
const Profile = ({bgcolor,circle,name}) => {
  return (
    <div className='flex items-center gap-3 py-3 px-5 bg-white rounded-lg shadow-lg'>
        <Image alt='abc' src='/12.png' width={40} height={40} className={'rounded-full object-cover aspect-square '+bgcolor} />
        <div className='w-full'>
            <div>{name}</div>
            <div className=' rounded-full h-2  bg-nomgrey'></div>
            {!circle?<div className='w-2/3 rounded-full h-2 mt-2 bg-nomgrey'></div>:null}
        </div>
        <div className={"w-3 h-3 border aspect-square border-btpink "+(circle?"rounded-full":"rounded-sm")}></div>
    </div>
  )
}

export default Profile