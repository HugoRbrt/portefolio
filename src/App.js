import React, {useState, CSSProperties, useEffect, useRef} from "react";
import "./tailwind.css";
import Counter from "./Tools/Counter";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HelloPage from "./Components/HelloPage";
import "./particles.js";
import "./particles.json";
import Schools from "./Components/Schools";
import Experiences from "./Components/Experiences";

function App() {
  // particle framework
  particlesJS.load("particles-js", "particles.json");
  //references
  const refSchools = useRef(null);
  const scrollToSchools = () => {
    refSchools.current.scrollIntoView({behavior: "smooth"});
    console.log("scrolling");
  };
  const refSkills = useRef(null);
  const scrollToSkills = () => {
    refSkills.current.scrollIntoView({behavior: "smooth"});
    console.log("scrolling2");
  };
  const refContact = useRef(null);
  const scrollToContact = () => {
    refContact.current.scrollIntoView({behavior: "smooth"});
    console.log("scrolling3");
  };
  const refExperiences = useRef(null);
  const scrollToExperiencess = () => {
    refExperiences.current.scrollIntoView({behavior: "smooth"});
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
            scrollToExperiencess,
            scrollToSkills,
            scrollToContact,
          ]}
        />
        <HelloPage />
        <div className="flex w-screen z-20 -mb-48" ref={refSchools}>
          <Schools />
        </div>
        <div className="flex w-screen z-20" ref={refExperiences}>
          <Experiences />
        </div>
        <div
          className="flex flex-col w-screen z-20 -translate-y-40 -mb-40 -mt-32"
          ref={refSkills}
        >
          <Skills />
        </div>
        <div
          className="flex flex-col w-screen z-20 -translate-y-40 -mb-40"
          ref={refContact}
        >
          <Contact />
        </div>
        <Footer
          className="flex border-t p-3 bottom-0 w-full z-20 "
          References={[
            scrollToTop,
            scrollToSchools,
            scrollToExperiencess,
            scrollToSkills,
            scrollToContact,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
