import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function about() {
  return (
    <>
      <section className="px-4 sm:px-8 lg:px-10 pt-10 md:pt-20 max-w-screen lg:w-screen md:h-[450px] sm:h-[350px] h-[250px] lg:h-screen bg-[url('/assets/images/about-banner.png')] bg-no-repeat bg-cover bg-center">
        <div className="pt-8 md:pt-12 lg:pt-16 xl:pt-24 p-2 lg:p-6 max-w-sm lg:max-w-lg xl:max-w-2xl text-end float-right">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-blacky-default">
            {" "}
            We&#39;re <span className="text-greenish-light">
              {" "}
              changing{" "}
            </span>{" "}
            the
            <br /> whole your
            <span className="text-greenish-light"> career. </span>
          </h1>

          <p className="hidden sm:block text-blacky-default mt-5 lg:mt-8 float-right text-sm sm:text-base lg:text-lg max-w-[200px] sm:max-w-sm lg:max-w-md">
            At SkillsYard, we are dedicated to provide top-quality education and
            training to individuals seeking to enhance their skills and advance
            their careers.
          </p>

          <Button text="Contact Us"  />
        </div>
      </section>

      <section className="py-10 sm:py-16 xl:py-24 px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="py-4 mx-auto lg:py-6 md:px-4">
          <div className="w-full xl:px-4 flex flex-wrap lg:flex-nowrap gap-5 md:gap-8 lg:gap-10">
            <div className="max-w-full lg:max-w-md xl:max-w-xl">
              <div className="px-4 pl-4 mb-6 border-l-4 border-greenish-light">
                <span className="text-sm font-semibold text-grayish-light uppercase">
                  Who we are ?
                </span>
                <h1 className="mt-2 text-3xl font-black text-greenish-light md:text-5xl">
                  About Us
                </h1>
              </div>

              <p className="px-4 mb-6 lg:mb-10 text-sm sm:text-base leading-6 sm:leading-[26px] text-blacky-default">
                We offer personalized attention and support, ensuring that each
                student receives the guidance they need to excel. Our career
                services team assists students with resume building, interview
                preparation, and job placement support, helping them transition
                smoothly into their desired careers.
              </p>

              <div className="flex flex-wrap items-center px-8 md:px-5">
                <div className="w-full px-4 mb-6 sm:w-1/2">
                  <div className="py-4 px-2 bg-white flex gap-5 lg:gap-2 items-center rounded-lg border shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <span className="text-greenish-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="w-12 sm:w-14 xl:w-16 h-12 sm:h-14 xl:h-16 bi bi-file-earmark-text"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />

                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                      </svg>
                    </span>

                    <div>
                      <p className="text-3xl font-bold text-blacky-default">
                        100
                      </p>

                      <h2 className="text-sm font-medium text-grayish-light">
                        Projects and Plans
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-4 bg-white flex gap-4 items-center rounded-lg border shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <span className="text-greenish-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="w-12 sm:w-14 xl:w-16 h-12 sm:h-14 xl:h-16 bi bi-people-fill"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />

                        <path
                          fill-rule="evenodd"
                          d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                        />

                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </span>

                    <div>
                      <p className="text-3xl font-bold text-gray-700">50</p>

                      <h2 className="text-sm font-medium text-grayish-light">
                        Helped people
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="py-4 px-2 bg-white flex gap-4 items-center rounded-lg border shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <span className="text-greenish-light ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="w-12 sm:w-14 xl:w-16 h-12 sm:h-14 xl:h-16 bi bi-person-fill"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-3xl font-bold text-gray-700">10</p>

                      <h2 className="text-sm font-medium text-grayish-light">
                        Volunteer
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-4 bg-white flex gap-4 items-center rounded-lg border shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <span className="text-greenish-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="w-12 sm:w-14 xl:w-16 h-12 sm:h-14 xl:h-16 bi bi-alarm-fill"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                      </svg>
                    </span>

                    <div>
                      <p className="text-3xl font-bold text-gray-700">30</p>

                      <h2 className="text-sm font-medium text-grayish-light">
                        Timing
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:py-5 object-cover">
              <Image
                src={"/assets/images/about-choose.png"}
                alt=""
                width={300}
                height={300}
                className="relative rounded w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 xl:px-24 flex flex-col-reverse lg:flex-row gap-8 sm:gap-12 items-center justify-between w-full h-full">
        <div className="grid grid-cols-2 place-items-center place-content-center gap-6 sm:gap-10">
          <Image
            src={"/assets/images/about-1.png"}
            alt=""
            width={225}
            height={330}
            className="w-[150px] h-[220px] sm:w-[250px] sm:h-[360px] lg:w-[210px] lg:h-[280px] xl:w-[225px] xl:h-[330px] rounded-xl"
          />
          <Image
            src={"/assets/images/about-2.png"}
            alt=""
            width={225}
            height={350}
            className="w-[150px] h-[220px] sm:w-[250px] sm:h-[360px] lg:w-[210px] lg:h-[280px] xl:w-[225px] xl:h-[330px] row-span-2 rounded-xl"
          />
          <Image
            src={"/cp-girl.avif"}
            alt=""
            width={225}
            height={330}
            className="w-[150px] h-[220px] sm:w-[250px] sm:h-[360px] lg:w-[210px] lg:h-[280px] xl:w-[225px] xl:h-[330px] rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h6 className="text-greenish-light font-bold text-lg md:text-xl mb-2">
            Why Choose Us
          </h6>

          <h1 className="text-3xl md:text-4xl xl:text-[42px] leading-none font-bold text-blacky-default md:max-w-xl lg:max-w-lg">
            Make our students happy by giving skills
          </h1>

          <p className="my-5 text-sm sm:text-base leading-6 sm:leading-[26px] text-blacky-default md:max-w-xl lg:max-w-lg">
            Our team of instructors comprises experienced professionals who are
            passionate about coding. We believe in a hands-on approach to
            learning. Our courses include numerous real-world project.
          </p>

          <p className="text-sm sm:text-base leading-6 sm:leading-[26px] text-blacky-default md:max-w-xl lg:max-w-lg">
            Our institute offers comprehensive career and support services,
            including resume building. Our institute fosters a collaborative
            learning environment, encouraging teamwork, and knowledge sharing.
          </p>

          <Button text="Get Started"  />
        </div>
      </section>

      <section className="pt-10 sm:pt-16 lg:pt-20 px-6 sm:px-14 xl:px-20 flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="md:basis-1/2">
          <h1 className="text-3xl md:text-4xl xl:text-[42px] font-bold text-blacky-default mb-3">
            Our <span className="text-greenish-light"> Mission </span>
          </h1>

          <p className="text-blacky-default text-sm sm:text-base leading-6 sm:leading-[26px] font-medium">
            Our mission is to foster an atmosphere where students feel
            comfortable asking questions, sharing ideas, and exploring new
            concepts. We strive to cultivate a sense of community and provide
            individualized attention to ensure that each student receives the
            support they need to succeed. We provide resources and opportunities
            for ongoing skill development, keeping them updated with the latest
            advancements in the coding field.
          </p>

          <h1 className="text-3xl md:text-4xl xl:text-[42px] font-bold text-blacky-default mt-8 sm:mt-10 mb-3">
            Our <span className="text-greenish-light"> Vision </span>
          </h1>

          <p className="text-blacky-default text-sm sm:text-base leading-6 sm:leading-[26px] font-medium">
            Our vision for our institute is to empower individuals with the
            knowledge and skills to thrive in the digital age and become leaders
            in the world of their fields. We aim to be at the forefront of
            coding education, setting the highest standards of excellence and
            innovation.Our vision is to continuously update and enhance our
            curriculum to incorporate the latest industry trends, technologies,
            and best practices.
          </p>
        </div>

        <div className="md:basis-1/2 relative">
          <Image
            src={"/assets/images/aboutCircle.png"}
            alt=""
            width={300}
            height={300}
            className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] animate-rotate m-auto"
          />

          <div className="absolute top-0 flex justify-center items-center w-full h-full">
            <div className="rounded-full border-8 sm:border-[10px] border-greenish-light p-[90px] sm:p-28"></div>
          </div>

          <div className="absolute top-0 flex justify-center items-center w-full h-full">
            <div className="flex flex-col items-center">
              <div className="text-greenish-light text-6xl sm:text-[80px] leading-[50px] sm:leading-[70px] font-medium sm:font-semibold">
                99%
              </div>

              <p className="text-grayish-light text-lg sm:text-xl">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
