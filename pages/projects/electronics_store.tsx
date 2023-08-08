import RootLayout from '@/app/MainLatout'
import React from 'react'
import electr from '../../assets/electronic.jpg'
import Image from 'next/image'
import git from '../../assets/gitHub-black.svg'
import { useTypeSelector } from '../../hooks/useTypeSelector'

const electronics_store = () => {
  const { theme, loading, error } = useTypeSelector((state) => state.theme)

  return (
    <RootLayout>
      <div className="container">
        <div className="project">
          <div className="text">
            <h1>Pizzeria Lacavarna</h1>
          </div>
          <div className="image">
            <Image src={electr} alt="" className="project-image" />
          </div>
          <div className="skills">
            <h2>Skills:</h2>
            <ul>
              <li>CSS/BEM</li>
              <li>JavaScript</li>
              <li>React.JSx</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL/Sequelize</li>
              <li>AJAX</li>
              <li>SCM/GIT</li>
              <li>Mobx</li>
            </ul>
          </div>
          <div className={`links ${theme ? 'dark' : ''}`}>
            <a
              href="https://github.com/leonVoyt/electronics_store"
              target="_blank"
            >
              <Image src={git} alt="" className="" />
              Link to github code
            </a>
            <a
              href="https://leonvoyt.github.io/electronics_store/"
              target="_blank"
            >
              Live prototype project
            </a>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default electronics_store
