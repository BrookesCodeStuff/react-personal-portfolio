import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex flex-col md:flex-row">
      <header className="bg-gray-800 text-gray-300 flex flex-col justify-center md:flex-row md:justify-around">
        <h2 className="font-hand mx-2 text-6xl self-center">Brooke Paglia</h2>
        <nav className="self-center md:self-end">
          <ul className="flex flex-row flex-wrap md:flex-row md:flex-nowrap self-center md:place-self-end justify-center content-center uppercase w-screen">
            <li className="p-2 text-center basis-1/2 hover:bg-gray-200 hover:text-gray-900">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? "underline underline-offset-4" : ""
                }>
                About
              </NavLink>
            </li>
            <li className="p-2 text-center basis-1/2 hover:bg-gray-200 hover:text-gray-900">
              <NavLink
                to="/portfolio"
                className={(navData) =>
                  navData.isActive ? "underline underline-offset-4" : ""
                }>
                Portfolio
              </NavLink>
            </li>
            <li className="p-2 text-center basis-1/2 hover:bg-gray-200 hover:text-gray-900">
              <NavLink
                to="/contact"
                className={(navData) =>
                  navData.isActive ? "underline underline-offset-4" : ""
                }>
                Contact
              </NavLink>
            </li>
            <li className="p-2 text-center basis-1/2 hover:bg-gray-200 hover:text-gray-900">
              <NavLink
                to="/resume"
                className={(navData) =>
                  navData.isActive ? "underline underline-offset-4" : ""
                }>
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
