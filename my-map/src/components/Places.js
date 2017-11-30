import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: 'Enter City' };
    this.onChange = (address) => this.setState({ address });

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (event) => {
    event.preventDefault()


    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.addCity(latLng, this.state.address))
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
                <button type="submit" className="citySubmit">Add City</button>
            </form>
        </div>
    )
  }
}

export default Places
