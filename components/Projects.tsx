"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className=' relative h-screen flex flex-col overflow-hidden justify-evenly text-left  max-w-full mx-auto items-center z-0 '>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-20'>
                {projects.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: -300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        key={index}
                        className='w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center justify-center h-screen p-20 md:p-44'>
                        <Image
                            src={urlFor(project?.image).url()}
                            alt="Description"
                            width={500}
                            height={300}
                            className='rounded-md'
                        />
                        <div className='flex items-center justify-center space-x-5  '>
                            {project?.technologies.map((tech) => (
                                <Image
                                    key={tech?._id}
                                    src={urlFor(tech?.image).url()}
                                    alt="Description"
                                    width={500}
                                    height={300}
                                    className='h-12 w-12 object-cover rounded-full '
                                />
                            ))}
                        </div>

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className=' underline decoration-[#F7AB0A]/50'>Project {1 + index} of {projects.length}</span>: {project?.title}
                            </h4>
                            <p className='text-lg text-center md:text-left'>{project?.summery}</p>
                        </div>
                    </motion.div>

                ))}
            </div>

            <div className='absolute top-[20%]  bg-[#F7AB0A]/10 left-0 h-[500px] w-full -skew-y-12' />
        </motion.div>
    )
}

export default Projects