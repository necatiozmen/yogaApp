import React from 'react';
import StudioListItem from './studio-list-item';
import { connect } from 'react-redux';
import '../App.css'

const StudioList = (props) => {
  console.log(props.studios);
  const studioItems = props.studios.map((studio) => {
    return (
      <StudioListItem
        studio = {studio}
        key = {studio.id}
      />
    );
  });

  return (
  <div >
   {studioItems}
 </div>
  );

};

const mapStateToProps = (state) => ({
    studios: state.studios,
    // Map your state to props
  });


export default connect(mapStateToProps, null)(StudioList);
