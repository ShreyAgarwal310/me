import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
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
                        <h2>University of Nebraska-Lincoln <span>Expected May 2028</span></h2>
                        <h2>Majors: Mechanical Engineering, Mathematics, Data Science | Minors: Computer Science, Business</h2>
                        <p>Jeffery S. Raikes School of Computer Science & Management: A selective honors program (40 scholars/year) at the University of Nebraska-Lincoln that combines computer science and management and infuses leadership, entrepreneurship, and innovation</p>
                        <p>Raikes Student Advisory Board: Collaborate with senior staff at the Raikes School to improve student experience, initiate community engagement events, and drive initiatives that foster professional development, academic success, and a strong sense of community among students.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lincoln East High School <span>August 2020 - May 2024</span></h2>
                        <p>Summa Cum Laude, ACT: 35, SAT: 1570</p>
                        <p>Future Business Leaders of America (President), Computer Science Honors Society (Technology Leader), Orchestra (Section Leader, Senior Soloist), National Honors Society (Executive Board), National Speech and Debate Association (Three-Year Varsity Member), Boy's Tennis (State Champion), Nebraska Human Resources Institute Leadership Mentoring, Youth Leadership Lincoln Cohort 25, Math Club (Varsity Member)</p>
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
