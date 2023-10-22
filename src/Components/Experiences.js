import React, {useState, CSSProperties, useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import School from "./School";
import {useTransition, animated, useSpring} from "@react-spring/web";

function Schools() {
  // scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  const schools = [
    {
      ref: useRef(null),
      position: useState(),
      animation: useSpring(
        () => ({
          to: {opacity: 0, translateX: -1200},
        }),
        []
      ),
    },
    {
      ref: useRef(null),
      position: useState(),
      animation: useSpring(
        () => ({
          to: {opacity: 0, translateX: 1200},
        }),
        []
      ),
    },
    {
      ref: useRef(null),
      position: useState(),
      animation: useSpring(
        () => ({
          to: {opacity: 0, translateX: -1200},
        }),
        []
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
      schools[i].animation[1]({opacity: 1, translateX: 0});
    }
  }
  return (
    <div classname="flex w-screen">
      <div className="flex w-screen h-72 overflow-hidden py-20 -mb-32 -z-10 bg-gradient-to-b from-transparent">
        <div className="flex h-80 w-full scale-x-110 rotate-6 bg-portefolio-blue2"></div>
      </div>
      <div className="flex flex-col w-screen bg-gradient-to-b to-portefolio-blue3 from-portefolio-blue2 pt-20 items-center z-20 pb-40">
        <div className="font-bold pb-4 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-tr to-yellow-400 from-yellow-500 flex right-0 left-0 mx-auto text-center align-middle z-20">
          My experiences.
        </div>
        <div className="w-full h-full pb-12 md:px-12 lg:px-56 space-y-12 mt-8 overflow-hidden">
          <div className="h-1/6" ref={schools[0].ref}>
            <animated.div style={schools[0].animation[0]}>
              <School
                im={process.env.PUBLIC_URL + "/schools/wavestone.jpg"}
                reverse={false}
                school="Wavestone"
                position={
                  process.env.PUBLIC_URL + "/schools/ParisLocalisation.png"
                }
                formation="2023 • Cybersecurity engineer"
                description="Penetration testing and security audits of information systems for large companies (banks, industries, etc.) on cloud infrastructures and web platforms."
                bgcolor="bg-wavestone"
                txtcolor="text-wavestone"
              />
            </animated.div>
          </div>
          <div className="h-1/6" ref={schools[1].ref}>
            <animated.div style={schools[1].animation[0]}>
              <School
                im={process.env.PUBLIC_URL + "/schools/EBEC.jpg"}
                reverse={true}
                school="Victory in a european competition "
                position={
                  process.env.PUBLIC_URL + "/schools/PositionGrenoble.png"
                }
                formation="2022 • EBEC competition"
                description="In a team of 7 engineers, we created a team competition web platform for a company using VueJS and Laraval technologies with a focus on the carbon impact of the project. This won us the European EBEC competition."
                bgcolor="bg-ensimag"
                txtcolor="text-ensimag"
              />
            </animated.div>
          </div>
          <div className="h-1/6" ref={schools[2].ref}>
            <animated.div style={schools[2].animation[0]}>
              <School
                im={process.env.PUBLIC_URL + "/schools/capgemini.jpg"}
                reverse={false}
                school="Capgemini"
                position={
                  process.env.PUBLIC_URL + "/schools/PositionGrenoble.png"
                }
                formation="2022 • Web Developer"
                description="In a team of 7 engineers, we created a team competition web platform for a company using VueJS and Laraval technologies with a focus on the carbon impact of the project."
                bgcolor="bg-capgemini"
                txtcolor="text-capgemini"
              />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schools;
