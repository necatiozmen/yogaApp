import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InstructorPaper from './InstructorPaper';

class InstructorListItem extends Component {
  render () {
    const instructorItem = this.props.instructor;
    return (
     <div>
        <MuiThemeProvider>
            <InstructorPaper
              names = {instructorItem.name}
              surname = {instructorItem.surname}
              city = {instructorItem.city}
              image= {instructorItem.imageUrl}
              certification= {instructorItem.certification}
              language ={instructorItem.language}
              specialities = {instructorItem.specialities}
              phone={instructorItem.phone}
              avaliabledate = {instructorItem.datapicker}
              experience ={instructorItem.experience}
              rate = {instructorItem.rate} />
        </MuiThemeProvider>
     </div>
    );
  }
};

export default InstructorListItem;
