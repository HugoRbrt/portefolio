import React, { useState, CSSProperties, useEffect } from "react";
import "./tailwind.css";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HelloPage from "./Components/HelloPage";
import "./particles.js";
import "./particles.json";

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
        <div className="w-screen h-72 overflow-hidden py-20 -mb-32 z-20">
          <div className="flex h-40 w-full scale-x-110 -rotate-6 bg-portefolio-yellow1 z-20"></div>
        </div>
        <div className="flex h-screen bg-portefolio-yellow1 -my-2 z-40"></div>
        <Footer className="flex border-t p-3 bottom-0 w-full z-20 " />
      </div>
    </div>
  );
}

export default App;
