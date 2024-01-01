"use client";
import React,{useState} from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Input = ({ label, type, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='flex flex-col gap-1 py-1 relative'>

            <label htmlFor={type} className='text-xs font-semibold flex justify-between'>{label}{type === "password" ?
                <button className='text-right text-xs text-bgdark-grey'>Forgot Password?</button>
                : null
            }</label>
            <input id={type} type={type==="password"?showPassword?"text":type:type} placeholder={placeholder} className='bg-white border w-full p-2 rounded-lg shadow-sm' />
            {type === "password" ?
                <div className='absolute top-1/2 right-2 text-bgdark-grey'>
                    {showPassword? <FaEye onClick={()=>setShowPassword(!showPassword)} /> : <FaEyeSlash onClick={()=>setShowPassword(!showPassword)} />}
                </div>
                : null
            }
        </div>
    )
}

export default Input