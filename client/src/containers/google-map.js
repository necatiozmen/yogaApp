import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';

const MyMapComponent = (props) =>

  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 41, lng: 2 }}
  >
 {props.studios.map(studio=> {
  return (
  <Marker position={{ lat: studio.coordinates.latitude, lng: studio.coordinates.longitude }} />

  );
})}
  {/* {props.coords.latitude && props.coords.longitude && <Marker position={{ lat: props.coords.latitude, lng: props.coords.longitude }} />} */}


  </GoogleMap>;

{/* <Marker position={{ lat: studio.coordinates.latitude, lng: studio.coordinates.longitude }} /> */}

const mapStateToProps = (state) => ({
  coords: state.coords,
  studios: state.studios,
});

export default compose(
  connect(mapStateToProps),
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100px` }} />,
    containerElement: <div style={{ height: `800px`, width: `600px`, float: `right` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MyMapComponent);
