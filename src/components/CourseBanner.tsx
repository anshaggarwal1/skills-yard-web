import React, { FC } from 'react'
import Image from 'next/image'
import Button from './Button'
import { courses } from '@/_mocks/courseJson'

interface props{
  heading:string
  description:string
  animate:boolean | undefined
  bannerImg:string
  width:number | undefined
}
const CourseBanner:FC<props> = ({heading,description,bannerImg,width,animate}) => {
  return (
    <>
      <div className='px-4 pt-20 lg:flex w-screen h-screen'>
        <div className='md:pt-28 pt-8 p-6  lg:w-1/2'>
          <h1 className='font-bold text-4xl md:text-6xl  text-blacky-default'><span className='text-greenish-light'>{heading.split(' ')[0]}</span> {heading.split(' ')[1] ? heading.substr(heading.indexOf(' ') + 1) : ''}</h1>
          <p className='text-blacky-default mt-8 text-lg md:max-w-lg'>{description}</p>
          <Button text='Enroll Now' />
        </div>
        {heading == courses[0].name ? <div className=' md:w-1/2 mt-12 md:mt-0 w-full  relative mb-30 '>
          <Image src="/assets/images/css.png" className='w-14 md:w-20 absolute md:top-[4rem] md:left-[6.25rem] animate-topdown-delay' width={100} height={100} alt='css img' />
          <Image src="/assets/images/html.png" className='w-14 md:w-20 absolute right-4 md:top-[12rem] md:right-[4.25rem] animate-topdown' width={100} height={100} alt='css img' />
          <Image src="/assets/images/tag2.png" className='w-14 md:w-20  absolute left-[50%] right-[50%] md:top-5 md:left-[400px]   animate-delay' width={60} height={80} alt='css img' />
          <div className='md:mt-28 '>
            <Image src="/assets/images/web4.png" alt="web dev Img" className='w-80 md:w-[430px] mx-auto lg:float-right lg:mr-[7.5rem] ' width={430} height={100} />
          </div>
        </div> : <div className='md:w-2/3 mt-[56px]'>
          <Image src={bannerImg} alt="web dev Img" className={`mx-auto lg:float-right ${animate &&  "animate-topdown"}`} width={width} height={600} />
        </div> 
          
}
      </div>

      {/* <div className="relative mx-auto grid  grid-cols-2 gap-y-16 overflow-hidden py-16 px-10 font-bold text-[#fff] sm:grid-cols-4 md:gap-0" style={{backgroundImage:"url(/assets/images/greenBgPattern.jpg)"}} >
        <div className="flex flex-col items-center gap-y-4 border-r-grey50 sm:border-r  ">
          <div className="text-4xl md:text-5xl">
            <span>900</span>K+
          </div>
          <div className="text-center font-medium">
            Subscribers <br />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://www.youtube.com/c/LoveBabbar1"
            >
              on Youtube
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-4 border-r-grey50 sm:border-r  ">
          <div className="text-4xl md:text-5xl">
            <span>4</span>K+
          </div>
          <div className="text-center font-medium">
            Followers <br />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://twitter.com/lovebabbar3"
            >
              on Twitter
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-4 border-r-grey50 sm:border-r  ">
          <div className="text-4xl md:text-5xl">
            <span>100</span>K+
          </div>
          <div className="text-center font-medium">
            Followers <br />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://www.instagram.com/lovebabbar1/"
            >
              on Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-4   ">
          <div className="text-4xl md:text-5xl">
            <span>410</span>K+
          </div>
          <div className="text-center font-medium">
            Followers <br />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://www.linkedin.com/in/love-babbar-38ab2887/"
            >
              on Linkedin
            </a>
          </div>
        </div>
      </div> */}


 
  

    </>
  )
}

export default CourseBanner