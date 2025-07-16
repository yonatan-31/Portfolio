"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Image from 'next/image'
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
    const [text] = useTypewriter({
        words: [
            `Hi, I'am ${pageInfo?.name} `,
            "<Front-end Developer />",
            "<Back-end Developer />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex  flex-col justify-center items-center space-y-8 text-center overflow-hidden '>
            <BackgroundCircle />
            <Image
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Description"
                width={500}
                height={300}
                className='rounded-full h-35 w-35 mx-auto object-cover shadow-[0_0_8px_#F7AB0A]'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-[#F7AB0A]/80 pb-2 tracking-[15px] font-semibold'>{pageInfo?.role}</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold  px-10 mb-5 z-40'>
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div>
                    <Link href="#about">
                    <button className='heroButton'>About</button>
                    </Link>
                    {/* <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                    </Link> */}
                    <Link href="#skill">
                    <button className='heroButton'>Skill</button>
                    </Link>
                    <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero