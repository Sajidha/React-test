import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

class Places extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }
 
  handleFormSubmit = (event) => {
    event.preventDefault()
 
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }
 
  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
 
    return (
        <div className="placeInput">
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete inputProps={inputProps} />
                <button type="submit" class="citySubmit">Add City</button>
            </form>
        </div>
    )
  }
}
 
export default Places