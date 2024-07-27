import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import { IoDocumentSharp } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import CarouselScroll2 from "../components/CarouselScroll2";

export default function CarouselPage(){

    const [currentIndex, setCurrentIndex] = useState(1);

  const features = [
    {
      icon: <GiArtificialIntelligence className="w-[41.25px] h-[55px] mr-[25.18px]" />,
      title: 'AI Legal Chatbot',
      description: 'Get instant legal guidance and support from our interactive AI legal chatbot available 24*7.'
    },
    {
      icon: <IoDocumentSharp className="w-[41.25px] h-[55px] mr-[25.18px]"/>,
      title: 'Contracts Lifecycle',
      description: 'End to end lifecycle covering auto generation, collaboration, execution and management of contracts & agreements.'
    },
    {
      icon: <GoLaw className="w-[41.25px] h-[55px] mr-[25.18px]"/>,
      title: 'Business & Legal',
      description: 'Get your business registered as per government guidelines and get all necessary licenses with ease.'
    }
  ];

  const navigate = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }
  };

  return (
    <div className="mb-[70px]">
      <div className="mt-[70px] ml-[142px]">
        <p className="font-poppins font-semibold text-[18px] text-left leading-[27px] tracking-[0.02em] text-[#8F8D8E] mb-[30px]">
          That's where we come
        </p>

        <div className="flex space-x-[116px] mb-[60px]">
          <h2 className="font-poppins font-semibold text-[28px] leading-[42px] tracking-[0.02em] text-left text-[#455A64]">
            Judix : The smarter way to manage your legal and financial matters.
          </h2>
          <Navigation onNavigate={navigate} />
        </div>
      </div>
      <Carousel currentIndex={currentIndex} features={features} />
      <CarouselScroll2 />
    </div>
  );
}
