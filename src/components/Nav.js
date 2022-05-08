import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

function Nav(props) {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-gray-300 flex flex-col justify-center md:flex-row md:justify-around">
        <h2 className="font-hand mx-2 text-6xl self-center">Brooke Paglia</h2>
        <nav className="self-center md:self-end">
          <ul className="flex flex-row flex-wrap md:flex-row self-center md:place-self-end justify-center content-center uppercase w-screen">
            <li className="p-2 text-center basis-1/2 hover:bg-gray-200 hover:text-gray-900">
              <Link to="/">About</Link>
            </li>
            <li className="p-2 text-center basis-1/2 hover:bg-gray-200 hover:text-gray-900">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="p-2 text-center basis-1/2 hover:bg-gray-200 hover:text-gray-900">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-2 text-center basis-1/2 hover:bg-gray-200 hover:text-gray-900">
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="w-3/4 flex-grow opacity-95 bg-gray-800 text-gray-300 mx-auto p-4 shadow-black shadow-lg mb-auto -z-50">
        <Outlet />
      </div>
      <div className="p-4 bg-gray-800 z-99">
        <Footer />
      </div>
    </div>
  );
}

export default Nav;
