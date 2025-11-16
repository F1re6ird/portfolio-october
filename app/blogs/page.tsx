import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <main className='pt-28 flex flex-col gap-8 min-h-screen items-center'>
                <h1 className='underline font-bold text-2xl md:text-4xl'>
                    Blog Posts
                </h1>

                <p>
                    Thoughts, tutorials and insights about my thoughts
                </p>

                <p>
                    No blogs available now
                </p>


            </main>
            <Footer />
        </>
    )
}

export default page
