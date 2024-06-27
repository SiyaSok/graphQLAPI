/** @format */

import { useLoaderData } from "react-router-dom";
import axios from "axios";

function Events() {
  const events = useLoaderData();

  console.log(events);

  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h1 className='text-4xl font-bold text-start mb-8 p-6'>Events</h1>
      {events.length > 0 ? (
        <ul className='space-y-6'>
          {events.map((event) => (
            <li
              key={event._id}
              className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <h2 className='text-2xl font-semibold mb-2'>{event.title}</h2>
              <p className='text-gray-700 mb-4'>{event.description}</p>
              <div className='text-gray-500 text-sm'>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Price: R{event.price}</p>
                <p>Creator: {event.creator.email}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-center text-gray-500'>No events available.</p>
      )}
    </div>
  );
}
export const eventsLoader = async () => {
  const data = JSON.stringify({
    query:
      "query { events { _id date description price title creator { email } } }",
  });

  const config = {
    method: "POST",
    url: "/graphql",
    headers: {
      "Accept-Language": "en-US,en;q=0.9",
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    return response.data.data.events;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default Events;
