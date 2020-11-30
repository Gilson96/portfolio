import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage/homepage'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';



class App extends Component {
  render(){
    return (
        <>
            <HomePage/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>  
    );
  }
}

export default App;
