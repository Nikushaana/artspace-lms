"use client";

import React, { useState } from "react";
import CourseCards from "../components/cards/CourseCards";

export default function Page() {
  const [activeCourse, setActiveCourse] = useState("1");
  return (
    <div className="pb-[150px]">
      <div className="px-[12%] max-xl:px-[8%] max-md:px-[16px] max-sm:px-0 pb-[100px] pt-[130px] flex max-lg:flex-col gap-[30px] justify-between bg-[#010125] ">
        <div className="flex flex-col gap-y-[20px] text-white w-[45%] max-lg:w-full max-sm:px-[16px]">
          <h1 className="text-[25px]">კურსები შენი განვითარებისთვის</h1>
          <p className="text-[15px] text-gray-100">
            ჩვენ ვთანამშრომლობთ მრავალ ქართულ და უცხოურ ბანკთან, ტექ კომპანიასა
            და Software Development სააგენტოსთან
          </p>
        </div>
        <div className="max-sm:w-full max-sm:overflow-x-scroll showScrollHor max-sm:px-[16px]">
          <div className="flex items-center gap-[10px] h-[40px]">
            <p
              onClick={() => {
                setActiveCourse("1");
              }}
              className={`rounded-full duration-100 pl-[25px] pr-[15px] h-full flex items-center cursor-pointer border-[1px] ${
                activeCourse === "1" ? "text-white border-white" : "bg-white"
              }`}
            >
              პროგრამირება
            </p>
            <p
              onClick={() => {
                setActiveCourse("2");
              }}
              className={`rounded-full duration-100 pl-[25px] pr-[15px] h-full flex items-center cursor-pointer border-[1px] ${
                activeCourse === "2" ? "text-white border-white" : "bg-white"
              }`}
            >
              მარკეტინგი
            </p>
            <p
              onClick={() => {
                setActiveCourse("3");
              }}
              className={`rounded-full duration-100 pl-[25px] pr-[15px] h-full flex items-center cursor-pointer border-[1px] shrink-0 ${
                activeCourse === "3" ? "text-white border-white" : "bg-white"
              }`}
            >
              გრაფიკული დიზაინი
            </p>
          </div>
        </div>
      </div>

      <div className="pt-[50px] px-[12%] max-xl:px-[8%] max-md:px-[16px] flex flex-col gap-y-[40px]">
        <div className="flex flex-col gap-y-[30px]">
          <h1 className="text-[25px]">პროგრამირება</h1>

          <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[20px] gap-y-[40px]">
            <CourseCards />
            <CourseCards />
            <CourseCards />
            <CourseCards />
            <CourseCards />
            <CourseCards />
          </div>
        </div>
        <div className="flex flex-col gap-y-[30px]">
          <h1 className="text-[25px]">მარკეტინგი</h1>

          <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[20px] gap-y-[40px]">
            <CourseCards />
            <CourseCards />
            <CourseCards />
          </div>
        </div>
        <div className="flex flex-col gap-y-[30px]">
          <h1 className="text-[25px]">გრაფიკული დიზაინი</h1>

          <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[20px] gap-y-[40px]">
            <CourseCards />
            <CourseCards />
            <CourseCards />
          </div>
        </div>
      </div>
    </div>
  );
}
