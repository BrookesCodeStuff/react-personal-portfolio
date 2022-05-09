import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
