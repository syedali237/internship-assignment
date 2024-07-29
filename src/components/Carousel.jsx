import React from 'react';

function Carousel({ currentIndex, features }) {
  const getItemIndex = (shift) =>
    (currentIndex + shift + features.length) % features.length;

  return (
    <div className="flex justify-center items-center space-x-4 px-4">
      {[-1, 0, 1].map((shift) => {
        const index = getItemIndex(shift);
        const feature = features[index];
        const isCenter = shift === 0;

        return (
          <div
            key={index}
            className={`
             bg-[#FFFFFF] rounded-[25px] transition-transform duration-5000 relative
              ${
                isCenter
                  ? "pt-[60px] w-[585px] h-[325px] shadow-carouselBoxes"
                  : "pt-4 w-[405px] h-[225px] opacity-70 scale-95"
              }
            `}
            data-aos="zoom-in"
          >
            {!isCenter && (
              <div
                className={`
                absolute top-0 left-0 w-full h-full rounded-[25px] pointer-events-none
                ${
                  shift === -1
                    ? "bg-gradient-to-r from-[#F3F8FC] to-transparent"
                    : "bg-gradient-to-l from-[#F3F8FC] to-transparent"
                }
              `}
              ></div>
            )}
            <div
              className={`flex justify-center items-center mx-auto ${
                isCenter ? "pb-3" : "pb-2]"
              } `}
            >
              <div
                className={` ${isCenter ? "text-[#009EFF]" : "text-[#009EFF]"}`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-[#009EFF] font-jakarta font-bold leading-[40.32px] tracking-[0.02em] text-left py-[15px] ${
                  isCenter ? "text-[32px]" : "text-[28px]"
                }`}
              >
                {feature.title}
              </h3>
            </div>
            <p
              className={`text-center font-jakarta font-normal leading-[37px] overflow-hidden ${
                isCenter
                  ? "text-[20px] text-[#263238] mx-[57.5px] pb-[42.21px]"
                  : "text-gray-500 text-[16px] px-[35px]"
              } line-clamp-3`}
            >
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
