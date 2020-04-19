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
            <h1 style={{padding: "8.6%", lineHeight: "160%" }}>Jian He<br />Designer now based in Berlin.</h1>
          </div>
          <div className="col-xl-6" style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "64%", width: "100%" }}>
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
                  getTooltipContent: marker => `${marker.city} ${marker.year}`,
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

