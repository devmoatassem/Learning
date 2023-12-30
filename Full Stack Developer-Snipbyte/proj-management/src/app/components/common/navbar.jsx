"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Button from './button'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const navLinks = [
        {
            title: 'Home',
            link: '#',
        },
        {
            title: 'About',
            link: '#',
        },
        {
            title: 'Services',
            link: '#',
        },
        {
            title: 'How it Works',
            link: '#',
        },
        {
            title: 'Contact Us',
            link: '#',
        },
    ]

    const navLinksList = navLinks.map((item, index) => {
        return (
            <Link href={item.link} key={index} className='hover:bg-bggrey  md:hover:text-btpurple hover:underline'>{item.title}</Link>
        )
    })

    const [nav, setNav] = useState(false);


    return (
        <nav className='absolute top-0 bg-transparent w-full z-50'>
            <div className='flex justify-between items-center h-[80px] py-8 2xl:max-w-[1400px] mx-auto px-10 lg:px-36'>
                <div className='text-xl font-extrabold text-white'>
                    Logo Lorem
                </div>
                <div className='hidden md:flex gap-6 font-inter text-white'>
                    {navLinksList}
                </div>
                <Button button='Login' customClass='hidden md:block max-w-32 bg-white text-black' />
                <button className='md:hidden text-white text-2xl' onClick={() => setNav(!nav)}><IoMenu /></button>

                <div className={nav ? "block" : "hidden"}>
                    <div className='w-screen h-screen bg-white absolute inset-0 p-5'>
                        <button onClick={() => setNav(!nav)} className='text-2xl text-black absolute right-10 top-10'><AiOutlineClose /></button>
                        <div className='text-black flex flex-col items-center justify-center gap-20 py-32'>
                            {navLinksList}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar