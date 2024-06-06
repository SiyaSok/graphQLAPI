/** @format */

import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Hero from "../pages/Hero";

export default function Root() {
  return (
    <>
      <Nav />
      {/* <Hero /> */}
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
}
