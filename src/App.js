import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Globe from './Globe'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {moveGlobeToLeft: true}
  }
  
  render() {
    return (
    <div className="App">
      <Container fluid>
        <div className="row" style={{ height: "100vh" }}>
        <div className="col-xl-6 index-text" style={{ padding: "0" }}>
            {this.state.moveGlobeToLeft === true ? null :<Globe />}
            <div style={{width: "75%" }}>
            <h1 className="index-header">This is Jian He.</h1>
            <p className="index-body">
            Wanderlust.
            <br />Born in China, lived and worked in Boston, Singapore and now in Berlin.
            <br />Always interested in trying new tools and methods to solve different problems.
            <br />Keep on learning and getting inspired.
            <br />Never stop exploring. 
            </p>
            <p onClick={() => this.setState({moveGlobeToLeft: !this.state.moveGlobeToLeft})}>Click</p>
            {/* <a className="index-link" href="https://www.linkedin.com/in/jian-he-3a6056119/">Get connected  &#8594;</a> */}
            </div>  
          </div>
          <div className="col-xl-6" style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "50%", width: "100%" }}>
              {this.state.moveGlobeToLeft === true ? <Globe /> : null}
            </div>
          </div>
        </div>
    
      </Container>
    </div>
    )
  }
}

export default App;

