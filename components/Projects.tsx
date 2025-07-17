"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const handleNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className=' relative h-screen flex flex-col overflow-hidden justify-evenly text-left  max-w-full mx-auto items-center z-0 '>

            <h3 className=' mt-20 mb-10 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        
            <div
                ref={scrollRef}
                className='w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-20'
            >
                {projects.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: -300 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        key={index}
                        className='w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center justify-center  p-10 md:p-44'>
                        <div className='flex items-center justify-center space-x-3 md:space-x-8'>
                            <ArrowLeftIcon
                                onClick={handlePrev}
                                className="h-6 w-6   text-[#F7AB0A] hover:scale-125 transition-transform duration-300 cursor-pointer"
                            />
                            <Image
                                src={urlFor(project?.image).url()}
                                alt="Description"
                                width={500}
                                height={300}
                                className='rounded-md w-[300px] sm:w-[350px] md:w-[450] lg:w-[500px]'
                            />
                            <ArrowRightIcon
                                onClick={handleNext}
                                className="h-6 w-6 text-[#F7AB0A] hover:scale-125 transition-transform duration-300 cursor-pointer"
                            />
                        </div>
                        <div className='flex items-center justify-center space-x-5  '>
                            {project?.technologies.map((tech) => (
                                <Image
                                    key={tech?._id}
                                    src={urlFor(tech?.image).url()}
                                    alt="Description"
                                    width={500}
                                    height={300}
                                    className=' h-10 w-10 md:h-12 md:w-12 object-cover rounded-full '
                                />
                            ))}
                        </div>
                        {project?.linkToBuild && (
                            <Link
                                href={project.linkToBuild}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-6 py-2 bg-[#F7AB0A]/70 text-black font-semibold rounded-md shadow-md hover:bg-[#f7c14a] transition-colors duration-300"
                            >
                                🔗 View Live Project
                            </Link>
                        )}


                        <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-3xl font-semibold text-center'>
                                <span className=' underline decoration-[#F7AB0A]/50'>{project?.title}</span>
                            </h4>
                            <div className='text-lg text-center md:text-left max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-[#F7AB0A]/70 scrollbar-track-gray-400/20 mb-20'>
                                {project?.summery}
                            </div>
                        </div>
                    </motion.div>

                ))
                }
            </div >

            <div className='absolute top-[20%]  bg-[#F7AB0A]/10 left-0 h-[500px] w-full -skew-y-12' />
        </motion.div >
    )
}

export default Projects