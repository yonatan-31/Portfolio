"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import type { Skill } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    directionLeft?: boolean
    skill?: Skill
}

function Skill({ directionLeft, skill }: Props) {

    return (
        <motion.div
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0,
            }}
            transition={{
                duration: 1
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            className='group relative flex cursor-pointer mx-auto'>
            <Image
                src={urlFor(skill?.image).url()}
                alt="Description"
                width={500}
                height={300}
                className='rounded-full border object-cover h-18 w-18 sm:h-20 sm:w-20 md:w-22 md:h-22  group-hover:grayscale transition duration-300 ease-in-out shadow-[0_0_5px_#F7AB0A]'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white  h-18 w-18 sm:h-20 sm:w-20 md:w-22 md:h-22  rounded-full z-0'>
                <div className='flex justify-center items-center h-full  '>
                    <p className='text-3xl font-bold text-black opacity-100'>{skill?.progress}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Skill