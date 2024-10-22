/** @format */

import React from "react";

export default function Hero() {
  return (
    <div
      className='relative bg-cover bg-center h-screen bg-fixed -mt-20'
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/58a0d691ff7c50486df2c34c/1711229219685-4U1NGPKC76QKG9PPB6O2/_MG_5537.jpg?format=1500w')",
      }}>
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>{" "}
      {/* Optional overlay */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome</h1>
        <a
          href='#'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg'>
          Get Started
        </a>
      </div>
    </div>
  );
}
