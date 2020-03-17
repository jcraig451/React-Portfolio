import React, { Component } from 'react'
import resumeImg from '../../../assets/images/CraigResume.pdf'
import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://github.com/jcraig451" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/josh-craig-56a31719/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href={resumeImg} target="_blank">
              <i className="fa fa-file"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:jcraig451@yahoo.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links