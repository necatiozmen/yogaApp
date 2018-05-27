import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import InstructorChip from './InstructorChip';

const style = {
  height: 300,
  width: 600,
  margin: 50,
  borderRadius: '8px 8px 8px 70px',
  border: '2px solid #B2DFDB',
  display: 'inline-block',

};
const imgstyle = {
  float: 'left',
  marginRight: 10,

};

const InstructorPaper = (props) => (
    <Paper style={style} zDepth={3} rounded={false} >
      <div style={{
        margin: 25, }}>
        <Avatar
         src={props.image}
         size={200}
         style={imgstyle}
       />
      <InstructorChip
      names = {props.names}
      surname = {props.surname}
      city = {props.city}
      image= {props.image}
      language ={props.language}
      certification={props.certification}
      specialities = {props.specialities}
      phone={props.phone}
      avaliabledate = {props.datapicker}
      experience ={props.experience}
      rate = {props.rate} />
      </div>
 </Paper>

);

export default InstructorPaper;
