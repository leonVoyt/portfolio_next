import RootLayout from '../src/app/MainLatout'
import Image from 'next/image'
import pizza from '../assets/Desktop - 1 (2).png'
import electronic from '../assets/electronic.jpg'

const Index = () => {
  return (
    <RootLayout>
      <div className="index">
        <div className="index__text">
          <h1>
            Hi my name is <strong>Leon</strong>{' '}
          </h1>
          <p>a frontend developer</p>
          <span>with passion for learning and creating.</span>
          <button>Download CV</button>
        </div>
      </div>
      <div className="projects">
        <h1>Projects</h1>
        <div className="container">
          <div className="projects__item">
            <div className="projects__item--image">
              <Image src={pizza} alt="" />
            </div>
            Pizzeria
          </div>
          <div className="projects__item">
            <div className="projects__item--image">
              <Image src={pizza} alt="" />
            </div>
            Pizzeria
          </div>
          <div className="projects__item">
            <div className="projects__item--image">
              <Image src={pizza} alt="" />
            </div>
            Pizzeria
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Index
