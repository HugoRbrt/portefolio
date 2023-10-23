import React, {useState, CSSProperties, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faGraduationCap,
  faLaptop,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

function Summary({References}) {
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
  let yellowBackground = false;
  if (scrollPosition > 800 && scrollPosition < 2800) {
    yellowBackground = true;
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToCareer = () => {
    window.scrollTo({
      top: 1000,
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
    <div className="flex flex-col md:flex-row w-full md:w-11/12 items-center md:justify-between lg:justify-end space-y-20 md:space-y-0 lg:space-x-20 text-xl md:text-base pt-10 md:pt-0 z-50">
      <div className="hidden">{scrollPosition}</div>
      <button
        className={`${
          yellowBackground ? "hover:text-[#003f88]" : "hover:text-[#fdc500]"
        } ${"h-fit w-18 lg:w-fit font-bold text-center items-center z-50 hover:scale-110 flex flex-row md:flex-col lg:flex-row"}`}
        onClick={References[0]}
      >
        <FontAwesomeIcon icon={faAddressCard} className="pr-2" />
        About me
      </button>
      <button
        className={`${
          yellowBackground ? "hover:text-[#003f88]" : "hover:text-[#fdc500]"
        } ${"h-fit w-18 lg:w-fit font-bold text-center items-center z-50 hover:scale-110 flex flex-row md:flex-col lg:flex-row"}`}
        onClick={References[1]}
      >
        <FontAwesomeIcon icon={faGraduationCap} className="pr-2" />
        education
      </button>
      <button
        className={`${
          yellowBackground ? "hover:text-[#003f88]" : "hover:text-[#fdc500]"
        } ${"h-fit w-18 lg:w-fit font-bold text-center items-center z-50 hover:scale-110 flex flex-row md:flex-col lg:flex-row"}`}
        onClick={References[2]}
      >
        <FontAwesomeIcon icon={faLaptop} className="pr-2" />
        Experience
      </button>
      <button
        className={`${
          yellowBackground ? "hover:text-[#003f88]" : "hover:text-[#fdc500]"
        } ${"h-fit w-18 lg:w-fit font-bold text-center items-center z-50 hover:scale-110 flex flex-row md:flex-col lg:flex-row"}`}
        onClick={References[3]}
      >
        <FontAwesomeIcon icon={faAddressBook} className="pr-2" />
        Contact
      </button>
    </div>
  );
}

export default Summary;
