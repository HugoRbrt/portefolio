import React, {useState, CSSProperties, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
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
    window.addEventListener("scroll", handleScroll, {passive: true});

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
    <div className={`${hideText ? "hidden" : "flex"} bg-transparent`}>
      <div className=" flex-col w-fit md:flex-col pt-40 md:pt-60 pl-12 lg:pl-20 h-fit font-mono z-10">
        <div className="text-base z-20">Hi, my name is</div>
        <div className="w-fit z-20 text-4xl md:text-6xl font-bold md:mt-5 ">
          Hugo Robert.
        </div>
        <div className=" w-4/5 z-20 mt-20 md:mt-12 lg:mt-20 md:w-1/2 text-base lg:text-lg">
          I'm a 23 years old french student in the MVA Master at ENS
          Paris-Saclay. I'm currently looking for an internship in the field of
          machine learning and computer vision.
        </div>
        <div className="w-4/5  z-20 flex flex-col md:flex-row mt-8 md:mt-20 font-bold">
          <div className="w-fit h-1/4 text-2xl md:text-4xl lg:text-5xl z-20 text-yellow-500">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Let’s scroll to find out more about me")
                  .pauseFor(200)
                  .typeString(".")
                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute z-40 bottom-20 md:bottom-20 w-40 right-0 left-0 mx-auto justify-center"
        onClick={scrollScreen}
      >
        <button
          className={`${
            hideText ? "flex" : "flex"
          } ${"z-40 mr-0 w-fit h-12 items-center border-yellow-500 px-2 rounded-xl bg-yellow-500 opacity-70 hover:opacity-100 text-black"}`}
        >
          <div className="h-fit inline-block align-middle">Get started</div>
          <FontAwesomeIcon icon={faArrowDown} className="ml-3 text-xl" />
        </button>
      </div>
    </div>
  );
}

export default HelloText;
