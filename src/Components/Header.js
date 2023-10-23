import React, {useState, CSSProperties, useEffect} from "react";
import Navigation from "../Tools/Navigation";
import App from "./../App";
import {Link} from "react-router-dom";
import Summary from "./Summary";

function Header({References}) {
  // scroll position
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
  return (
    <header className="fixed top-0 w-full h-16 md:h-20 z-50">
      <div>
        <div
          className={`${
            scrollPosition > 150 ? "" : ""
          } ${"flex flex-row justify-between items-center h-16 md:h-fit px-10 py-10 md:py-6 md:px-20 z-50"}`}
        >
          <img
            src={process.env.PUBLIC_URL + "/logo192.png"}
            alt="logo"
            className="flex rounded-full object-cover h-12 w-12 z-50"
          />
          <div className="md:hidden items-center h-fit right-0 z-50 ">
            <Navigation className="" References={References} />
          </div>
          <div>
            <Summary References={References} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
