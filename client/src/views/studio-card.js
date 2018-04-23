import React from 'react';
import '../index.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Rating } from 'material-ui-rating';
import { Place , LocalPhone } from '@material-ui/icons';
import ReviewDialog from './review-dialog';

const StudioCard = (props) => (
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
      overlay={<CardTitle title={props.names} subtitle={props.adress.city}/>}
    >
      <img src={props.images} alt="" />
    </CardMedia>
    <Place className='location-icon' color={'green'}/>
    <CardTitle
      title={`${props.adress.address1}    ${props.adress.address2}`} subtitle={props.isclosed ? 'close' : 'open'} />
    <CardText>
    <LocalPhone className='phone-icon' color={'green'} style={{width: 30,
    height: 30}}/>
      {props.number}
      {props.rating}
      <Rating
               readOnly={true}
               value={props.rating}
               max={5}
               onChange={(value) => console.log(`Rated with value ${value}`)}
             />
    </CardText>
    <CardActions  >
      <ReviewDialog  alias={props.alias}/>
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default StudioCard;
