import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'
import weatherDasLogo from '../../assets/images/projects/Capture2.jpg'
import feedMeLogo from '../../assets/images/projects/Capture3.jpg'
import passGenLogo from '../../assets/images/projects/Capture1.jpg'
import codeQuizLogo from '../../assets/images/projects/Capture4.jpg'
import burgerLogo from '../../assets/images/projects/Capture6.jpg'
import noteLogo from '../../assets/images/projects/Capture7.jpg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Coding Projects">
        <div className="row">
          <ExperienceUnit
            logo={passGenLogo}
            colour="#000000"
            title="Password Generator"
            link="https://jcraig451.github.io/Password_Generator/"
            timeperiod="2019-2020"
            gitrepos='https://github.com/jcraig451/Password_Generator'
          />
          <ExperienceUnit
            logo={weatherDasLogo}
            colour="#000000"
            title="Weather Dashboard"
            link="https://jcraig451.github.io/Weather-Dashboard/"
            timeperiod="2019"
            gitrepos='https://github.com/jcraig451/Weather-Dashboard'
          />
          <ExperienceUnit
            logo={feedMeLogo}
            colour="#000000"
            title="Feed Me! Project"
            link="https://tcauley91.github.io/Feed-Me/"
            timeperiod="2019"
            gitrepos='https://github.com/Tcauley91/Feed-Me'
          />
        </div>
        <div className="row">
          <ExperienceUnit
            logo={codeQuizLogo}
            colour="#000000"
            title="Coding Quiz Game"
            link="https://jcraig451.github.io/Devloper-Quiz/"
            timeperiod="2019-2020"
            gitrepos='https://github.com/jcraig451/Devloper-Quiz'
          />
          <ExperienceUnit
            logo={burgerLogo}
            colour="#000000"
            title="Burger Maker App"
            link="https://floating-fjord-46992.herokuapp.com/"
            timeperiod="2020"
            gitrepos='https://github.com/jcraig451/Burger'
          />
          <ExperienceUnit
            logo={noteLogo}
            colour="#000000"
            title="Note Taking App"
            link="https://jtcnotetaker.herokuapp.com/"
            timeperiod="2020"
            gitrepos='https://github.com/jcraig451/Note-Taker'
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
