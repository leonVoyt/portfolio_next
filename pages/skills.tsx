import RootLayout from '@/app/MainLatout'

const Skills = () => {
  return (
    <RootLayout>
      <div className="container">
        <div className="skills-page">
          <h1>Skills</h1>

          <div className="skills-list">
            <div className="front">
              <h2>Front-end</h2>
              <ul>
                <li> HTML/CSS</li>
                <li>JavaScript</li>
                <li>React.JSx</li>
                <li>TepeScript</li>
                <li>Next.js</li>
                <li>Redux/Redux ToolKit</li>
                <li>React Fiber</li>
                <li>SCM/GIT</li>
                <li>JEST/UnitTest/React Testin Library</li>
                <li>Webpack</li>
              </ul>
            </div>
            <div className="backend">
              <h2>Back-end</h2>
              <ul>
                <li>MySQL</li>
                <li>Express</li>
                <li>Node JS</li>
                <li>Sequelize</li>
                <li>PostgressSQL</li>
                <li>AJAX</li>
                <li>RTK query</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Skills
