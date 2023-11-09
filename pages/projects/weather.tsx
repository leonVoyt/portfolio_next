import RootLayout from '@/app/MainLatout'
import React from 'react'
import weather from '../../assets/weather_proj.jpg'
import Image from 'next/image'
import git from '../../assets/gitHub-black.svg'
import { useTypeSelector } from '../../hooks/useTypeSelector'

const electronics_store = () => {
  const { theme } = useTypeSelector((state) => state.theme)

  return (
    <RootLayout>
      <div className="container">
        <div className="project">
          <div className="text">
            <h1>Weather</h1>
          </div>
          <div className="image">
            <Image src={weather} alt="" className="project-image" />
          </div>
          <div className="skills">
            <h2>Skills:</h2>
            <ul>
              <li>SCSS</li>
              <li>JavaScript</li>
              <li>React.JSx</li>
              <li>AJAX</li>
              <li>SCM/GIT</li>
              <li>API</li>
            </ul>
          </div>
          <div className={`links ${theme ? 'dark' : ''}`}>
            <a href="https://github.com/leonVoyt/wether" target="_blank">
              <Image src={git} alt="" className="" />
              Link to github code
            </a>
            <a href="https://wether-seven.vercel.app/" target="_blank">
              Live prototype project
            </a>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default electronics_store
