import React from 'react';
import '../index.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Rating } from 'material-ui-rating';

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

      overlay={<CardTitle title={props.names} subtitle={props.city}
        />}
    >

    </CardMedia>
    <CardTitle title={props.city} subtitle="Card subtitle" />
    <CardText>

      {props.city}
      {props.names}
    </CardText>
    <CardActions  >
      <FlatButton  label="Action1"  />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default InstructorCard;
