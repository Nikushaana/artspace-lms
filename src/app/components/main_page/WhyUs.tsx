import React from "react";
import VideoPlayer from "../videoplayer/VideoPlayer";

export default function WhyUs() {
  return (
    <div className="flex max-lg:flex-col-reverse gap-[40px]">
      <div className="flex flex-col gap-y-[25px] w-1/2  max-lg:w-full">
        <h1 className="text-[25px]">რატომ უნდა აირჩიო Artspace academy?</h1>
        <p className="notcapsbold text-[14px] text-gray-600">
          კომპანია „artspace“ დაარსდა 2018 წელს და ამ დროიდან მოყოლებული იგი
          ქმნის ამინდს ციფრულ სამყაროში. კომპანია მომხმარებლებს სთავაზობს,
          მაღალი ხარისხის მომსახურებას ციფრულ პროდუქტებზე. ციფრული პროდუქტების
          წარმატებას განსაზღვრავს, თანამშრომლთა პროფესიონალიზმი, მათი
          მრავალწლიანი გამოცდილება,კრეატიული იდეები და უახლესი მეთოდები,
          რომლებსაც ისინი დამკვეთის პროექტში იყენებენ. artspace-ში ერთმანეთს
          ერწყმის კრეატიულობა და ტექნოლოგიები. ამიტომაა რომ გლობალურ ბაზარზე,
          ჩვენ ბიზნესს ვაწვდით წამყვანი და უახლესი ტექნოლოგიებით დამზადებულ
          ციფრულ პროდუქტებს
        </p>
        <div className="flex items-center pr-[10px] gap-[10px] border-[2px] rounded-full self-start cursor-pointer">
          <div className="w-[45px] h-[45px] rounded-full bg-black text-white flex items-center justify-center">
            6+
          </div>
          <p className="notcapsbold text-[13px]">წლიანი გამოცდილება</p>
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full">
        <VideoPlayer/>
      </div>
    </div>
  );
}
