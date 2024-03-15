"use client";

import { useState, useEffect, useRef } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ScreenWidth from "../ScreenWidth";
import Image from "next/image";

export default function PartnerSlider({ DarkBg }: any) {
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

  const [slidesPerView, setSlidesPerView] = useState<number>(5);

  useEffect(() => {
    if (screenWidth) {
      if (screenWidth >= 1540) {
        setSlidesPerView(6);
      } else if (screenWidth <= 1540 && screenWidth >= 1200) {
        setSlidesPerView(5);
      } else if (screenWidth <= 1200 && screenWidth >= 992) {
        setSlidesPerView(3);
      } else if (screenWidth <= 992 && screenWidth >= 768) {
        setSlidesPerView(3);
      } else if (screenWidth <= 768 && screenWidth >= 0) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    }
  }, [screenWidth]);

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className={`flex flex-col gap-5 ${DarkBg && "items-center"}`}>
        <h1 className="text-[25px] max-sm:text-[21px] max-sm:w-full">
          პარტნიორი კომპანიები
        </h1>
        <p
          className={`notcapsbold text-gray-600 text-[15px] ${
            DarkBg && "text-center text-white"
          }`}
        >
          ჩვენ ვთანამშრომლობთ მრავალ ქართულ და უცხოურ ბანკთან, ტექ კომპანიასა და
          Software Development სააგენტოსთან, რაც ჩვენს სტუდენტებს ხსენებულ
          ორგანიზაციებში დეველოპერებად უფრო მარტივად და სწრაფად დასაქმების
          საშუალებას აძლევს.
        </p>
      </div>

      <div className="flex w-full justify-center">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={20}
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
              <div
                className={`border-[1px] h-[80px] relative rounded-[10px] flex items-center justify-center ${
                  DarkBg && "bg-white"
                }`}
              >
                <Image
                  src={item.img}
                  alt={""}
                  sizes="500px"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
