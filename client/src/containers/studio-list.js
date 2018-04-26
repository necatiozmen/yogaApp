import React from 'react';
import StudioListItem from './studio-list-item';
import { connect } from 'react-redux';
import '../App.css';

const EmptyList = (props) => {
  return (
      <div style={{display:'inline-grid'}}>
      <img src="https://preview.ibb.co/mmiDZH/main1.png" alt="main1" />
      <img style={{ width: '40vw' }} src="https://preview.ibb.co/czZ0Wx/mandala1.jpg" alt="main2" />
      </div>
    );
};

const StudioList = (props) => {
  const studioItems = props.studios.map(studio => {
      return (
      <StudioListItem
        style={{
          width: 400,
          marginRight: 30,
          marginBottom: 70,
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
          justifyContent: 'center',
          marginTop: 90,
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
