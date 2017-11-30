import React, { Component } from 'react';
import Map from './components/Map';
import Places from './components/Places';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      cities: [],
      selected: ''
    }

    this.addCity = this.addCity.bind(this);
    this.selectCity = this.selectCity.bind(this);
  }

  selectCity (props) {
    const city = {
      lat: props.latLng.lat(),
      lng: props.latLng.lng()
    }

    this.state.cities.map((item, index) => {
      if (item.lat === city.lat && item.lng === city.lng) {
        this.setState({selected: item.name});
      }
    });

  }

  addCity (latlng, name) {
    const cities = this.state.cities;

    cities.push({
      lat: latlng.lat,
      lng: latlng.lng,
      name
    });

    this.addToLocalStorage('cities', JSON.stringify(cities));
    this.setState({ cities });
  }

  addToLocalStorage (key, val) {
    const localStorage = window.localStorage;
    localStorage.setItem(key, val);
  }

  componentDidMount () {
    const localStorage = window.localStorage;
    const cities = localStorage.getItem('cities');

    this.setState({ cities: cities ? JSON.parse(cities) : [] });
  }

  render() {
    return (
      <div className="App">
        <Map selectCity={this.selectCity} cities={this.state.cities} containerElement={<div className="Map" />}
          mapElement={<div style={{ height: `100%` }} />}/>
        <div className="selectedCity">
          {`Selected City Details: ${this.state.selected}`}
        </div>
        <Places addCity={this.addCity} />        
      </div>
    );
  }
}

export default App;
