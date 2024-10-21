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
                    <p>I am a freshman at the University of Nebraska-Lincoln's Raikes School, studying Mechanical Engineering, Mathematics, and Data Science.</p>
                    <p>I want to explore the intersections of technology and innovation to create solutions to the world's most pressing problems. Currently, I am working on wearable biotechnology and GPTs applications to TCPs. </p>
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