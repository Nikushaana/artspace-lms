"use client";

import React, { useState } from "react";
import FaqCard from "../cards/FaqCard";

export default function Faq() {
  const [faqdata, setfaqdata] = useState<any>([
    {
      id: 1,
      question: "why?",
      answer:
        "because because because because because  ",
    },
    {
      id: 2,
      question: "why?",
      answer:
        "because because because because because because because because because because because because because because because because bec",
    },
    {
      id: 3,
      question: "why?",
      answer:
        "because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because ",
    },
    {
      id: 4,
      question: "why?",
      answer:
        "because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because ",
    },
    {
      id: 5,
      question: "why?",
      answer:
        "because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because ",
    },
    {
      id: 6,
      question: "why?",
      answer:
        "because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because ",
    },
    {
      id: 7,
      question: "why?",
      answer:
        "because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because ",
    },
    {
      id: 8,
      question: "why?",
      answer:
        "because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because ",
    },
    {
      id: 9,
      question: "why?",
      answer:
        "because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because ",
    },
    {
      id: 10,
      question: "why?",
      answer:
        "because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because because ",
    },
  ]);
  return (
    <div className="flex flex-col items-center gap-y-[30px]">
      <h1 className="text-[25px]">ხშირად დასმული კითხვები</h1>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[40px] gap-y-[15px] w-full">
        {faqdata.map((item: any) => (
          <FaqCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}
