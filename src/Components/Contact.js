import React, {useState, CSSProperties, useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function Contact() {
  return (
    <div>
      <div className="flex w-screen overflow-hidden py-20 -mb-36 -z-10 bg-gradient-to-b from-transparent">
        <div className="flex h-32 w-full scale-x-110 rotate-3 bg-white"></div>
      </div>
      <div className="flex flex-col bg-white text-portefolio-blue2 w-screen text-center text-4xl uppercase font-extrabold">
        <div className="font-bold pb-4 text-3xl md:text-5xl bg-clip-text flex right-0 left-0 mx-auto text-center align-middle z-20">
          How to contact me?
        </div>
        <div className="flex flex-row w-full pt-8 pb-12 space-x-8 md:space-x-20 items-center justify-center text-6xl md:text-8xl z-20">
          <motion.div
            whileHover={{scale: 1.25}}
            transition={{type: "spring", stiffness: 400, damping: 10}}
          >
            <a
              href="https://www.linkedin.com/in/robert-hugo"
              className="md:h-1/4 text-blue-600 hover:scale-125"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </motion.div>
          <motion.div
            whileHover={{scale: 1.25}}
            transition={{type: "spring", stiffness: 400, damping: 10}}
          >
            <a
              href="https://github.com/hugorbrt"
              className="md:h-1/4 text-gray-700 hover:scale-125"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </motion.div>
          <motion.div
            whileHover={{scale: 1.25}}
            transition={{type: "spring", stiffness: 400, damping: 10}}
          >
            <a
              href="mailto: hugo.robert@ens-paris-saclay.fr"
              className="md:h-1/4 text-yellow-400"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
