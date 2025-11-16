'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { easeOut, easeIn } from 'framer-motion'

const Hero = ({ scrollToSection }: { scrollToSection: (section: "contact") => void }) => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,   // wait before starting children
                staggerChildren: 0.3, // animate children one after another
            },
        },
    }

    const childrenVariants = {
        hidden: { y: 30, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: easeIn
            },
        }
    }

    const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
}

    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            className='overflow-x-hidden md:pt-10 md:h-[85vh] min-h-[60vh] pb-10 px-4 pt-14 md:p-6 flex flex-col gap-5  md:px-14 lg:px-20'
        >
            <motion.h1
                variants={childrenVariants}
                className='md:text-4xl lg:text-5xl text-3xl font-bold leading-snug md:leading-normal lg:leading-relaxed'
            >
                {
                    "Hi, I'm Yekini Abdulwahab."
                } <br />
                {
                    "Software Engineer."
                }
            </motion.h1>

            <motion.h2
                variants={childrenVariants}
                className='md:text-2xl text-xl md:leading-normal lg:leading-relaxed'
            >
                {
                    "Visionaire creator by night and day. Want Quality work?"
                }
            </motion.h2>

            <motion.button
                variants={buttonVariants}
                onClick={() => scrollToSection("contact")}
                className='md:text-2xl text-brand text-xl bg-brand-dark px-4 py-4 rounded-2xl w-fit hover:px-6 transition-all duration-300'
            >
                Hire Me!
            </motion.button>
        </motion.section>
    )
}

export default Hero
