import React from 'react';
import { PiCirclesThreePlus } from "react-icons/pi";
import { FiMonitor } from "react-icons/fi";
import CarouselScroll from './CarouselScroll';

function Rectangle1() {
  return (
    <div className="bg-[#FFFFFFBF] h-[500px] w-full">
      <h3 className="text-[28px] font-jakarta font-semibod leading-[35.28px] tracking-[0.02em] text-center pt-[70px] pb-[53px]">
        Managing legal affairs is complicated!
      </h3>
      <div className="grid grid-cols-2 gap-[50px] mx-[195px]">
        <div className="w-[500px] h-[250px] rounded-[25px] border shadow-rectangle1Boxes border-opacity-0">
          <div className="flex flex-col items-center">
            <PiCirclesThreePlus
              className="mt-[43px] mb-[30px]"
              style={{ color: "#009EFF", width: "45px", height: "30px" }}
            />
            <p className="font-jakarta font-normal text-[18px] mx-[50px] text-center leading-[30px]">
              Current processes are inefficient, resulting in wasted time and
              resources, as well as a lack of accountability.
            </p>
          </div>
        </div>
        <div className="w-[500px] h-[250px] rounded-[25px] border shadow-rectangle1Boxes border-opacity-0">
          <div className="flex flex-col items-center">
            <FiMonitor
              className="mt-[43px] mb-[30px]"
              style={{ color: "#009EFF", width: "36px", height: "32px" }}
            />
            <p className="font-jakarta font-normal text-[18px] mx-[50px] text-center leading-[30px]">
              Lack of digitization and excessive reliance on outdated tools such
              as MS Excel, Word, and emails.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-[45px] mx-[685px]'>
      <CarouselScroll />
      </div>  
    </div>
  );
}

export default Rectangle1;
