import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [links] = useState(["about", "portfolio", "contact", "resume"]);

  return (
    <header className="bg-gray-800 text-gray-300 flex flex-col justify-center md:flex-row md:justify-between pb-0 md:pb-3 content-center place-content-center">
      <h2 className="font-hand mx-2 text-6xl self-center">Brooke Paglia</h2>
      <nav className="">
        <ul className="flex flex-row flex-wrap md:flex-row md:flex-nowrap self-center md:place-self-end justify-center content-center uppercase w-screen md:w-1/3">
          {links.map((link) => (
            <li
              key={link}
              className="p-2 text-center basis-1/2 md:basis-auto hover:bg-gray-200 hover:text-gray-900">
              <NavLink
                to={link === "about" ? "/" : link}
                className={(navData) =>
                  navData.isActive ? "underline underline-offset-4" : ""
                }>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
