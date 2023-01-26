import React, { useState, CSSProperties, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { useTransition, animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";

function Schools({
  im = "",
  school = "",
  formation = "",
  description = "",
  reverse = false,
  position = "",
  bgcolor = "",
  txtcolor = "",
}) {
  const [isMobile, setIsMobile] = useState(false);
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  let content = (
    <div
      className={`${
        reverse ? " flex-row-reverse" : " flex-row"
      } ${"flex w-full h-full z-40"}`}
    >
      <img
        src={im}
        className="object-contain rounded-3xl right-0 w-3/5 h-full z-10"
      />
      <div className="flex flex-col h-full w-full">
        <div
          className={`${
            reverse ? "justify-end" : ""
          } ${txtcolor} ${"flex flex-row space-x-3 h-24 px-2"}`}
        >
          <div className="flex h-full items-end text-sm">{formation}</div>
        </div>
        <div
          className={`${
            reverse ? "justify-end" : ""
          } ${txtcolor} ${"text-capgemini flex h-full items-end text-5xl font-bold px-8 pb-2"}`}
        >
          {school}
        </div>
        <div
          className={`${
            reverse ? "translate-x-20 " : "-translate-x-20 "
          } ${" z-20"}`}
        >
          <motion.div
            className={`${bgcolor} ${"flex w-full h-40 text-xs md:translate-y-8 lg:translate-y-0 lg:text-base rounded-2xl shadow-2xl p-4 items-center left-0 hover:shadow-inner text-justify text-white"}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {description}
          </motion.div>
        </div>
        <div
          className={`${
            reverse ? "justify-end " : "justify-start "
          }${"hidden lg:flex"}`}
        >
          <img src={position} className="object-fill p-4 w-28"></img>
        </div>
      </div>
    </div>
  );
  if (window.innerWidth < 768) {
    content = (
      <div
        className={`${
          reverse ? "mx-8 ml-20" : "mx-6 mr-20"
        } ${"flex flex-col w-2/3 z-40 text-[#0b1829] overflow-hidden rounded-xl"}`}
      >
        <img src={im} className="object-contain w-full h-1/2 top-0" />
        <div className={`${bgcolor} ${" h-fit  text-white"}`}>
          <div
            className={`${
              reverse ? " -rotate-6" : " rotate-6"
            } ${bgcolor} ${"flex h-20 -translate-y-10 w-full scale-x-110 z-10"}`}
          ></div>
          <div
            className={`${
              reverse ? "" : ""
            } ${"flex flex-col w-full px-2 -mt-24 right-0 z-20 text-left"}`}
          >
            <div className="z-20 text-2xl font-bold">{school}</div>
            <div className="z-20 text-xs pb-2 -translate-y-1">{formation}</div>
            <div className="z-20 pb-4">{description}</div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Schools;
