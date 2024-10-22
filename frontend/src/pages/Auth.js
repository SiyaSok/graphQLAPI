/** @format */

import React, { useContext } from "react";
import "tailwindcss/tailwind.css";
import { AuthContext } from "../Context/AuthContext";
<<<<<<< Updated upstream

const Auth = () => {
  const { onLogIn, formData, getUserCredentials, isSignedUp, setIsSignedUp } =
    useContext(AuthContext);

  return (
    <div className='flex items-center justify-center  mt-9 p-6 '>
      <div className='w-full max-w-md p-8 rounded-lg shadow-lg  bg-gray-100'>
        {/* <h2 className='mb-6 text-2xl font-bold text-center'>Register</h2> */}
        {isSignedUp ? (
          <h2 className='mb-6 text-2xl font-bold text-center'>Sign In</h2>
        ) : (
          <h2 className='mb-6 text-2xl font-bold text-center'>Sign Up</h2>
        )}
        <form onSubmit={onLogIn}>
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
              onChange={getUserCredentials}
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
              onChange={getUserCredentials}
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
              {isSignedUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
        {isSignedUp ? (
          <p className='mt-4 text-sm text-center text-gray-600'>
            Don't have an account?
            <span
              onClick={() => setIsSignedUp(false)}
              className='text-sky-600 hover:text-sky-500 cursor-pointer ml-1'>
              Register
            </span>
          </p>
        ) : (
          <p className='mt-4 text-sm text-center text-gray-600'>
            Already have an account?{" "}
            <span
              onClick={() => setIsSignedUp(true)}
              className='text-sky-600 hover:text-sky-500 cursor-pointer ml-1'>
              {" "}
              Sign in
            </span>
          </p>
        )}
      </div>
    </div>
=======
import FileBase from "react-file-base64";
import Loader from "../components/util/Loader";
import Error from "../components/util/Error";

const Auth = () => {
  const {
    onLogIn,
    formData,
    getUserCredentials,
    isSignedUp,
    setIsSignedUp,
    register,
    onLoad,
    setFormData,
    onError,
  } = useContext(AuthContext);

  return (
    <>
      {onLoad && <Loader />}

      {!onLoad && (
        <div className='flex items-center justify-center  h-screen '>
          <div className='w-full max-w-md p-8 rounded-lg shadow-lg  bg-gray-100'>
            {isSignedUp ? (
              <h2 className='mb-6 text-2xl font-bold text-center'>Sign In</h2>
            ) : (
              <h2 className='mb-6 text-2xl font-bold text-center'>Sign Up</h2>
            )}
            {onError && <Error />}
            <form onSubmit={isSignedUp ? onLogIn : register}>
              {!isSignedUp && (
                <div className='mb-4'>
                  <FileBase
                    className='form-control block mx-auto border border-gray-300 rounded-lg p-2 w-full text-center shadow-sm focus:ring focus:ring-indigo-200'
                    type='file'
                    id='image'
                    multiple={false}
                    placeholder='Upload your profile picture'
                    value={formData.userImage}
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, userImage: base64 })
                    }
                  />
                </div>
              )}
              <div className='mb-4'>
                <label
                  htmlFor='UserName'
                  className='block text-sm font-medium text-gray-700'>
                  User Name
                </label>
                <input
                  type='text'
                  id='UserName'
                  name='UserName'
                  className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                  placeholder='John0202'
                  value={formData.UserName}
                  onChange={getUserCredentials}
                />
              </div>

              {!isSignedUp && (
                <>
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
                      onChange={getUserCredentials}
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-gray-700'>
                      First Name
                    </label>
                    <input
                      type='firstName'
                      id='firstName'
                      name='firstName'
                      className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                      placeholder='John'
                      value={formData.firstName}
                      onChange={getUserCredentials}
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-medium text-gray-700'>
                      Last Name
                    </label>
                    <input
                      type='lastName'
                      id='lastName'
                      name='lastName'
                      className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                      placeholder='Baker'
                      value={formData.lastName}
                      onChange={getUserCredentials}
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='Phone Number'
                      className='block text-sm font-medium text-gray-700'>
                      Phone Number
                    </label>
                    <input
                      type='phoneNumber'
                      id='phoneNumber'
                      name='phoneNumber'
                      className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                      placeholder='Baker'
                      value={formData.phoneNumber}
                      onChange={getUserCredentials}
                    />
                  </div>
                </>
              )}
              {!isSignedUp && (
                <>
                  <div className='mb-4'>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-gray-700'>
                      Company
                    </label>
                    <input
                      type='company'
                      id='company'
                      name='company'
                      className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                      placeholder='Baker'
                      value={formData.company}
                      onChange={getUserCredentials}
                    />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='website'
                      className='block text-sm font-medium text-gray-700'>
                      Website
                    </label>
                    <input
                      type='website'
                      id='website'
                      name='website'
                      className='block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                      placeholder='JohnBaker.co.za'
                      value={formData.website}
                      onChange={getUserCredentials}
                    />
                  </div>
                </>
              )}
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
                  onChange={getUserCredentials}
                />
              </div>
              {!isSignedUp && (
                <div className='mb-4'>
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
                    onChange={getUserCredentials}
                  />
                </div>
              )}
              {!isSignedUp && (
                <>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center'>
                      <input
                        id='terms'
                        name='terms'
                        type='checkbox'
                        className='w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500'
                        checked={formData.terms}
                        onChange={getUserCredentials}
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
                  </div>
                </>
              )}
              <div>
                <button
                  type='submit'
                  className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-sky-600 border border-transparent rounded-md shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'>
                  {isSignedUp ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </form>

            {isSignedUp ? (
              <p className='mt-4 text-sm text-center text-gray-600'>
                Don't have an account?
                <span
                  onClick={() => setIsSignedUp(false)}
                  className='text-sky-600 hover:text-sky-500 cursor-pointer ml-1'>
                  Register
                </span>
              </p>
            ) : (
              <p className='mt-4 text-sm text-center text-gray-600'>
                Already have an account?{" "}
                <span
                  onClick={() => setIsSignedUp(true)}
                  className='text-sky-600 hover:text-sky-500 cursor-pointer ml-1'>
                  Sign in
                </span>
              </p>
            )}
          </div>
        </div>
      )}
    </>
>>>>>>> Stashed changes
  );
};

export default Auth;
