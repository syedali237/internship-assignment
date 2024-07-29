import React from 'react';
import profileImage from '../assets/YCEO.jpeg'
import CarouselScroll3 from '../components/CarouselScroll3';

function Reviews() {
  return (
    <div>
      <h1 className="mb-[60px] font-poppins font-bold text-[36px] leading-[60px] text-center text-[#0B2C4B]">
        What our <span className="text-[#F89A36]">users</span> say about us
      </h1>

      {/* <CarouselScroll3 reviews={UserReview} /> */}
      

      <div className="w-[982px] h-[250px] bg-[#AFAFAF1A] mx-[229px] mb-[40px] rounded-[10px]">
        <div className="flex flex-row pt-[50px] ml-[43px]">
          <p className="text-center font-jakarta text-[100px] text-[#0B2C4B] font-bold leading-[126px] w-[56px] h-[75px]">
            “
          </p>
          <p className="ml-[20px] pt-[22px] font-jakarta font-medium text-[18px] leading-[30px] text-[#6D6969] w-[587px] h-[103px]">
            This is one of the best Legal Tech platform I have ever used. This
            platform is the one stop solution that most startups should use for
            their legal and consultation purposes. Kudos to the brains behind<br></br>
            this platform.
          </p>

          <div className="flex flex-col justify-center items-center ml-[88px] font-jakarta">
            <img
              src={profileImage}
              alt="profile"
              className="rounded-full h-[100px] w-[100px] mb-[4.72px]"
            />
            <h3 className="font-semibold text-[18px] leading-[22.68px] mb-[5.11px]">
              Michael Siebel
            </h3>
            <p className="font-normal text-[14px] leading-[17.64px] text-[#0B2C4B]">
              CEO, Y COMBINATOR
            </p>
          </div>
        </div>
      </div>

      <div className="mb-[90px] mx-[692px]">
        <CarouselScroll3 />
      </div>

      <div className="bg-#FFFFFF shadow-lastBox w-[1134px] h-[300px] rounded-[25px] mx-[153px] mb-[70px]">
        <h1 className="mb-[45px] font-jakarta font-extrabold text-[42px] leading-[25px] text-[#0B2C4B] pt-[57px] mx-[140px] text-center">
          Your Startup’s Legal Partner :
          <span className="text-[#F89A36]"> Transparent</span>
        </h1>
        <p className="mb-[35px] font-poppins font-normal text-[20px] leading-[30px] tracking-[0.02em] text-[#0B2C4B] mx-[382px] text-center">
          Want to know more or have a chat?
        </p>
        <button className="mx-[458px] mb-[56px] w-[218px] h-[52px] rounded-[31px] bg-[#F89A36] font-poppins font-normal text-[18px] leading-[30px] tracking-[0.02em] text-center text-[#FFFFFF]">
          Request a callback
        </button>
      </div>
    </div>
  );
}

export default Reviews;