import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <div className="mainWhite">
        <h5>
          Welcome! I am <span className="bold">Josh Craig</span>
        </h5>

        <h3 className="bold">
          Product Design Engineer with over 5 years of CAD/Mechanical design experience.
          Graduated from UNCC with a Mechanical Engineering degree and currently
          studying Full Stack Web Development at UNCC's continuing education program.
        </h3>

        <ExperienceSection />
        <ProjectsSection />
        </div>
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
