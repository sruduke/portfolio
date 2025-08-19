import { useState } from 'react'
import {NavBar} from './components/NavBar';
import {Banner} from './components/Hero';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
