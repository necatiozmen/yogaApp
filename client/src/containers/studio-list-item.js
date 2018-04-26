import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { setCoord } from '../actions';
import StudioCard from '../views/studio-card';
import '../index.css';

class StudioListItem extends Component {
  constructor(props) {
    super(props);

  }

  sendcoor = (coords) => {
    this.props.setCoord(this.props.studio.id);
  };

  render () {
    const studioItem = this.props.studio;
    return (
     <div  style={this.props.style} onClick={this.sendcoor}>

      <MuiThemeProvider>
        <StudioCard images = {studioItem.image_url}
           isclosed = {studioItem.is_closed}
            names = {studioItem.name}
            number = {studioItem.phone}
            rating = {studioItem.rating}
            adress = {studioItem.location}
            alias = {studioItem.alias}
        />
       </MuiThemeProvider>
   </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  setCoord: (coords) => dispatch(setCoord(coords)),
});

export default connect(null, mapDispatchToProps)(StudioListItem);
