'use client'
import React from 'react'
import { useState } from 'react';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion'

const Contact = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement | null> }) => {


    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);

            // Prepare payload
            const payload = {
                ...formData,
            };


            const response = await fetch(`/api/contact/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                toast.success("Message sent successfully");
                setFormData({ fullName: '', email: '', message: '' })
            } else {
                toast.error("Something went wrong");
            }
        }
        catch {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }

    };

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


    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            className='flex flex-col gap-4' ref={contactRef}>
            <div className="bg-[url('/assets/billboard.png')] bg-cover bg-center bg-no-repeat h-72 w-full bg-brand-dark/90 bg-blend-overlay flex flex-col items-center justify-center gap-6 rounded-2xl mb-20">
                <h1 className='text-brand text-4xl font-bold '>
                    How can I help?
                </h1>
                <p className='text-brand text-xl font-bold'>
                    {"Let's turn your idea into reality"}
                </p>
            </div>

            <div className='p-4 flex flex-col gap-4 md:px-14 lg:px-20'>
                <h2 className='text-xl underline md:text-2xl font-bold'>
                    Get In Touch
                </h2>
                <p>
                    {"I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project."}
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className='p-4 flex flex-col gap-4 md:px-14 lg:px-20'>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        className='bg-[#D4D4D4] h-14 px-2 rounded-lg text-brand-dark w-full'
                        placeholder='Full Name'
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className='bg-[#D4D4D4] h-14 px-2 rounded-lg text-brand-dark w-full'
                        placeholder='Email Address'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        id="message"
                        className='bg-[#D4D4D4] h-40 px-2 pt-2 rounded-lg text-brand-dark w-full'
                        placeholder='Write your Message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button
                    className="bg-[url('/assets/billboard.png')] bg-cover bg-center bg-no-repeat h-14 w-full bg-brand-dark/90 bg-blend-overlay flex flex-col items-center justify-center gap-6 rounded-2xl text-xl font-bold text-brand hover:bg-brand-dark/70 transition-all duration-300"
                    type="submit"
                    disabled={loading}
                >
                    Submit
                </button>
            </form>
            <Toaster richColors />
        </motion.section>

    )
}

export default Contact
