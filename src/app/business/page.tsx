import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-[#010125f5] flex justify-center">
      <div className="max-w-[1540px] w-full flex flex-col gap-y-[100px] max-sm:gap-y-[50px] pt-[130px] max-sm:pt-[100px] pb-[150px] px-[12%] max-xl:px-[8%] max-md:px-[16px] text-white">
        <div className="flex items-center justify-between gap-[20px] max-lg:flex-col">
          <div className="flex flex-col gap-y-[20px] w-[60%] max-lg:w-full max-lg:text-center">
            <h1 className="text-[25px] max-sm:text-[20px]">
              სუპერ შეთავაზებები ბიზნესისთვის
            </h1>
            <p className="text-[15px]">
              ჩვენ ვთანამშრომლობთ მრავალ ქართულ და უცხოურ ბანკთან,
              <br /> ტექ კომპანიასა და Software Development სააგენტოსთან
            </p>
          </div>
          <div className="flex flex-col gap-y-[20px] w-[40%] items-end max-lg:items-center max-lg:w-full">
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
            <p className="dottedfont max-lg:text-center text-[20px]  max-sm:text-[15px]">
              შემოუერთდი მომავლის
              <br /> სამყაროს
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-[20px]">
          <h1 className="text-[25px] max-sm:text-[20px] max-lg:text-center">
            ითანამშრომლეთ არტსფეისის აკადემიასთან
          </h1>
          <div
            className="w-full h-[70px] rounded-full pl-[30px] max-lg:pl-[16px] pr-[25%] flex items-center gap-[15px] 
          bg-gradient-to-r from-[#2FB434] from-[73%] via-[#30a834] via-[75%] to-white to-[85%]"
          >
            <p className="text-[18px]">79%</p>
            <p className="max-lg:text-[12px]">
              მიმდინარეობს თქვენი კომპანიის წარმატების ჩატვირთვის პროცესი
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-[30px] max-lg:flex-col">
          <div className="flex flex-col gap-y-[20px] w-[60%] max-lg:text-center max-lg:w-full">
            <h1 className="text-[25px]  max-sm:text-[20px]">
              გახდი არტსფეის აკადემიის მეგობარი კომპანია, მიიღე განსაკუთრებული
              შეთავაზებები!
            </h1>
            <p className="text-[15px]">
              ჩვენთან თანამშრომლობით, მიიღებ კორპორატიულ ფასდაკლებებს სხვადასხვა
              სასწავლო კურსზე, რომლებიც ხელს შეუწყობს შენი თანამშრომლების
              კარიერულ განვითარებას.
            </p>
          </div>
          <div className="flex flex-col gap-y-[20px] w-[40%] max-lg:w-full  h-[280px] max-sm:h-[230px] items-end relative">
            <Image
              src="/images/salebaner.png"
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-[30px] max-sm:gap-y-[20px] max-lg:flex-col">
          <div className="flex flex-col gap-y-[20px] w-[60%] max-lg:w-full max-lg:text-center">
            <h1 className="text-[25px]  max-sm:text-[20px]">
              დაგეხმარებით საუკეთესო სპეციალისტების მოძებნაში!
            </h1>
            <p className="text-[15px]">
              კომპანიაში აქტიური ვაკანსიების გამოცხადების შემდეგ, შეგეძლება
              გამოგვიგზავნო სასურველი სპეციალისტების სამუშაო აღწერილობები, ჩვენ
              კი არტსფეის აკადემიის წარმატებულ კურსდამთავრებულებს გავუწევთ
              რეკომენდაციას.
            </p>
          </div>
          <div className="flex flex-col gap-y-[20px] w-[40%] max-lg:w-full h-[280px] max-sm:h-[230px] items-end relative">
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
        </div>
      </div>
    </div>
  );
}
