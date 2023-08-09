"use client"
import React, { useState } from "react";
import Image from "next/image";

const Accordion = () => {
  return (
    <section className="relative  overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]" 
    // style={{backgroundImage:"url(/assets/images/pattern2.svg)",backgroundRepeat:'no-repeat',backgroundSize:"cover"}} 
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:mb-14">
            <div className="mx-auto mb-[20px] max-w-[520px] text-center">
              {/* <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p> */}
              <img src="/assets/images/faq.svg" className="w-56 m-auto" />
            </div>
              <h2 className="mb-4 px-10  mt-4 text-blacky-default  text-lg">
                Any Questions? Look Here.There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form Look Here.There are many variations of passages of Lorem Ipsum available
                
              </h2>
          </div>
        </div>

        <div className=" flex  flex-col-reverse md:flex-row ">
          <div className="w-full px-4 lg:w-2/3">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-[40%] ">
          <img src="/assets/images/mark.svg" className="w-60 ml-20 " />

          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 right-0 z-[-1]">
        <Image src="/assets/images/pattern.svg" width={1440} height={100} alt=""/>
      </div> */}
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }:any) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event?.preventDefault();
    setActive(!active);
  };
  return (
    <div className={`single-faq mb-8 w-full rounded-lg border ${active ? "shadow-spread" : "shadow-md"} border-[#F3F4FE] bg-white 8 px-6 py-4 `}>
      <button
        className={`faq-btn flex items-center w-full text-left`}
        onClick={() => handleToggle()}
      >

        <div className="w-full">
          <h1 className="text-xl font-semibold text-blacky-default">{header}</h1>
        </div>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
          <svg
            className={`duration-200 ease-in-out fill-primary stroke-primary ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>
      </button>

      <div
        className={`pr-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-blacky-default">{text}</p>
      </div>
    </div>
  );
};
