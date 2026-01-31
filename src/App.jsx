import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/home/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
