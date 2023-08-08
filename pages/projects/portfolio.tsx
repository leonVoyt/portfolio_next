import RootLayout from '@/app/MainLatout'
import Image from 'next/image'
import React from 'react'
import port from '../../assets/Main (3).png'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import git from '../../assets/gitHub-black.svg'
import Link from 'next/link'

const portfolio = () => {
  const { theme, loading, error } = useTypeSelector((state) => state.theme)

  return (
    <RootLayout>
      <div className="container">
        <div className="project">
          <div className="text">
            <h1>Portfolio</h1>
          </div>
          <div className="image">
            <Image src={port} alt="" className="project-image" />
          </div>
          <div className="skills">
            <h2>Skills:</h2>
            <ul>
              <li>SCSS</li>
              <li>TypeScript</li>
              <li>Next.JS</li>
              <li>React Three Fiber (3d)</li>
              <li>React.TSx</li>
              <li>Redux ToolKit</li>
              <li>figma</li>
              <li>SCM/GIT</li>
            </ul>
          </div>
          <div className={`links ${theme ? 'dark' : ''}`}>
            <a
              href="https://github.com/leonVoyt/portfolio_next"
              target="_blank"
            >
              <Image src={git} alt="" className="" />
              Link to github code
            </a>

            <Link href={'/'}>Live prototype project</Link>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default portfolio
