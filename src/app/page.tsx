import React from "react";
import FirstBanner from "./components/main_page/FirstBanner";
import PopularCourses from "./components/main_page/PopularCourses";
import WhyUs from "./components/main_page/WhyUs";
import GraduatedComments from "./components/main_page/GraduatedComments";
import Faq from "./components/main_page/Faq";
import PartnerSlider from "./components/main_page/PartnerSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col pb-[150px]">
      <div className="pt-[130px] pb-[50px] relative">
        <div className="absolute z-0 w-full h-full top-0 left-0">
          <Image
            src="/images/bgphoto.png"
            alt={""}
            sizes="500px"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <FirstBanner />
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[1540px] pt-[50px] flex flex-col gap-y-[100px] max-sm:gap-y-[50px] px-[12%] max-xl:px-[8%] max-md:px-[16px]">
          <PopularCourses />
          <WhyUs />
          <GraduatedComments />
          <Faq />
          <PartnerSlider />
        </div>
      </div>
    </div>
  );
}
