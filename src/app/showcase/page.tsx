"use client"
import React, { useState } from "react"; 105105


const btn = "xl:m-4 xl:text-[14px] lg:p-3 bg-greenish-light rounded-[12px] border-none lg:text-[12px] lg:m-2 md:text-[10px] md:m-1 md:p-2 text-[8px] m-1 p-3 shadow-md";

const styleBtn = "boxShadow: '4px 4px 4px rgb(114,255,116)'";



export default function Showcase() {

  const [view, setView] = useState(0)


  return (
    <div className="mt-28 ">
      <div className="flex justify-center bg-white p-6 text-white">
        <div className="flex flex-col">
          <h1 className="text-greenish-light text-[36px] font-bold my-6  flex justify-center">
            SOME WORKS OF OUR STUDENTS
          </h1>
          <ul className="flex  gap-6 my-4 	 text-center text-gray-500 bg-gray-100 rounded-lg py-1 px-2">
            <li>      <a href="#page1" onClick={()=>setView(0)}  className={`flex justify-center py-4 px-2 font-bold  ${view==0 && "bg-green-500 rounded-lg shadow text-white"}`}>2D Animation</a>    </li>
            <li>      <a href="#page2" onClick={()=>setView(1)} className={`flex justify-center py-4 px-2 font-bold ${view==1 && "bg-green-500 rounded-lg shadow text-white"}`}>3D Animation</a>    </li>
            <li>      <a href="#page3" onClick={()=>setView(2)} className={`flex justify-center py-4 px-2 font-bold ${view==2 && "bg-green-500 rounded-lg shadow text-white"}`}>Game Development</a>    </li>
            <li>      <a href="#page4" onClick={()=>setView(3)} className={`flex justify-center py-4 px-2 font-bold ${view==3 && "bg-green-500 rounded-lg shadow text-white"}`}>App Development</a>    </li>
            <li>   <a href="#page5" onClick={()=>setView(4)} className={`flex justify-center py-4 px-2 font-bold ${view==4 && "bg-green-500 rounded-lg shadow text-white"}`}>Web Development</a> </li>
            <li><a href="#page5" onClick={()=>setView(5)} className={`flex justify-center py-4 px-2 font-bold ${view==5 && "bg-green-500 rounded-lg shadow text-white"}`}>Digital Marketing</a>    </li>
            <li><a href="#page5" onClick={()=>setView(6)} className={`flex justify-center py-4 px-2 font-bold ${view==6 && "bg-green-500 rounded-lg shadow text-white"}`}>Vfx & Animation</a>    </li>
          </ul>

          {/* <div className="sm:flex sm:align-middle  ">
            <button
              className={`${btn} effect && "animate-wiggle"`}
              // //style={{ ...eval(`({${styleBtn}})`) }}
              onClick={() => setView({"2d":true, "3d":false, "game":false, "app":false, "web":false, "digitalMarketing":false, "vfx":false})
            }
            >
              2D Graphics
              </button>
            <button
              className={`${btn} `}
              //style={{ ...eval(`({${styleBtn}})`) }}
              onClick={() => setView({"2d":false, "3d":true, "game":false, "app":false, "web":false, "digitalMarketing":false, "vfx":false})}
            >
              3D Graphics
            </button>
            <button
            className={`${btn}`}
              //style={{ ...eval(`({${styleBtn}})`) }}
              onClick={() => setView({"2d":false, "3d":false, "game":false, "app":false, "web":true, "digitalMarketing":false, "vfx":false})}
            >
              Web Developement
            </button>
            <button
              className={`${btn}`}
              //style={{ ...eval(`({${styleBtn}})`) }}
              onClick={() => setView({"2d":false, "3d":false, "game":false, "app":true, "web":false, "digitalMarketing":false, "vfx":false})}
            >
              App Developement
            </button>
            <button
              className={`${btn}`}
              //style={{ ...eval(`({${styleBtn}})`) }}
              onClick={() => setView({"2d":false, "3d":false, "game":false, "app":false, "web":false, "digitalMarketing":true, "vfx":false})}
            >
              Game Developement
            </button>
            <button
              className={`${btn}`}
              //style={{ ...eval(`({${styleBtn}})`) }}
              onClick={() => setView({"2d":false, "3d":false, "game":true, "app":false, "web":false, "digitalMarketing":false, "vfx":false})}
            >
              Animation & VFX
            </button>
            <button
              className={`${btn}`}
              //style={{ ...eval(`({${styleBtn}})`) }}
              onClick={() => setView({"2d":false, "3d":false, "game":false, "app":false, "web":false, "digitalMarketing":false, "vfx":true})}
            >
              Digital marketing
            </button>
            
          </div> */}
        </div>
      </div>




      {/* 2d section */}
      {view==0 && <section
        className=" grid bg-white md:pr-20 md:pl-20 md:pt-5 md:gap-4 pr-5 pl-5 gap-2 "
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(12, 4fr)",
        }}
      >
        <div className="col-span-1 row-span-2 ease-in duration-300 hover:scale-105 " >
          <img src="/assets/showcaseimages/2D/1.png" alt="" className="rounded-[12px] h-full object-cover transition-transform duration-300  shadow-md" //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-4 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/2.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-sm"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-3 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/3.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-sm"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-3 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/11.png"
            alt=""
            className="rounded-[12px] object-center h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-4 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/5.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-4 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/11.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-3 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/7.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-3 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/9.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-4 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/8.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-4 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/6.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-3 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/10.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-4 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/13.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-4 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/12.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-3 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/2D/1.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

      </section>}





      {/* 3d section */}
      {view==1 && <section
        className=" grid bg-white md:pr-20 md:pl-20 md:pt-5 md:gap-4 pr-5 pl-5 gap-2"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(5, 4fr)",
        }}
      >
        <div className="col-span-1 row-span-2 ease-in duration-300 hover:scale-105">
          <img src="/assets/showcaseimages/3D/1.png" alt="" className="rounded-[12px] h-full object-cover shadow-md " //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/2.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-3 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/3.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/4.png"
            alt=""
            className="rounded-[12px] object-center h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/5.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/6.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/7.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/8.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/9.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/10.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/3D/11.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

      </section>}




      {/* game section */}
      {view==2 && <section
        className=" grid bg-white md:pr-20 md:pl-20 md:pt-5 md:gap-4 pr-5 pl-5 gap-2 "
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(3, 4fr)",
        }}
      >
        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img src="/assets/showcaseimages/GameDevelopment/1.png" alt="" className="rounded-[12px] h-full object-cover shadow-md" //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/2.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/3.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/4.png"
            alt=""
            className="rounded-[12px] object-center h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/5.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/6.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/7.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/8.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/9.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/10.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/11.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/GameDevelopment/12.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

      </section>}




      {/* app section */}
      {view==3 && <section
        className=" grid bg-white md:pr-20 md:pl-20 md:pt-5 md:gap-4 pr-5 pl-5 gap-2 "
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 4fr)",
        }}
      >
        <div className="col-span-2 row-span-1 ease-in duration-300 hover:scale-105">
          <img src="/assets/showcaseimages/AppDevelopment/1.png" alt="" className="rounded-[12px] h-full object-cover shadow-md" //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/AppDevelopment/2.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/AppDevelopment/3.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>


      </section>}




      {/* web section */}
      {view==4 && <section
        className=" grid bg-white md:pr-20 md:pl-20 md:pt-5 md:gap-4 pr-5 pl-5 gap-2"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 4fr)",
        }}
      >
        <div className="col-span-2 row-span-1 ease-in duration-300 hover:scale-105">
          <img src="/assets/showcaseimages/WebDevelopment/1.png" alt="" className="rounded-[12px] h-full object-cover shadow-md" //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/WebDevelopment/2.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/WebDevelopment/3.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/WebDevelopment/4.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>


      </section>}




      {/* Digital marketing section */}
      {view==5 && <section
        className=" grid bg-white md:pr-20 md:pl-20 md:pt-5 md:gap-4 pr-5 pl-5 gap-2 "
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 4fr)",
        }}
      >
        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img src="/assets/showcaseimages/Digital Marketing/1.png" alt="" className="rounded-[12px] h-full object-cover shadow-md" //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/Digital Marketing/4.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/Digital Marketing/2.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/Digital Marketing/3.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>


      </section>}




      {/*Animation & VFX section */}
      {view==6 && <section
        className=" grid bg-white md:pr-20 md:pl-20 md:pt-5 md:gap-4 pr-5 pl-5 gap-2 "
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(3, 4fr)",
        }}
      >
        <div className="col-span-2 row-span-1 ease-in duration-300 hover:scale-105">
          <img src="/assets/showcaseimages/VFX/1.png" alt="" className="rounded-[12px] h-full object-cover shadow-md" //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/VFX/3.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/VFX/2.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-1 row-span-1 ease-in duration-300 hover:scale-105">
          <img src="/assets/showcaseimages/Animation/1.png" alt="" className="rounded-[12px] h-full object-cover shadow-md" //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-2 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/Animation/2.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

        <div className="col-span-2 row-span-1 ease-in duration-300 hover:scale-105">
          <img
            src="/assets/showcaseimages/Animation/3.png"
            alt=""
            className="rounded-[12px] object-cover h-full shadow-md"
          //style={{ ...eval(`({${styleBtn}})`) }}
          />
        </div>

      </section>}





    </div>
  );
}


