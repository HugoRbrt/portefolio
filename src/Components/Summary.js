import React from "react";
import Navigation from "./Navigation";
import App from "./../App";
import { Link } from "react-router-dom";

function Summary() {
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
    <div className="flex flex-col md:flex-row w-full md:w-4/5 items-center md:justify-between lg:justify-end space-y-20 md:space-y-0 lg:space-x-20 text-xl md:text-base pt-10 md:pt-0">
      <button
        className="h-fit w-fit md:w-18 hover:text-[#fdc500] hover:font-bold text-center"
        onClick={scrollToTop}
      >
        About me
      </button>
      <div className="h-fit w-fit md:w-12 hover:text-[#fdc500] hover:font-bold text-center">
        Projects
      </div>
      <div className="h-fit w-fit md:w-12 hover:text-[#fdc500] hover:font-bold text-center ">
        Experience
      </div>
      <button
        className="h-fit w-fit md:w-12 hover:text-[#fdc500] hover:font-bold text-center "
        onClick={scrollToBottom}
      >
        Contact
      </button>
    </div>
  );
}

export default Summary;
