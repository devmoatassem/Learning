import React from 'react'
import FooterLinks from './footerLinks'
import { FaXTwitter, FaInstagram, FaFacebookF, FaRegCopyright } from "react-icons/fa6";
import Link from 'next/link'
const footerLinks = [
    {
        title: 'Company',
        links: [
            {
                title: 'About Us',
                link: '#'
            },
            {
                title: 'Careers',
                link: '#'
            },
            {
                title: 'Blog',
                link: '#'
            },
        ]
    }
]
const Footer = () => {

    const socialLinks = [
        {
            link: '#',
            icon: <FaFacebookF />
        },
        {
            link: '#',
            icon: <FaXTwitter />
        },
        {
            link: '#',
            icon: <FaInstagram />
        },
    ]

    const socialLinksList = socialLinks.map((item, index) => {
        return (
            <div key={index} className='p-2 rounded-full bg-orange-500 text-white hover:opacity-80 cursor-pointer'>
                {item.icon}
            </div>
        )
    }
    )

    return (
      <footer className="py-10 w-full">
        <div className="mx-auto">
          <div className="md:flex items-start justify-between w-full gap-10 text-gray-300">
            <div className="flex flex-col items-start space-y-10 w-full md:w-3/4">
              <div className="text-xl font-extrabold text-orange-500">
                Logo Lorem
              </div>
              <div className="text-sm mr-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                eligendi molestiae consectetur numquam. Quas perspiciatis
                adipisci quod blanditiis earum perferendis ratione quaerat,
                quidem vitae nesciunt quam vero quo aperiam esse.
              </div>
            </div>
            <div className="w-full flex items-center justify-between py-16 md:py-0">
              <div>
                <FooterLinks
                  title={footerLinks[0].title}
                  links={footerLinks[0].links}
                />
              </div>
              <div>
                <FooterLinks
                  title={footerLinks[0].title}
                  links={footerLinks[0].links}
                />
              </div>
              <div>
                <FooterLinks
                  title={footerLinks[0].title}
                  links={footerLinks[0].links}
                />
              </div>
            </div>
            <div className="space-y-5 md:w-1/3">
              <div className="text-lg font-bold whitespace-nowrap text-center md:text-right">
                Follow Us
              </div>
              <div className="flex items-center justify-center md:justify-end gap-4">{socialLinksList}</div>
            </div>
          </div>
          <div>
            <hr className="my-5" />
          </div>
          <div className="flex justify-between text-xs text-gray-300">
            <div className="flex gap-1 items-center">
              Copyright
              <FaRegCopyright />
              {new Date().getFullYear()}
            </div>
            <div className="hover:text-white hover:underline">
              <Link href={"/"}>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer