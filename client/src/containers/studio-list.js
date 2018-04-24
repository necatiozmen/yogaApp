import React from 'react';
import StudioListItem from './studio-list-item';
import { connect } from 'react-redux';
import '../App.css'

const EmptyList = (props) => {
  return (
          <img style={{width:'40vw'}} src="https://preview.ibb.co/d8oSdc/mandala1.jpg" alt="testyoga2" border="0"/>
  )
}
const StudioList = (props) => {
  console.log(props.studios);
  const studioItems = props.studios.map((studio) => {
    return (
      <StudioListItem
        style={{
          width: 400,
          marginRight: 30,
        }}
        studio = {studio}
        key = {studio.id}
      />
    );
  });

  return (
    props.studios.length === 0
     ? EmptyList()
     : (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 20,
        }}>
         {studioItems}
        </div>
      )
  );

};

const mapStateToProps = (state) => ({
    studios: state.studios,
    // Map your state to props
  });


export default connect(mapStateToProps, null)(StudioList);
