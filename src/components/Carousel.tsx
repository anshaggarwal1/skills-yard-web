/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react'
import { Slide } from 'react-awesome-reveal';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const IMAGES = [
    { src: "/app-development.jpeg", alt: "app development banner image", tag: "Web Application Development Course", des: "Unleash your creativity : Learn the art of web development" },
    { src: "/data-science.jpeg", alt: "data science banner image", tag: "Web Application Development Course", des: "Unleash your creativity : Learn the art of web development" },
    { src: "/web-development.jpg", alt: "web development banner image", tag: "Web Application Development Course", des: "Unleash your creativity : Learn the art of web development" }]

const Carousel = () => {
    const [carouselImage, setcarouselImage] = useState(0);

    console.log(carouselImage)
    useEffect(() => {

        setTimeout(() => {
            setcarouselImage((prev) => prev + 1 == IMAGES.length ? 0 : prev + 1)
        }, 8000);
    }, [])

    return (
        <div
            onMouseEnter={() => { document && document.getElementById("arrowContainer")?.classList.remove("hidden") }}
            onMouseLeave={() => { document && document.getElementById("arrowContainer")?.classList.add("hidden") }}
            className='w-full h-screen relative overflow-hidden '
        >

            <div id="arrowContainer" className='z-40 absolute top-1/2 flex justify-between w-full px-10 '>
                <BsArrowLeft onClick={() => { setcarouselImage((prev) => prev - 1 == -1 ? IMAGES.length - 1 : prev - 1) }} className="  text-white border p-2 hover:bg-white transition-all duration-300 ease-linear hover:text-gray-800 cursor-pointer rounded-full w-16 h-16 " size="50" />
                <BsArrowRight onClick={() => { setcarouselImage((prev) => prev + 1 == IMAGES.length ? 0 : prev + 1) }} className="  text-white border p-2 hover:bg-white transition-all duration-300 ease-linear hover:text-gray-800 cursor-pointer rounded-full w-16 h-16 " size="50" />
            </div>


            <Slide direction='right'> <div className='' key={IMAGES[carouselImage].src}>
                <img className='object-cover w-screen h-screen object-center' alt={IMAGES[carouselImage].alt} src={IMAGES[carouselImage].src} />
                <div className='z-30 absolute top-[45%] left-32 text-white w-1/3 space-y-4'>
                    <h2 className='text-4xl animate__animated animate__flipInX  font-bold'>{IMAGES[carouselImage].tag}</h2>
                    <p className='text-2xl animate__animated animate__flipInX  font-semibold'>{IMAGES[carouselImage].des}</p>
                </div>

            </div>
            </Slide>


        </div>
    )
}

export default Carousel