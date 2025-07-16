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
    const MotionImage = motion(Image);
    return (
        <div className='group relative flex cursor-pointer '>
            <MotionImage
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                src={urlFor(skill?.image).url()}
                alt={skill?.title}
                width={500}
                height={300}
                className='rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28  group-hover:grayscale transition duration-300 ease-in-out shadow-[0_0_5px_#F7AB0A]'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28  rounded-full z-0'>
                <div className='flex justify-center items-center h-full  '>
                    <p className='text-3xl font-bold text-black opacity-100'>{skill?.progress}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill