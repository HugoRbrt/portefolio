import React, { useState, CSSProperties, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import School from "./School";
import { useTransition, animated, useSpring } from "@react-spring/web";

function Schools() {
  // scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  const schools = [
    {
      ref: useRef(null),
      position: useState(),
      animation: useSpring(
        () => ({
          to: { opacity: 0, translateX: -1200 },
        }),
        [],
      ),
    },
    {
      ref: useRef(null),
      position: useState(),
      animation: useSpring(
        () => ({
          to: { opacity: 0, translateX: 1200 },
        }),
        [],
      ),
    },
    {
      ref: useRef(null),
      position: useState(),
      animation: useSpring(
        () => ({
          to: { opacity: 0, translateX: -1200 },
        }),
        [],
      ),
    },
    {
      ref: useRef(null),
      position: useState(),
      animation: useSpring(
        () => ({
          to: { opacity: 0, translateX: 1200 },
        }),
        [],
      ),
    },
  ];
  const getPositions = () => {
    for (let i = 0; i < schools.length; i++) {
      const y = schools[i].ref.current.offsetTop;
      schools[i].position[1](y);
    }
  };
  const handleScroll = () => {
    let positionCenterScreen = 0;
    if (window.innerWidth < 1024) {
      // if we use the mobile/tablet version
      positionCenterScreen = window.pageYOffset + (window.innerHeight * 2) / 3;
    } else {
      // if we use the desktop version
      positionCenterScreen = window.pageYOffset + window.innerHeight / 2;
    }
    setScrollPosition(positionCenterScreen);
  };
  // at the beginning
  useEffect(() => {
    getPositions();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", getPositions);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", getPositions);
    };
  }, []);
  for (let i = 0; i < schools.length; i++) {
    if (scrollPosition > schools[i].position[0]) {
      schools[i].animation[1]({ opacity: 1, translateX: 0 });
    }
  }
  return (
    <div classname="flex w-screen">
      <div className="flex w-screen h-72 overflow-hidden py-20 -mb-32 -z-10 bg-gradient-to-b from-transparent via-black to-black">
        <div className="flex h-80 w-full scale-x-110 -rotate-6 bg-yellow-500"></div>
      </div>
      <div className="flex flex-col w-screen bg-gradient-to-b to-yellow-400 from-yellow-500 pt-20 items-center z-20 pb-40">
        <div className="font-bold pb-4 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-tr from-portefolio-blue1 to-portefolio-blue3 flex right-0 left-0 mx-auto text-center align-middle z-20">
          My career path.
        </div>
        <div className="w-full h-full pb-12 md:px-12 lg:px-56 space-y-12 mt-8 overflow-hidden">
          <div className="h-1/6" ref={schools[0].ref}>
            <animated.div style={schools[0].animation[0]}>
              <School
                im={process.env.PUBLIC_URL + "/schools/grenoble.webp"}
                reverse={true}
                school="Ensimag"
                position={
                  process.env.PUBLIC_URL + "/schools/grenobleLocalisation.png"
                }
                formation="2020-2023 • Engineering degree"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                bgcolor="bg-ensimag"
                txtcolor="text-ensimag"
              />
            </animated.div>
          </div>
          <div className="h-1/6" ref={schools[1].ref}>
            <animated.div style={schools[1].animation[0]}>
              <School
                im={process.env.PUBLIC_URL + "/schools/capgemini.jpg"}
                reverse={false}
                school="Capgemini"
                position={
                  process.env.PUBLIC_URL + "/schools/PositionGrenoble.png"
                }
                formation="2022 • Web Developer"
                description="I created a team competition platform for a company using VueJS and Laraval technologies."
                bgcolor="bg-capgemini"
                txtcolor="text-capgemini"
              />
            </animated.div>
          </div>
          <div className="h-1/6" ref={schools[2].ref}>
            <animated.div style={schools[2].animation[0]}>
              <School
                im={process.env.PUBLIC_URL + "/schools/epfl.jpg"}
                reverse={true}
                school="EPFL"
                position={
                  process.env.PUBLIC_URL + "/schools/LausanneLocalisation.png"
                }
                formation="2022-2023 • Master computer science"
                description="I have acquired skills in machine learning, data science and security through numerous projects with students from around the world."
                bgcolor="bg-epfl"
                txtcolor="text-epfl"
              />
            </animated.div>
          </div>
          <div className="h-1/6" ref={schools[3].ref}>
            <animated.div style={schools[3].animation[0]}>
              <School
                im={process.env.PUBLIC_URL + "/schools/wavestone.jpg"}
                reverse={false}
                school="Wavestone"
                position={
                  process.env.PUBLIC_URL + "/schools/ParisLocalisation.png"
                }
                formation="2023 • Internship cybersecurity engineer"
                description="work in progress..."
                bgcolor="bg-wavestone"
                txtcolor="text-wavestone"
              />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schools;
