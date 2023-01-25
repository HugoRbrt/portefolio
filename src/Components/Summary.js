import React, { useState, CSSProperties, useEffect } from "react";
import Navigation from "./Navigation";
import App from "./../App";
import { Link } from "react-router-dom";

function Summary() {
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
  let yellowBackground = false;
  if (scrollPosition > 800) {
    yellowBackground = true;
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: 100000000,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col md:flex-row w-full md:w-5/6 items-center md:justify-between lg:justify-end space-y-20 md:space-y-0 lg:space-x-20 text-xl md:text-base pt-10 md:pt-0 z-50">
      <div>{scrollPosition}</div>
      <button
        className={`${
          yellowBackground ? "hover:text-[#003f88]" : "hover:text-[#fdc500]"
        } ${"h-fit w-18 lg:w-fit font-bold text-center z-50"}`}
        onClick={scrollToTop}
      >
        About me
      </button>
      <div
        className={`${
          yellowBackground ? "hover:text-[#003f88]" : "hover:text-[#fdc500]"
        } ${"h-fit w-fit md:w-12 lg:w-fit font-bold text-center z-50"}`}
        onClick={scrollToTop}
      >
        Projects
      </div>
      <div
        className={`${
          yellowBackground ? "hover:text-[#003f88]" : "hover:text-[#fdc500]"
        } ${"h-fit w-fit md:w-12 lg:w-fit font-bold text-center z-50"}`}
      >
        Experience
      </div>
      <button
        className={`${
          yellowBackground ? "hover:text-[#003f88]" : "hover:text-[#fdc500]"
        } ${"h-fit w-fit md:w-12 lg:w-fit font-bold text-center z-50"}`}
        onClick={scrollToBottom}
      >
        Contact
      </button>
    </div>
  );
}

export default Summary;
