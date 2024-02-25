import RootLayout from "@/app/MainLatout";
import Image from "next/image";
import React from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import git from "../../assets/gitHub-black.svg";
import pizzaI from "../../public/dailyPlaner.png";

const ManegerHelper = () => {
  const { theme } = useTypeSelector((state) => state.theme);

  return (
    <RootLayout>
      <div className="container">
        <div className="project">
          <div className="text">
            <h1>Daily Planer</h1>
          </div>
          <div className="image">
            <Image src={pizzaI} alt="project" className="project-image" />
          </div>
          <div className="skills">
            <h2>Skills:</h2>
            <ul>
              <li>React</li>

              <li>Tailwind CSS</li>
              <li> tanstack/react-tabl</li>
              <li> mobx-state-tree</li>

              <li>figma</li>
              <li>SCM/GIT</li>
            </ul>
          </div>
          <div className={`links ${theme ? "dark" : ""}`}>
            <a href="https://github.com/leonVoyt/daily_planer" target="_blank">
              <Image src={git} alt="" className="" />
              Link to github code
            </a>
            <a href="https://daily-planer-iota.vercel.app/" target="_blank">
              Live prototype project
            </a>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default ManegerHelper;
