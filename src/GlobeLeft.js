import React, { useState} from 'react';
import './App.css';
import Globe from './Globe'

function GlobeLeft() {

    return (
      <div className="col-xl-4" style={{display: "flex", alignItems: "center" }}>
        <div style={{height: "60%", width: "100%", position: "relative", left: "-200px"}}>
         <Globe/>
        </div>
    </div>
    );
}

export default GlobeLeft;