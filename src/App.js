import React from 'react';
import './App.css';
import ReactGlobe from 'react-globe';
import Container from 'react-bootstrap/Container';
import darkGlobe from './globe_dark.jpg'


// import Greet from './components/greet';
// import Welcome from './components/welcome';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Greet />
        <Welcome />
      </header>
       */}
      <Container fluid>
        <div class="row" style={{ height: "100vh" }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff"
          }}
            class="col-lg-6">
            <h1 style={{ padding: "10%", lineHeight: "160%" }}>Jian He<br />Designer, living in Berlin.</h1>
          </div>

          <div class="col-lg-6" style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "50%", width:"100%" }}>
              <ReactGlobe
                globeOptions={{
                  texture: darkGlobe,
                  // backgroundTexture:'',
                  // cloudsTexture:'',
                  enableBackground: false,
                  enableClouds: false,
                  enableGlow: false
                }}
                cameraOptions={{
                  enableZoom: false,
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

