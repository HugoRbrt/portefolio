import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer({References}) {
  return (
    <footer className="w-full flex-col bottom-0 pb-10 md:pb-20 pt-10 px-4 md:px-10 lg:px-20 bg-transparent text-white z-40">
      <div className="w-full flex flex-row justify-center text-center gap-5 md:gap-10 lg:gap-12 py-6 lg:space-y-0 text-xs md:text-base lg:text-xl uppercase z-40">
        <button
          className="z-40 hover:text-portefolio-yellow2 font-light lg:w-1/12"
          onClick={References[0]}
        >
          about me
        </button>
        <button
          className="z-40 hover:text-portefolio-yellow2 font-light lg:w-1/12"
          onClick={References[1]}
        >
          education
        </button>
        <button
          className="z-40 hover:text-portefolio-yellow2 font-light lg:w-1/12"
          onClick={References[2]}
        >
          experience
        </button>
        <button
          className="z-40 hover:text-portefolio-yellow2 font-light lg:w-1/12"
          onClick={References[3]}
        >
          skills
        </button>
      </div>
      <div className="w-full flex flex-col space-y-5 pt-10 lg:flex-row-reverse lg:space-y-0 border-gray-700 border-t-2 justify-between z-40">
        <span className="flex flex-row place-self-center w-full lg:w-1/3 align-middle justify-center lg:justify-end">
          <a
            className="flex flex-row items-center space-x-3"
            href="https://github.com/HugoRbrt/portefolio"
          >
            <div className="text-xs md:text-base z-40 font-light">
              see the git repository
            </div>
            <div className="text-lg">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>
        </span>
        <span className="hidden flex-row justify-center text-3xl space-x-3 w-full lg:w-1/3 z-40">
          <a href="https://www.linkedin.com/in/robert-hugo">
            <FontAwesomeIcon icon={faLinkedin} href="" />
          </a>
          <a href="https://github.com/hugorbrt">
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </span>

        <span className="flex place-self-center w-full lg:w-1/3 align-middle justify-center lg:justify-start z-40">
          <div className="text-xs md:text-base z-40 font-light">
            &copy; 2023 Hugo Robert
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
