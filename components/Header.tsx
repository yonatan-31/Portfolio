"use client";
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';
import { Social } from '@/typings';
import { FiMail } from 'react-icons/fi';

type Props = {
  socials: Social[]
};

const Header = ({ socials }: Props) => {
  return (
    <header className='sticky top-0 p-2 sm:p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center '>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex items-center'>
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
             className="!w-12 !h-12 sm:!w-15 sm:!h-15"
          />
        ))}

      </motion.div>

      <a href="#contact" className="text-gray-400 ">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex items-center cursor-pointer'>
          <div className=' hover:text-[#F7AB0A]/80 flex items-center justify-center mr-2 w-12 h-12 sm:w-15 sm:h-15 '>
            <FiMail size={28} />
          </div>
          <p className='uppercase text-sm text-gray-400 hidden md:inline-block hover:text-[#F7AB0A]/80'>Contact Me</p>
        </motion.div>
      </a>
    </header >
  )
}

export default Header