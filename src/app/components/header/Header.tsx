"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { GoPerson } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { AxiosForSharingStatesAxiosContext } from "../../../../useContext/sharedStates";

export default function Header() {
  const { setOpenMenuPopUp } = useContext(AxiosForSharingStatesAxiosContext);
  return (
    <div className="flex justify-center absolute top-0 left-0 z-[1] w-full">
      <div className="max-w-[1540px] w-full flex items-center justify-between px-[12%] max-xl:px-[8%] max-md:px-[16px] py-[20px]">
        <Link href={"/"} className="relative w-[230px] h-[40px]">
          <Image
            src="/images/artspacewhite.png"
            alt={""}
            sizes="500px"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Link>
        <ul className="flex items-center gap-4 max-xl:hidden text-white">
          <Link href={"/courses"}>
            <h1 className="cursor-pointer">კურსები</h1>
          </Link>
          <Link href={"/about-us"}>
            <h1 className="cursor-pointer">ჩვენ შესახებ</h1>
          </Link>
          <Link href={"/business"}>
            <h1 className="cursor-pointer">ბიზნესისთვის</h1>
          </Link>
          <h1 className="cursor-pointer">კონტაქტი</h1>
        </ul>
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[10px] cursor-pointer rounded-full border-[1px] border-white text-white px-[15px] h-[40px] max-md:hidden">
            <GoPerson className="text-[20px]" />
            <h1 className="text-[15px]">სტუდენტის პორტალი</h1>
          </div>
          <div
            onClick={() => {
              setOpenMenuPopUp(true);
            }}
            className="h-[40px] w-[40px] text-white hidden max-xl:flex items-center justify-center cursor-pointer text-[25px]"
          >
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
