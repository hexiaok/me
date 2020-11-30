import React, { useState} from 'react';
import './App.css';


function Close() {

    return (
      <div className="right-align col-xl-12" style={{ height: "2em", paddingTop: "2em", paddingRight: "8em" }}>
          <p className="close-page">Close     X</p>
      </div> 
    );
}

export default Close;