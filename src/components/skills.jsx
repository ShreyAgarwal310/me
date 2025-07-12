import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    const technicalSkills = [
      'AFT Fathom', 'Altium', 'Arduino', 'AutoCAD', 'AutoPipe', 'C', 'Excel', 'Git', 'HTML/CSS', 'Java', 'Pandas', 'Plant 3D', 'Python', 'React', 'Revit', 'SOLIDWORKS', 'SQL', 'Tableau', 'MATLAB', 'Microsoft Suite', 'Linux'
    ];

    const softSkills = [
      'Focus', 'Achiever', 'Analytical', 'Competition', 'Input', 'Critical Thinking', 'Leadership', 'Problem-Solving', 'Innovation'
    ];

    return (
      <div>
        <section className="colorlib-about" data-section="skills">
          <div className="colorlib-narrow-content">
            {/* Technical Skills Section */}
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">Technical Skills</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="skills-grid">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="skill-box">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">What do I bring to a team?</span>
                <h2 className="colorlib-heading">Soft Skills</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="skills-grid">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="skill-box">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
