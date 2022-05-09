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
      <div className="flex flex-col h-screen z-1">
        <Nav />
        <div className="w-3/4 flex-grow opacity-95 bg-gray-800 text-gray-300 mx-auto p-4 mb-auto">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Resume" element={<Resume />} />
          </Routes>
        </div>
        <div className="p-4 bg-gray-800">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
