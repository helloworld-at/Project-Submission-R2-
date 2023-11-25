import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Nav/Nav'
import './App.css'
import Intro from './components/intro/intro'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/projects'
import Footer from './components/Footer/footer'


function App() {

  return (
    <div>
     
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Footer/>
      </div>
  
  );
}

export default App
