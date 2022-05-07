import React, { useState } from "react";
import Nav from "./components/Nav";
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
      <main></main>
      <Footer />
    </>
  );
}
export default App;
