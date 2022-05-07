import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [links, setLinks] = useState(["about", "portfolio", "contact"]);
  const [currentLink, setCurrentLink] = useState(links[0]);

  return (
    <>
      <Nav
        links={links}
        setLinks={setLinks}
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      />
      <main>
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
export default App;
