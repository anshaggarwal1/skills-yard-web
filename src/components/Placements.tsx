import React from 'react'
import Image from 'next/image'
import { companyIcons } from '@/_mocks/company'
const Placements = () => {
  return (
    <section className='px-4 md:px-8 mt-20'>
        <div className='text-center'>
            <h1 className='text-greenish-light text-2xl p-2 font-bold'>PLACEMENTS</h1>
            <h1 className='text-blacky-default text-3xl md:text-4xl font-bold'>Get Placed in Top Companies</h1>
        </div>
        <div className='flex flex-wrap md:gap-12 gap-6  md:px-20 px-10 mt-10 w-full'>
            {
                companyIcons.map((icon,idx)=>(
                    <Image src={icon} key={idx} className='mx-auto w-20 md:w-24 lg:w-32' width={130} height={100} alt="icon"/>           
                ))
            }
        </div>
    </section>
  )
}

export default Placements