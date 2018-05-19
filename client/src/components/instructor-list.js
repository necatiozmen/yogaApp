import React, { Component } from 'react';
import InstructorListItem from './instructor-list-item';

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
      })
      .then(res => res.json())
      .then(data => this.setState({ value: data }))
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 10,
        }}>
          {this.state.value.map((list) => (
              <InstructorListItem
                instructor = {list}
                key ={list._id}
              />
            ))
          }
        </div>
    );
  }

}
export default InstructorList;
