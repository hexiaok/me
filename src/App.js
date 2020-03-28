import React from 'react';
import './App.css';
import ReactGlobe from 'react-globe';

function App() {
  return (
    <div className="App">
      <ReactGlobe
        globeOptions={{
          texture:
            'https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/globe_dark.jpg',
        }}
      />
    </div>
  );
}

export default App;
