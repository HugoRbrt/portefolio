import React, { useState, CSSProperties, useEffect } from "react";
import "./tailwind.css";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HelloPage from "./Components/HelloPage";
import "./particles.js";
import "./particles.json";
import Schools from "./Components/Schools";

function App() {
  const scrollToToProject = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load("particles-js", "particles.json");
  return (
    <div className="bg-portefolio-blue3 text-white w-screen">
      <div className="relative w-screen z-20">
        <Header className="fixed md:bg-transparent p-3 top-0 w-full h-14 z-50" />
        <HelloPage />
        <div className="flex z-20">
          <Schools />
        </div>

        <Footer className="flex border-t p-3 bottom-0 w-full z-20 " />
      </div>
    </div>
  );
}

export default App;
