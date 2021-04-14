

export default function Header(props){
    return (
        <div style={{ position: `${props.pos}`, zIndex: '1', display: 'flex', backgroundColor: `${props.bg}`, width: '100%'}}>
            <img style={{  }} src='http://patty-images.s3-website-us-west-1.amazonaws.com/M-logo-sm.png' alt='m-logo'/>
            <div>
                <h2 style={{ color: '#fcc43d', paddingTop: '2vh'}}>Patrick McDermott</h2>
            </div>
            <div>
                <h4 style={{ color: `${props.color}`, paddingTop: '2.75vh', marginLeft: '1vw'}}>Skills/Experience</h4>
            </div>
            <div>
                <h4 style={{ color: `${props.color}`, paddingTop: '2.75vh', marginLeft: '1vw'}}>Projects/Work</h4>
            </div>
            <div>
                <h4 style={{ color: `${props.color}`, paddingTop: '2.75vh', marginLeft: '1vw'}}>Code</h4>
            </div>
            <div>
                <h4 style={{ color: `${props.color}`, paddingTop: '2.75vh', marginLeft: '1vw'}}>Resume</h4>
            </div>
            <div>
                <h4 style={{ color: `${props.color}`, paddingTop: '2.75vh', marginLeft: '1vw'}}>Contact Me</h4>
            </div>
        </div>
    )
}