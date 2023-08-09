import React from "react";
import Image from "next/image";
import { FaGraduationCap, FaSearchengin } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import "../app/category.css";
import Button from "./Button";
import Marquee from "react-fast-marquee";
import "animate.css"
import { url } from "inspector";
const Category = () => {
  return (
    <section className="">
      <div className="flex flex-col-reverse items-center  text-center xl:flex md:flex-col-reverse lg:flex-row md:justify-center   justify-around xl:pt-6 lg:justify-around xl:pb-4 sm:flex-col-reverse sm:justify-center " >
        <div className=" p-8 md:p-0 ">
          <h1 className="xl:text-5xl  text-4xl mb-2 font-bold xl:font-bold xl:text-blacky-default">
            We Get You <span className="text-greenish-light">Jobs</span>
          </h1>
          <h1 className="xl:text-2xl text-lg font-bold xl:font-bold tracking-widest xl:tracking-widest xl:leading-8 xl:my-4">
            And The Skills To Go With Them !
          </h1>
          <h1 className="xl:text-xl text-md font-semibold xl:font-bold">
            Get Placed With Our Certification Programs
          </h1>
          <h1 className="xl:text-xl text-md font-semibold xl:font-bold">
            In The Fields Of Tech, Data And Marketing.
          </h1>
          <h1 className="xl:text-2xl text-lg font-bold xl:font-bold xl:my-4 md:my-2 md:font-bold">10,000 Learners</h1>
          <div className="md:mb-2">
          <Button text="Explore Our Courses"/>
          </div>
        </div>
        <div>
          <h1 className=" xl:mt-4 font-bold mt-4 text-2xl xl:text-center md:text-3xl sm:mt-4 lg:mt-4 md:font-bold xl:text-xl xl:mb-4 xl:font-semibold">
            Our Students Were <span className="text-greenish-light">HIRED</span>{" "}
            In
          </h1>
          <Image src={"/assets/images/company-imgs.webp"} alt="company" width={550} height={550}  />
          
          {/* <div className="lol ">
            <div className="circle">
              <Image
                src={"/assets/images/a.png"}
                alt="amazon"
                width={50}
                height={50}
                className=""
              />
            </div>
            <div className="circle1">
              <Image
                src={"/assets/images/in.png"}
                alt="amazon"
                width={50}
                height={50}
                className=""
              />
            </div>
            <div className="circle2">
              <Image
                src={"/assets/images/inept.png"}
                alt="amazon"
                width={50}
                height={50}
                className=""
              />
            </div>
            <div className="circle3">
              <Image
                src={"/assets/images/ola.png"}
                alt="amazon"
                width={50}
                height={50}
                className=""
              />
            </div>
            <div className="circle4">
              <Image
                src={"/assets/images/n.png"}
                alt="amazon"
                width={50}
                height={50}
                className="bg-white"
              />
            </div>
            <div className="circle5">
              <Image
                src={"/assets/images/f.jpg"}
                alt="amazon"
                width={50}
                height={50}
                className=""
              />
            </div>


            <div className="lola bg-[#F1E4FF]"></div>
            <div className="lord bg-white"></div>
          </div> */}
        </div>
      </div>
      <div className="flex  justify-evenly pt-12 bg-gray-50">
        <div className="flex flex-col  gap-4 xl:flex-row md:flex-col sm:gap-6 sm:flex-col lg:flex-row  lg:justify-center xl:gap-10 lg:gap-4 md:gap-4">
        <div className=" flex flex-col lg:flex-row gap-4 xl:flex-row sm:flex-col md:flex sm:gap-4 lg:gap-4 xl:gap-10  md:gap-10">
        <div className="flex gap-4 shadow-spread bg-white w-60 h-32 p-4 pt-6 rounded-lg hover:shadow-none">
          <span className="border-2  rounded-full items-center w-14 h-14 flex justify-center">
            <FaGraduationCap className="w-10 h-10" />
          </span>
          <h1 className=" text-xl font-medium">
            <span className="font-bold text-4xl">1000 +</span>
            <br />
            Learners
          </h1>
        </div>
        <div className="flex gap-4 shadow-spread border-2 w-60 h-32 p-4  rounded-lg bg-white hover:shadow-none">
          <span className="border-2  rounded-full mt-3 items-center w-16  h-14 flex justify-center">
            <GiAchievement className="w-10 h-10" />
          </span>
          <h1 className=" text-xl">
            <span className="font-bold text-3xl">32 Lakh</span>
            <br />
            Highest Package
          </h1>
        </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-4 xl:flex-row md:flex sm:gap-4 sm:flex-col md:mt-6 xl:gap-10 lg:gap-4 lg:mt-0 md:gap-10">
        <div className="flex xl:gap-4 gap-4 shadow-spread border-2 w-60 h-32 p-4 rounded-lg bg-white hover:shadow-none">
          <span className="border-2  rounded-full items-center w-16 mt-3 h-14 flex justify-center">
            <FaSearchengin className="w-10 h-10" />
          </span>
          <h1 className=" text-xl">
            <span className="font-bold text-3xl">300 + </span>
            <br />
            Hiring Partners
          </h1>
        </div>
        <div className="flex gap-4   lg:shadow-spread shadow-spread border-2 w-60 h-32 p-4 rounded-lg bg-white hover:shadow-none">
          <span className="border-2  rounded-full items-center w-16  mt-3 h-14 flex justify-center">
            <GrUserExpert className="w-8 h-8" />
          </span>
          <h1 className=" text-xl">
            <span className="font-bold text-3xl">9 yrs +</span>
            <br />
            Experiences
          </h1>
        </div>
        </div>
        </div>
      </div>
      <div className="bg-gray-50 items-center text-center ">
        <h1 className="text-3xl font-bold text-center text-blacky-default px-2 pt-20 py-6">
          They Got Their Dream Job.{" "}
          <span className="text-greenish-light px-0">You Can Get Yours Too !</span>
        </h1>

        <Marquee autoFill={false} pauseOnHover={true}>
          {/* Wrap each card with the Marquee component */}
          <div className="flex gap-4 justify-center  ">
            {/* Card 1 */}
            <div className="border-2  rounded-lg shadow-spread h-full w-72 items-center p-2 flex flex-col justify-center items-center place">
              <Image
                src={"/assets/images/Mudit.png"}
                alt="mudit"
                width={150}
                height={133}
                className="ml-4"
              />
              <h1 className="text-center mt-2 text-xl font-bold">
                Mudit Bisht
              </h1>
              <h1 className="border-2 w-40 h-10 mt-2 text-center rounded-xl flex items-center justify-center shadow-xl">
                Software Developer
              </h1>
              <h1 className="border-2 w-40 h-10 mt-4 text-center rounded-xl flex items-center justify-center  ">
                Salary : INR 32 LPA
              </h1>
              <Image
                src={"/assets/images/amazon.jpg"}
                alt="amazon"
                width={138}
                height={50}
                className="mt-2"
              />
            </div>

            {/* Card 2 */}
            <div className="border-2 rounded-lg shadow-spread h-full w-72 items-center p-2 flex flex-col justify-center items-center place">
              <Image
                src={"/assets/images/Deepak_1.png"}
                alt="mudit"
                width={150}
                height={133}
                className="ml-4"
              />
              <h1 className="text-center mt-2 text-xl font-bold">
                Deepak Suyal
              </h1>
              <h1 className="border-2 w-40 h-10 mt-2 text-center rounded-xl flex items-center justify-center shadow-xl">
                Game Developer
              </h1>
              <h1 className="border-2 w-40 h-10 mt-4 text-center rounded-xl flex items-center justify-center  ">
                Salary : INR 11 LPA
              </h1>
              <Image
                src={"/assets/images/kalam-labs.png"}
                alt="amazon"
                width={36}
                height={50}
                className="mt-2"
              />
            </div>

            {/* Card 3 */}
            <div className="border-2 rounded-lg  shadow-spread h-full w-72 items-center p-2 flex flex-col justify-center items-center place">
              <Image
                src={"/assets/images/Prayas.png"}
                alt="mudit"
                width={150}
                height={133}
                className="ml-4"
              />
              <h1 className="text-center mt-2 text-xl font-bold">
                Prayas Sharma
              </h1>
              <h1 className="border-2 w-40 h-10 mt-2 text-center rounded-xl flex items-center justify-center shadow-xl">
                Web Developer
              </h1>
              <h1 className="border-2 w-40 h-10 mt-4 text-center rounded-xl flex items-center justify-center  ">
                Salary : INR 11 LPA
              </h1>
              <Image
                src={"/assets/images/freecharge.png"}
                alt="amazon"
                width={200}
                height={50}
                className="mt-2"
              />
            </div>

            {/* Card 4 */}
            <div className="border-2 rounded-lg shadow-spread h-full w-72 items-center p-2 flex flex-col justify-center items-center place">
              <Image
                src={"/assets/images/Gaurav.png"}
                alt="mudit"
                width={150}
                height={133}
                className="ml-4"
              />
              <h1 className="text-center mt-2 text-xl font-bold">Gaurav</h1>
              <h1 className="border-2 w-40 h-10 mt-2 text-center rounded-xl flex items-center justify-center shadow-xl">
                Web Developer
              </h1>
              <h1 className="border-2 w-40 h-10 mt-4 text-center rounded-xl flex items-center justify-center  ">
                Salary : INR 7.5 LPA
              </h1>
              <Image
                src={"/assets/images/magic.png"}
                alt="amazon"
                width={120}
                height={50}
                className="mt-2"
              />
            </div>

            {/* Card 5 */}
            <div className="border-2  rounded-lg shadow-spread h-full w-72 items-center p-2 flex flex-col justify-center items-center place">
              <Image
                src={"/assets/images/Jatin.png"}
                alt="mudit"
                width={150}
                height={133}
                className="ml-4"
              />
              <h1 className="text-center mt-2 text-xl font-bold">
                Jatin Suyal
              </h1>
              <h1 className="border-2 w-40 h-10 mt-2 text-center rounded-xl flex items-center justify-center shadow-xl">
                Game Developer
              </h1>
              <h1 className="border-2 w-40 h-10 mt-4 text-center rounded-xl flex items-center justify-center  ">
                Salary : INR 12 LPA
              </h1>
              <Image
                src={"/assets/images/questt.png"}
                alt="amazon"
                width={189}
                height={50}
                className="mt-2"
              />
            </div>

            {/* Card 6 */}
            <div className="border-2  rounded-lg shadow-spread h-full w-72 items-center p-2 flex flex-col justify-center items-center place">
              <Image
                src={"/assets/images/Deepak.png"}
                alt="mudit"
                width={150}
                height={133}
                className="ml-4"
              />
              <h1 className="text-center mt-2 text-xl font-bold">
                Deepak Singh
              </h1>
              <h1 className="border-2 w-40 h-10 mt-2 text-center rounded-xl flex items-center justify-center shadow-xl">
                Game Artist
              </h1>
              <h1 className="border-2 w-40 h-10 mt-4 text-center rounded-xl flex items-center justify-center  ">
                Salary : INR 11 LPA
              </h1>
              <Image
                src={"/assets/images/kalam-labs.png"}
                alt="amazon"
                width={36}
                height={50}
                className="mt-2"
              />
            </div>

            {/* Card 7 */}
            <div className="border-2  rounded-lg shadow-spread h-full w-72 items-center p-2 flex flex-col justify-center items-center place">
              <Image
                src={"/assets/images/Rohit.png"}
                alt="mudit"
                width={150}
                height={133}
                className="ml-4"
              />
              <h1 className="text-center mt-2 text-xl font-bold">Rohit</h1>
              <h1 className="border-2 w-40 h-10 mt-2 text-center rounded-xl flex items-center justify-center shadow-xl">
                Full Stack Developer
              </h1>
              <h1 className="border-2 w-40 h-10 mt-4 text-center rounded-xl flex items-center justify-center  ">
                Salary : INR 6 LPA
              </h1>
              <Image
                src={"/assets/images/magic.png"}
                alt="amazon"
                width={120}
                height={50}
                className="mt-2"
              />
            </div>

            {/* Card 8 */}
            <div className="border-2  rounded-lg shadow-spread h-full w-72 items-center p-2 flex flex-col justify-center items-center place">
              <Image
                src={"/assets/images/ankit.png"}
                alt="mudit"
                width={150}
                height={133}
                className="ml-4"
              />
              <h1 className="text-center mt-2 text-xl font-bold">
                Ankit Kumar
              </h1>
              <h1 className="border-2 w-40 h-10 mt-2 text-center rounded-xl flex items-center justify-center shadow-xl">
                App Developer
              </h1>
              <h1 className="border-2 w-40 h-10 mt-4 text-center rounded-xl flex items-center justify-center  ">
                Salary : INR 6 LPA
              </h1>
              <Image
                src={"/assets/images/inept.png"}
                alt="amazon"
                width={75}
                height={50}
                className="mt-2"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};
export default Category;
