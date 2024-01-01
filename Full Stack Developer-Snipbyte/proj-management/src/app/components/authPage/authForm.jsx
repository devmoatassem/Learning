"use client";
import React, { useState } from 'react'
import Input from './input';
import Button from '../common/button';
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import '../common/custom.css'

const socialIcons = [
    <FcGoogle />,
    <FaMicrosoft />,
    <FaApple />
]
const AuthForm = () => {
    const socialLogin = socialIcons.map((icon, index) => {
        return (<div key={index} className='w-full border rounded-md flex flex-grow-0 justify-center py-2 text-2xl'>
            {icon}
        </div>)

    })
    const [formType, setFormType] = useState('login')
    return (
        <div className='flex flex-col items-center px-10 py-5'>
            <div className='text-xl font-extrabold py-5'>Logo SnipByte</div>
            <div className='grid grid-cols-2 text-center gap-2 bg-green-200 w-full rounded-lg'>
                <button onClick={() => setFormType("login")} className={(formType === "login" ? "bg-btgreen text-white " : "") + " py-1.5 text-bgdark-grey rounded-lg m-0.5"}>Sign In</button>
                <button onClick={() => setFormType("register")} className={(formType === "register" ? "bg-btgreen text-white " : "") + " py-1.5 text-bgdark-grey rounded-lg m-0.5"}>Register</button>
            </div>
            <div className='w-full mt-5'>
                <form action="" className='space-y-2'>
                    {formType === "register" ?
                        <div className='md:flex gap-2'>
                            <Input type='text' placeholder='First Name' label={"First Name"} />
                            <Input type='text' placeholder='Last Name' label={"Last Name"} />
                        </div>
                        : null}
                    <Input type='text' placeholder='Email' label={"Email"} />
                    <Input type='password' placeholder='Password' label={"Password"} formType={formType} />
                    {formType === "register" ?
                         <Input type='password' placeholder='Confirm Password' label={"Confirm Password"} formType={formType}/>
                        : null}
                    <div className='py-1'>Errors</div>
                    <Button button={formType === "register" ? "Create Account" : "Sign In"} type="submit" customClass='w-full bg-btgreen rounded-lg text-white' />
                </form>
            </div>
            <div className='flex items-center justify-center py-6 w-full'>
                <hr className='mr-4 w-1/3' />
                <div className='text-center text-xs text-gray-500'>OR</div>
                <hr className='ml-4 w-1/3' />
            </div>
            <div className='flex gap-2 items-center justify-evenly w-full'>
                {socialLogin}
            </div>
        </div>
    )
}

export default AuthForm