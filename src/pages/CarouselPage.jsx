import React from "react";
import Navigation from "../components/Navigation";

export default function CarouselPage(){
  return (
    <div className="mt-[70px] ml-[142px]">
      <p className="font-poppins font-semibold text-[18px] text-left leading-[27px] tracking-[0.02em] text-[#8F8D8E] mb-[30px]">
        That's where we come
      </p>

      <div className="flex space-x-[116px] mb-[60px]">
        <h2 className="font-poppins font-semibold text-[28px] leading-[42px] tracking-[0.02em] text-left text-[#455A64]">
          Judix : The smarter way to manage your legal and financial matters.
        </h2>
        <Navigation />
      </div>

      <div className="grid grid-cols-3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}
