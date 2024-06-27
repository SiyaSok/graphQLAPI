/** @format */

import axios from "axios";
import { createContext, useState } from "react";

export const EventContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [EventsData, setEventsData] = useState({});

  const getAllEvents = async (e) => {
    const data = JSON.stringify({
      query:
        "query { events { _id date description price title creator { email  } } }",
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
      setEventsData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EventContext.Provider value={{ getAllEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventsContextProvider;
