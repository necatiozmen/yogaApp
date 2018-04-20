import React from 'react';
import '../index.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Rating } from 'material-ui-rating';


const test2 = async () => {
  console.log('hi');
}



const test = async (alias) => {
  console.log('denem',alias);
  await fetch('http://localhost:5000/reviews', {
      method: 'POST',
      body: JSON.stringify({ alias: alias }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })

};

const Deneme = (props) => (


  <Card style={
    {
        "width": "25%",
        "float" : "right"

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

      overlay={<CardTitle title={props.names} subtitle={props.adress.city}
        />}
    >
      <img src={props.images} alt="" />
    </CardMedia>
    <CardTitle title={props.adress.city} subtitle="Card subtitle" />
    <CardText>

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
      <FlatButton  label="Action1"  />
      <FlatButton label="Action2" />
      {/* onClick={() => test(props.alias)} */}
    </CardActions>
  </Card>
);

export default Deneme;
