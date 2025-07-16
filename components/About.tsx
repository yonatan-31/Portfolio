"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {

    const MotionImage = motion(Image);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' relative  flex flex-col justify-evenly items-center h-screen md:text-left md:flex-row text-center mx-auto px-10 max-w-7xl'>
                
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3>
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
                className=' sm:mb-0 mt-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p className='text-sm'>{pageInfo?.backgroundInformation}          </p>
            </div>
            

        </motion.div>
    )
}