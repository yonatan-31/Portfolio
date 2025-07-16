"use client";
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

type Inputs = {
    Name: string
    Email: string
    Subject: string
    Message: string
}



function ContactMe() {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:yonatanasmare31@gmail.com?subject=${formData.Subject}&body=Hi, my name is ${formData.Name}. ${formData.Message}`
    }

    return (
        <div className='relative h-screen flex flex-col items-center justify-evenly  '>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col justify-between space-y-12'>
                <h4 className='md:text-4xl text-3xl font-semibold text-center'>I have got just what you need. <span className='decoration-[#F7AB0A]/50 underline'>Let’s Talk</span></h4>


                <div className='space-y-5 mb-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 ' />
                        <p className='text-2xl'>0902354089</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pluse' />
                        <p className='text-2xl'>yonatanasmare31@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pluse' />
                        <p className='text-2xl'>Addis Ababa Ethiopia</p>
                    </div>



                    <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto mt-10 -mb-10'>
                        <div className='flex space-x-2'>
                            <input  {...register("Name")} placeholder="Name" className="contactInput" type="text" />
                            <input  {...register("Email")} placeholder="Email" className="contactInput" type="email" />
                        </div>

                        <input {...register("Subject")} placeholder="Subject" className="contactInput" type='text' />
                        <textarea  {...register("Message")} placeholder="Message" className="contactInput" />
                        <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContactMe