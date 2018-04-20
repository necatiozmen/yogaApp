import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { setCoord } from '../actions';
import Deneme from '../views/deneme';
import Deneme2 from '../views/deneme2';
import '../index.css';

class StudioListItem extends Component {
  constructor(props) {
    super(props);

  }

  sendcoor = (coords) => {
    this.props.setCoord(this.props.studio.coordinates);
  };

  render () {
    const studioItem = this.props.studio;
    return (
     <div  onClick={this.sendcoor}>
          {/* <img className="img-thumbnail" src={studioItem.image_url}/> */}
      {/* <div className="media-body">
           <div className="media-heading"> {studioItem.alias}</div>
        </div> */}
      <MuiThemeProvider>

        {/* <Deneme2 images = {studioItem.image_url}
            names = {studioItem.name}
        /> */}
        <Deneme images = {studioItem.image_url}
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
