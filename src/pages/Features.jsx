import React from 'react';

const FeatureCard = ({ title, description, progress }) => (
    <div>
<div className="bg-white rounded-[10px] shadow-md p-6 w-[375px] h-[267.5px] flex flex-col justify-between">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="flex justify-center items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#E6E6E6"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="3"
            strokeDasharray={`${progress}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  </div>
  </div>
);

function Features() {
  return (

    <div className='mb-[130.43px]'>
      <div className="mx-[200px] space-y-[90px] font-poppins">

        <section className='flex flex-row w-[1040px] h-[267.57px]'>
        <div className='mr-[65px]'>
          <h2 className="text-[28px] mb-[20px] font-semibold leading-[60px] text-[#263238]">Designed to give you a peace of mind</h2>
          <p className="text-[#000000] text-[16px] leading-[30px] font-light">
          Customers experience peace of mind knowing that we handle their legal complexities, allowing them to avoid the stress and burden of managing these issues themselves.
          </p>
          </div>
          <FeatureCard
            title="Compliance progress"
            description=""
            progress={96}
          />
        </section>

        <section className='flex flex-row-reverse w-[1040px] h-[267.57px]'>
        <div className='ml-[65px]'>
          <h2 className="text-[28px] mb-[20px] font-semibold leading-[60px] text-[#263238]">Save time and reduce costs</h2>
          <p className="text-[#000000] text-[16px] leading-[30px] font-light">
          We reduce the burden on founders by freeing up their time, resources, and mental bandwidth, allowing them to concentrate on their core operations and business growth.
          </p>
          </div>
          <FeatureCard
            title="Compliance progress"
            description=""
            progress={96}
          />
        </section>

        <section className='flex flex-row w-[1040px] h-[267.57px]'>
        <div className='mr-[59px]'>
          <h2 className="text-[28px] mb-[20px] font-semibold leading-[60px] text-[#263238]">Unparalleled legal, guidance, and support</h2>
          <p className="text-[#000000] text-[16px] leading-[30px] font-light">
          Connects with experienced lawyers and chartered accountants for personalized consultations, offering exceptional legal guidance and support. Navigate complex legal matters confidently with our top-notch expertise and dedicated assistance.
          </p>
          </div>
          <FeatureCard
            title="Compliance progress"
            description=""
            progress={96}
          />
        </section>
      </div>
    </div>
  );
};

export default Features;