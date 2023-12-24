import React from 'react'
import Table from '../components/payments/table';
import Summary from '../components/payments/summary';
import Searchbar from '../components/payments/searchbar';
import Header from '../components/payments/header';

const Page = () => {
    return (
        <div className='m-2 p-3 bg-gray-100 rounded space-y-5'>
            <div>
                <Header />
            </div>
            <div>
                <Searchbar />
            </div>
            <div className='md:flex item-center gap-4 space-y-4 md:space-y-0'>
                <div className='w-full md:w-3/4'>
                    <Table />
                </div>
                <div className='w-full md:w-1/4'>
                    <Summary />
                </div>
            </div>


        </div>
    )
}

export default Page;