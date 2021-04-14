//import logo from './logo.svg';
//import './App.css';
//import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Title from './Title'

const App = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const onScroll = (e) => {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
    props.showPage();
    const nav = document.getElementById('nav');
    nav.style.display ='block';
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  },[]);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        mouseControls: false,
        touchControls: false,
        waveHeight: 39.50,
        waveSpeed: 1.95,
        color: '#04052e'
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);

  return (
    <div>
      <div id='banner'>
        <div style={{ height: '100vh',width: '100vw', position: "absolute", zIndex:'0'}} ref={myRef}>
        </div>
        <Header pos={'relative'}  color={'#fffcff'}  />
        <Title />
      </div>
      <div id='nav' style={{ display:'none'}}>
        <Header bg={'#0c120c'} pos={'absolute'} color={'#fffcff'}/>
      </div>
    </div>
  )
}
export default App;
