"use client";

import Image from "next/image";
import React, { useState } from "react";
import ScreenWidth from "../ScreenWidth";

export default function SpinnerSun() {
  const [coursesData, setCoursesData] = useState([
    {
      id: 1,
      image: "/images/reactjs.png",
      width: 80,
    },
    {
      id: 2,
      image: "/images/course1.png",
      width: 60,
    },
    {
      id: 3,
      image: "/images/course2.png",
      width: 90,
    },
    {
      id: 4,
      image: "/images/course3.png",
      width: 60,
    },
    {
      id: 5,
      image: "/images/course4.png",
      width: 50,
    },
  ]);
  const [innercoursesData, setInnerCoursesData] = useState([
    {
      id: 1,
      image: "/images/course5.png",
      width: 50,
    },
    {
      id: 2,
      image: "/images/course6.png",
      width: 50,
    },
  ]);

  const screenWidth = ScreenWidth();

  return (
    // <div className="w-[230px] h-[230px] max-sm:w-[180px] max-sm:h-[180px] rounded-full relative">
    //   <div className="absolute z-[1] w-full h-full flex items-center justify-center rounded-full">
    //     <div className="p-[20px] relative w-[80%] h-[80%] rounded-full overflow-hidden">
    //       <Image
    //         src="/images/transpDots.png"
    //         alt={""}
    //         sizes="500px"
    //         fill
    //         style={{
    //           objectFit: "cover",
    //         }}
    //       />
    //     </div>
    //   </div>
    //   <div className="animate-spin-slow w-full h-full absolute">
    //     {coursesData.map((item, index) => (
    //       <div
    //         key={item.id}
    //         className="w-[180px] max-sm:w-[140px] h-[3px]
    //             bg-gradient-to-r from-transparent from-60% to-black to-90%
    //             absolute top-[50%] translate-y-[-50%] left-[50%] origin-top-left"
    //         style={{
    //           transform: `rotate(${index * (360 / coursesData.length)}deg)`,
    //         }}
    //       >
    //         <div className="relative">
    //           <div className="bg-white border-[1px] w-[60px] h-[60px] max-sm:w-[40px] max-sm:h-[40px] rounded-full absolute top-[50%] translate-y-[-50%] right-[-60px] max-sm:right-[-40px]">
    //             <Image
    //               src="/images/reactjs.png"
    //               alt={""}
    //               sizes="500px"
    //               fill
    //               style={{
    //                 objectFit: "contain",
    //               }}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="w-[80%] pt-[80%] relative rounded-full outline-dashed outline-2 outline-offset-[3px] outline-[gray]">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center rounded-full w-[60%] h-[60%] max-tiny:w-[70%] max-tiny:h-[70%] bg-[#080d45]">
        <h1 className="text-white text-[23px] max-tiny:text-[16px]">შენ ისწავლი</h1>
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        {innercoursesData.map((item, index) => (
          <div
            key={item.id}
            className="w-[30%] absolute top-[50%] translate-y-[-50%] left-[50%] origin-top-left "
            style={{
              transform: `rotate(${
                index * (360 / innercoursesData.length) + 25
              }deg)`,
            }}
          >
            <div
              style={{
                width: `${screenWidth < 470 ? (item.width*80/100) : item.width}px`,
                height: `${screenWidth < 470 ? (item.width*80/100) : item.width}px`,
                right: `calc(-${item.width / 2}px)`,
              }}
              className={`p-[3px] rounded-full absolute top-[50%] translate-y-[-50%] right-0 bg-white`}
            >
              <div
                style={{
                  transform: `rotate(-${
                    index * (360 / innercoursesData.length) + 25
                  }deg)`,
                }}
                className="relative  w-full h-full "
              >
                <Image
                  src={`${item.image}`}
                  alt={""}
                  sizes="500px"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        {coursesData.map((item, index) => (
          <div
            key={item.id}
            className="w-[50%] absolute top-[50%] translate-y-[-50%] left-[50%] origin-top-left"
            style={{
              transform: `rotate(${index * (360 / coursesData.length)}deg)`,
            }}
          >
            <div
              style={{
                width: `${screenWidth < 470 ? (item.width*80/100) : item.width}px`,
                height: `${screenWidth < 470 ? (item.width*80/100) : item.width}px`,
                right: `calc(-${item.width / 2}px)`,
              }}
              className={`p-[10px] bg-white rounded-full absolute top-[50%] translate-y-[-50%] right-0`}
            >
              <div
                style={{
                  transform: `rotate(-${
                    index * (360 / coursesData.length)
                  }deg)`,
                }}
                className="relative  w-full h-full"
              >
                <Image
                  src={`${item.image}`}
                  alt={""}
                  sizes="500px"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
