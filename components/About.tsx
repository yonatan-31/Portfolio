"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {

    const MotionImage = motion(Image);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col justify-center items-center h-screen text-center mx-auto px-10 max-w-7xl space-y-15'>

            <h3 className=' uppercase tracking-[20px] text-gray-500 text-2xl  '>About</h3>
            <div className='flex flex-col justify-around items-center md:flex-row md:text-left md:space-x-7 space-y-10'>
                <MotionImage
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{ once: true }}
                    src={pageInfo?.profilePic && urlFor(pageInfo?.profilePic).url()}
                    alt="Description"
                    width={500}
                    height={300}
                    className=' sm:mb-0   flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
                />
                <div className='space-y-7 sm:space-y-10 px-0 md:px-10 '>
                    <h4 className='text-2xl sm:text-4xl font-semibold'>
                        Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                    </h4>
                    <p className='text-sm md:text-lg'>{pageInfo?.backgroundInformation}</p>
                </div>
            </div>

        </motion.div>
    )
}