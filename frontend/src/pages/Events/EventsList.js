/** @format */

import { useLoaderData } from "react-router-dom";
import { GraphQLRequest } from "../../components/util/GraphQLRequest";
import Loader from "../../components/util/Loader";

function EventsList() {
  const events = useLoaderData();
  console.log(events);

  return (
    <>
      {!events && <Loader />}

      {events && (
        <div className='py-8'>
          <h1 className='text-4xl font-bold text-start mb-8 p-6'>Events</h1>
          {events.length > 0 ? (
            <ul className='space-y-6 w-full'>
              {events.map((event) => (
                <div className=' w-full bg-white rounded-xl shadow-md overflow-hidden '>
                  <div className='md:flex'>
                    <div className='md:shrink-0'>
                      <img
                        className='h-48 w-full object-cover md:h-full md:w-48'
                        src={event.eventImage}
                        alt={event.title}
                      />
                    </div>
                    <div className='p-8'>
                      <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                        {event.date}
                      </div>
                      <a
                        href='/'
                        className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
                        {event.title}
                      </a>
                      <p className='mt-2 text-slate-500'>{event.description}</p>
                      <div className='pt-2'>
                        <div className='uppercase tracking-wide text-sm text-blue-500 font-semibold'>
                          R{event.price}
                        </div>
                      </div>
                      <div className='tracking-wide text-xs text-slate-500 mt-2 '>
                        {event.creator.firstName}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p className='text-center text-gray-500'>No events available.</p>
          )}
        </div>
      )}
    </>
  );
}

export const eventsLoader = async () => {
  const data = JSON.stringify({
    query:
      "query { events { _id date description price title eventImage creator { email userImage firstName} } }",
  });

  try {
    const response = await GraphQLRequest(data);
    return response.data.data.events;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default EventsList;
