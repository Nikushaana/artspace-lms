"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { BsXLg } from "react-icons/bs";
import { AxiosForSharingStatesAxiosContext } from "../../../useContext/sharedStates";
import { GoPerson } from "react-icons/go";

export default function SideMenu() {
  const { setOpenMenuPopUp, openMenuPopUp, outOpenMenuPopUpRef } = useContext(
    AxiosForSharingStatesAxiosContext
  );
  return (
    <div
      ref={outOpenMenuPopUpRef}
      className={`fixed z-10 top-0 right-0 h-[100vh] w-[300px] bg-white border-l-[1px] shadow-lg shadow-[#010125] px-[16px] py-[20px] flex flex-col gap-y-[30px] duration-200 ${
        openMenuPopUp ? "mr-0" : "mr-[-350px]"
      }`}
    >
      <div
        onClick={() => {
          setOpenMenuPopUp(false);
        }}
        className="flex items-center w-[40px] h-[40px] justify-center text-[20px] cursor-pointer"
      >
        <BsXLg />
      </div>
      <div className="hidden items-center gap-[10px] cursor-pointer rounded-full bg-[black] text-white px-[15px] h-[40px] max-md:flex">
        <GoPerson className="text-[20px]" />
        <h1 className="text-[15px]">სტუდენტის პორტალი</h1>
      </div>
      <ul className="flex flex-col items-center gap-6">
        <Link
          href={"/courses"}
          onClick={() => {
            setOpenMenuPopUp(false);
          }}
        >
          <li className="cursor-pointer">კურსები</li>
        </Link>
        <Link
          href={"/about-us"}
          onClick={() => {
            setOpenMenuPopUp(false);
          }}
        >
          <li className="cursor-pointer">ჩვენ შესახებ</li>
        </Link>
        <Link
          href={"/business"}
          onClick={() => {
            setOpenMenuPopUp(false);
          }}
        >
          <li className="cursor-pointer">ბიზნესისთვის</li>
        </Link>
        <Link
          href={"/contact"}
          onClick={() => {
            setOpenMenuPopUp(false);
          }}
        >
          <li className="cursor-pointer">კონტაქტი</li>
        </Link>
      </ul>
    </div>
  );
}
