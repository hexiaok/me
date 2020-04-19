import React from 'react';
import './App.css';
import ReactGlobe from './react-globe';

import Container from 'react-bootstrap/Container';
import darkGlobe from './globe_dark.jpg'
import markers from './markers';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <div className="row" style={{ height: "100vh" }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff"
          }}
            className="col-lg-6">
            <h1 style={{ padding: "10%", lineHeight: "160%" }}>Jian He<br />Designer, living in Berlin.</h1>
          </div>
          <div className="col-lg-6" style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "50%", width: "100%" }}>
              <ReactGlobe
                globeOptions={{
                  texture: darkGlobe,
                  enableBackground: false,
                  enableClouds: false,
                  enableGlow: false
                }}
                cameraOptions={{
                  autoRotateSpeed: 0.8,
                  enableZoom: false,
                }}
                markers={markers} 
                markerOptions={{
                  enableTooltip: true,
                  getTooltipContent: marker => `${marker.city} ${marker.year}`,
                  // radiusScaleRange: [0.005, 0.01],
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

