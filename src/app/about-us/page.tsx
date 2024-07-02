import Image from "next/image";
import React from "react";
import PartnerSlider from "../components/main_page/PartnerSlider";
import { BiSmile } from "react-icons/bi";

export default function page() {
  return (
    <div className="bg-[#010125f5] flex justify-center">
      <div className="max-w-[1540px] w-full flex flex-col gap-y-[100px] max-sm:gap-y-[50px] pt-[130px] pb-[150px] px-[12%] max-xl:px-[8%] max-md:px-[16px] text-white">
        <div className="flex items-center justify-between gap-[20px] max-lg:flex-col">
          <div className="flex flex-col gap-y-[20px] w-[50%] max-lg:w-full">
            <h1 className="text-[25px] max-lg:text-center">ჩვენ შესახებ</h1>
            <p className="text-[15px]">
              კომპანია თავის მომხმარებლებს სთავაზობს მაღალი ხარისხის სერვისების
              ფართო სპექტრს. თითოეული პროდუქტის წარმატებას განაპირობებს
              თანამშრომლების პროფესიონალიზმი და მრავალწლიანი გამოცდილება,
              კრეატიული იდეები და უახლესი მეთოდები, რომლებსაც ისინი იყენებენ
              მომხმარებლის პროექტში. Artspace-ში ჩვენ მიძღვნილი ვართ
              კრეატიულობისა და ტექნოლოგიების უწყვეტი შერწყმისკენ. ხუთწლიანი
              გამოცდილებით, ჩვენ ავითვისეთ სხვადასხვა უახლესი ტექნოლოგიები,
              როგორიცაა Nest.js, React.js, Laravel და სხვა. ჩვენი სახელმძღვანელო
              მანტრა მარტივია: `წარმატება იწყება კოდის ერთი ხაზით.` 180-ზე მეტი
              პროექტის წარმატებით მიწოდების შთამბეჭდავი გამოცდილება, ჩვენ
              მტკიცედ გვჯერა, რომ კოდირების სრულყოფილება ხსნის გზას
              წარმატებისკენ.
            </p>
          </div>
          <div className="flex flex-col gap-y-[30px] w-[40%] items-end  max-lg:items-center max-lg:w-full">
            <div className="w-[250px] h-[280px] relative">
              <Image
                src="/images/rocket.png"
                alt={""}
                sizes="500px"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <p className="dottedfont max-lg:text-center text-[20px]">
              წარმატების გზა <br />
              შენთან ახლოს
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-[50px] max-lg:flex-col-reverse">
          <div className="flex w-[40%] h-[280px] relative items-end max-lg:w-full">
            <Image
              src="/images/hiringbaner.png"
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="flex flex-col gap-y-[20px] w-[60%] max-lg:w-full">
            <h1 className="text-[25px] max-lg:text-center">
              ჩვენ გაძლევთ წარმატების გარანტიას
            </h1>
            <p className="text-[15px]">
              ჩვენ გაძლევთ წარმატების გარანტიას მაგრამ ჩვენი ექსპერტიზა არ
              ჩერდება კოდირებაზე. ჩვენ ასევე ვართ სპეციალისტები ციფრული
              მარკეტინგის სამყაროში. ჩვენ გამორჩეულნი ვართ სტრატეგიებით,
              რომლებიც ამაღლებს თქვენს ონლაინ ყოფნას. იქნება ეს თქვენი ვებსაიტის
              ხილვადობის გაზრდა საძიებო სისტემებში SEO-ს მეშვეობით, აჟიოტაჟის
              შექმნა სოციალურ მედიაში, ან დამაჯერებელი კონტენტის შექმნა, ჩვენ
              გვაქვს ექსპერტიზა, რომ თქვენი ონლაინ ყოფნა ბრწყინავს. ჩვენი
              შესაძლებლობები მოიცავს როგორც ტექნიკურ, ასევე შემოქმედებით
              სფეროებს. მიუხედავად იმისა, გჭირდებათ ახალი ვებსაიტი, უახლესი
              მობილური აპლიკაცია ან ყოვლისმომცველი ციფრული მარკეტინგული
              კამპანია, Artspace Software არის თქვენი ერთჯერადი გადაწყვეტა. რაც
              გამოგვარჩევს არის ჩვენი მოქნილობა. ჩვენ ვართ აღჭურვილი ყველა ზომის
              პროექტების მოსაგვარებლად, მცირე, ერთჯერადი მცდელობებიდან დაწყებული
              ფართომასშტაბიანი კონტრაქტებით დამთავრებული. ჩვენი ურყევი
              ვალდებულება მაღალი ხარისხის სამუშაოს კონკურენტულ ფასებში მიწოდების
              შესახებ არის ის, რაც გამოგვარჩევს და ჩვენ ყოველთვის ვასრულებთ
              ჩვენს ვადებს. ჩვენი წინა ნამუშევრების შესატყვისად, გადახედეთ ჩვენს
              პორტფოლიოს. ჩვენ მზად ვართ განვიხილოთ, თუ როგორ შეუძლია Artspace
              Software-მა გააცოცხლოს თქვენი პროექტი, მიუხედავად მისი მასშტაბისა.
              კეთილი იყოს თქვენი მობრძანება სამყაროში, სადაც ინოვაციას საზღვრები
              არ აქვს. ძირითადი მაჩვენებლები: ხუთწლიანი გამოცდილება უახლესი
              ტექნოლოგიების სფეროში. მიწოდებულია 180-ზე მეტი წარმატებული
              პროექტი. სპეციალიზაცია ციფრული მარკეტინგის სტრატეგიებში. მოქნილობა
              ყველა ზომის პროექტების დასამუშავებლად. მაღალი ხარისხის მუშაობის
              ერთგულება კონკურენტულ ფასებში.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-[40px] px-[5%] max-lg:px-0 ">
          <h1 className="text-[25px]">აკადემიის სტატისტიკა</h1>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-[20px] max-sm:gap-[15px]">
            <div className="flex flex-col items-center gap-y-[15px] bg-white text-black px-[15px] py-[25px] rounded-[25px]">
              <BiSmile className="text-[60px]" />
              <p className="text-center notcapsbold max-sm:text-[15px]">
                1000+ წარმატებული კურსდამთავრებული
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-[15px] bg-white text-black px-[15px] py-[25px] rounded-[25px]">
              <BiSmile className="text-[60px]" />
              <p className="text-center notcapsbold max-sm:text-[15px]">
                1000+ წარმატებული კურსდამთავრებული
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-[15px] bg-white text-black px-[15px] py-[25px] rounded-[25px]">
              <BiSmile className="text-[60px]" />
              <p className="text-center notcapsbold max-sm:text-[15px]">
                1000+ წარმატებული კურსდამთავრებული
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-[15px] bg-white text-black px-[15px] py-[25px] rounded-[25px]">
              <BiSmile className="text-[60px]" />
              <p className="text-center notcapsbold max-sm:text-[15px]">
                1000+ წარმატებული კურსდამთავრებული
              </p>
            </div>
          </div>
        </div>

        <PartnerSlider DarkBg={true} />
      </div>
    </div>
  );
}
