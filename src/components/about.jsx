import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    {/*<span className="heading-meta"></span>*/}
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a sophomore at the University of Nebraska-Lincoln's Raikes School, studying Mechanical Engineering, Mathematics, and Data Science.</p>
                    <p>My passion lies at the intersection of engineering, artificial intelligence, and data-driven innovation, where I strive to develop cutting-edge solutions to complex problems.</p>
                    <p>I thrive in high-impact, research-driven environments that blend technical problem-solving with real-world applications. Whether it’s AI, robotics, biomechanics, or sustainable energy, I am always looking for opportunities to collaborate, innovate, and push boundaries.</p>
                    <p>Let’s connect! If you’re interested in discussing any of these topics or something else, feel free to reach out. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}