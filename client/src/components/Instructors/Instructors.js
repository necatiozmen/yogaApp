import React, { Component } from 'react';
import '../../App.css';
import Header from '../Header';
import InstructorList from './InstructorList';

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
