import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

function Nav(props) {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-evenly">
        <h2 className="mx-2 basis-1/2">Brooke Paglia</h2>
        <nav className="basis-1/2 place-content-end">
          <ul className="flex flex-col md:flex-row justify-between">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Nav;
