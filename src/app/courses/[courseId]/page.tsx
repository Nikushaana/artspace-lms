"use client";

import React, { useState } from "react";
import { IoPricetagOutline } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { PiPhone } from "react-icons/pi";
import { CiPlay1 } from "react-icons/ci";

export default function Product({ params }: { params: { courseId: string } }) {
  const [Active, setActive] = useState(1);
  return (
    <div className="flex flex-col gap-y-[100px] max-lg:gap-y-0 pb-[150px]">
      <div className="px-[12%] max-xl:px-[8%] max-lg:px-0 bg-[#010125] max-sm:pt-[30px] w-full max-lg:h-auto flex max-lg:flex-col gap-[40px] max-lg:gap-0">
        <div className="w-[calc(100%-340px)] max-lg:w-full flex max-lg:items-end pt-[140px] max-sm:pt-[40px] max-lg:px-[8%] max-md:px-[16px] max-sm:justify-between">
          <div className="flex flex-col gap-[30px] pt-[60px] max-lg:pb-[30px] w-[calc(100%-240px)] max-sm:w-[calc(80%)]">
            <h1 className="text-white text-[26px]">
              Frontend Web development react course
            </h1>
            <p className="text-white">
              ჩვენ ვთანამშრომლობთ მრავალ ქართულ და უცხოურ ბანკთან, ტექ
              კომპანიასა და Software Development სააგენტოსთან
            </p>
            <div className="flex max-md:flex-col max-md:items-start items-center gap-[20px]">
              <div className="flex items-center bg-white px-[15px] gap-[10px] h-[40px] rounded-full">
                <IoPricetagOutline className="rotate-[-90deg] text-[20px]" />
                <p>მოთხოვნადი</p>
              </div>
              <div className="flex items-center text-white gap-[10px]">
                <p>4.7</p>
                <BsStarFill className="text-[#f3f345]" />
                <BsStarFill className="text-[#f3f345]" />
                <BsStarFill className="text-[#f3f345]" />
                <BsStarFill className="text-[#f3f345]" />
                <BsStarFill className="text-[#f3f345]" />
              </div>
            </div>
            <div className="w-[60px] h-[60px] bg-white rounded-full hidden max-lg:flex items-center justify-center text-[30px] cursor-pointer">
              <CiPlay1 />
            </div>
          </div>
          <div className="w-[240px] h-[400px] max-sm:w-[190px] max-sm:h-[300px] max-sm:absolute max-sm:right-0 relative">
            <Image
              src="/images/silagapersonal.png"
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="w-[340px] max-lg:w-full relative">
          <div className="absolute max-lg:static w-full top-[200px] bg-white border-[2px] border-[#010125] rounded-[15px] max-lg:rounded-[0px] max-lg:border-0">
            <div className="px-[10px] max-lg:px-[8%] max-md:px-[16px] py-[20px] flex flex-col gap-[10px]">
              <div className="w-full h-[200px] bg-[#010125] rounded-[10px] max-lg:hidden"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <h1 className="text-[18px]">$3800</h1>
                  <h1 className="text-gray-500 text-[18px]">$3800</h1>
                </div>
                <div className="flex items-center gap-[5px] rounded-full text-white bg-[#F29450] pl-[5px] pr-[8px] py-[3px]">
                  <MdAccessTime className="text-[20px]" />
                  <p className="text-[13px]">3 დღე</p>
                </div>
              </div>
              <div className="flex flex-col max-lg:flex-row gap-[10px] max-md:flex-col">
                <h1 className="bg-[#010125] h-[50px] rounded-full text-white flex items-center justify-center w-full cursor-pointer">
                  კურსის შექმნა
                </h1>
                <h1 className="border-[2px] border-[#010125] h-[50px] rounded-full flex items-center justify-center w-full cursor-pointer">
                  კურსის დაჯავშნა
                </h1>
              </div>
            </div>
            <div className="bg-[#010125] max-lg:px-[8%] max-md:px-[16px] flex items-center justify-evenly py-[15px]">
              <div className="flex flex-col items-center gap-y-[5px]">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                  64
                </div>
                <p className="text-white">ლექცია</p>
              </div>
              <div className="flex flex-col items-center gap-y-[5px]">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                  64
                </div>
                <p className="text-white">ლექცია</p>
              </div>
              <div className="flex flex-col items-center gap-y-[5px]">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                  64
                </div>
                <p className="text-white">ლექცია</p>
              </div>
            </div>
            <div className="flex justify-center  max-sm:justify-start max-sm:w-full">
              <div className="px-[10px] max-sm:w-full max-md:px-[16px] py-[20px] flex flex-col gap-[5px]">
                <p className="notcapsbold">გამოცდილება:</p>
                <div className="flex items-center">
                  <div className="relative w-[90px] h-[40px]">
                    <Image
                      src="/images/artspace.png"
                      alt={""}
                      sizes="500px"
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <p className="text-[12px] shrink-0 flex">
                    |Senior Frontend Developer
                  </p>
                </div>
                <p className="notcapsbold">გამოცდების რაოდენობა:</p>
                <p className="text-[15px]">4 გამოცდა - 8 თვის განმავლობაში</p>
                <p className="notcapsbold">ქვიზები</p>
                <p className="text-[15px]">6 გამოცდა - 8 თვის განმავლობაში</p>
                <p className="notcapsbold">სერთიფიკატი:</p>
                <p className="text-[15px]">დიახ</p>
                <div className="flex justify-center items-center gap-[10px]">
                  <div className="w-[35px] h-[35px] rounded-full bg-gray-100 flex items-center justify-center">
                    <FaFacebook />
                  </div>
                  <div className="w-[35px] h-[35px] rounded-full bg-gray-100 flex items-center justify-center">
                    <FaFacebook />
                  </div>
                  <div className="w-[35px] h-[35px] rounded-full bg-gray-100 flex items-center justify-center">
                    <FaFacebook />
                  </div>
                  <div className="w-[35px] h-[35px] rounded-full bg-gray-100 flex items-center justify-center">
                    <FaFacebook />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[10px] bg-[#010125] text-white py-[10px] justify-center rounded-b-[10px] max-lg:hidden">
              <PiPhone className="text-[20px]" />
              <h1 className="text-[15px]">დაგვიკავშირდით</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[25px] w-[calc(100%-12%-370px)] max-lg:w-full pl-[12%] max-lg:pl-0">
        <div className="grid grid-cols-4 max-sm:grid-cols-2 py-[10px] gap-[20px] px-[15px] max-lg:px-[8%] max-md:px-[16px] rounded-full bg-gray-100 relative max-lg:rounded-[0]">
          <p
            onClick={() => {
              setActive(1);
            }}
            className={`h-[40px] flex items-center z-[1] justify-center rounded-full cursor-pointer duration-100 ${
              Active === 1 ? "bg-[#010125] text-white " : "bg-white"
            }`}
          >
            დეტალები
          </p>
          <p
            onClick={() => {
              setActive(2);
            }}
            className={`h-[40px] flex items-center z-[1] justify-center rounded-full cursor-pointer duration-100 ${
              Active === 2 ? "bg-[#010125] text-white " : "bg-white"
            }`}
          >
            სილაბუსი
          </p>
          <p
            onClick={() => {
              setActive(3);
            }}
            className={`h-[40px] flex items-center z-[1] justify-center rounded-full cursor-pointer duration-100 ${
              Active === 3 ? "bg-[#010125] text-white " : "bg-white"
            }`}
          >
            შეფასება
          </p>
          <p
            onClick={() => {
              setActive(4);
            }}
            className={`h-[40px] flex items-center z-[1] justify-center rounded-full cursor-pointer duration-100 ${
              Active === 4 ? "bg-[#010125] text-white " : "bg-white"
            }`}
          >
            მიმოხილვა
          </p>
        </div>
        <div className="max-lg:px-[8%] max-md:px-[16px]">
          <h1 className="text-[25px]">კურსის მიმოხილვა</h1>
          <p className="notcapsbold text-[14px] text-gray-600 flex flex-col gap-y-[10px]">
            ბოლო წლებია Frontend Development ერთ-ერთ ყველაზე მზარდ და
            პერსპექტიულ ინდუსტრიად გვევლინება. ამ ყველაფერში მნიშვნელოვანი როლი
            ითამაშა React-ის ბიბლიოთეკამ, რომელიც 2011 წელს შექმნა Facebook-მა
            და 2013 წელს open-source გახადა. დღეს React-ის ტექნოლოგია ყველაზე
            პოპულარულია და აქტიურ გამოყენებაშია ვებ დეველოპმენტში, და რაც
            მთავარია ერთ-ერთი ყველაზე მაღალანაზღაურებადი მიმართულებაა
            დეველოპმენტში.
            <br /> ამ კურსის განმავლობაში შეისწავლით React 18 სტანდარტს და
            მიიღებთ ცოდნას, რისი საშუალებითაც შექმნით სრულფასოვან და
            ფუნქციონალურად გამდიდრებულ Frontend აპლიკაციებს. აპლიკაციები
            შექმნილი იქნება სწორედ React-ით, რასაც დეველოპერულ ენაზე SPA ანუ
            Single Page Application ეწოდება. კურსის განმავლობაში ასევე გაივლით
            React-ის ხელსაწყოებს, და დაეუფლებით TypeScript-ის ტექნოლოგიას.
            შეისწავლით React-თან მჭიდრო კავშირში მყოფ სხვადასხვა ბიბლიოთეკებსა
            და ტექნოლოგიებს როგორიცაა: React Router, Redux, React-Query, GIT.{" "}
            <br />
            კურსის 7 თვიანი მოდული შედგება 5 თვიანი სწავლა-ტრენინგისგან, რომელიც
            დატვირთული იქნება სამუშაო დავალებებით და 2 თვიანი ციფრული პროდუქტის
            აწყობის მოდულისგან, რომელიც გულისხმობს ცირფული პროდუქტის - Amazon
            E-commerce-ის ანალოგის React ტექნოლოგიით აწყობას სადაც შესწავლილ
            თეორიას პრაქტიკაში გააცოცხლებთ.
            <br /> კურსი ორიენტირებულია project based სწავლებაზე, რაც სტუდენტებს
            აძლევს საშუალებას, რომ მიიღონ არა მხოლოდ თეორიული ცოდნა, არამედ
            დაეუფლონ თითოეულ ხელსაწყოს და მასთან მუშაობას რეალურ სამუშაო
            პირობებში, რაც მათ საბოლოოდ დაეხმარება გახდნენ სრულფასოვანი Junion
            React დეველოპერები.
            <br />
            კურსსის ფარგლებში გეყოლება პირადი Teaching Assistant/ლექტორის
            ასისტენტი, რომელთანაც 24/7-ზე, 1-1ზე შეძლებ ნებისმიერ დროს
            დისტანციური შეხვედრის ჩანიშვნას ნებისმიერი გაუგებარი საკითხის ან
            თემის გასარჩევად ან დავალების გაკეთებაში დასახმარებლად.
            <br /> უშუალოდ ამ ყველაფრის სწავლა ჩვენთან მარტივია, რადგან ყველა
            ლექცია ჰიბრიდულად ანუ ორმხრივად ტარდება, ფიზიკურად Axis Towers
            Business Centre-ში და დისტანციურად Zoom-ის მეშვეობით, აგრეთვე ყველა
            ლექციის ვიდეო და ხმოვანი ჩანაწერი კეთდება რაზეც ლექციის დასრულების
            შემდგომ მუდმივი წვდომა გექნება, სასწავლო სლაიდები, მატერიალები და
            დავალებები კი Google Classroom-ში იტვირთება.
            <br /> პროგრამირების სწავლის პარალელურად გაივლი 24 მოდულიან კარიერის
            განვითარების პროგრამას, რაც დასაქმებისთვის და შემდგომი პროფესიული
            განვითარებისთვის საჭირო ინსტრუმენტებს, ტექნიკებს და უნარებს
            შეგასწავლის. ხსენებული 24 მოდული შემუშავებულია MAANG ანუ Meta,
            Amazon, Apple, Netflix, Google დეველოპერებისა და ტექ რეკრუტერების
            მიერ. <br />
            რაც მთავარია, ყველა წარმატებული კურსდამთავრებული გარანტირებულად
            დასაქმდება რადგან გამოგეყოფა პერსონალური კარიერის განვითარების
            მენეჯერი კურსის დამთავრებიდან 3 წლის ვადით, რომელიც დაგეხმარება
            როგორც შენი პრიველი დამსაქმებლის მოძიებაში ასევე მოგვიანებით როგორც
            უკვე Lower Middle ან Upper Middle დეველოპერად გადასაქმებაში უფრო
            უკეთეს და მაღალანაზღაურებად პროექტებზე.
            <br /> ასევე მიიღებ წვდომას Digital Institute-ის პარტნიორ
            დამსაქმებელთა ქსელზე, და გექნება შესაძლებლობა მოითხოვო და მიიღო
            ოფიციალური წერილი და რეკომენდაცი Digital Institute-ისგან
            დამსაქმებელთან წარსადგენად
            <br /> ვისთვის არის კურსი 
            <br /> კურსი განკუთვნილია მათთის ვისაც სურს 0-დან შეაბიჯოს
            პროგრამირების სფეროში და დაეუფლოს ვებ დეველოპმენტს React -ის
            ბიბლიოთეკის-ის მიმართულებით და გახდეს Junior React Web დეველოპერი
            თეორიული და პრაქტიკული გამოცდილებით. კურსი ასევე განკუთვნილია
            დეველოპერებისთვის, ვინც სხვა ტექნოლოგიებზე მუშაობს და აინტერესებს
            React-ი. ნებისმიერი პროგრამული ენა რომელსაც სტუდენტი ფლობს
            დამატებითად ჩაითვლება უპირატესობად და დაეხმარება მას ვისაც უნდა რომ
            დასაქმდეს ჯუნიორად React-ის ტექნოლოგიის ათვისებაში. კურსის გავლის
            შემდეგ  შეგეძლება Single-page ვებ-აპლიკაციების დამოუკიდებლად
            აწყობა;   React- ის ყველა ძირითადი კონცეფციის თეორიული და პრაქტიკული
            ცოდნის გამოყენება;   React- ის ეკოსისტემაში სტადარტად ჩამოყალიბებული
            best practice და არქიტექტურული პატერნის გამოყენება;   TypeScript- ის
            ენაზე დამოუკიდებლად მუშაობა;   შეძლებ გამოიყენო თანამედროვე
            Javascript და ყველა ის ძირითადი კონცეფცია, რომელიც საჭიროა
            თანამედროვე დინამიკური ვებ-აპლიკაციების ასაწყობად. ახალი
            ტექნოლოგიების, framework-ებისა და ბიბლიოთეკების გარჩევა, სწავლა და
            გამოყენება დამოუკიდებლად;   დამოუკიდებლად განავითარო საკუთარი თავი
            სხვა Frontend framework-ზე მუშაობით თუ ბიბლიოთეკის შესწავლით;  
            გექნება სრულფასოვანი წარმოდგენა ვებ გვერდის მუშაობის პრინციპების და
            მისი კომუნიკაციის შესახებ Backend პლატფორმასთან;   გავლილი გექნება
            ტექნიკური ინტერვიუს ტრენინგი და გეცოდინება როგორ გაიარო ნებისმიერი
            დამსაქმებლის ტექნიკური ინტერვიუ წარმატებით.   გექნება აწყობილი შენი
            პირველი სრულფასოვანი ციფრული პროექტი Amazon E-commerce-ის ანალოგის
            სახით React-ის Framework-ით, რაც იქნება შენს მიერ აწყობილი პირველი
            სრულყოფილი ციფრული პროდუქტი რომლის წარმოჩენას შენს საკუთარ Github
            პორტფოლიოშიც შეზლებ დამსაქმებლის დასანახად და ტექნიკურ გასაუბრებაზე
            უპირატესობის მოსაპოვებლად.
          </p>
        </div>
      </div>
    </div>
  );
}
