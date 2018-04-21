import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InstructorCard from '../views/instructor-card';

class InstructorListItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const instructorItem = this.props.instructor;
    return (
     <div>
       <MuiThemeProvider>
         <InstructorCard
             names = {instructorItem.name}
             surname = {instructorItem.surname}
             city = {instructorItem.city}
         />
        </MuiThemeProvider>
     </div>
    );
  }
};

export default InstructorListItem;
