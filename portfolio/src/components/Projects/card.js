import React from 'react';
//import './AppProject.css';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const EXPCard = (props) => {
  function flip(e){
    console.log(e);
    const el =e.target;
    if(e.target.id === 'content'){
      console.log('content');
    }
    if(e.target.id === 'front'){
      console.log('front');
      const next = e.target.offsetParent;
      next.style.transform = 'rotateY(180deg)';
      next.style.transition = 'transform 0.5s';
    }
  }
  function flipBack(e){
    const el =e.target;
    console.log(e)
    if(el.offsetParent.id === 'back'){
      console.log('back');
      console.log(el.offsetParent.offsetParent.id)
      const parent = el.offsetParent.offsetParent;
      console.log('par', parent)
      parent.style.transform = 'rotateY(0deg)';
      parent.style.transition = 'transform 0.5s';
      
    }
  }
  return (
    <div id='card' onMouseEnter={(e) => flip(e)} onMouseLeave={(e) => flipBack(e)} style={{ width:'20vw', paddingTop:'60vh'}}>
      <div id='content' style={{ transition:'transform 1s', transformStyle: 'preserve-3d'}}>
        <div id='front' style={{ opacity: '.75', backgroundImage: 'url(https://patty-images.s3-us-west-1.amazonaws.com/bg_card.jpg)', backfaceVisibility: 'hidden',position:'absolute', width:'20vw', height:'50vh',backgroundColor:'black'}}>
            hello
        </div>
        <Card id='back' style={{transform:'rotateY(180deg)',position:'absolute', backfaceVisibility:'hidden', backgroundColor:'#231b1b' }}>
          <CardBody>
            <CardTitle style={{ color:'#ddfff7'}} tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          </CardBody>
          <img width="100%" src={props.img} alt="Card cap" />
          <CardBody>
            <CardText style={{ color: '#fff9fb'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default EXPCard;
