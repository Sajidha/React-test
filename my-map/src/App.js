import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}/>
      </div>
    );
  }
}

export default App;