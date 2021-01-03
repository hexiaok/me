import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Bio from './Bio'
import Globe from './Globe'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <div className="row" style={{ height: "100vh" }}>
            <Bio />
            <div className="col-xl-6" style={{ display: "flex", alignItems: "center" }}>
              <div style={{ height: "50%", width: "100%" }}>
                <Globe />
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default App;

