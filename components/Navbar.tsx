import React from 'react'
import { FaRegFilePdf, FaXTwitter, FaGithub } from "react-icons/fa6"
import { FaHome } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
    return (

        <nav className=' fixed top-0 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 border-[1px] border-brand-dark/20 rounded-2xl w-fit p-2 mt-6 bg-neutral/300 backdrop-blur-[5px] z-10'>
            {/* Home Icon */}
            <Link href="/">
                <div className='group p-2 rounded-2xl hover:scale-110 hover:bg-[#F5F5F5]/20 hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 hover:px-3 cursor-pointer'>
                    <FaHome
                        className='text-brand-secondary h-6 w-6 md:h-8 md:w-8 group-hover:text-brand-dark transition-all duration-300'
                    />

                </div>
            </Link>

            |
            {/* Twitter Icon */}

            <Link href="https://x.com/yekinAbdulwahab" target="_blank" rel="noopener noreferrer">
                <div className='group p-2 rounded-2xl hover:scale-110 hover:bg-[#F5F5F5]/20 hover:opacity-100 transition-all backdrop-blur-[2px] duration-300 hover:px-3 cursor-pointer'>
                    <FaXTwitter
                        className='text-brand-secondary h-6 w-6 md:h-8 md:w-8 group-hover:text-brand-dark transition-all duration-300'
                    />
                </div>
            </Link>



            {/* Github Icon */}
            <div className='group p-2 rounded-2xl hover:scale-110 hover:bg-[#F5F5F5]/20 hover:opacity-100 transition-all backdrop-blur-[2px] duration-300 hover:px-3 cursor-pointer'>
                <FaGithub
                    className='text-brand-secondary h-6 w-6 md:h-8 md:w-8 group-hover:text-brand-dark transition-all duration-300'
                />
            </div>


            {/* pdf icon */}
            <div className='group p-2 rounded-2xl hover:scale-110 hover:bg-[#F5F5F5]/20 hover:opacity-100 transition-all backdrop-blur-[2px] duration-300 hover:px-3 cursor-pointer'>
                <FaRegFilePdf
                    className='text-brand-secondary h-6 w-6 md:h-8 md:w-8 group-hover:text-brand-dark transition-all duration-300'
                />
            </div>

            |

            <Link
                href="/blogs"
            >
                <button className='p-2 text-brand bg-brand-dark font-bold rounded-xl px-4 hover:px-6 transition-all duration-300'>
                    Blog
                </button>
            </Link>


        </nav>
    )
}

export default Navbar
