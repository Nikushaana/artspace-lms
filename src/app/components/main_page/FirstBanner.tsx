"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import SpinnerSun from "./spinnerSun";

export default function FirstBanner() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1540px] w-full flex items-center max-lg:flex-col max-lg:gap-y-[20px] px-[12%] max-xl:px-[8%] max-md:px-[16px]">
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
        <div className="w-[50%] h-full max-lg:w-full z-[1] flex items-center justify-end max-lg:justify-center pr-[40px] max-lg:pr-0">
          <SpinnerSun />
        </div>
      </div>
    </div>
  );
}
