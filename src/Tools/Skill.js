import React, {useState, CSSProperties, useEffect, useRef} from "react";
import {motion} from "framer-motion";

function Skill({im = "", title = "", color = ""}) {
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let content = (
    <div className={"flex flex-col md:bg-white self-center"}>
      <motion.div
        className="self-center"
        whileHover={{scale: 1.1}}
        transition={{type: "spring", stiffness: 400, damping: 10}}
      >
        <img
          src={im}
          alt="logo"
          className="w-20 h-24 mt-4 self-center object-contain"
        />
      </motion.div>
      <h1
        className={`${
          "text-" + color
        } ${"text-xl font-bold text-gray-800 self-center text-center"}`}
      >
        {title}
      </h1>
    </div>
  );

  return <div>{content}</div>;
}

export default Skill;
