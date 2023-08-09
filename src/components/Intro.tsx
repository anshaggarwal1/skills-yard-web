/* eslint-disable @next/next/no-img-element */
"use client"
import React,{useEffect} from 'react'

const Intro = () => {

    const pictureAnimate = (event: React.PointerEvent<HTMLElement>)=>{
        console.log('Pointer coordinates:', event.clientX, event.clientY);
        const pic1 = document.getElementById("image1")
        const pic2 = document.getElementById("image2")
        const pic3 = document.getElementById("image3")
        const pic4 = document.getElementById("image4")
       
    }

    return (
        <section onPointerMove={(e)=>pictureAnimate(e)} className=' w-full px-10 py-24'>
            <div className='justify-center flex '>
                <div className='w-[35rem] drop-shadow-sm  space-y-6'>
                    <h2>We deliver the best that&apos;s why we are the best</h2>
                    <p className=' text-justify'>SKILLSYARD is a leading educational institute dedicated to providing high-quality courses in various fields, including web development, app development, graphics, marketing, and computer courses. With experienced industry experts as instructors, they offer practical and relevant curriculum to meet the demands of the competitive job market. Their hands-on learning approach enables students to gain valuable skills and knowledge for real-world scenarios. SKILLSYARD prioritizes student success, offering personalized attention and support, including career services for resume building, interview preparation, and job placement assistance. </p>
                    <button>Know More</button>
                </div>
                <div className='relative ml-40  w-[30rem]'>

                    <img id='image1' className='w-[60%] -left-28 bottom-0 absolute z-30' src='/abstract.jpg' alt='' />

                    <img id='image2' className='w-[50%] -top-20 absolute right-0' src='/rock.jpeg' alt='' />

                    <img id='image3' className='w-[40%] -bottom-20 right-0 absolute z-30' src='/ring.jpg' alt='' />

                    <img id='image4' className='w-[60%] absolute top-0 right-24' src='/cp-girl.avif' alt='' />

                </div>
            </div>

        </section>
    )
}

export default Intro