import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import HelloText from "./HelloText";

function HelloPage({hideText = false}) {
  return (
    <div className=" sticky top-0 w-screen h-screen to-portefolio-blue3 from-black bg-gradient-to-b -z-30">
      <div id="particles-js" className="absolute h-screen w-screen z-30"></div>
      <HelloText />
    </div>
  );
}

export default HelloPage;
