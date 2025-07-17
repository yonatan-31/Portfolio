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
            className="relative min-h-screen max-w-[2000px] mx-auto px-4 sm:px-8 xl:px-10 flex flex-col items-center justify-center text-center"
        >
            <div className="-mt-20 mb-10">
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
                <h2 className="uppercase text-gray-500 text-sm tracking-[3px] mt-2">
                    Hover over a skill for current proficiency
                </h2>
            </div>
   
            <div className="grid grid-cols-3  gap-5 px-4 sm:px-10 w-full max-w-2xl ">
                {skills.map((skill, i) => (
                    <Skill
                        key={skill?._id}
                        directionLeft={i < directionThreshold}
                        skill={skill}
                    />
                ))}
            </div>
        </motion.div>

    )
}

export default Skills