import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
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
      </main>
      <Footer />
    </>
  );
}
export default App;
