import React, { useState, CSSProperties, useEffect } from "react";
import Navigation from "./Navigation";
import App from "./../App";
import { Link } from "react-router-dom";
import Summary from "./Summary";

function Header() {
  // scroll position
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
  return (
    <header className="fixed top-0 w-full h-16 md:h-20">
      <div
        className={`${
          scrollPosition > 10 ? "bg-portefolio-blue3 bg-opacity-90" : ""
        } ${"flex flex-row justify-between items-center h-16 md:h-fit md:h20 px-10 py-10 md:py-6 md:px-20"}`}
      >
        <img
          src={process.env.PUBLIC_URL + "/logo192.png"}
          alt="logo"
          className="flex rounded-full object-cover h-12 w-12"
        />
        <div className="md:hidden items-center h-fit ">
          <Navigation className="" />
        </div>
        <div class="hidden md:flex w-4/5 justify-end">
          <Summary />
        </div>
      </div>
    </header>
  );
}

export default Header;
