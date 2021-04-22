import { useRef, useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faRocket, faSearchDollar, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'


export default function About(){
    const ourRef = useRef(null);
    const [show, setShow] = useState('none');

    useLayoutEffect(() => {
      const topPosition = ourRef.current.getBoundingClientRect().top;
      const onScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
       if(topPosition < scrollPosition) { 
            setShow(prev => 'block');
         }
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
      /* 
         remove the event listener in the cleanup function 
         to prevent memory leaks
      */
    }, []);
    return (
        <div style={{ height: '100vh', backgroundColor:'#ffffff', display: {show}}}>
            <div style={{ width:'100%', height:'40vh', backgroundColor:'#1c3144'}}></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#1c3144" fill-opacity="1" d="M0,288L720,256L1440,288L1440,0L720,0L0,0Z"></path>
            </svg>
            <div style={{ width: '100%', textAlign: 'center'}}>
                <h1 style={{ marginTop:'-65vh', color:'#fe6d73', textDecoration:'underline', fontFamily:'roboto', textShadow:'2px 2px black', textDecorationWidth:'4px', textDecorationColor:'#c20114', marginBottom:'-50vh'}}>About</h1>
            </div>
            <div style={{ marginTop:'65vh', marginLeft:'20px', display:'flex', justifyContent:'space-around'}}>
                <div style={{ width:'20vw', height:'10vw', textAlign:'center', borderLeft: '5vw solid transparent', borderRight:'5vw solid transparent', borderBottom: '10vw solid #04c2c9'}}>
                    <FontAwesomeIcon style={{ paddingTop:'2vh'}} icon={faTachometerAlt} size='4x' color='#ffffff'/>
                    <p style={{ color: '#ffffff', paddingTop:'2vh', fontSize:'1vw'}}>Fast load times and lag free interaction, my highest priority. </p>
                </div>
                <div style={{ width:'20vw', height:'10vw', textAlign:'center', borderLeft: '5vw solid transparent', borderRight:'5vw solid transparent', borderBottom: '10vw solid #04c2c9'}}>
                    <FontAwesomeIcon style={{ paddingTop:'2vh'}} icon={faChalkboardTeacher} size='4x' color='#ffffff'/>
                    <p style={{ color: '#ffffff', paddingTop:'2vh', fontSize:'1vw'}}>Fast load times and lag free interaction, my highest priority. </p>
                </div>
                <div style={{ width:'20vw', height:'10vw', textAlign:'center', borderLeft: '5vw solid transparent', borderRight:'5vw solid transparent', borderBottom: '10vw solid #04c2c9'}}>
                    <FontAwesomeIcon style={{ paddingTop:'2vh'}} icon={faSearchDollar} size='4x' color='#ffffff'/>
                    <p style={{ color: '#ffffff', paddingTop:'2vh', fontSize:'1vw'}}>Fast load times and lag free interaction, my highest priority. </p>
                </div>
                <div style={{ width:'20vw', height:'10vw', textAlign:'center', borderLeft: '5vw solid transparent', borderRight:'5vw solid transparent', borderBottom: '10vw solid #04c2c9'}}>
                    <FontAwesomeIcon style={{ paddingTop:'2vh'}} icon={faRocket} size='4x' color='#ffffff'/>
                    <p style={{ color: '#ffffff', paddingTop:'2vh', fontSize:'1vw'}}>Fast load times and lag free interaction, my highest priority. </p>
                </div>
            </div>
        </div>
    )
}