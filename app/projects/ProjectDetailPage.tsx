'use client'
import React from 'react'
import { useState } from 'react'
import { projects } from '@/data/data'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { easeIn } from 'framer-motion'


const ProjectDetailPage = ({ name }: { name: string }) => {
    const project = projects.find((project) => project.name === name)

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const closeModal = () => setSelectedImage(null);

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
        <>
            <Navbar />
            <main className='py-28 flex flex-col gap-6 '>
                {project &&
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ margin: "-200px 0px -200px 0px", once: true }}
                        className='p-4 flex flex-col gap-6 md:px-14 lg:px-20'>
                        <motion.h1
                            variants={childrenVariants}
                            className='underline font-bold text-2xl md:text-4xl'>
                            {`${(project?.name).charAt(0).toUpperCase() + (project?.name).slice(1)}`}
                        </motion.h1>
                        <motion.p
                            variants={childrenVariants}
                        >
                            {project?.description}
                        </motion.p>

                        <div className='flex flex-col gap-6'>
                            <motion.h2
                                variants={childrenVariants}
                                className='text-xl md:text-2xl font-bold underline'>
                                Description
                            </motion.h2>
                            <motion.p
                                variants={childrenVariants}>
                                {
                                    project?.longDescription
                                }
                            </motion.p>
                            <hr />
                            <motion.h2
                                variants={childrenVariants}
                                className='text-xl md:text-2xl font-bold underline'>
                                Technologies
                            </motion.h2>
                            <motion.div
                                variants={childrenVariants} className='flex flex-wrap gap-2'>
                                {
                                    project?.technologies.map((technology, index) => (
                                        <div
                                            key={index}
                                            className='bg-brand-dark px-4 py-2 inline-block text-brand-light rounded-2xl'
                                        >
                                            {technology}
                                        </div>
                                    ))
                                }
                            </motion.div>
                            <hr />
                        </div>
                    </motion.div>}

                <button className="group m-auto w-fit flex items-center gap-2 bg-black text-white px-4 py-2 rounded-2xl">
                    Visit Project
                    <span className='group-hover:pl-4 transition-all duration-300'>{">"}</span>
                </button>

                <div className='flex flex-col sm:flex-row gap-6 items-center justify-center'>
                    <button className="group w-fit flex items-center gap-2 bg-black text-white px-4 py-2 rounded-2xl">
                        <span className='group-hover:pr-4 transition-all duration-300'>{"<"}</span>
                        Previous
                    </button>
                    <button className="group w-fit flex items-center gap-2 bg-black text-white px-4 py-2 rounded-2xl">
                        Next
                        <span className='group-hover:pl-4 transition-all duration-300'>{">"}</span>
                    </button>

                </div>

                <div className='p-2 flex flex-col gap-8 lg:gap-10 mt-20'>
                    {project && <h2
                    className='text-xl md:text-2xl font-bold underline'
                    >Screenshots from {`${(project?.name).charAt(0).toUpperCase() + (project?.name).slice(1)}`}</h2>}
                    {
                        project?.image && (
                            project.image.map((image, index) => (
                                <div
                                    key={index}
                                    className='group cursor-pointer p-8 border-y-brand-dark/30 border-[1px] rounded-2xl w-full flex flex-col gap-2'
                                    onClick={() => setSelectedImage(project.image[index])}
                                >
                                    <div
                                        className='relative w-full h-64 lg:h-96 overflow-hidden rounded-2xl'>
                                        <Image
                                            src={image}
                                            alt={project.name}
                                            fill
                                            className='rounded-2xl object-cover transition-transform duration-500 ease-out hover:scale-110'
                                        />
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </main>
            {/* Modal */}
            {selectedImage && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-pointer"
                >
                    {/* prevent closing when clicking inside modal content */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-4xl w-full px-4"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 z-50 bg-white/30 hover:bg-white/60 text-white text-xl rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            ×
                        </button>

                        <div className="relative w-full aspect-[4/5] max-h-[90vh] m-auto rounded-lg overflow-hidden">
                            <Image
                                src={selectedImage}
                                alt="Selected design"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}

export default ProjectDetailPage
