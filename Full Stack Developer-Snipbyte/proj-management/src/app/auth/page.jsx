import React from 'react'
import Intro from '../components/authPage/intro'
import AuthForm from '../components/authPage/authForm'
import Input from '../components/authPage/input'

const Page = () => {
    return (
        <div className='flex items-center gap-10 h-svh w-full p-10 max-h-svh 2xl:max-w-[1400px] mx-auto'>
            <div className='w-2/3 h-full'>
                <Intro />
            </div>
            <div className='w-1/3 h-full'>
                <AuthForm />
            </div>
        </div>
    )
}

export default Page