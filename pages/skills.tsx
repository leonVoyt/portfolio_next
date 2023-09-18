import RootLayout from '@/app/MainLatout'
import { useEffect, useState } from 'react'

const Skills = () => {
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    setAnimation(true)
  }, [])
  return (
    <RootLayout>
      <div className="container">
        <div className="skills-page ">
          <h1 className="_active__animation">Skills</h1>

          <div className="skills-list">
            <div className="front">
              <h2 className="_active__animation">Front-end</h2>
              <ul className={`${animation ? '_active' : ''}`}>
                <li className={`${animation ? '_active' : ''}`}>HTML/CSS</li>
                <li className={`${animation ? '_active' : ''}`}>JavaScript</li>
                <li className={`${animation ? '_active' : ''}`}>React JSX</li>
                <li className={`${animation ? '_active' : ''}`}>TepeScript</li>
                <li className={`${animation ? '_active' : ''}`}>Next JS</li>
                <li className={`${animation ? '_active' : ''}`}>
                  Redux/Redux ToolKit
                </li>
                <li className={`${animation ? '_active' : ''}`}>AJAX</li>
                <li className={`${animation ? '_active' : ''}`}>React Fiber</li>
                <li className={`${animation ? '_active' : ''}`}>SCM/GIT</li>
                <li className={`${animation ? '_active' : ''}`}>
                  JEST/UnitTest/React Testin Library
                </li>
                <li className={`${animation ? '_active' : ''}`}>Webpack</li>
              </ul>
            </div>
            <div className="backend">
              <h2 className="_active__animation">Back-end</h2>
              <ul className={`${animation ? '_active' : ''}`}>
                <li className={`${animation ? '_active' : ''}`}>Node JS</li>
                <li className={`${animation ? '_active' : ''}`}>Nest JS</li>
                <li className={`${animation ? '_active' : ''}`}>Express</li>
                <li className={`${animation ? '_active' : ''}`}>Sequelize</li>
                <li className={`${animation ? '_active' : ''}`}>MySQL</li>
                <li className={`${animation ? '_active' : ''}`}>Rest API</li>
                <li className={`${animation ? '_active' : ''}`}>
                  PostgressSQL
                </li>
                <li className={`${animation ? '_active' : ''}`}>RTK query</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Skills
