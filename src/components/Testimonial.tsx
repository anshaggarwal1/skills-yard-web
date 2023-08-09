/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import 'animate.css';

// Define the type for each image object in the IMAGES array
type ImageObject = {
    src: string;
    alt: string;
    name: string;
    des: string;
    video: string;
};

const IMAGES: ImageObject[] = [
    { src: "/app-development.jpeg", alt: "app development banner image", name: "sam", des: "web developer", video: "" },
    { src: "/data-science.jpeg", alt: "data science banner image", name: "chris", des: "web developer", video: "" },
    { src: "/web-development.jpg", alt: "web development banner image", name: "peter", des: "web developer", video: "" },
    { src: "/web-development.jpg", alt: "web development banner image", name: "mr brown", des: "web developer", video: "" },
]

const Testimonial = () => {

    const [carouselImage, setcarouselImage] = useState(0);

    useEffect(() => {

    }, [carouselImage])
    return (
        <section className='px-10 pt-12 w-full'>
            <div className='flex flex-col justify-center '>
                <h2 className='text-center'>Don&apos;t just take our word for it... <br></br>Read reviews from our students</h2>
                <div className='w-full relative overflow-hidden '>
                    <div id="arrowContainer" className='z-40 absolute top-1/2 flex justify-between w-full  drop-shadow animate__animated animate__fadeIn'>
                        <AiOutlineLeft onClick={() => { setcarouselImage((prev:number)=>{return Math.max(prev - 1, 0) })}} className="   hover:text-greenish-light transitiona-all duration-300 ease-in-out cursor-pointer  " size="50" />
                        <AiOutlineRight onClick={() => { setcarouselImage((prev)=>{return Math.min(prev + 1, IMAGES.length - 3) })}} className="   hover:text-greenish-light transitiona-all duration-300 ease-in-out cursor-pointer  " size="50" />
                    </div>

                    <div className='flex w-full justify-center items-center gap-4 p-12 h-[28rem]'>
                        <div className='flex rounded-xl flex-col gap-6 drop-shadow flex-grow-1 h-full pb-6 px-6  bg-white  bg-white ' >
                            <div className=' space-y-4 flex gap-6 items-end'>
                                <img src={IMAGES[carouselImage].src} alt={IMAGES[carouselImage].alt} className='rounded-full w-12 h-12' />
                                <h4 className='animate__animated animate_ flipInX  font-semibold'>{IMAGES[carouselImage].name}<br></br><span className='font-thin text-base text-gray-600'>{IMAGES[carouselImage].des}</span></h4>
                            </div>
                            <video className='h-full bg-gray-800 rounded-xl'>
                                <source src={IMAGES[carouselImage].video}></source>
                            </video>
                        </div>
                        <div className='flex rounded-xl flex-col gap-6 drop-shadow flex-grow-1 h-full pb-6 px-6  bg-white  bg-white '>
                            <div className='space-y-4 flex gap-6 items-end'>
                                <img src={IMAGES[carouselImage + 1].src} alt={IMAGES[carouselImage + 1].alt} className='rounded-full w-12 h-12' />
                                <h4 className='animate__animated animate__flipInX  font-semibold'>{IMAGES[carouselImage + 1].name}<br></br><span className='font-thin text-base text-gray-600'>{IMAGES[carouselImage + 1].des}</span></h4>
                            </div>
                            <video className='h-full bg-gray-800 rounded-xl'>
                                <source src={IMAGES[carouselImage + 1].video}></source>
                            </video>
                        </div>
                        <div className='flex rounded-xl flex-col gap-6 drop-shadow flex-grow-1 h-full pb-6 px-6 bg-white  bg-white '>
                            <div className='space-y-4 flex gap-6 items-end'>
                                <img src={IMAGES[carouselImage + 2].src} alt={IMAGES[carouselImage + 2].alt} className='rounded-full w-12 h-12' />
                                <h4 className='animate__animated animate__flipInX  font-semibold'>{IMAGES[carouselImage + 2].name}<br></br><span className='font-thin text-base text-gray-600'>{IMAGES[carouselImage + 2].des}</span></h4>
                            </div>
                            <video className='h-full bg-gray-800 rounded-xl'>
                                <source src={IMAGES[carouselImage + 2].video}></source>
                            </video>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonial