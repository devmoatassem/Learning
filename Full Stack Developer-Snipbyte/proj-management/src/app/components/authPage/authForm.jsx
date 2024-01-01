"use client";
import React, { useState } from 'react'
import Input from './input';
import Button from '../common/button';
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import '../common/custom.css'
import { useForm } from 'react-hook-form';
import { regVal, loginVal } from './formValidationSchema.js';
import { yupResolver } from "@hookform/resolvers/yup"

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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formType === "register" ? regVal : loginVal),
    })
    const onSubmit = data => console.log(data);


    return (
        <div className='flex flex-col items-center px-10 py-5 my-20 md:my-0'>
            <div className='text-xl font-extrabold py-5'>Logo SnipByte</div>
            <div className='grid grid-cols-2 text-center gap-2 bg-green-200 w-full rounded-lg'>
                <button onClick={() => setFormType("login")} className={(formType === "login" ? "bg-btgreen text-white " : "") + " py-1.5 text-bgdark-grey rounded-lg m-0.5"}>Sign In</button>
                <button onClick={() => setFormType("register")} className={(formType === "register" ? "bg-btgreen text-white " : "") + " py-1.5 text-bgdark-grey rounded-lg m-0.5"}>Register</button>
            </div>
            <div className='w-full mt-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2' key={formType}>
                    {formType === "register" ?
                        <div className='lg:flex gap-2'>
                            <Input type='text' placeholder='First Name' label={"First Name"} name={"firstname"} register={register} err={errors} />
                            <Input type='text' placeholder='Last Name' label={"Last Name"} name={"lastname"} register={register} err={errors} />
                        </div>
                        : null}
                    <Input type='text' placeholder='Email' label={"Email"} name={"email"} register={register} err={errors} />
                    <Input type='password' placeholder='Password' label={"Password"} formType={formType} name={"password"} register={register} err={errors} />
                    {formType === "register" ?
                        <Input type='password' placeholder='Confirm Password' label={"Confirm Password"} formType={formType} name={"confirmpassword"} register={register} err={errors} />
                        : null}
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