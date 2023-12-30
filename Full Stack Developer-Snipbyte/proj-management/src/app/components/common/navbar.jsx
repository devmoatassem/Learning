import React from 'react'
import Link from 'next/link'
import Button from './button'



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
            <Link href={item.link} key={index} className='text-white hover:text-btpurple hover:underline'>{item.title}</Link>
        )
    })

    return (
        <nav className='absolute top-0 bg-transparent w-full z-50'>
            <div className='flex justify-between items-center h-[80px] py-8 2xl:max-w-[1400px] mx-auto px-10 lg:px-36'>
                <div className='text-xl font-extrabold text-white'>
                    Logo Lorem
                </div>
                <div className='hidden sm:flex gap-6 font-inter'>
                    {navLinksList}
                </div>
                <Button button='Login' customClass='max-w-32 bg-white text-black' />
            </div>

        </nav>
    )
}

export default Navbar