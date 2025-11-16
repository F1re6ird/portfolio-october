import React from 'react'
import { FaXTwitter, FaGithub, FaRegEnvelope, FaInstagram } from "react-icons/fa6"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='flex flex-col gap-6 py-10 px-4'>
            <hr />
            <p className='m-auto'>
                Made with love ❤️ Yekini Abdulwahab
            </p>
            <div className='flex m-auto'>
                <div className='group p-2 rounded-2xl hover:scale-110 hover:bg-[#F5F5F5]/20 hover:opacity-100 transition-all duration-300 hover:px-3 cursor-pointer'>
                    <FaGithub
                        className='text-brand-secondary h-6 w-6 md:h-8 md:w-8 group-hover:text-brand-dark transition-all duration-300'
                    />
                </div>
                <Link href="https://x.com/yekinAbdulwahab" target="_blank" rel="noopener noreferrer">
                    <div className='group p-2 rounded-2xl hover:scale-110 hover:bg-[#F5F5F5]/20 hover:opacity-100 transition-all duration-300 hover:px-3 cursor-pointer'>
                        <FaXTwitter
                            className='text-brand-secondary h-6 w-6 md:h-8 md:w-8 group-hover:text-brand-dark transition-all duration-300'
                        />
                    </div>
                </Link>


                <Link href="https://www.instagram.com/yekin.abdulwahab/" target="_blank" rel="noopener noreferrer">
                    <div className='group p-2 rounded-2xl hover:scale-110 hover:bg-[#F5F5F5]/20 hover:opacity-100 transition-all duration-300 hover:px-3 cursor-pointer'>
                        <FaInstagram
                            className='text-brand-secondary h-6 w-6 md:h-8 md:w-8 group-hover:text-brand-dark transition-all duration-300'
                        />
                    </div>
                </Link>

                <div className='group p-2 rounded-2xl hover:scale-110 hover:bg-[#F5F5F5]/20 hover:opacity-100 transition-all duration-300 hover:px-3 cursor-pointer'>
                    <FaRegEnvelope
                        className='text-brand-secondary h-6 w-6 md:h-8 md:w-8 group-hover:text-brand-dark transition-all duration-300'
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer
