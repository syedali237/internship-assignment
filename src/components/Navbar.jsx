import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white h-[70px]">
      <div className="container mx-auto px-4 py-[15px] h-full flex items-center font-jakarta text-[18px] font-medium leading-[22.68px] tracking-[0.01em]">
        <div className="flex items-center space-x-[27px] ml-64 mr-auto">
          <a href="/product" className="text-[#000000] hover:text-gray-400">
            Product
          </a>
          <a href="/pricing" className="text-[#000000]0 hover:text-gray-400">
            Pricing
          </a>
          <a href="/customers" className="text-[#000000] hover:text-gray-400">
            Customers
          </a>

          <a
            href="/talk-to-lawyer"
            className="text-[#1B72B1] hover:bg-[#1B72B1] hover:text-white border border-[#1B72B1] rounded px-[11px] py-[7px]"
          >
            Talk to Lawyer/CA
          </a>
        </div>
        {/* difference between the two divs 146px */}
        <div className="flex items-center space-x-[25px] ml-10">
          <a href="/login" className="text-[#000000] hover:text-gray-400">
            Log In / Sign Up
          </a>
          <button className="bg-[#1B72B1] text-[#FFFFFF] px-[15px] pt-[7px] pb-[10px] rounded-[5px]">
            Lawyers/CA click here
          </button>
        </div>
      </div>
    </nav>
  );
}