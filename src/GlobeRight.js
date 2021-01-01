import React from 'react';
import './App.css';
import Globe from './Globe'

function GlobeRight() {

  return (
    <div className="col-xl-6" style={{ display: "flex", alignItems: "center" }}>
      <div style={{ height: "50%", width: "100%" }}>
        <Globe />
      </div>
    </div>
  );
}

export default GlobeRight;