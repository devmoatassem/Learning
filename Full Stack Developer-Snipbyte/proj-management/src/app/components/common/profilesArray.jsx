import React from 'react'
import Image from 'next/image'
const ProfilesArray = ({ profiles, showadd=true, css }) => {


  const profilesList = profiles.map((profile, index) => {
    return (
      <Image key={index} alt='abc' src={profile.img} width={50} height={50} className={'rounded-full aspect-square object-cover border-2 border-white ' + (index > 0 ? " -ml-3 " : " ") + css} />
    )
  })
  return (
    <div className='flex'>
      {profilesList}
      {showadd? <div className='text-center p-1 w-[50px] h-[50px] rounded-full bg-btyellow border-2 border-white text-white text-3xl aspect-square -ml-3'>+</div> :null}
    </div>
  )
}

export default ProfilesArray;