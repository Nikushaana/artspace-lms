"use client";

import { useState, useEffect, useRef } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ScreenWidth from "../ScreenWidth";
import React from "react";
import GraduatedCommentsCard from "../cards/GraduatedCommentsCard";

export default function GraduatedComments() {
  let swiperRef = useRef<SwiperClass>(null!);
  const screenWidth = ScreenWidth();

  const [data, setData] = useState([
    {
      id: 1,
      img: "/images/sliderimage.png",
    },
    {
      id: 2,
      img: "/images/sliderimage.png",
    },
    {
      id: 3,
      img: "/images/sliderimage.png",
    },
    {
      id: 4,
      img: "/images/sliderimage.png",
    },
    {
      id: 5,
      img: "/images/sliderimage.png",
    },
    {
      id: 6,
      img: "/images/sliderimage.png",
    },
    {
      id: 7,
      img: "/images/sliderimage.png",
    },
    {
      id: 8,
      img: "/images/sliderimage.png",
    },
  ]);

  const [slidesPerView, setSlidesPerView] = useState<number>(2);

  useEffect(() => {
    if (screenWidth) {
      if (screenWidth >= 1540) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    }
  }, [screenWidth]);
  
  return (
    <div className="flex flex-col gap-y-[30px]">
      <h1 className="text-[25px]">რას ამბობენ ჩვენი კურსდამთავრებულები</h1>
      <div className="flex w-full justify-center">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={50}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          {data?.map((item: any) => (
            <SwiperSlide key={item.id}>
              <GraduatedCommentsCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
