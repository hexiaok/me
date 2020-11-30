import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Bio from './Bio'
import GlobeRight from './GlobeRight'
import GlobeLeft from './GlobeLeft'
import JourneyContent from './JourneyContent'
import Close from './Close'
import Globe from './Globe'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {moveGlobeToLeft: true}
  }
  
  render() {
    return (
    <div className="App">
      <p style={{backgroundColor: "white"}} onClick={() => this.setState({moveGlobeToLeft: !this.state.moveGlobeToLeft})}>Click</p>
      {this.state.moveGlobeToLeft === true ? null :<Close />}
      <Container fluid>
        <div className="row" style={{ height: "100vh" }}>

        {this.state.moveGlobeToLeft === true ? <Bio/> : null}
        {this.state.moveGlobeToLeft === true ? <GlobeRight /> : null}
        
        {this.state.moveGlobeToLeft === true ? null :<JourneyContent />}
        {this.state.moveGlobeToLeft === true ? null :<GlobeLeft />}
        
     

        </div>
      </Container>
    </div>
    )
  }
}

export default App;

