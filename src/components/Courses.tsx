/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CATEGORIES = [
    { icon: "google-code.png", title: "WEB DEVELOPMENT" },
    { icon: "android.png", title: "APP DEVELOPMENT" },
    { icon: "designer.png", title: "2D GRAPHICS" },
    { icon: "3d-scale.png", title: "3D GRAPHICS" },
    { icon: "codechef.png", title: "CODING" },
    { icon: "360-view--v2.png", title: "AV/VR" },
]

const Courses = () => {
    return (
        <section className='bg-darker-black text-darker-white px-10 py-12 w-full '>
                    <h2 className='text-[#25D366] text-center '>Here are some of our course categories</h2>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <div className=''>
                </div>
                <div className='flex gap-10 flex-wrap justify-center'>
                    {CATEGORIES.map((category) => {
                        return <div key={category.title} className='hover:bg-darker-white text-center transition-all duration-500 ease-out cursor-pointer hover:text-darker-black h-[7.2rem] w-[7.2rem] sm:h-[10rem] sm:w-[10rem] flex justify-center items-center flex-col gap-4 rounded-xl border-dashed border-2'>
                            <img className=' h-[2rem] w[2rem]   md:h-[40px] md:w-[40px] ' src={"https://img.icons8.com/25D366/ios/60/" + category.icon} alt={category.title} />
                            <p className='text-xs' >{category.title}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Courses