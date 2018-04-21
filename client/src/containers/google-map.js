import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from 'react-redux';

const MyMapComponent = (props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 41, lng: 2 }}
  >
    {props.coords.latitude && props.coords.longitude && <Marker position={{ lat: props.coords.latitude, lng: props.coords.longitude }} />}
  </GoogleMap>
;

const mapStateToProps = (state) => ({
  coords: state.coords,
});

export default compose(
  connect(mapStateToProps),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100px` }} />,
    containerElement: <div style={{ height: `800px` ,width:`600px`, float:`right`}} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MyMapComponent);
