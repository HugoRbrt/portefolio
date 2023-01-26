import React, { useState, CSSProperties, useEffect, useRef } from "react";
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
    // scroll
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  // particle framework
  particlesJS.load("particles-js", "particles.json");
  //references
  const refSchools = useRef(null);
  const scrollToSchools = () => {
    refSchools.current.scrollIntoView({ behavior: "smooth" });
    console.log("scrolling");
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-portefolio-blue3 text-white w-screen">
      <div className="relative w-screen z-20">
        <Header
          className="fixed md:bg-transparent p-3 top-0 w-screen h-14 z-50"
          References={[
            scrollToTop,
            scrollToSchools,
            scrollToSchools,
            scrollToSchools,
          ]}
        />
        <HelloPage />
        <div className="flex w-screen z-20" ref={refSchools}>
          <Schools />
        </div>
        <button className="flex h-screen bg-black" onClick={scrollToSchools}>
          {" "}
          link
        </button>
        <Footer
          className="flex border-t p-3 bottom-0 w-full z-20 "
          References={[
            scrollToTop,
            scrollToSchools,
            scrollToSchools,
            scrollToSchools,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
