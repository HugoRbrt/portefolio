import React, {useState} from "react";
import Skill from "../Tools/Skill";

function Skills() {
  const skills = [
    {
      type: "software development",
      im: "skills/C.png",
      title: "C",
      color: "blue",
    },
    {
      type: "software development",
      im: "skills/C++.png",
      title: "C++",
      color: "blue",
    },
    {
      type: "web development",
      im: "skills/Javascript.png",
      title: "Javascript",
      color: "red-500",
    },
    {
      type: "web development",
      im: "skills/HTML.png",
      title: "HTML",
      color: "red-500",
    },
    {
      type: "web development",
      im: "skills/CSS.png",
      title: "CSS",
      color: "red-500",
    },
    {
      type: "web development",
      im: "skills/TypeScript.png",
      title: "TypeScript",
      color: "red-500",
    },
    {
      type: "web development",
      im: "skills/BootStrap.png",
      title: "BootStrap",
      color: "red-500",
    },
    {
      type: "web development",
      im: "skills/Talwind.png",
      title: "Talwind",
      color: "red-500",
    },
    {
      type: "web development",
      im: "skills/Flask.png",
      title: "Flask",
      color: "red-500",
    },
    {
      type: "web development",
      im: "skills/VueJS.png",
      title: "VueJS",
      color: "red-500",
    },
    {
      type: "web development",
      im: "skills/React.png",
      title: "React",
      color: "red-500",
    },
    {
      type: "machine learning",
      im: "skills/matlab.png",
      title: "Matlab",
      color: "red-500",
    },
    {
      type: "machine learning",
      im: "skills/PyTorch.png",
      title: "PyTorch",
      color: "red-500",
    },
    {
      type: "machine learning",
      im: "skills/TensorFlow.png",
      title: "TensorFlow",
      color: "red-500",
    },
    {
      type: "machine learning",
      im: "skills/python.png",
      title: "Python",
      color: "red-500",
    },
    {
      type: "software development",
      im: "skills/python.png",
      title: "Python",
      color: "red-500",
    },
    {
      type: "software development",
      im: "skills/java.png",
      title: "Java",
      color: "red-500",
    },
    {
      type: "software development",
      im: "skills/go.png",
      title: "Go",
      color: "red-500",
    },
    {
      type: "software development",
      im: "skills/php.png",
      title: "PHP",
      color: "red-500",
    },
    {
      type: "software development",
      im: "skills/Bash/Shell.png",
      title: "Bash/Shell",
      color: "red-500",
    },
    {
      type: "software development",
      im: "skills/Assembly.png",
      title: "Assembly",
      color: "red-500",
    },
    {
      type: "database",
      im: "skills/mongoDB.png",
      title: "mongoDB",
      color: "red-500",
    },
    {
      type: "database",
      im: "skills/MySQL.png",
      title: "MySQL",
      color: "red-500",
    },
    {
      type: "database",
      im: "skills/Neo4J.png",
      title: "Neo4J",
      color: "red-500",
    },
    {
      type: "other",
      im: "skills/Git.png",
      title: "Git",
      color: "red-500",
    },
    {
      type: "other",
      im: "skills/Aws.png",
      title: "Aws",
      color: "red-500",
    },
    {
      type: "other",
      im: "skills/Agile development.png",
      title: "Agile development",
      color: "red-500",
    },
  ];

  const [activeType, setActiveType] = useState("software development");

  const handleTypeChange = (type) => {
    setActiveType(type);
  };

  const skillsToDisplay = skills.filter((skill) => skill.type === activeType);

  const types = new Set(skills.map((skill) => skill.type));

  return (
    <div className="flex flex-col w-screen">
      <div className="flex w-screen h-72 overflow-hidden py-20 -mb-32 -z-10 bg-gradient-to-b from-transparent via-black to-black">
        <div className="flex h-80 w-full scale-x-110 -rotate-3 bg-yellow-500"></div>
      </div>
      <div className="flex flex-col w-screen bg-gradient-to-b to-yellow-400 from-yellow-500 items-center z-20 pb-40">
        <h1 className="text-5xl font-bold text-gray-800 self-center md:pb-20">
          My skills
        </h1>
        <div className="flex-row w-2/3 hidden md:flex">
          <div className="flex flex-col w-1/4 h-20 mt-6 pr-2">
            {Array.from(types).map((type) => (
              <button
                key={type}
                className={`${
                  activeType === type
                    ? "bg-white text-yellow-400 shadow-2xl"
                    : "text-white"
                } ${"text-xl font-bold text-right py-4 pr-4 hover:text-yellow-400 hover:bg-white rounded-l-xl my-2 "}`}
                onClick={() => handleTypeChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className=" w-3/4 h-1/3 pb-5 bg-white overflow-hidden rounded-xl -ml-4 shadow-2xl">
            <div className="grid grid-cols-3 grid-rows-3 mx-12 items-center">
              {skillsToDisplay.map((skill, index) => (
                <Skill
                  key={index}
                  im={skill.im}
                  title={skill.title}
                  color={skill.color}
                  className=""
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-row flex md:hidden">
          <div className="flex flex-col h-fit mt-6 pr-2">
            {Array.from(types).map((type_t) => (
              <div>
                <div
                  key={type_t}
                  className={
                    "text-2xl font-bold w-full text-center py-4 text-white rounded-l-xl my-2 uppercase"
                  }
                  onClick={() => handleTypeChange(type_t)}
                >
                  {type_t}
                </div>
                <div className="grid grid-cols-2 items-center bg-white rounded-xl pb-4">
                  {skills
                    .filter((skill) => skill.type == type_t)
                    .map((skill, index) => (
                      <Skill
                        key={index}
                        im={skill.im}
                        title={skill.title}
                        color={skill.color}
                        className=""
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
