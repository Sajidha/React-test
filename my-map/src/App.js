import React, { Component } from 'react';
import Map from './components/Map';
import Places from './components/Places';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map containerElement={<div className="Map" />}
          mapElement={<div style={{ height: `100%` }} />}/>

        <Places />
      </div>
    );
  }
}

export default App;