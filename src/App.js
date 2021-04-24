import React, { Component, Fragment } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const navCSS = {
  color: 'red',
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1 style={navCSS}>MyPortFolio</h1>
          {/* <h2></h2> */}
          <h3>test deploy</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
