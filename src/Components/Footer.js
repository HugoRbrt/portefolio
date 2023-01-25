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
    <footer className="w-full flex-col bottom-0 pb-20 pt-10 px-4 md:px-10 lg:px-20 bg-portefolio-blue3 text-white ">
      <div className="w-full flex flex-row justify-center text-center gap-5 md:gap-10 lg:gap-12 py-10 lg:space-y-0 text-xs md:text-base lg:text-xl uppercase">
        <button className="" onClick={scrollToTop}>
          about me
        </button>
        <button className="">projects</button>
        <button className="">experience</button>
        <button className="">education</button>
      </div>
      <div className="w-full flex flex-col space-y-5 pt-10 lg:flex-row-reverse lg:space-y-0 border-gray-700 border-t-2">
        <span className="flex place-self-center w-full lg:w-1/3 align-middle justify-center lg:justify-end">
          <div className="text-xs md:text-base">
            see the git repository on GitHub
          </div>
        </span>
        <span className="flex flex-row justify-center text-3xl space-x-3 w-full lg:w-1/3">
          <a href="https://www.linkedin.com/in/robert-hugo">
            <FontAwesomeIcon icon={faLinkedin} href="" />
          </a>
          <a href="https://github.com/hugorbrt">
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </span>

        <span className="flex place-self-center w-full lg:w-1/3 align-middle justify-center lg:justify-start">
          <div className="text-xs md:text-base">&copy; 2023 Hugo Robert</div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
