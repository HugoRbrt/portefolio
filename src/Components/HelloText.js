import React, { useState, CSSProperties, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";

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
  const scrollScreen = () => {
    console.log("scrolling");
    window.scrollTo({
      top: window.innerHeight + 150,
      behavior: "smooth",
    });
  };
  return (
    <div className={`${hideText ? "hidden" : "flex"}`}>
      <div className=" flex-col w-fit md:flex-col pt-40 md:pt-60 pl-12 lg:pl-20 h-fit font-mono z-10">
        <div className="text-xs md:text-base z-20">hi, my name is</div>
        <div className="w-fit z-20 text-3xl md:text-6xl font-bold md:mt-5 ">
          hugo Robert.
        </div>
        <div className="w-fit  z-20 flex flex-col md:flex-row mt-8 md:mt-20 font-bold">
          <div className="w-fit text-lg md:text-5xl lg:text-6xl z-20">
            I'm a &nbsp;
          </div>
          <div className="w-fit text-2xl md:text-5xl lg:text-6xl z-20 text-yellow-500">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(200)
                  .deleteAll()
                  .typeString("Data Scientist")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Security consultant")
                  .pauseFor(300)
                  .deleteAll()
                  .typeString("Software engineer")
                  .pauseFor(3000)
                  .typeString(".")
                  .stop()
                  .start();
              }}
            />
          </div>
        </div>
        <div className=" w-fit z-20 mt-12 lg:mt-20 md:w-1/2 text-base lg:text-lg">
          I'm a 22 years old french student in the engineering school Grenoble
          INP Ensimag and I study computer science.
        </div>
      </div>
      <div
        className="absolute z-40 bottom-48 md:bottom-20 left-1/4"
        onClick={scrollScreen}
      >
        <button
          className={`${
            hideText ? "hidden" : "flex"
          } ${"flex z-40 h-12 items-center border-yellow-500 text-yellow-500 border-2 px-2 rounded-lg hover:bg-yellow-t-50"}`}
        >
          <div className="h-fit inline-block align-middle">Get started</div>

          <FontAwesomeIcon icon={faArrowDown} className="ml-3 text-xl" />
        </button>
      </div>
    </div>
  );
}

export default HelloText;
