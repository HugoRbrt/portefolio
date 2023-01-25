import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full flex-col bottom-0 pb-20 pt-10 px-4 md:px-10 lg:px-20 bg-transparent text-white z-40">
      <div className="w-full flex flex-row justify-center text-center gap-5 md:gap-10 lg:gap-12 py-10 lg:space-y-0 text-xs md:text-base lg:text-xl uppercase z-40">
        <button className="z-40" onClick={scrollToTop}>
          about me
        </button>
        <button className=" z-40">projects</button>
        <button className=" z-40">experience</button>
        <button className=" z-40">education</button>
      </div>
      <div className="w-full flex flex-col space-y-5 pt-10 lg:flex-row-reverse lg:space-y-0 border-gray-700 border-t-2 z-40">
        <span className="flex place-self-center w-full lg:w-1/3 align-middle justify-center lg:justify-end">
          <div className="text-xs md:text-base z-40">
            see the git repository on GitHub
          </div>
        </span>
        <span className="flex flex-row justify-center text-3xl space-x-3 w-full lg:w-1/3 z-40">
          <a href="https://www.linkedin.com/in/robert-hugo z-40">
            <FontAwesomeIcon icon={faLinkedin} href="" />
          </a>
          <a href="https://github.com/hugorbrt">
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </span>

        <span className="flex place-self-center w-full lg:w-1/3 align-middle justify-center lg:justify-start z-40">
          <div className="text-xs md:text-base z-40">
            &copy; 2023 Hugo Robert
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
