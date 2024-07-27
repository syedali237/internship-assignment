import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const NavButton = ({ direction }) => {
  return (
    <div className="w-[50px] h-[50px] bg-[#DDDDDD] rounded-[10px] flex items-center justify-center">
      {direction === 'left' ? (
        <MdArrowBackIos className="w-[20px] h-[20px]" style={{color : "#263238" , alignItems : "center"}}/>
      ) : (
        <MdArrowForwardIos className="w-[20px] h-[20px]" style={{color : "#263238" , alignItems : "center"}} />
      )}
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="flex space-x-[18px]">
      <NavButton direction="left" />
      <NavButton direction="right" />
    </div>
  );
};

export default Navigation;
