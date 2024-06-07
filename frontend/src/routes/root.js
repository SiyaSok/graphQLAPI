/** @format */

import { Outlet } from "react-router-dom";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";

export default function Root() {
  return (
    <>
      <Nav />
      <div id='detail'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
