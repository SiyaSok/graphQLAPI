/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Auth from "./pages/Auth";
import Bookings from "./pages/Bookings";
import Hero from "./components/Hero";
import AccountInfo, { profileLoader } from "./pages/AccountInfo";
import AddEvent from "./pages/Events/AddEvent";
import Events from "./pages/Events/Events";
import EventsList, { eventsLoader } from "./pages/Events/EventsList";

// Define your router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // This will act as the default child for "/"
        element: <Hero />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "events",
        element: <Events />,
        children: [
          {
            path: "event-list",
            element: <EventsList />,
            loader: eventsLoader,
          },
          {
            path: "add-event",
            element: <AddEvent />,
          },
        ],
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "account",
        element: <AccountInfo />,
        loader: profileLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
