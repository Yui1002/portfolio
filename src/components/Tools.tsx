import { AiOutlineDown } from "react-icons/ai";
import {
  DiAws,
  DiDocker,
  DiJava,
  DiJavascript1,
  DiMysql,
  DiPostgresql,
  DiPython,
} from "react-icons/di";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPhp,
} from "react-icons/si";
import "../styles/Tools.css";
import { useEffect, useState } from "react";
import { JSX } from "react";

const Tools = () => {
  const toolSets: [string, JSX.Element][][] = [
    [
      ["JavaScript", <DiJavascript1 size={50} color="#F7DF1E" />],
      ["TypeScript", <SiTypescript size={50} color="#007ACC" />],
      ["React/React Native", <SiReact size={50} color="#61DAFB" />],
      ["Node.js", <SiNodedotjs size={50} color="#68A063" />],
    ],
    [
      ["Java", <DiJava size={50} color="#007396" />],
      ["PHP", <SiPhp size={50} color="#777BB4" />],
      ["Python", <DiPython size={50} color="#3776AB" />],
      ["PostgreSQL", <DiPostgresql size={50} color="#336791" />],
    ],
    [
      ["MySQL", <DiMysql size={50} color="#4479A1" />],
      ["AWS", <DiAws size={50} color="#FF9900" />],
      ["Docker", <DiDocker size={50} color="#2496ED" />],
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % toolSets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [toolSets.length]);

  const currentItems = toolSets[currentIndex];

  return (
    <div>
      <div className="tools-container">
        <AiOutlineDown className="icon" size={60} color="#000" />
      </div>
      <div className="languages-container">
        <p className="tools-text">I work with...</p>
        <div className="carousel">
          {currentItems.map(([tool, icon]) => (
            <div key={tool} className="tool">
              {icon}
              <p>{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;