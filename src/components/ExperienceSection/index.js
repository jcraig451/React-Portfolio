import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'
import ijusLogo from '../../assets/images/experience/ijusPic.jpg'
import vplLogo from '../../assets/images/experience/vplPic.jpg'
import ttiLogo from '../../assets/images/experience/ttiPic.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Engineering Design Experience">
        <div className="row">
          <ExperienceUnit
            logo={ijusLogo}
            colour='#000000'
            title='IJUS'
            link='https://www.trccompanies.com/services/engineering/electrical-power/distribution-engineering/'
            timeperiod='2014 - 2015'
            subtitle='Became an expert in power distribution overhead design
            for joint use purposes for Duke Energy North & South Carolina.'
          />
          <ExperienceUnit
            logo={vplLogo}
            colour='#000000'
            title='Vanguard Pai Lung'
            link='https://www.vanguardpailung.com/'
            timeperiod='2015-2019'
            subtitle='Designed NEW circular knitting machines using 
            CAD software "Creo". Created add-on kits to existing products. Performed engineering
            change request "ECN" for all product lines. Developed a great deal of knowledge in 
            fabrication design and machinery.'
          />
          <ExperienceUnit
            logo={ttiLogo}
            colour='#000000'
            title='TTI Floor Care'
            link='https://ttifloorcare.com/'
            timeperiod='2019 - Present'
            subtitle='Working as a Design Engineer creating new products for the following
            brands "Hoover, Dirt Devil & Oreck". CAD software used is "Creo" and design parts 
            for plastic injection molding process.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
