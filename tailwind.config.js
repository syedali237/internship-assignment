/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: "#F3F8FC"
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      fontSize: {
        '18px': '18px',
      },
      lineHeight: {
        '22.68px': '22.68px',
      },
      letterSpacing: {
        '0.01em': '0.01em',
      },
      boxShadow: {
        'rectangle1Boxes': '0px 0px 15px 0px rgba(69, 90, 100, 0.25)',
        'carouselBoxes' : '0px 0px 15px 0px rgba(69, 90, 100, 0.05)',
        'lastBox' : '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};