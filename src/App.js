import React from "react";
import "./tailwind.css";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
    <div className="bg-portefolio-blue3 text-white">
      <div className="relative">
        <div className="relative"></div>
        <Header className="fixed bg-portefolio-blue3 md:bg-transparent p-3 top-0 w-full h-14 z-50" />

        <div className="relative h-screen to-[#0b1829] from-black bg-gradient-to-b z-10">
          <div
            id="particles-js"
            className="absolute h-screen w-screen z-10"
          ></div>
          <div className="flex flex-col md:flex-col pt-40 md:pt-60 pl-12 lg:pl-20 h-fit font-mono z-20">
            <div className="text-xs md:text-base z-20">hi, my name is</div>
            <div className=" z-20 text-3xl md:text-6xl font-bold md:mt-5 ">
              hugo Robert.
            </div>
            <div className=" z-20 flex flex-col md:flex-row mt-8 md:mt-20 font-bold">
              <div className="text-lg md:text-5xl lg:text-7xl z-20">
                I'm a &nbsp;
              </div>
              <div className="text-2xl md:text-5xl lg:text-7xl  z-20 text-yellow-500">
                Software Engineer
              </div>
            </div>
            <div className=" z-20 mt-12 md:mt-20 w-4/5 md:w-1/2 text-base lg:text-lg">
              I'm a 22 years old french student in the engineering school
              Grenoble INP Ensimag and I study computer science.
            </div>
            <button className="z-20 mt-20" onClick={() => scrollToToProject()}>
              GET STARTED
            </button>
          </div>
        </div>
        <div className="h-screen bg-portefolio-yellow1"></div>
      </div>
      <Footer className="border-t p-3 bg-blue-50 absolute bottom-0 w-full" />
    </div>
  );
}

export default App;
