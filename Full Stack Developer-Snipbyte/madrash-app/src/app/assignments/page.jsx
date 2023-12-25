import React from 'react'
import PercentageCard from '../components/assignments/percentageCard';
import ActiveAssignments from '../components/assignments/activeAssignments';
import CurrentAssignments from '../components/assignments/currentAssignments';
import DueAssignment from '../components/assignments/dueAssignment';
import InboxCard from '../components/assignments/inbox';
import NoName from '../components/assignments/noName';

const Page = () => {
    return (
        <div className='p-5 lg:p-10 w-full'>
            {/* title */}
            <div className='mb-6'>
                <div className='text-xl font-bold text-gray-400'>Happy new month, <span className='text-black'>John</span></div>
                <div className='text-xs text-gray-500 font-semibold'>Welcome to your dashboard</div>
            </div>
            <div className='md:flex items-start gap-5 space-y-5 md:space-y-0'>
                <div className='md:w-[70%] space-y-4'>
                    <div className='space-y-5 sm:space-y-0 sm:grid grid-cols-3 gap-4'>
                        <div>
                            <PercentageCard achieved={30} dataType={'Due Assignments'} />
                        </div>
                        <div>
                            <PercentageCard achieved={80} dataType={'Assignments Remaining'} />
                        </div>
                        <div>
                            <PercentageCard achieved={50} dataType={'Assignments Submitted'} />
                        </div>
                    </div>
                    <div>
                        <ActiveAssignments />
                    </div>
                    <div>
                        <CurrentAssignments />
                    </div>
                </div>
                <div className='md:w-[30%] space-y-4'>
                    <div>
                        <NoName />
                    </div>
                    <div>
                        <InboxCard />
                    </div>
                    <div>
                        <DueAssignment />
                    </div>
                </div>

            </div>






        </div>
    )
}

export default Page;