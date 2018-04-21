import React, { Component } from 'react';
import InstructorListItem from './instructor-list-item';
// const map = require('lodash.map');

class InstructorList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [],
    };
    this.fetchApi();

  }

  fetchApi = () => {
    fetch('http://localhost:5000/listinstructors', {
        method: 'GET',
      }).then(res => res.json())
      .then(data => this.setState({ value: data }))
      .then(this.instructorFunc)
      .catch(e => {
        console.log(e);
      });
  };

  instructorFunc = () => this.state.value.map((list) => (
      <InstructorListItem
        instructor = {list}
        key ={list._id}
      />
    ));

  render() {
    const item = this.instructorFunc();
    return (
        <div>
          {item}
        </div>
  );
  }

}
export default InstructorList;
