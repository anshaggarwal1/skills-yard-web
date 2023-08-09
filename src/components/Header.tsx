"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { courses } from "@/_mocks/courseJson";



export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      {/* <!-- Header --> */}
      <header className="w-full fixed top-0 shadow-lg bg-white z-40">
        <div className="py-2 md:py-1 px-3 sm:px-7 lg:px-10 xl:px-14 flex flex-wrap justify-between items-center">
          {/* <!-- Logo --> */}
          <Link href={"/"}>
            <Image
              src={"/assets/images/header-logo.png"}
              alt="SkillsYard"
              width={125}
              height={30}
              className="lg:w-44"
            />
          </Link>

          {/* <!-- Menu Button --> */}
          <button
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <svg
              className="text-greenish-light w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            className={`${
              !isMenu ? "hidden" : "block"
            }  text-white w-full md:block md:w-auto`}
          >
            <ul
              onMouseOver={() => {
                setIsMenu(true);
              }}
              onMouseLeave={() => {
                setIsMenu(false);
              }}
              className="flex flex-col justify-center p-2 md:p-0 md:flex-row md:items-center"
            >
              <Link href="/">
                <li className="text-sm md:text-[15px] lg:text-lg lg:leading-5 md:hidden">
                  <h3
                    className={`block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${
                      pathname === "/"
                        ? "text-greenish-light"
                        : "text-blacky-light"
                    }`}
                  >
                    Home
                  </h3>
                </li>
              </Link>

              <Link href="/courses">
                <li className="text-sm relative md:text-[15px] lg:text-lg lg:leading-5 main">
                  <h3
                    onMouseOver={() => {
                      setOpen(true);
                    }}
                    onMouseLeave={() => {
                      setOpen(false);
                    }}
                    className={`flex items-center justify-between font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${
                      pathname === "/courses"
                        ? "text-greenish-light"
                        : "text-blacky-light"
                    }`}
                  >
                    Courses
                    <span style={{ float: "right" }} className="arrow">
                      <RiArrowDropDownLine size={25} />
                    </span>
                  </h3>

                  {/* <!-- Dropdown Menu --> */}
                  <div
                    className={`absolute z-10 w-[18rem] font-normal flex justify-center ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <ul
                      onMouseOver={() => {
                        setOpen(true);
                      }}
                      onMouseLeave={() => {
                        setOpen(false);
                      }}
                      className="px-5 py-3 bg-white text-grayish-light text-sm md:text-base rounded-md shadow-lg w-full"
                    >
                      {courses.map((item, id) => (
                        <Link key={id} href={"/course/"+item.slug}>
                          <li className="block my-2 px-6 md:px-4 py-2 font-medium rounded-md hover:text-white hover:bg-greenish-light ease-in duration-300">
                            {item.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>
              </Link>
              <Link href="/showcase">
                <li className="text-sm md:text-[15px] lg:text-lg lg:leading-5">
                  <h3
                    className={`block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${
                      pathname === "/showcase"
                        ? "text-greenish-light"
                        : "text-blacky-light"
                    }`}
                  >
                    Showcase
                  </h3>
                </li>
              </Link>

              <Link href="/placement">
                <li className="text-sm md:text-[15px] lg:text-lg lg:leading-5">
                  <h3
                    className={`block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${
                      pathname === "/placement"
                        ? "text-greenish-light"
                        : "text-blacky-light"
                    }`}
                  >
                    Placement
                  </h3>
                </li>
              </Link>

              <Link href="/about">
                <li className="text-sm md:text-[15px] lg:text-lg lg:leading-5">
                  <h3
                    className={`block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${
                      pathname === "/about"
                        ? "text-greenish-light"
                        : "text-blacky-light"
                    }`}
                  >
                    About Us
                  </h3>
                </li>
              </Link>

              <Link href="/contact-us">
                <li className="text-sm md:text-[15px] lg:text-lg lg:leading-5">
                  <h3
                    className={`block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${
                      pathname === "/contact-us"
                        ? "text-greenish-light"
                        : "text-blacky-light"
                    }`}
                  >
                    Contact Us
                  </h3>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
