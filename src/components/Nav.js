import React from "react";

function Nav(props) {
  return (
    <header className="flex flex-col md:flex-row justify-evenly">
      <h2 className="mx-2 basis-1/2">Brooke Paglia</h2>
      <nav className="basis-1/2 place-content-end">
        <ul className="flex flex-col md:flex-row justify-between">
          {props.links.map((link) => (
            <li className="mx-2" key={link}>
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
