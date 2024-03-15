import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CourseCards from "../cards/CourseCards";
import Link from "next/link";

export default function PopularCourses() {
  return (
    <div className="flex flex-col gap-y-[30px] items-center">
      <div className="flex items-center justify-between w-full max-sm:justify-center">
        <h1 className="text-[25px]">პოპულარული კურსები</h1>
        <Link
          href={"/courses"}
          className="flex items-center pr-[10px] pl-[20px] gap-[10px] cursor-pointer border-[2px] py-[5px] rounded-full self-start max-sm:hidden"
        >
          <p className="notcapsbold text-[13px]">იხილეთ კურსები</p>
          <div className="w-[30px] h-[30px] rounded-full bg-black text-white flex items-center justify-center">
            <FaArrowRight />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[20px] gap-y-[40px]">
        <CourseCards />
        <CourseCards />
        <CourseCards />
        <CourseCards />
        <CourseCards />
        <CourseCards />
      </div>
      <Link
          href={"/courses"}
          className="hidden items-center pr-[10px] pl-[20px] gap-[10px] cursor-pointer border-[2px] py-[5px] rounded-full max-sm:flex"
        >
          <p className="notcapsbold text-[13px]">იხილეთ კურსები</p>
          <div className="w-[30px] h-[30px] rounded-full bg-black text-white flex items-center justify-center">
            <FaArrowRight />
          </div>
        </Link>
    </div>
  );
}
