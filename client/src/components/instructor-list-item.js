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
             image= {instructorItem.image}
             language ={instructorItem.language}
             specialities = {instructorItem.specialities}
             phone={instructorItem.phone}
             avaliabledate = {instructorItem.datapicker}
             experience ={instructorItem.experience}
             rate = {instructorItem.rate}
         />
        </MuiThemeProvider>
     </div>
    );
  }
};

export default InstructorListItem;
