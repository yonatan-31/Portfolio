"use client";
import React, { useEffect, useState } from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion';
import type { Skill as SkillType } from '@/typings'; // TypeScript type with alias

type Props = {
    skills: SkillType[];
};

function Skills({ skills }: Props) {
    const [directionThreshold, setDirectionThreshold] = useState(8);
    useEffect(() => {
        const updateThreshold = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setDirectionThreshold(6); // 3 columns
            } else {
                setDirectionThreshold(8); // 4 columns
            }
        };

        updateThreshold(); // Initial check
        window.addEventListener('resize', updateThreshold);

        return () => window.removeEventListener('resize', updateThreshold);
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative min-h-screen max-w-[2000px] mx-auto  px-4 sm:px-8 xl:px-10 flex flex-col items-center justify-center text-center"
        >
            <div className=" mb-10">
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
                <h2 className="uppercase text-gray-500 text-sm tracking-[3px] mt-2">
                    Hover over a skill for current proficiency
                </h2>
            </div>
   


            {skills.length > 15 ? (
                <div className="flex overflow-x-scroll w-full snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-20">
                    {Array.from({ length: Math.ceil(skills.length / 15) }).map((_, pageIndex) => (
                         <div key={pageIndex} className="min-w-full flex-shrink-0 snap-center flex flex-col items-center justify-center h-full">
                            <div className="grid grid-cols-3 gap-3 md:gap-5 px-4 sm:px-10 w-full max-w-md md:max-w-xl">
                                {skills.slice(pageIndex * 15, (pageIndex + 1) * 15).map((skill, i) => (
                                    <Skill
                                        key={skill?._id}
                                        directionLeft={i < directionThreshold}
                                        skill={skill}
                                    />
                                ))}
                            </div>
                         </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-3 md:gap-5 px-4 sm:px-10 w-full max-w-md md:max-w-xl ">
                    {skills.map((skill, i) => (
                        <Skill
                            key={skill?._id}
                            directionLeft={i < directionThreshold}
                            skill={skill}
                        />
                    ))}
                </div>
            )}
        </motion.div>

    )
}

export default Skills