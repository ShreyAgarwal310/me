import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-projects" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Rural Bridge Monitoring System <span>January 2023 - May 2023</span></h2>
                        <p>Created a vibration sensor prototype to monitor the state of 1000+ rural bridges across Nebraska using Fast-Fourier Transforms and differential equations </p>
                        <p>Presented findings to a panel of 3 professors at the University of Nebraska-Omaha; awarded the 2023 University of Nebraska-Omaha Hackathon League Champion </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Digital Rewards System <span>August 2022 - May 2023</span></h2>
                        <p>Facilitated the effort to create a <a href="https://github.com/ShreyAgarwal310/CIAstore" target="_blank" rel="noopener noreferrer">digital rewards system</a> that would allow teachers to reward students digitally and gave students access to an online store with recruited groups of 5+ students </p>
                        <p>Navigated through issues, including student security, accessibility, and reliability; worked with the principal and district office to ensure the program followed all guidelines </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
