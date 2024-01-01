import React from 'react'
import Intro from '../components/authPage/intro'
import AuthForm from '../components/authPage/authForm'


const Page = () => {
    return (
        <div className='md:flex items-center gap-10 h-svh w-full p-3 md:p-5 lg:p-10 max-h-svh 2xl:max-w-[1400px] mx-auto'>
            <div className='lg:w-2/3 h-full'>
                <Intro />
            </div>
            <div className='lg:w-1/3 h-full overflow-auto'>
                <AuthForm />
            </div>
        </div>
    )
}

export default Page