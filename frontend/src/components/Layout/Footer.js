/** @format */

import React from "react";
import "tailwindcss/tailwind.css";

const Footer = () => {
  return (
    <footer className='bg-sky-600 text-white py-12 mt-5'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <h2 className='text-lg font-semibold mb-4'>Company</h2>
            <ul>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  About Us
                </a>
              </li>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Careers
                </a>
              </li>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Press
                </a>
              </li>
              <li>
                <a href='/' className='hover:underline'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-4'>Support</h2>
            <ul>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Contact Us
                </a>
              </li>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  FAQs
                </a>
              </li>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href='/' className='hover:underline'>
                  Order Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-4'>Services</h2>
            <ul>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Consulting
                </a>
              </li>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Sales
                </a>
              </li>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Support
                </a>
              </li>
              <li>
                <a href='/' className='hover:underline'>
                  Custom Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-4'>Follow Us</h2>
            <ul>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Facebook
                </a>
              </li>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Twitter
                </a>
              </li>
              <li className='mb-2'>
                <a href='/' className='hover:underline'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='/' className='hover:underline'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 border-t border-sky-500 pt-4 text-center'>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
