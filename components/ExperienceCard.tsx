// import { article } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


// type Props = unknown

export default function ExperienceCard() {
    const MotionImage = motion(Image);
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden '>
            <MotionImage
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                src="/full-pic.JPG"
                alt="Description"
                width={500}
                height={300}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
                <p className='font-bold text-2xl mt-1 uppercase'>papafam</p>
                <div className='flex space-x-2 my-2'>
                    <Image
                        src="/chilling.jpg"
                        alt="Description"
                        width={500}
                        height={300}
                        className='h-10 w-10 rounded-full'
                    />
                    <Image
                        src="/chilling.jpg"
                        alt="Description"
                        width={500}
                        height={300}
                        className='h-10 w-10 rounded-full'
                    />
                    <Image
                        src="/chilling.jpg"
                        alt="Description"
                        width={500}
                        height={300}
                        className='h-10 w-10 rounded-full'
                    />
                </div>
                <p>started work.. -end...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>summary points summary points summary points</li>
                    <li>summary points summary points summary points</li>
                    <li>summary points summary points summary points</li>
                    <li>summary points summary points summary points</li>
                    <li>summary points summary points summary points</li>
                </ul>
            </div>

        </article>
    )
}
