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
    console.log(1);
    console.log(e)
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

  function collapseBanner(e) {
    //e.preventDefault()
    e.target.style.display = 'none';
    console.log(1)
  }
  return (
    <div onScroll={e => collapseBanner(e)}>
      <div style={{ height: '100vh',width: '100vw', position: "absolute", zIndex:'0'}} ref={myRef}>
      </div>
      <Header />
      <Title />
    </div>
  )
}
export default App;
