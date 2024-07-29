import React from 'react';
import { IoDocumentsOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { GoLaw } from "react-icons/go";
import { GrDocumentOutlook } from "react-icons/gr";
import judixPhoto from "../assets/logo.png";
import { GoChecklist } from "react-icons/go";
import { VscLaw } from "react-icons/vsc";


const Pentagon = () => {
  return (
    <div>

      <div className="relative w-[959px] h-[500px] mx-[241px] mb-[150px]">
<div className='absolute right-[464px] w-[33px] h-[30px] top-[29px] font-poppins font-semibold text-[28px] leading-[30px] text-[#009EFF]'>vs</div>
{/* ---------------------------WHITE BOX--------------------------  */}

        <div className="absolute right-[0] w-[495.45px] h-[500px] clip-pentagon2 rounded-[30px] bg-[#FFFFFF] shadow-carouselBoxes text-[#455A64]">
          <div>
            <h1 className="font-poppins font-medium text-[24px] leading-[30px] ml-[221.45px] mt-[35px]">
              Regular
            </h1>

            <div className="flex flex-row w-[360px] h-[92px] ml-[93.45px] mt-[40px] mb-[11px] font-jakarta">
              <div className="mr-[25px] my-[26px]">
                <GrDocumentOutlook className="w-[33.57px] h-[40px]" />
              </div>
              <div>
                <h2 className="font-extrabold text-[18px] leading-[30px] mb-[8px]">
                Write the hard stuff yourself
                </h2>
                <p className="font-medium text-[14px] leading-[18px]">
                You can map your facts against the law, but you'll need to handle the complex assessments and documentation yourself.
                </p>
              </div>
            </div>

            <div className="font-poppins font-medium text-[14px] leading-[30px] ml-[93.45px]">
              .........................................................................................................
            </div>

            <div className="flex flex-row w-[360px] h-[92px] ml-[93.45px] my-[11px] font-jakarta">
              <div className="mr-[25px] my-[26px]">
                <GoChecklist className="w-[33.67px] h-[40.01px]" />
              </div>
              <div>
                <h2 className="font-extrabold text-[18px] leading-[30px] mb-[8px]">
                Checklist-oriented risk work
                </h2>
                <p className="font-medium text-[14px] leading-[18px]">
                You assess your risks and match your tasks on a one-to-one basis, manually without any support.
                </p>
              </div>
            </div>

            <div className="font-poppins font-medium text-[14px] leading-[30px] ml-[93.45px]">
              .........................................................................................................
            </div>

            <div className="flex flex-row w-[360px] h-[92px] ml-[93.45px] my-[11px] font-jakarta">
              <div className="mr-[25px] my-[26px]">
                <VscLaw className="w-[46.74px] h-[47.85px]" />
              </div>
              <div>
                <h2 className="font-extrabold text-[18px] leading-[22.68px] mb-[8px]">
                You are responsible for the legal correctness
                </h2>
                <p className="font-medium text-[14px] leading-[18px]">
                You must take full responsibility for all legal documents and compliance.
                </p>
              </div>
            </div>

          </div>
        </div>
{/* --------------------------------------BLUE------------------------- */}
        <div className="absolute right-[463.55px] w-[495.45px] h-[500px] clip-pentagon rounded-[30px] bg-custom-gradient text-[#FFFFFF]">
          <div>
            <img
              src={judixPhoto}
              alt="judix"
              className="mt-[25px] w-[90.35px] h-[45px] ml-[143px] object-fit"
            ></img>

            <div className="flex flex-row w-[360px] h-[92px] ml-[42px] mt-[35px] mb-[11px] font-jakarta">
              <div className="mr-[25px] my-[26px]">
                <IoDocumentsOutline className="w-[36px] h-[40px]" />
              </div>
              <div>
                <h2 className="font-extrabold text-[18px] leading-[30px] mb-[8px]">
                  The output you need
                </h2>
                <p className="font-medium text-[14px] leading-[18px]">
                  Save time with our unique legal business logic that
                  automatically produces all assessments and documentation.
                </p>
              </div>
            </div>

            <div className="font-poppins font-medium text-[14px] leading-[30px] ml-[43px]">
              .........................................................................................................
            </div>

            <div className="flex flex-row w-[360px] h-[92px] ml-[42px] my-[11px] font-jakarta">
              <div className="mr-[25px] my-[26px]">
                <LuListTodo className="w-[42.26px] h-[40px]" />
              </div>
              <div>
                <h2 className="font-extrabold text-[18px] leading-[30px] mb-[8px]">
                  Priority-oriented
                </h2>
                <p className="font-medium text-[14px] leading-[18px]">
                  With Judix, your risks and threats are automatically
                  prioritised, so you can work with the most important risks
                  first.
                </p>
              </div>
            </div>

            <div className="font-poppins font-medium text-[14px] leading-[30px] ml-[43px]">
              .........................................................................................................
            </div>

            <div className="flex flex-row w-[360px] h-[92px] ml-[42px] mt-[11px] font-jakarta">
              <div className="mr-[25px] my-[26px]">
                <GoLaw className="w-[45.99px] h-[40px]" />
              </div>
              <div>
                <h2 className="font-extrabold text-[18px] leading-[30px] mb-[8px]">
                  The experts got you covered
                </h2>
                <p className="font-medium text-[14px] leading-[18px]">
                  Our lawyers and CAs ensure that you are always compliant and
                  up to date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pentagon;

// import React from 'react';

// const Pentagon = () => {
//   return (
//     <div className="relative w-[959px] h-[500px] mx-[241px] mb-[150px]">
//     <div>
//       <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="symbols">
  
//         <symbol id="symbol-test-1" viewBox="0 0 325 90" preserveAspectRatio="none">
//           <polygon points="325 45 288 90 0 90 0 0 288 0"/>
//         </symbol>
  
//         <symbol id="symbol-test-2" viewBox="0 0 335 100" preserveAspectRatio="none">
//           <polygon points="325 50 288 90 10 90 10 10 288 10" 
//                    strokeLinejoin="round"
//                    strokeWidth="20"/>
//         </symbol>
  
//         <symbol id="symbol-test-3" viewBox="0 0 333 98" preserveAspectRatio="none">
//           <polygon points="325 49 288 90 8 90 8 8 288 8" 
//                    strokeLinejoin="round"
//                    strokeWidth="16"/>
//         </symbol>
  
//         <symbol id="symbol-test-4" viewBox="0 0 332 97" preserveAspectRatio="none">
//           <polygon points="325 48.5 288 90 7 90 7 7 288 7"
//                    strokeLinejoin="round"
//                    strokeWidth="14"/>
//         </symbol>
  
//         <symbol id="symbol-test-5" viewBox="0 0 332 97" preserveAspectRatio="none">
//           <polygon points="325 48.5 288 90 7 90 7 7 288 7"
//                    fill="black" 
//                    stroke="black" 
//                    strokeLinejoin="round" 
//                    strokeWidth="14"/>
//         </symbol>
  
//       </svg>

//       <div id="test-4" className="item item-2">
//         They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Pentagon;
