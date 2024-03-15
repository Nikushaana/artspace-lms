import Image from "next/image";
import React from "react";

export default function GraduatedCommentsCard() {
  return (
    <div className="flex gap-[20px] items-center max-sm:flex-col-reverse max-sm:items-start">
      <div className="flex flex-col items-center gap-y-[10px] shrink-0 max-sm:flex-row max-sm:gap-[10px]">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden relative">
          <Image
            src="/images/264774256_2864311607213594_2866280256295529674_n.jpg"
            alt={""}
            sizes="500px"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-y-[10px] shrink-0">
          <p className="notcapsbold">გიორგი ჩიქოვანი</p>
          <p className="text-gray-400 text-[13px]">Back-end Developer</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-[10px] rounded-[25px] shadow border-[1px] px-[30px] py-[20px] bg-gray-100">
        <h1 className="text-[16px]">რო გითხრათ რა გაიგებთ?</h1>
        <p className="text-[14px]">
          ვფიქრობ, არტსფეისში განსაკუთრებულად გამორჩეული ლექტორები არიან.
          ლექტორი თითოეული სტუდენტისთვის მასალას ძალიან დეტალურად და გულიანად
          ხსნიდა. შაბათობით კი უსასყიდლოდ გვინიშნავდა დამატებით სემინარებს იმის
          მიუხედავად, რომ მაიკროსოფტში მუშაობდა და ძალიან დაკავებული იყო.
          უსაზღვროდ მომენატრება აქ სწავლის პერიოდი და ატმოსფერო.
        </p>
      </div>
    </div>
  );
}
