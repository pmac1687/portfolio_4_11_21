import EXPCard from './card';

export default function Projects(){
    return (
        <div style={{ width:'100vw', height:'150vh', backgroundColor:'#ecebf3', marginTop:'5vh', display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1 style={{ paddingTop:'15vh', color:'#fe6d73', textDecoration:'underline', fontFamily:'roboto', textShadow:'2px 2px black', textDecorationWidth:'4px', textDecorationColor:'#c20114', marginBottom:'-50vh'}}>Projects/Work</h1>
            <div style={{ display:'grid', gap:'3vw',gridTemplateColumns: 'auto auto auto', gridTemplateRows:'auto auto'}}>
                <EXPCard img={'https://s3-us-west-1.amazonaws.com/patrickmcdermott.com/img/thumb-1.jpg'} />
                <EXPCard img={'https://s3-us-west-1.amazonaws.com/patrickmcdermott.com/img/thumb-1.jpg'} />
                <EXPCard img={'https://s3-us-west-1.amazonaws.com/patrickmcdermott.com/img/thumb-1.jpg'} />
                <EXPCard img={'https://s3-us-west-1.amazonaws.com/patrickmcdermott.com/img/thumb-1.jpg'} />
                <EXPCard img={'https://s3-us-west-1.amazonaws.com/patrickmcdermott.com/img/thumb-1.jpg'} />
                <EXPCard img={'https://s3-us-west-1.amazonaws.com/patrickmcdermott.com/img/thumb-1.jpg'} />
            </div>

        </div>
    )
}