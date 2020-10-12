import React, { useState } from 'react';
import './App.css';
import ReactGlobe from './react-globe';
import Container from 'react-bootstrap/Container';
import markers from './markers';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/svg-arrow.css';

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
                cameraOptions={{
                  autoRotateSpeed: 0.8,
                  enableZoom: false,
                  clickedOut: click
                }}
                markers={markers}
                markerOptions={{
                  glowCoefficient: 0.25,
                  activeScale: 1,
                  enableTooltip: true,
                  getTooltipContent: marker => `${marker.year}${marker.city}\n${marker.activity}`,
                  radiusScaleRange: [0.001, 0.045],
                }}
              /> 
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;

