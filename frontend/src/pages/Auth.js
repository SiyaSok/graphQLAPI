/** @format */

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Auth = () => {
  const [formData, setFormData] = useState({
    //name: "",
    email: "",
    password: "",
    //confirmPassword: "",
    //terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      query: `
    query {
      login(email: "${formData.email}", password: "${formData.password}") {
        token
        tokenExpiration
        userId
      }
    }
  `,
    });

    const config = {
      method: "POST",
      url: "graphql",
      headers: {
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);

      if (response.data.data.login.token) {
        return <Navigate to='/events' />;
      }
    } catch (error) {
      console.log(error);
    }

    console.log(formData);
  };

  return (
    <div className='flex items-center justify-center  mt-9 p-6 '>
      <div className='w-full max-w-md p-8 rounded-lg shadow-lg  bg-gray-100'>
        {/* <h2 className='mb-6 text-2xl font-bold text-center'>Register</h2> */}
        <h2 className='mb-6 text-2xl font-bold text-center'>Sign in</h2>

        <form onSubmit={handleSubmit}>
          {/* <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
              placeholder='John Doe'
              value={formData.name}
              onChange={handleChange}
            />
          </div> */}
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
              placeholder='john@example.com'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
              placeholder='••••••••'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* <div className='mb-4'>
            <label
              htmlFor='confirmPassword'
              className='block text-sm font-medium text-gray-700'>
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
              placeholder='••••••••'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div> */}
          {/* <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <input
                id='terms'
                name='terms'
                type='checkbox'
                className='w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500'
                checked={formData.terms}
                onChange={handleChange}
              />
              <label
                htmlFor='terms'
                className='ml-2 block text-sm text-gray-900'>
                I agree to the{" "}
                <a href='/' className='text-sky-600 hover:text-sky-500'>
                  terms and conditions
                </a>
              </label>
            </div>
          </div> */}
          <div>
            <button
              type='submit'
              className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-sky-600 border border-transparent rounded-md shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'>
              Sign in
            </button>
          </div>
        </form>
        {/* <p className='mt-4 text-sm text-center text-gray-600'>
          Already have an account?{" "}
          <a href='/' className='text-sky-600 hover:text-sky-500'>
            Sign in
          </a>
        </p> */}

        <p className='mt-4 text-sm text-center text-gray-600'>
          I don't have an account?{" "}
          <a href='/' className='text-sky-600 hover:text-sky-500'>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
