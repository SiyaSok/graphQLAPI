/** @format */

import React from "react";

const Hero = () => {
  return (
    <div className='relative bg-cover bg-center h-screen flex items-center justify-center text-white'>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4'>
          Welcome to Our Website
        </h1>
        <p className='text-lg sm:text-xl lg:text-2xl mb-8'>
          We are glad to have you here. Explore and enjoy our services.
        </p>
        <a
          href='#learn-more'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
