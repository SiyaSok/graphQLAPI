/** @format */

import { Outlet } from "react-router-dom";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import AuthContextProvider from "../Context/AuthContext";
import EventsContextProvider from "../Context/EventContext";

export default function Root() {
  return (
    <EventsContextProvider>
      <AuthContextProvider>
        <Nav />
        <div id='detail'>
          <Outlet />
        </div>
        <Footer />
      </AuthContextProvider>
    </EventsContextProvider>
  );
}
