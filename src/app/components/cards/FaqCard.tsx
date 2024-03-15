"use client";

import React, { useRef, useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

export default function FaqCard({ item }: any) {
  const [droped, setdroped] = useState(false);
  const AnswerRef: any = useRef(null);
  const [eachHeight, setEachHeight] = useState<any>(0);

  return (
    <div>
      <div
        onClick={() => {
          setdroped((pre) => !pre);
          setEachHeight(AnswerRef.current?.clientHeight);
        }}
        className="flex items-center justify-between bg-gray-200 px-[20px] h-[60px] cursor-pointer rounded-[25px]"
      >
        <h1 className="select-none">{item.question}</h1>
        <TiArrowSortedUp
          className={`text-[25px] duration-200 ${
            droped ? "rotate-[180deg]" : "rotate-0"
          }`}
        />
      </div>
      <p
        style={{
          height: `${eachHeight && droped ? `${eachHeight + 20}px` : "0px"}`,
          overflow: `${eachHeight && droped ? "visible" : "hidden"}`,
          paddingTop: `${eachHeight && droped ? "10px" : "0px"}`,
          paddingBottom: `${eachHeight && droped ? "10px" : "0px"}`,
          marginTop: `${eachHeight && droped ? "10px" : "0px"}`,
        }}
        className={`bg-gray-100 px-[20px] duration-200 rounded-[25px] py-[10px]`}
      >
        <p ref={AnswerRef}>{item.answer}</p>
      </p>
    </div>
  );
}
