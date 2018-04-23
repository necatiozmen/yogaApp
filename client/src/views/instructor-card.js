import React from 'react';
import '../index.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Rating } from 'material-ui-rating';

function _arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
}

const InstructorCard = (props) => (

  <Card style={
    {
        width: '25%',
        float: 'right',
      }
  }
 expandable = {true}
  >
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title={`${props.names} ${props.surname}  `} subtitle={props.city}
        />}
    >
     { props.image && <img src={`data:image/png;base64, ${_arrayBufferToBase64(props.image.data.data)}`} alt="" />}
    </CardMedia>
    <CardTitle title={props.specialities} subtitle={props.experience} />
    <CardText>
    Available languages {props.language}
    </CardText>
    <CardActions  >
      <FlatButton  label="Action1"  />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default InstructorCard;
