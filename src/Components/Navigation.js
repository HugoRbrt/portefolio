import React, { useState, CSSProperties, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated, useSpring } from "@react-spring/web";
import Summary from "./Summary";
import { BlockScroll } from "../Tools/BlockScroll";

function Navigation({ References }) {
  const [blockScroll, allowScroll] = BlockScroll();
  const [showMenu, setMenu] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full transition ease transform duration-300`;
  let menu = <div></div>;
  const dur = 200;

  const [menuAnimation, apiAnim] = useSpring(() => ({
    config: { duration: dur },
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));

  const displayMenu = () => {
    console.log("displayMenu");
    if (showMenu) {
      allowScroll();
      apiAnim.start({
        from: {
          opacity: 1,
        },
        to: {
          opacity: 0,
        },
      });
      setMenu(!showMenu);
    } else {
      blockScroll();
      setMenu(!showMenu);
      apiAnim.start({
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      });
    }
  };

  if (showMenu) {
    menu = (
      <div className="fixed top-0 left-0 px-12 py-20 bg-black-t-80 w-screen h-screen items-center">
        <div onClick={() => displayMenu()} className="h-full w-full">
          <Summary References={References} />
        </div>
      </div>
    );
  }

  const hamburger = (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center group z-10"
      onClick={() => displayMenu()}
    >
      <div
        className={`${genericHamburgerLine} ${
          showMenu
            ? "rotate-45 translate-y-3 opacity-100 bg-white"
            : "opacity-100 bg-white brightness-200"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          showMenu ? "opacity-0" : "opacity-100 bg-white"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          showMenu
            ? "-rotate-45 -translate-y-3 opacity-100 bg-white"
            : "opacity-100 bg-white"
        }`}
      />
    </button>
  );
  return (
    <div className={` "text-white "`}>
      <animated.div style={menuAnimation}>{menu}</animated.div>
      {hamburger}
    </div>
  );
}

export default Navigation;
