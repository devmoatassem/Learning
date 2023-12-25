import React from 'react'
import Image from 'next/image';

const DueAssignment = () => {
    return (
        <div className='bg-blue-500 text-white rounded-lg'>
            <div className="flex gap-4 items-center justify-center p-4">
                <div>
                    <div className='text-lg font-bold'>Solve Mystry Problem</div>
                    <div className='text-xs font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div>
                    <Image src={'/class1.jpg'} width={100} height={100} className='rounded-2xl mb-2 w-[80px] h-[60px] object-cover' alt='Assignment' />
                </div>
            </div>
        </div>
    )
}

export default DueAssignment