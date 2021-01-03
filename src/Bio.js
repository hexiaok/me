import React from 'react';
import './App.css';


function Bio() {
  return (
    <div className="col-xl-6 index-text" style={{ padding: "0" }}>
      <div style={{ width: "75%" }}>
        <h1 className="bio-header">This is Jian He.</h1>
        <p className="bio-body">
          Wanderlust.
            <br />Born in China, lived and worked in Boston, Singapore and now in Berlin.
            <br />Always interested in trying new tools and methods to solve different problems.
            <br />Keep on learning and getting inspired.
            <br />Never stop exploring.
            </p>
        <div>
          <a className="bio-link" href="https://www.linkedin.com/in/jian-he-3a6056119/" target="_blank" rel="noopener noreferrer">Linkedin</a>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="bio-link" href="https://twitter.com/hexiaok" target="_blank" rel="noopener noreferrer">Twitter</a>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="bio-link" href="https://github.com/hexiaok" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Bio;