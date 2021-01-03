import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Bio from './Bio'
import GlobeRight from './GlobeRight'
import GlobeLeft from './GlobeLeft'
import JourneyContent from './JourneyContent'

function App() {
  const [moveGlobeToLeft, setMoveGlobeToLeft] = useState(true)

  return (
    <div className="App">
      <p style={{ backgroundColor: "white" }} onClick={() => setMoveGlobeToLeft(!moveGlobeToLeft)}>Click</p>

      <Container fluid>
        <div className="row" style={{ height: "100vh" }}>

          {moveGlobeToLeft === true ? <Bio /> : null}
          {moveGlobeToLeft === true ? <GlobeRight /> : null}

          {moveGlobeToLeft === true ? null : <GlobeLeft />}
          {moveGlobeToLeft === true ? null : <JourneyContent />}


        </div>
      </Container>
    </div>
  )

}

export default App;

