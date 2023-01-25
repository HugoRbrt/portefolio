import React, { useState, CSSProperties, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";

function Schools({ im = "", reverse = false }) {
  return (
    <div className="h-40">
      <div
        className={`${
          reverse ? " flex-row-reverse" : " flex-row"
        } ${"flex w-screen -my-2 z-40 pt-12"}`}
      >
        <div className="">
          <img src={im} className="rounded-full w-12 h-12" />
        </div>
        <div> hello1</div>
        <div> hello2</div>
        <div> hello3</div>
      </div>
    </div>
  );
}

export default Schools;
