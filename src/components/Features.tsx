/* eslint-disable @next/next/no-img-element */
import React from 'react'

const FEATURES = [
    {icon:"https://img.icons8.com/ios/50/teacher.png",title:"Experienced Instructors",desc:"Our team of instructors comprises experienced professionals who are passionate about coding."},
    {icon:"https://img.icons8.com/ios/50/teacher.png",title:"Practical Learning Approach",desc:"We believe in a hands-on approach to learning.Our courses include numerous real-world project."},
    {icon:"https://img.icons8.com/ios/50/teacher.png",title:"Job Placement Assistant",desc:"We are committed to your career success. Our institute offers comprehensive career and support services, including resume building."},
    {icon:"https://img.icons8.com/ios/50/teacher.png",title:"Collabrative Learning",desc:"Our institute fosters a collaborative learning environment, encouraging teamwork, peer-to-peer interaction, and knowledge sharing."},
    {icon:"https://img.icons8.com/ios/50/teacher.png",title:"Quality Assurance",desc:"After UAT stage your app is ready to live on the Android/Ios store also we give support & answer every query after deployment."},
    {icon:"https://img.icons8.com/ios/50/teacher.png",title:"Alumni Success Stories",desc:"Our track record speaks for itself. Our alumni have gone on to achieve great success in their careers."},
]

const Features = () => {
  return (
    <section className='px-2 md:px-10  w-full'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className=''>Why to choose us ?</h2>
            
            <div className='flex justify-center gap-4 py-12 md:py-24  mx-auto flex-wrap '>
                {FEATURES.map((feature)=>{
                    return <div key={feature.title} className='flex justify-center backdrop-blur text-darker-dark shadow-xl flex-col rounded-xl text-center p-2  sm:p-8 bg-white/50 w-[70vw] h-[70vw] sm:w-[19vw]  md:w-[28vw] md:h-[30vw]  items-center gap-4'>
                                {/* <span className="absolute right-0 w-16 h-40 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
                                <img className='h-[13vw] md:h-[5rem]' src={feature.icon} alt={feature.title}/>
                                <h4 className='text-xs  lg:text-sm'>{feature.title}</h4>
                                <p className='text-xs lg:text-sm'>{feature.desc}</p>
                        </div>
                })}
                
            </div>

        </div>
    </section>
  )
}

export default Features