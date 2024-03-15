import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CourseCards() {
  return (
    <div className="flex flex-col rounded-[15px] shadow border">
      <div className="relative h-[240px] max-xl:h-[200px] w-full overflow-hidden rounded-t-[15px]">
        <Image
          src="/images/silaga.png"
          alt={""}
          sizes="500px"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex flex-col px-[25px] py-[20px] gap-y-[10px]">
        <p className="notcapsbold text-[15px]">
          Frontend Web Development React Course
        </p>
        <p className="notcapsbold text-[15px]">64 ლექცია 128 საათი</p>
        <p className="text-[13px]">
          კურსის 7 თვიანი მოდული შედგება 5 თვიანი სწავლა-ტრენინგისგან, რომელიც
          დატვირთული იქნება სამუშაო დავალებებით და 2 თვიანი ციფრული პროდუქტის
          აწყობის მოდულისგან, რომელიც გულისხმობს ცირფული პროდუქტის - amazon
          e-commerce-ის ანალოგის react. ტექნოლოგიით აწყობას სადაც შესწავლილ{" "}
        </p>
        <Link href="/courses/1">
          <div className="flex items-center justify-between">
            <p className="bg-[#010125] text-[10px] text-white px-[20px] h-[30px] flex items-center rounded-full cursor-pointer">
              სრულად ნახვა
            </p>
            <div className="flex items-center pr-[10px] pl-[15px] gap-[10px] py-[5px] rounded-full self-start cursor-pointer">
              <p className="text-[10px] notcapsbold">სილაბუსის ნახვა</p>
              <div className="w-[25px] h-[25px] text-[14px] rounded-full bg-black text-white flex items-center justify-center">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
