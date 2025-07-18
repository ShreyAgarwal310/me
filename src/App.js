import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Involvement from './components/involvement'
import Experience from './components/experience'
import Projects from './components/projects'
import Skills from './components/skills'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Experience></Experience>
          <Involvement></Involvement>
          <Projects></Projects>
					<Timeline></Timeline>
          <Skills></Skills>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
