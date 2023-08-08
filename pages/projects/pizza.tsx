import RootLayout from '@/app/MainLatout'
import Image from 'next/image'
import React from 'react'
import pizzaI from '../../assets/Desktop - 1 (2).png'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import git from '../../assets/gitHub-black.svg'

const pizza = () => {
  const { theme, loading, error } = useTypeSelector((state) => state.theme)

  return (
    <RootLayout>
      <div className="container">
        <div className="project">
          <div className="text">
            <h1>Pizzeria Lacavarna</h1>
          </div>
          <div className="image">
            <Image src={pizzaI} alt="" className="project-image" />
          </div>
          <div className="skills">
            <h2>Skills:</h2>
            <ul>
              <li>CSS/CSS modules</li>
              <li>TypeScript</li>
              <li>React.TSx</li>
              <li>Redux ToolKit</li>
              <li>figma</li>
              <li>SCM/GIT</li>
            </ul>
          </div>
          <div className={`links ${theme ? 'dark' : ''}`}>
            <a href="https://github.com/leonVoyt/pizzeria" target="_blank">
              <Image src={git} alt="" className="" />
              Link to github code
            </a>
            <a href="https://leonvoyt.github.io/pizzeria/" target="_blank">
              Live prototype project
            </a>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default pizza
