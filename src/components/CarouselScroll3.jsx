import React, { useState, useEffect } from 'react';

function CarouselScroll3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); 

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div>

    <div className="flex items-center space-x-[5px]">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full w-[10px] h-[10px] ${
            index === currentSlide ? 'bg-[#1B72B1]' : 'bg-[#7DB1D1]'
          }`}
        ></div>
      ))}
    </div>
  </div>
  );
}

export default CarouselScroll3;


// if userReview is added 
/* <div className="w-[982px] h-[250px] bg-[#AFAFAF1A] mx-[229px] mb-[40px] rounded-[10px]">
        <div className="flex flex-row pt-[50px] ml-[43px]">
          <p className="text-center font-jakarta text-[100px] text-[#0B2C4B] font-bold leading-[126px] w-[56px] h-[75px]">
            “
          </p>
          <p className="ml-[20px] pt-[22px] font-jakarta font-medium text-[18px] leading-[30px] text-[#6D6969] w-[587px] h-[103px]">
          {reviews[currentSlide].review}
          </p>

          <div className="flex flex-col justify-center items-center ml-[88px] font-jakarta">
            <img
              src={reviews[currentSlide].profile}
              alt="profile"
              className="rounded-full h-[100px] w-[100px] mb-[4.72px]"
            />
            <h3 className="font-semibold text-[18px] leading-[22.68px] mb-[5.11px]">
            {reviews[currentSlide].name}
            </h3>
            <p className="font-normal text-[14px] leading-[17.64px] text-[#0B2C4B]">
            {reviews[currentSlide].position}
            </p>
          </div>
        </div>
      </div> */