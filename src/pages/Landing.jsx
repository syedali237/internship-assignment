// src/App.js
import React from 'react';
import pwcPhoto from '../assets/pwc.png';
import zerodhaPoster from '../assets/zerodha.png';
import boatPhoto from '../assets/boat.png';
import phonepePhoto from '../assets/phonepe.png';
import rapidoPhoto from '../assets/rapido.png';
import lenskartPhoto from '../assets/lenskarTT.png';

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center mb-[100px]">
      <div className="text-center mx-[153px] mt-[120px] mb-[110px]">
        <h1 className="text-[42px] md:text-4xl font-poppins font-bold text-gray-800">
          Your Startup's legal partner. Simplified, transparent,<br></br>{" "}
          automated.
          <span className="text-[#F89A36]"> From Start to Scale.</span>
        </h1>
        <p className="text-[18px] font-poppins font-normal text-[#0B2C4B] mt-[70px]">
          The only end-to-end platform offering integrated legal solutions that
          combines human<br></br> intelligence and technology to automate all
          your legal and taxation complexities and provides<br></br> you with a
          peace of mind to focus on your startup.
        </p>
        <button className="mt-[60px] font-poppins bg-[#1B72B1] text-[#FFFFFF] py-[11px] px-[21px] rounded-[5px]">
          Book a demo
        </button>
      </div>

      <section className="w-full text-center pt-[30px]">
      <div className='flex justify-center'>
      <div className="border-t border-[#6D6969] w-[100px] mx-[10px] my-[13px]"></div>
        <h2 className="text-[#455A64] text-[24px] font-jakarta font-extrabold leading-[25px] tracking-[0.08em]">
          TRUSTED BY STARTUPS <span className="text-[#F89A36]">LIKE YOURS</span>
        </h2>
        <div className="border-t border-[#6D6969] w-[100px] mx-[10px] my-[13px]"></div>
        </div>
        <div className="flex flex-wrap ml-[245px] mt-[63.5px] max-w-full">
          <img
            src={pwcPhoto}
            alt="PwC"
            className="h-[75px] w-[75px] mr-[98.5px] object-contain"
          />
          <img
            src={zerodhaPoster}
            alt="Zerodha"
            className="h-[75px] w-[75px] mr-[98.5px] object-contain"
          />
          <img
            src={boatPhoto}
            alt="Boat"
            className="h-[75px] w-[75px] mr-[98.5px] object-contain"
          />
          <img
            src={phonepePhoto}
            alt="PhonePe"
            className="h-[75px] w-[75px] mr-[98.5px] object-contain"
          />
          <img
            src={rapidoPhoto}
            alt="Rapido"
            className="h-[75px] w-[75px] mr-[98.5px] object-contain"
          />
          <img
            src={lenskartPhoto}
            alt="Lenskart"
            className="h-[75px] w-[75px] mr-[98.5px] object-contain"
          />
        </div>
      </section>
    </div>
  );
}