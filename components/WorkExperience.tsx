"use client";
import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';


function WorkExperience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' relative flex min-h-screen flex-col justify-evenly items-center overflow-hidden text-left md:flex-row max-w-full px-10 mx-auto m-0 '>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience</h3>

            <div className='w-full flex space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    )
}

export default WorkExperience