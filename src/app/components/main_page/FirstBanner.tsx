"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function FirstBanner() {
  const [coursesData, setCoursesData] = useState([
    {
      id: 1,
      image: "",
      deg: 30,
    },
    {
      id: 2,
      image: "",
      deg: 60,
    },
    {
      id: 3,
      image: "",
      deg: 90,
    },
    {
      id: 4,
      image: "",
      deg: 120,
    },
    {
      id: 5,
      image: "",
      deg: 150,
    },
    {
      id: 6,
      image: "",
      deg: 180,
    },
    {
      id: 7,
      image: "",
      deg: 210,
    },
    {
      id: 8,
      image: "",
      deg: 240,
    },
    {
      id: 9,
      image: "",
      deg: 270,
    },
    {
      id: 10,
      image: "",
      deg: 300,
    },
    {
      id: 11,
      image: "",
      deg: 330,
    },
    {
      id: 12,
      image: "",
      deg: 360,
    },
  ]);

  return (
    <div className="flex items-center max-lg:flex-col max-lg:gap-y-[20px] ">
      <div className="flex flex-col gap-y-[30px] w-[50%] max-lg:w-full z-[1]">
        <h1 className="text-[26px] text-white">
          არასდროს შეწყვიტო{" "}
          <span className="border-[1px] border-white px-[20px] py-[5px] rounded-b-[12px] rounded-tr-[25px]">
            სწავლა
          </span>
        </h1>
        <p className="notcapsbold text-white text-[17px]">
          აირჩიე არტსფეის აკადემია პროფესიული განვითარებისთვის
        </p>
        <Link
          href={"/courses"}
          className="flex items-center bg-white pr-[10px] pl-[20px] gap-[10px] py-[5px] rounded-full self-start cursor-pointer"
        >
          <p className="notcapsbold text-[13px]">იხილეთ კურსები</p>
          <div className="w-[30px] h-[30px] rounded-full bg-black text-white flex items-center justify-center">
            <FaArrowRight />
          </div>
        </Link>
        <div className="relative w-[80px] h-[80px] self-center mr-[-150px] max-lg:hidden">
          <Image
            src="/images/dotsrect.png"
            alt={""}
            sizes="500px"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="w-[50%] h-[500px] max-sm:h-[400px] max-lg:w-full flex items-center justify-end pr-[140px] max-lg:pr-0 max-lg:justify-center overflow-hidden z-[1]">
        <div className="w-[230px] h-[230px] max-sm:w-[180px] max-sm:h-[180px] rounded-full relative">
          <div className="absolute z-[1] w-full h-full flex items-center justify-center rounded-full">
            <div className="p-[20px] relative w-[80%] h-[80%] rounded-full overflow-hidden">
              <Image
                src="/images/transpDots.png"
                alt={""}
                sizes="500px"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="animate-spin-slow w-full h-full absolute">
            {coursesData.map((item, index) => (
              <div
                key={item.id}
                className="w-[180px] max-sm:w-[140px] h-[3px] 
                bg-gradient-to-r from-transparent from-60% to-black to-90%
                absolute top-[50%] translate-y-[-50%] left-[50%] origin-top-left"
                style={{
                  transform: `rotate(${index * (360 / coursesData.length)}deg)`,
                }}
              >
                <div className="relative">
                  <div className="bg-white border-[1px] w-[60px] h-[60px] max-sm:w-[40px] max-sm:h-[40px] rounded-full absolute top-[50%] translate-y-[-50%] right-[-60px] max-sm:right-[-40px]">
                    <Image
                      src="/images/reactjs.png"
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
      </div>
    </div>
  );
}
