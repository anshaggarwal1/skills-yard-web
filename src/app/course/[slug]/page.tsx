import React, { FC } from 'react'
import CourseBanner from "@/components/CourseBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Placements from "@/components/Placements";
import Loader from "@/components/Loader";
import Accordion from "@/components/Accordian";
import { redirect } from 'next/navigation';
import { courses } from '@/_mocks/courseJson';
import Testimonials from '@/components/Testimonials';
import  Image  from 'next/image';

interface ICourseProp {
    params: { slug: string }
}
const Courses: FC<ICourseProp> = ({ params }) => {
    const { slug } = params
    const course = courses.filter(course => course.slug == slug)[0]
    if (!course) redirect('/')
    const { name: heading, description, bannerImg, width,stats, softwareCovered,subCourses,animate } = course
    const [month, projects, level, mode] = stats;
    return (
        <>
            <CourseBanner {...{ heading, description, bannerImg,width,animate }} />
            <div className="mx-auto text-white  py-12 mt-64  md:mt-20" style={{ backgroundImage: "url(/assets/images/greenBgPattern.jpg)" }} >
                <div
                    role="list"
                    aria-label="Our stats."
                    className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >

                    <div
                        role="listitem"
                        className="flex justify-center items-center w-full lg:border-r border-gray-300 py-6"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/9512/9512213.png"
                            alt="ambulance"
                            className='w-28'

                        />

                        <div className="  w-1/2 pl-8">
                            <h1 className="font-bold text-3xl tracking-1px">{month}</h1>
                            <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">
                                Duration
                            </h2>
                        </div>
                    </div>
                    <div
                        role="listitem"
                        className="flex justify-center items-center w-full lg:border-r border-gray-300 py-6"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2683/2683274.png"
                            alt="clock"
                            className='w-32'

                        />

                        <div className="  w-1/2 pl-12">
                            <h1 className="font-bold text-2xl lg:text-4xl tracking-1px">{projects}</h1>
                            <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">
                                Projects
                            </h2>
                        </div>
                    </div>

                    <div
                        role="listitem"
                        className="flex justify-center items-center w-full lg:border-r border-gray-300 py-6"
                    >
                        <img
                            src="/assets/icons/bar.png"
                            alt="clock"
                            className='w-24 h-24 '

                        />

                        <div className="  w-1/2 pl-6">
                            <h1 className="font-bold text-2xl lg:text-3xl">{level}</h1>
                            <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">
                                Skill Level
                            </h2>
                        </div>
                    </div>


                    <div role="listitem" className="flex justify-center items-center w-full py-6">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3993/3993114.png"
                            alt="clock"
                            className='w-32'
                        />
                        <div className=" w-1/ pl-12">
                            <h1 className="font-bold text-2xl lg:text-4xl tracking-1px">{mode}</h1>
                            <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">
                                Mode of Delivery
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <Tools_Technologies  {...{ softwareCovered }} />
            <div className="bg-gray-50 mt-20">
                <div className="mx-auto w-full  ">
                    <div
                        className="w-full pt-12 text-center"
                    >
                        <div className='text-center'>
                            {/* <h1 className='text-greenish-light text-2xl p-2 font-bold'>Courses</h1> */}
                            <h1 className='font-bold text-3xl md:text-5xl  text-blacky-default'><span className='text-greenish-light'>Courses </span>We Offered</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-evenly gap-4 py-14">

                        {
                            subCourses?.map((course,idx)=>(
                                <div key={idx} className=" mx-auto  rounded-lg border border-grey50 bg-[#fff] shadow-md md:mx-0 p-5 overflow-hidden transition-all duration-300 hover:shadow-xl max-w-[500px]">
                                <div className="max-h-52 w-full overflow-hidden rounded-lg mb-4">
                                <Image
              src={course.courseImg}
              width={500}
              height={300}
              alt="courseImg"
              className="mx-auto  object-center"
            />
                                </div>
                                <div>
                                    <div className="text-blacky-default mb-2  text-lg font-bold tracking-tight md:text-2xl">
                                        {course.heading}
                                    </div>
                                    <div className="mt-4 flex flex-col gap-3 font-bold">
                                        <div>
                                            <h1 className='text-lg text-blacky-default' >Skill Level :<span className='text-gray-500'> {course.skillLevel}</span></h1>
                                            <h1 className='text-lg text-blacky-default' >Duration :<span className='text-gray-500'> {course.duration}</span></h1>
                                        </div>
                                        <h2 className=" text-gray-500  text-sm">
                                            {course.description}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    


                        {/* <div className=" mx-auto   rounded-lg border border-grey50 bg-[#fff] shadow-md md:mx-0 p-5 overflow-hidden transition-all duration-300 hover:shadow-xl max-w-[500px]">
          <div className="max-h-52 w-full relative overflow-hidden rounded-lg mb-4">
            <Image
              src="/assets/images/web-dev/fullStack.png"
              width={500}
              height={300}
              alt="courseImg"
              className="mx-auto  object-center"
            />
          </div>
          <div>
            <div className="text-blacky-default mb-2  text-lg font-bold tracking-tight md:text-2xl">
            Front End Web Development Course
            </div>
            <div className="mt-4 flex flex-col gap-3 font-bold">
                <div>
                    <h1 className='text-lg text-blacky-default' >Skill Level :<span className='text-gray-500'> Intermediate</span></h1>
                    <h1 className='text-lg text-blacky-default' >Duration :<span className='text-gray-500'> 3 Months</span></h1>
                </div>
              <h2 className=" text-gray-500  text-sm">
              Our Basic Web Development Course offers beginner-friendly learning experience, equipping you with the essential skills to build responsive web applications using Vs Code, HTML, CSS, JavaScript, React and Git.
              </h2>
            </div>
          </div>
        </div> */}

                    </div>
                </div>
            </div>

            <Testimonials />
 
            <Image src={'/svg-edited.svg'} width={1000} height={1000} className='w-screen mb-20' alt="" />
            
            <Placements />
            <Accordion />   
        </>)
}

const Tools_Technologies: FC<{ softwareCovered: string[] }> = ({ softwareCovered }) => {
    return (
        <section className="px-4 md:px-8 mt-20 ">
            <h1 className='text-greenish-light text-2xl p-2 px-4 font-bold'>Technology</h1>
            <h1 className='text-blacky-default text-3xl md:text-4xl px-4 font-bold mb-6'>Softwares We Covered</h1>
            <div className="flex flex-wrap p-2 gap-6" >
                {softwareCovered.map((software, idx) => (<div key={idx} className="m-auto flex items-center justify-center hover:shadow-none shadow-light  border-gray-400 border-[1px] cursor-pointer w-[178px] h-[120px] py-8 rounded-md  px-6" >
                    <Image src={software} alt="icon" width={130} height={100} className='w-24' />
                </div>))}
            </div>
        </section>
    )
}

export default Courses