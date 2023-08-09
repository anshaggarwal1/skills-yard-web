"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Fade } from "react-awesome-reveal";

const STEPS = [
    { icon: "https://img.icons8.com/ios/50/knowledge-sharing.png", text: "Take Trial of your desired course" },
    { icon: "https://img.icons8.com/ios/50/knowledge-sharing.png", text: "Get enroll in our courses" },
    { icon: "https://img.icons8.com/ios/50/knowledge-sharing.png", text: "Learn through our Industry Expert" },
    { icon: "https://img.icons8.com/ios/50/knowledge-sharing.png", text: "Create your Projects" },
    { icon: "https://img.icons8.com/ios/50/knowledge-sharing.png", text: "Get Certificate and Update Portfolio" },
    { icon: "https://img.icons8.com/ios/50/knowledge-sharing.png", text: "Top Jobs and Internships" },
]

const RoadMap = () => {
    return (
        <section className='px-10 w-full'>
            <div className='flex flex-col w-full justify-center'>
                <div className='text-center'>
                    <h4 className=''>How it work&apos;s</h4>
                    <p>Choose from the variety of in-demand courses available with us</p>
                </div>
                <div className='py-12 w-full'>
                    <div className='flex flex-col w-full gap-16 justify-center items-center'>
                        {STEPS.map((step) => {
                            return <div className='relative group' key={step.text}>
                                <Fade direction='down' cascade fraction={0.8}>
                                    <div className='flex odd:-translate-x-8 even:translate-x-8 group-odd:flex-row-reverse items-center'>
                                        <div className='w-[6rem] drop-shadow-sm  bg-gray-100 h-[6rem] flex justify-center items-center bg-white rounded-full p-2'>
                                            <img src={step.icon} alt={step.text} />
                                        </div>
                                        <img width="50" height="50" src="https://img.icons8.com/ios/50/horizontal-line.png" alt="horizontal-line" />
                                        <div className='flex group-odd:flex-row-reverse drop-shadow-xl rounded-xl bg-gray-100 w-[40rem] h-[10rem]'>
                                            <div className='flex justify-center p-6 items-center item-center bg-greenish-light group-odd:rounded-r-xl group-even:rounded-l-xl font-semibold text-center w-1/3'><p>{step.text}</p></div>
                                            <div className='p-6 flex justify-center items-center'><p className='text-center'>{step.text}</p></div>
                                        </div>
                                        <div className='group-even:border-l-2 top-32 group-odd:-translate-x-12 group-even:translate-x-10 absolute group-odd:border-r-2 group-last:hidden w-[30rem] mx-auto border-black h-[6rem]'></div>
                                    </div>

                                </Fade>
                            </div>
                        })}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default RoadMap