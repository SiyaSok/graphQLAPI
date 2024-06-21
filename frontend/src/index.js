/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Auth from "./pages/Auth";
import Events, { eventsLoader } from "./pages/Events";
import Bookings from "./pages/Bookings";

// Define your router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
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
        loader: eventsLoader,
      },
      {
        path: "bookings",
        element: <Bookings />,
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
