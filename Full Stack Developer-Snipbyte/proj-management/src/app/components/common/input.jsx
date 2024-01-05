"use client";
import React,{useState} from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Input = ({ label, type, placeholder, formType, name, register, err="none" }) => {
    
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='flex flex-col gap-1 py-1'>

            <label htmlFor={type} className='text-xs font-semibold flex justify-between'>{label}{(type === "password" && formType==="login" ) ?
                <button className='text-right text-xs text-bgdark-grey hover:text-btpurple'>Forgot Password?</button>
                : null
            }</label>
            <div className='relative'>
                <input {...(register ? register(name) : null)} type={type==="password" ? showPassword ? "text" : type : type} placeholder={placeholder} className={`bg-white border border-gray-200 w-full p-2 rounded-lg shadow-sm placeholder:text-sm outline-none ${err && err[name] ? "outline-btpink border-none" : ""}`} />
                {type === "password" ?
                    <div className='absolute top-1/3 right-2 text-bgdark-grey'>
                        {showPassword? <FaEye onClick={()=>setShowPassword(!showPassword)} /> : <FaEyeSlash onClick={()=>setShowPassword(!showPassword)} />}
                    </div>
                    : null
                }
            </div>
            
            <p className='text-xs text-btpink capitalize'>{err[name]?.message}</p>
        </div>
    )
}

export default Input