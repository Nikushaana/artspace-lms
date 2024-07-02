import React from "react";
import { LuSend } from "react-icons/lu";

export default function Footer() {
  return (
    <div className="flex justify-center bg-[#010125]">
      <div className="max-w-[1540px] w-full px-[12%] max-xl:px-[8%] max-md:px-[16px] py-[50px] flex justify-between text-white flex-wrap-reverse gap-y-[20px] max-sm:flex-col-reverse">
        <div className="flex flex-col gap-y-[10px]">
          <h1>გვერდები</h1>
          <div className="flex flex-col">
            <p className="cursor-pointer">ჩვენ შესახებ</p>
            <p className="cursor-pointer">კურსები</p>
            <p className="cursor-pointer">ბიზნესისთვის</p>
            <p className="cursor-pointer">კონტაქტი</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h1>გვერდები</h1>
          <div className="flex flex-col">
            <p className="cursor-pointer">ჩვენ შესახებ</p>
            <p className="cursor-pointer">კურსები</p>
            <p className="cursor-pointer">ბიზნესისთვის</p>
            <p className="cursor-pointer">კონტაქტი</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h1>გვერდები</h1>
          <div className="flex flex-col">
            <p className="cursor-pointer">ჩვენ შესახებ</p>
            <p className="cursor-pointer">კურსები</p>
            <p className="cursor-pointer">ბიზნესისთვის</p>
            <p className="cursor-pointer">კონტაქტი</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <h1>გამოიწერეთ სიახლეები</h1>
          <div className="flex items-center justify-between bg-white rounded-full text-black pr-[10px] pl-[15px] py-[5px] gap-[10px]">
            <input
              type="text"
              className="bg-transparent w-[calc(100%-50px)] outline-none"
            />
            <div className="w-[40px] h-[40px] rounded-full cursor-pointer flex items-center justify-center bg-gray-200">
              <LuSend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
