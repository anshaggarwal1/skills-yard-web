"use client"
import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {

  return (
    <section className=' px-10 py-24 w-full'>
      <div className='flex flex-col items-center  gap-12 justify-center'>
        <h2>Numbers speaks itself</h2>
        <VisibilitySensor partialVisibility offset={{ bottom: 100}}>
          {({ isVisible }: { isVisible: boolean }) => (
            <div className='flex max-sm:flex-col  md:gap-10 p-12 md:pb-5   justify-evenly max-sm:space-y-6 rounded-xl lg:w-[85vw] bg-[url("/assets/images/greenBgPattern.jpg")]  mx-auto text-2xl  md:text-3xl lg:text-4xl font-bold text-darker-white'>
              <div className='text-center text-lg sm:mb-10 md:space-y-4  lg:text-2xl  ' >{isVisible ? <CountUp end={100} duration={4} suffix=" +" /> : <div>0</div>}<h4  className=''>TOTAL STUDENTS</h4></div>
              <div className='text-center text-lg sm:mb-10 md:space-y-4 lg:text-2xl '>{isVisible ? <CountUp end={50} duration={4} suffix=" +" /> : <div>0</div>}<h4 className=''>JOB PLACEMENTS</h4></div>
              <div className='text-center text-lg sm:mb-10 md:space-y-4 lg:text-2xl '>{isVisible ? <CountUp end={20} duration={4} suffix=" +" /> : <div>0</div>}<h4 className=''>TOTAL COURSES</h4></div>
              <div className='text-center text-lg sm:mb-10 md:space-y-4 lg:text-2xl '>{isVisible ? <CountUp end={9} duration={4} suffix=" +" /> : <div>0</div>}<h4 className=''>YEARS OF EXPERIENCE</h4></div>
            </div>
          )}
        </VisibilitySensor>
      </div>
    </section>
  )
}

export default Counter