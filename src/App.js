import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen z-1">
      <Nav />
      <div className="w-3/4 md:w-1/2 flex-grow opacity-95 bg-gray-800 text-gray-300 mx-auto p-4 mb-auto">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <div className="p-4 bg-gray-800 w-full">
        <Footer />
      </div>
    </div>
  );
}
export default App;
