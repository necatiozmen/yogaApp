import React from 'react';
import '../../index.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Rating } from 'material-ui-rating';
import { Place, LocalPhone } from '@material-ui/icons';
import StudioReviews from './StudioReviews';

const StudioCard = (props) => (
  <Card>
      <CardHeader style={{ left: 50 }}
          avatar="https://neuevision.files.wordpress.com/2011/04/blumelebens-1.gif"/>
      <CardMedia
          overlay={<CardTitle title={props.names} subtitle={props.adress.city}/>}>
          <img src={props.images} alt="" />
      </CardMedia>
      <Place className='location-icon' color={'green'} style={{ width: 30,
          height: 30, }}/>
      <CardTitle
          title={`${props.adress.address1}    ${props.adress.address2}`} />
      <CardText>
      <LocalPhone className='phone-icon' color={'green'} style={{ width: 30,
          height: 30, }}/>
      <p style={{ fontFamily: 'Gill Sans', fontSize: 20 }}>{props.number}</p>
      <Rating
         readOnly={true}
         value={props.rating}
         max={5}
         onChange={(value) => console.log(`Rated with value ${value}`)}/>
      </CardText>
      <CardActions>
         <StudioReviews  alias={props.alias}/>
      </CardActions>
  </Card>
);

export default StudioCard;
