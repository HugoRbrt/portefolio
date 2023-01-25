import React, { useState, CSSProperties, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function HelloText() {
  // scroll position
  let hideText = false;
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (scrollPosition > 1000) {
    hideText = true;
  }
  return (
    <div
      className={`${
        hideText ? "hidden" : "flex"
      }${" flex-col w-fit md:flex-col pt-40 md:pt-60 pl-12 lg:pl-20 h-fit font-mono z-10"}`}
    >
      <div className="text-xs md:text-base z-20">hi, my name is</div>
      <div className="w-fit z-20 text-3xl md:text-6xl font-bold md:mt-5 ">
        hugo Robert.
      </div>
      <div className="w-fit  z-20 flex flex-col md:flex-row mt-8 md:mt-20 font-bold">
        <div className="w-fit text-lg md:text-5xl lg:text-7xl z-20">
          I'm a &nbsp;
        </div>
        <div className="w-fit text-2xl md:text-5xl lg:text-7xl z-20 text-yellow-500">
          Software Engineer
        </div>
      </div>
      <div className=" w-fit z-20 mt-12 md:mt-20 md:w-1/2 text-base lg:text-lg">
        I'm a 22 years old french student in the engineering school Grenoble INP
        Ensimag and I study computer science.
      </div>
      <button className="w-fit z-20 mt-20" onClick={() => scrollToToProject()}>
        GET STARTED
      </button>
    </div>
  );
}

export default HelloText;
