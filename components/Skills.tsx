import React from 'react'
import { skillSet } from '@/data/data'
import { motion } from 'framer-motion'
import { easeIn } from 'framer-motion'

const Skills = () => {
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
            className='p-4 flex flex-col gap-6 md:px-14 lg:px-20'>
            <motion.h2
                variants={childrenVariants}
                className='underline font-bold text-xl md:text-2xl'>
                My ToolBox
            </motion.h2>
            <motion.div
                variants={childrenVariants}
            >
                {
                    skillSet.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className='inline-block bg-brand-dark text-brand-light px-4 py-2 rounded-2xl mr-2 mt-2 transition-all duration-300 hover:scale-110 cursor-pointer'
                            >
                                {skill}
                            </div>
                        )
                    })
                }
            </motion.div>
        </motion.section>
    )
}

export default Skills
