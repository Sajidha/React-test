import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
class Map extends Component {
    render() {
        const isMarkerShown = this.props.isMarkerShown || [];
        return(
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: 19.212046, lng: 73.070192 }}
            >
                {isMarkerShown && <Marker position={{ lat: 19.212046, lng: 73.070192 }} />}
            </GoogleMap>
        );
    }
}

export default withGoogleMap(Map);