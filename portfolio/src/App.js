import logo from './logo.svg';
import './App.css';
//import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import { useEffect, useRef, useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
//import Skills from './components/Skills';

const App = (props) => {
  function showPage(){
    const projects = document.getElementById('projects');
    projects.style.display='block';
    const pad =document.getElementById('pad');
    pad.style.height='5vh';
  }
  return (
    <div>
        <Home showPage={showPage} />
        <div id='pad' style={{ height: '15vh', backgroundColor:'#ecf0f1', width:'100%'}}></div>
        <div id='about' style={{ }}>
          <About />
        </div>
        <div id='projects' style={{ display: 'block'}}>
          <Projects />
        </div>
    </div>
  )
}
export default App;
