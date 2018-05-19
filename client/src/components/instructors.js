import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../views/header';
import InstructorList from './instructor-list';

class Instructors extends Component {

  render() {
    return (
        <div style ={{ backgroundColor: '#F5F5F5' }}>
          <Header />
          <InstructorList
           />
        </div>
    );
  }
}

export default Instructors;
