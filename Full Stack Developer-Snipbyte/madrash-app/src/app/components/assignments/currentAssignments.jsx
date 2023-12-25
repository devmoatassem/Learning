import React from 'react'
import { MdAssignmentAdd } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import Image from 'next/image';



const CurrentAssignments = () => {

    const currentAssignments = [
        {
            id: 1,
            image: '/class1.jpg',
            subject: 'Mathematics',
        },
        {
            id: 2,
            image: '/class2.jpg',
            subject: 'Science',
        },
        {
            id: 3,
            image: '/class3.jpeg',
            subject: 'English',
        },

    ]

    const currentAssignmentsList = currentAssignments.map((item) => (

        <div key={item.id}>
            <Image src={item.image} width={100} height={100} className='rounded mb-2 w-[90vw]  sm:w-[20vw] sm:h-[10vh] md:h-[18vh] object-cover' alt='Assignment' />
            <div className='font-semibold text-xs'>{item.subject}</div>
        </div>


    ));

    return (
        <div className='py-5 px-8 rounded-lg border'>
            <div className='flex items-center font-bold gap-2 text-sm mb-2'>
                <div className='whitespace-nowrap'>Current Assignments</div>
                <div className='text-lg text-blue-700'><MdAssignmentAdd /></div>
            </div>
            <div className='flex flex-col sm:flex-row items-start justify-between gap-3 py-4'>
                {currentAssignmentsList}

                <div className='flex flex-col items-center justify-center text-center w-full h-[20vh] sm:w-[20vw] md:w-[15vw] sm:h-[10vh] md:h-[18vh] rounded-lg bg-gray-100 text-gray-400'>
                    <div>
                        <MdOutlineAddToPhotos />
                    </div>
                    <div className='text-xs md:whitespace-nowrap mt-1'>New Assignment</div>
                </div>

            </div>
        </div>
    )
}

export default CurrentAssignments