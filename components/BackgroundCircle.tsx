import { motion } from 'framer-motion'
import React from 'react'



function BackgroundCircle() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.7],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5,
      }}

      className='relative flex justify-center items-center'>
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 ' />
      <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 sm:shadow-none' />
      <div className='absolute border border-[#F7AB0A] rounded-full hidden sm:block h-[500px] w-[500px] md:h-[660px] md:w-[650px] mt-52 shadow-[0_0_2px_#F7AB0A]' />
      <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 ' />

    </motion.div>
  )

}

export default BackgroundCircle