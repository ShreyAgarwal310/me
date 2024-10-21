import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Shrey Agarwal</a></h1>
              
              {/* Email */}
              <span className="linkedin">
                <a href="mailto:agarwal.shrey310@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="icon-mail"></i>     
                </a>
              </span>

              {/* Resume */}
              <span className="linkedin">
                <a href="https://uofnelincoln-my.sharepoint.com/:w:/g/personal/sagarwal4_unl_edu/ESsl5VpQEWNOjTV_nL_gezMBo3SlcbrWy2MMNT5w8GbT4w?e=JSDc1T" target="_blank" rel="noopener noreferrer">
                  <i className="icon-document"></i>     
                </a>
              </span>
              
              {/* LinkedIn */}
              <span className="linkedin">
                <a href="https://www.linkedin.com/in/sagarw2" target="_blank" rel="noopener noreferrer">
                  <i className="icon-linkedin2"></i>     
                </a>
              </span>
              
              {/* GitHub */}
              <span className="github">
                <a href="https://github.com/ShreyAgarwal310" target="_blank" rel="noopener noreferrer">
                  <i className="icon-github"></i>
                </a>
              </span>
            </div>

            {/* Navigation Menu */}
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Education</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    );
  }
}
