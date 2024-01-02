import Link from 'next/link'
import React from 'react'


const FooterLinks = ({title, links}) => {
    const linkList = links.map((item, index) => {
        return (
            <Link key={index} href={item.link} className='text-sm text-bgdark-grey hover:text-btpurple hover:underline'>
                {item.title}
            </Link>
        )
    })
  return (
    <div className='space-y-5'>
        <div className='text-lg font-bold whitespace-nowrap'>
            {title}
        </div>
        <div className='flex flex-col gap-4'>
            {linkList}
        </div>
    </div>
  )
}

export default FooterLinks