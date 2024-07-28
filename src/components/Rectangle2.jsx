import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import CarouselScroll from './CarouselScroll';


function Rectangle2() {
  return (
    <div className="bg-[#FFFFFF] w-full h-[600px]">
    <div className='pt-[80px] pl-[100px] pr-[85px]'>

      <div className="grid grid-cols-[407px_1fr] gap-x-[180px] mb-[30px]">

        <div className="bg-[#EEEEEE99] h-[420px] rounded-[10px]"></div>

        <div className="h-[426px]">
          <h2 className="font-jakarta text-[36px] font-bold leading-[45.36px] tracking-[0.02em] text-left text-[#0B2C4B] mb-[45px]">
            Expert Consultation
          </h2>
          <p className="font-jakarta font-medium text-[20px] leading-[35px] text-[#263238] mb-[46px]">
            Get personalized legal and financial guidance from anywhere with our
            online platform connecting you to certified experts.
          </p>

          <ul className="flex flex-col font-jakarta font-normal text-[18px] text-center leading-[32px] text-[#455A64] space-y-[25px] mb-[40px]">
            <li className="flex items-center space-x-[20px]">
              <span>
                <IoIosCheckmarkCircle
                  className="h-[25px] w-[25px]"
                  style={{ color: "#2CA92A" }}
                />
              </span>
              <span>Expert guidance 24*7</span>
            </li>
            <li className="flex items-center space-x-[20px]">
              <span>
                <IoIosCheckmarkCircle
                  className="h-[25px] w-[25px]"
                  style={{ color: "#2CA92A" }}
                />
              </span>
              <span>
                Experienced lawyers and chartered accountants from all over
                India
              </span>
            </li>
            <li className="flex items-center space-x-[20px]">
              <span>
                <IoIosCheckmarkCircle
                  className="h-[25px] w-[25px]"
                  style={{ color: "#2CA92A" }}
                />
              </span>
              <span>
                Get transcription and recordings of consultation for future
                reference
              </span>
            </li>
          </ul>

          <button className="bg-[#1B72B1] w-[166px] h-[52px] rounded-[5px] text-[#FFFFFF] font-poppins font-normal text-[18px] leading-[30px] tracking-[0.02em]">
            Learn More
          </button>
        </div>
      </div>
      </div>

      <div className="mt-[54px] mb-[30px] mx-[685px]">
        <CarouselScroll />
      </div>
    </div>
  );
}

export default Rectangle2;
