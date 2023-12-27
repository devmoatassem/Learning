import Calander from '@/app/components/student/dashboard/calander.js'
import Card from '@/app/components/student/dashboard/card'
import React from 'react'

const Page = () => {
    return (
        <div className='md:flex w-full p-5 sm:gap-5 space-y-5 sm:space-y-0'>
            <div className='w-full md:w-1/3 h-full  space-y-5'>
                <div className='h-[50vh]'>
                    <Card title='Title' description='Description' />
                </div>
                <div className='h-[50vh]'>
                    <Card title='Title' description='Description' />
                </div>
            </div>
            <div className='w-full md:w-2/3 space-y-5'>
                <div className='overflow-auto border p-2 rounded-md'>
                    <div className='h-[70vh] w-[800px] sm:w-full'>
                        <Calander />
                    </div>
                </div>

                <div className='h-1/3 space-y-5 text-xs sm:text-sm md:text-base'>
                    <div className='flex items-start gap-2 md:gap-5 justify-between h-fit'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className='flex items-start gap-2 md:gap-5 justify-between h-fit'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 justify-between h-fit'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Page