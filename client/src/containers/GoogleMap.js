/*global google*/
import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';

class MyMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 42,
      lng: 23,
    };
  }

//    zoomMarkers = () => {
//      map => {
//     const bounds = new window.google.maps.LatLngBounds();
//     if (this.props.studios.length > 0) {
//       bounds.extend(new window.google.maps.LatLng(
//       this.props.studios[0].coordinates.latitude, this.props.studios[0].coordinates.longitude));
//       console.log(bounds);
//     }
//     map.fitBounds(bounds);
//   }
// }
  render() {
    const bounds = new window.google.maps.LatLngBounds();
    if (this.props.studios.length > 0) {
      bounds.extend(new window.google.maps.LatLng(
      this.props.studios[0].coordinates.latitude, this.props.studios[0].coordinates.longitude));
      console.log(bounds);
    }
    else {
      bounds.extend(new window.google.maps.LatLng(
      41.3, 2));
    }

    return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 41, lng: 2 }}
      ref={map => map && map.panToBounds(bounds, { right: 150 })}>
      {/* // ref={this.zoomMarkers}> */}
      {this.props.studios.map(studio =>
        <Marker
          opacity	= {studio.id === this.props.id ? 1 : 0.4}
          key={studio.id}
          position={{ lat: studio.coordinates.latitude, lng: studio.coordinates.longitude }}
          animation={google.maps.Animation.DROP}/>
        )}
    </GoogleMap>
);
  }
}
const mapStateToProps = (state) => ({
  id: state.coords,
  studios: state.studios,
});

export default compose(
  connect(mapStateToProps),
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api' +
    '/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100px` }} />,
    containerElement: <div style={{ height: `100%`, width: `600px`,
      borderStyle: `groove`, borderWidth: `0px 0px 0px 1px`, }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MyMapComponent);
