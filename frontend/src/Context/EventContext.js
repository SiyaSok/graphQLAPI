/** @format */

import { createContext, useState } from "react";
<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom";
=======
import { GraphQLRequest } from "../components/util/GraphQLRequest";
import { getFromData } from "../components/util/GetFromData";
import axios from "axios"; // Ensure axios is imported
>>>>>>> Stashed changes

export const EventContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [EventsData, setEventsData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    date: "",
    categories: "",
  });
  const [onLoad, setOnLoad] = useState(false);
  const [onError, setError] = useState("");

  const getAllEvents = async (e) => {
    // e.preventDefault();

    console.log("working");

    const data = JSON.stringify({
      query:
        "query { events { _id date description price title eventImage creator  { email  } } }",
    });
    try {
      const response = await GraphQLRequest(data);
      setEventsData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserCredentials = (e) => {
    getFromData(e, EventsData, setEventsData);
    console.log(EventsData);
  };

  const createEvent = async (e, token) => {
    e.preventDefault();

    let data = JSON.stringify({
      query: `mutation MyMutation { 
    createEvent(eventInput: { 
      title: "${EventsData.title}",
      description: "${EventsData.description}",
      price: ${EventsData.price},
      date: "${EventsData.date.toString()}",
      eventImage: "${EventsData.image}",
    }) { 
      _id 
      date 
      description 
      price 
      title 
      eventImage
    } 
  }`,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/graphql",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
<<<<<<< Updated upstream

      setEventsData(response.data.data);
      console.log(response.data.data);
=======
      console.log({ response });
>>>>>>> Stashed changes
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <EventContext.Provider
      value={{
        getAllEvents,
        createEvent,
        getUserCredentials,
        EventsData,
        setEventsData,
        onLoad,
        onError,
      }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventsContextProvider;
