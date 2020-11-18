import React, { useState} from 'react';
import './App.css';


function Bio() {

    return (
      <div className="col-xl-6 bio" style={{ padding: "0" }}>
        <div style={{width: "75%" }}>
          <h1 className="bio-header">This is Jian He.</h1>
            <p className="bio-body">
            Wanderlust.
            <br />Born in China, lived and worked in Boston, Singapore and now in Berlin.
            <br />Always interested in trying new tools and methods to solve different problems.
            <br />Keep on learning and getting inspired.
            <br />Never stop exploring. 
            </p>
        </div> 
      </div> 
    );
}

export default Bio;