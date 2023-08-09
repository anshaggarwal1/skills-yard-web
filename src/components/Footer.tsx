import Link from "next/link";
import Image from "next/image";
import { LiaFacebookF, LiaTwitter, LiaLinkedinIn } from "react-icons/lia";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { courses } from "@/_mocks/courseJson";

const media = [
  {
    path: "https://www.facebook.com/",
    icon: LiaFacebookF,
  },
  {
    path: "https://www.instagram.com/",
    icon: AiFillInstagram,
  },
  {
    path: "https://www.twitter.com/",
    icon: LiaTwitter,
  },
  {
    path: "https://www.linkedin.com/",
    icon: LiaLinkedinIn,
  },
  {
    path: "https://www.youtube.com/",
    icon: AiFillYoutube,
  },
];

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About Us",
  },
  {
    path: "/showcase",
    title: "Showcase",
  },
  {
    path: "/placement",
    title: "Placement",
  },
  {
    path: "/contact-us",
    title: "Contact Us",
  },
];

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-white bg-blacky-light px-8 sm:px-10 lg:px-14 mt-12 sm:mt-16 lg:mt-24">
        <div className="py-8 sm:py-10 flex flex-col md:flex-row flex-wrap justify-between gap-8 md:gap-0 border-b border-greenish-light">
          <div className="flex flex-col lg:justify-center sm:mt-10 lg:mt-0 gap-5">
            {/* <!-- Logo --> */}
            <Link href={"/"}>
              <Image
                src={"/assets/images/footer-logo.png"}
                alt="SkillsYard"
                width={120}
                height={30}
                className="lg:w-44"
              />
            </Link>

            <h1 className="text-base leading-6">
              SkillsYard is provided top-quality <br /> education and training.
            </h1>

            {/* <!-- Social Media --> */}
            <div className="flex items-center gap-3 text-xl text-blacky-light">
              {media.map((item, id) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={id}
                    href={item.path}
                    target="_blank"
                    className="p-[6px] bg-white rounded-full ease-in duration-300 hover:bg-greenish-light hover:text-white"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* <!-- Quick Links --> */}
          <div className="flex flex-col items-start">
            <h1 className="text-xl leading-5">Quick Links</h1>
            <div className="my-3 border-b-2 border-greenish-light w-16"></div>

            {links.map((item, id) => (
              <Link key={id} href={item.path}>
                <li className="my-1 list-none flex items-center text-base ease-in duration-300 hover:text-greenish-light">
                  <IoMdArrowDropright className="text-greenish-light" />{" "}
                  {item.title}
                </li>
              </Link>
            ))}
          </div>

          {/* <!-- Top Courses --> */}
          <div className="flex flex-col items-start">
            <h1 className="text-xl leading-5">Top Courses</h1>
            <div className="my-3 border-b-2 border-greenish-light w-16"></div>

            {courses.map((item, id) => (
              <Link key={id} href={"/course/" + item.slug}>
                <li className="my-1 list-none flex items-center text-base ease-in duration-300 hover:text-greenish-light">
                  <IoMdArrowDropright className="text-greenish-light" />
                  {item.name}
                </li>
              </Link>
            ))}
          </div>

          {/* <!-- Contact Info --> */}
          <div className="flex flex-col">
            <h1 className="text-xl leading-5">Get In Touch</h1>
            <div className="my-3 border-b-2 border-greenish-light w-16"></div>

            <ul className="text-sm lg:text-base">
              <li className="my-1 flex items-center gap-3">
                <MdLocationPin className="text-greenish-light" />
                Sant Nagar, Burari, Delhi-110084
              </li>

              <li className="my-1 flex items-center gap-3">
                <MdEmail className="text-greenish-light" />
                info@skillsyard.com
              </li>

              <li className="my-1 flex items-center gap-3">
                <ImPhone className="text-greenish-light" />
                +91 9625781411
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 sm:py-8 flex flex-col sm:flex-row justify-between">
          <p className="text-center">
            Copyright @ 2023{" "}
            <Link
              href={"https://skillsyard.com/"}
              target="_self"
              className="text-greenish-light"
            >
              SkillsYard.
            </Link>{" "}
            All Rights Reserved.
          </p>

          <p className="hidden sm:block">
            2023 • Powered by{" "}
            <Link
              href={"https://ineptstudio.com/"}
              target="_blank"
              className="text-greenish-light"
            >
              Inept Studio.
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
