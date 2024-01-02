import React from 'react'

const Lazyloading = () => {
  return (
    <div className='flex items-center gap-6'>
        <div className='bg-nomgrey rounded-full w-10 h-10 aspect-square'></div>
        <div className='w-full space-y-3'>
            <div className=' rounded-full h-3 bg-nomgrey'></div>
            <div className='w-2/3 rounded-full h-3 bg-nomgrey'></div>
        </div>
    </div>
  )
}

export default Lazyloading