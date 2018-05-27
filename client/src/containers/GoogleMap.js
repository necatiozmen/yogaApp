import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';

const MyMapComponent = (props) =>

  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 41, lng: 2 }}
  >

 {props.studios.map(studio =>
  <Marker opacity	= {studio.id === props.id ? 1 : 0.4}key={studio.id}
    position={{ lat: studio.coordinates.latitude, lng: studio.coordinates.longitude }} />

)}
  </GoogleMap>;

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
