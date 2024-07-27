import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-[#0B2C4B] text-[#E9F2F9] pt-[19px] pb-[13px] h-[200px] font-jakarta font-normal text-[15px] leading-[18.9px]">
      <div className="flex ml-[63px] mr-[65px]">
        <div className="mt-[35px]">
          <img
            src="/path/to/logo.png"
            alt="Judix Logo"
            className="h-[60px] w-[120.47px]"
          />
        </div>

        <div className="flex flex-col items-end ml-[186.53px] mr-[140px]">
          <div className="space-y-[22px]">
            <p className="text-right pr-[2px]">Plans & Pricing</p>
            <button className="text-[18px] text-center font-jakarta font-medium leading-[22.68px] tracking-[0.01em] bg-transparent border border-[#F89A36] text-[#F89A36] hover:text-[#E9F2F9] hover:bg-[#F89A36] pl-[12px] pr-[11px] pt-[7px] pb-[10px] rounded-[5px]">
              Lawyer/CA click here
            </button>
          </div>
        </div>

        <div className="flex flex-col mr-[140px]">
          <ul className="space-y-[11px] text-[15px]">
            <li>
              <a href="/products" className="hover:text-[#F89A36]">
                Products
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-[#F89A36]">
                Features
              </a>
            </li>
            <li>
              <a href="/lawyer" className="hover:text-[#F89A36]">
                Talk to a Lawyer
              </a>
            </li>
            <li>
              <a href="/ca" className="hover:text-[#F89A36]">
                Talk to a CA
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mr-[138px]">
          <ul className="space-y-[11px] text-[15px]">
            <li>
              <a href="/about" className="hover:text-[#F89A36]">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#F89A36]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/career" className="hover:text-[#F89A36]">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="space-y-[14px] mb-[20px]">
            <div className="flex items-center space-x-[17px]">
              <MdPhone
                className="h-[22px] w-[22px]"
                style={{ color: "#7DB1D1" }}
              />
              <span>Request a Callback</span>
            </div>

            <div className="flex items-center space-x-[16.12px]">
              <MdEmail
                className="h-[21.88px] w-[17.5px]"
                style={{ color: "#7DB1D1" }}
              />
              <span>projectx@gmail.com</span>
            </div>
          </div>

          <div className="flex space-x-[28.11px]" style={{ color: "#7DB1D1" }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-[21.89px] w-[21.88px]" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-[21.88px] w-[21.88px]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-[21.88px] w-[21.87px]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-[20.3px] w-[25px]" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[28px] border-t border-[#6D6969] pt-[12px] text-sm ml-[18px] mr-[16px]">
        <div className="flex justify-between ml-[43px] mr-[61px]">
          <span className="mr-[595px]">
            © 2024 @ Black Coat Technologies Pvt. Ltd. | All Rights Reserved
          </span>

          <div className="flex space-x-[52px]">
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
