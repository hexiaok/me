import React, { useState } from 'react';
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
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff"
          }}
            className="col-xl-6">
            <div>
            <h1 style={{fontSize: 40}}>Jian He</h1>
            <p style={{fontSize: 24}}>Designer based in Berlin </p>
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
                  getTooltipContent: marker => `${marker.city} ${marker.year} <br> ${marker.activity}`,
                  radiusScaleRange: [0.001, 0.045],
                }}
              /> 
            </div>
          </div>
        </div>
   
    
       {/* A JSX comment */}         

    <div className="row" style={{ height: "100vh" }}>

      <div className="col-xl-6">
      
      </div>

      <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
      }}
      className="col-xl-6">
       <div>
       <p style={{fontSize: 24}}>Designer based in Berlin </p>
        <p style={{fontSize: 24}}>Designer based in Berlin </p>
        </div> 
      </div>

    </div>

      </Container>
    </div>
  );
}

export default App;

