import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
    constructor (props)  {
        super(props);

        this.state = {
            cities: props.cities || []
        }
    }

    render() {
        return(
            <GoogleMap defaultZoom={2}
                defaultCenter={{ lat: 19.212046, lng: 73.070192 }}
            >
                {
                    this.state.cities.map((item, index) => {
                        return (
                            <Marker onClick={this.props.selectCity} key={index} position={{ lat: item.lat, lng: item.lng }} label={item.name} />
                        )
                    })
                }
            </GoogleMap>

        );
    }
}

export default withGoogleMap(Map);
