import React, { useState, CSSProperties, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import School from "./School";

function Schools() {
  return (
    <div classname="">
      <div className="flex w-screen h-72 overflow-hidden py-20 -mb-32 -z-10">
        <div className="flex h-40 w-full scale-x-110 -rotate-6 bg-portefolio-yellow1 -z-20"></div>
      </div>
      <div className="flex flex-col h-screen bg-portefolio-yellow1 pt-20 items-center text-[#0b1829]">
        <div className="flex right-0 left-0 mx-auto text-center align-middle text-6xl">
          My path
        </div>
        <School im={process.env.PUBLIC_URL + "/logo192.png"} reverse={true} />
        <School im="" />
        <School im="" />
      </div>
    </div>
  );
}

export default Schools;
