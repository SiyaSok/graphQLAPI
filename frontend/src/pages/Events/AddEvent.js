/** @format */

import React, { useContext } from "react";
import "tailwindcss/tailwind.css";
import { EventContext } from "../../Context/EventContext";
import FileBase from "react-file-base64";
import Loader from "../../components/util/Loader";
import Error from "../../components/util/Error";
import { InputField } from "../../components/util/InputField";
import { AuthContext } from "../../Context/AuthContext";

const AddEvent = () => {
  const {
    createEvent,
    getUserCredentials,
    EventsData,
    setEventsData,
    onLoad,
    onError,
  } = useContext(EventContext);
  const { onlogedIn } = useContext(AuthContext);

  const submitEvent = (e) => {
    createEvent(e, onlogedIn.token);
  };

  return (
    <>
      {onLoad && <Loader />}

      {!onLoad && (
        <div className='flex justify-center h-screen'>
          <div className='w-full p-8 rounded-lg shadow-lg bg-gray-100'>
            <h2 className='mb-6 text-2xl font-bold text-center'>
              Add New Events
            </h2>

            {onError && <Error />}

            <form onSubmit={submitEvent}>
              {/* File Upload */}
              <div className='mb-4'>
                <FileBase
                  className='form-control block mx-auto border border-gray-300 rounded-lg p-2 w-full text-center shadow-sm focus:ring focus:ring-indigo-200'
                  type='file'
                  id='image'
                  multiple={false}
                  placeholder='Upload your image'
                  value={EventsData.image}
                  onDone={({ base64 }) =>
                    setEventsData({ ...EventsData, image: base64 })
                  }
                />
              </div>

              {/* Event Title */}
              <InputField
                id='title'
                label='Event Title'
                type='text'
                placeholder='John0202'
                value={EventsData.title}
                onChange={getUserCredentials}
              />

              {/* Event Title */}
              <InputField
                id='venue'
                label='Event Venue'
                type='text'
                placeholder='Venue'
                value={EventsData.venue}
                onChange={getUserCredentials}
              />

              {/* Event Description */}
              <InputField
                id='description'
                label='Event Description'
                type='textarea'
                placeholder='Description'
                value={EventsData.description}
                onChange={getUserCredentials}
              />

              {/* Event Price */}
              <InputField
                id='price'
                label='Event Price'
                type='number'
                placeholder='Price'
                value={EventsData.price}
                onChange={getUserCredentials}
              />

              {/* Event date */}
              <InputField
                id='date'
                label='Event date'
                type='date'
                placeholder='date'
                value={EventsData.date}
                onChange={getUserCredentials}
              />

              {/* Event categories */}
              <InputField
                id='categories'
                label='Event categories'
                type='text'
                placeholder='categories'
                value={EventsData.categories}
                onChange={getUserCredentials}
              />

              {/* Submit Button */}
              <div>
                <button
                  type='submit'
                  className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-sky-600 border border-transparent rounded-md shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'>
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEvent;
