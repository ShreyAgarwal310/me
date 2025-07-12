import React, { Component } from 'react'

export default class Invovlement extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-involvement" data-section="involvement">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Involvement</h2>
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
                        <h2>Nebraska Human Resources Institute Leadership Mentoring<span>January 2025 - Present</span></h2>
                        <p>One-on-one leadership development program for exceptional local students; build <b>strong mentoring relationships</b> through weekly sessions focused on trust, communication, and positive influence.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Jefferey S. Raikes School of Computer Science & Management <span>August 2024 - Present</span></h2>
                        <p>A 40-student honors program that combines computer science and management and infuses <b>leadership, entrepreneurship, and innovation</b>; emphasizes interdisciplinary thinking and real-world problem solving through team-based projects.</p>
                        <p>Participate in a rigorous curriculum that includes advanced coursework in computer science, management, and entrepreneurship; engage in hands-on projects that address real-world challenges.</p>
                        <p><b>Raikes Student Advisory Board:</b> Collaborate with senior staff at the Raikes School to improve student experience, initiate community engagement events, and drive initiatives that foster professional development, academic success, and a strong sense of community among students.</p>
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
