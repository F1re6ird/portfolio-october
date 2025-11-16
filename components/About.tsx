import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { easeIn } from 'framer-motion'

const About = () => {
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
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-200px 0px -200px 0px", once: true }}
            className='p-4 flex flex-col gap-6 md:px-14 lg:px-20 mb-10'>
            <motion.h2
                variants={childrenVariants}
                className='md:text-2xl underline font-bold text-xl'>
                About Me
            </motion.h2>
            <motion.p
                variants={childrenVariants}>
                {
                    "I like to build functional and scalable digital products with seamless user experiences, driven by curiosity, innovation, and a focus on solving real-world problems."
                }
            </motion.p>

            <motion.p
                variants={childrenVariants}>
                {
                    "I'm Yekini Abdulwahab, a 22-year-old Nigerian software developer with experience in web and development. I specialize in building robust, scalable applications that blend performance with purpose."
                }
            </motion.p>



            <motion.div
                variants={childrenVariants} className='flex flex-col justify-center items-center gap-2'>
                <div

                    className='relative w-72 h-72 m-auto'>
                    <Image
                        src="/assets/me.jpeg"
                        alt="Yekini Abdulwahab"
                        fill
                        className='object-cover rounded-2xl'
                    />
                </div>

                <p className=''>
                    {"@Yekini.Abdulwahab"}
                </p>
            </motion.div>
        </motion.section>
    )
}

export default About
