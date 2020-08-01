import React, { useState} from 'react';
import './App.css';
import ReactGlobe from './react-globe';
import Container from 'react-bootstrap/Container';
import markers from './markers';

function App() {
  const [click, setClick] = useState(0)
  return (
    <div className="App" onMouseDown={() => setClick(!click)}>
      <Container fluid>
        <div className="row" style={{ height: "100vh" }}>
          <div 
            className="col-xl-6 index-text">
            <div>
            <h1 style={{fontSize: 40}} className= "animate__animated animate__fadeInUp" >Jian He</h1>
            <p style={{fontSize: 24}} className= "animate__animated animate__fadeInUp" >Designer based in Berlin </p>
            </div>  
          </div>
          <div className="col-xl-6" style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "50%", width: "100%" }}>
              <ReactGlobe
                globeOptions={{
                  enableBackground: false,
                  enableClouds: false,
                  enableGlow: false,
                  cloudsTexture: null
                }}
                cameraOptions={{
                  autoRotateSpeed: 0.8,
                  enableZoom: true,
                  clickedOut: click
                }}
                markers={markers}
                markerOptions={{
                  glowCoefficient: 0.25,
                  activeScale: 1,
                  enableTooltip: true,
                  getTooltipContent: marker => `${marker.year} ${marker.city} <br> ${marker.activity}`,
                  radiusScaleRange: [0.001, 0.045],
                }}
              /> 
            </div>
          </div>
        </div>
    
       {/* scroll down*/}         

    <div className="row" style={{ height: "100vh"}}>
    <div style={{ display: "flex", alignItems: "center" }} className="col-xl-6 d-none d-xl-block">
      </div>

      <div 
      className="col-xl-6 index-text">
       <div>
        <h4 className="timeline-header animate__animated animate__fadeInUp">2019 - | Berlin</h4>
        <p className="timeline-body">Product Designer, Delivery Hero</p>
        <h4 className="timeline-header">2015-2019 | Singapore</h4>
        <p className="timeline-body">UX Designer, MING Labs</p>
        <p className="timeline-body">UX Designer, Grab</p>
        <h4 className="timeline-header">2011-2015 | Boston</h4>
        <p className="timeline-body">Student/Researcher, Harvard University</p>
        <h4 className="timeline-header">2006-2011  | Tianjin</h4>
        <p className="timeline-body">Student, Tianjin University</p>
        <h4 className="timeline-header">-2006  | Ningbo</h4>
        <p className="timeline-body">Just a kid</p>
        </div> 
      </div>

    </div>

      </Container>
    </div>
  );
}

export default App;

