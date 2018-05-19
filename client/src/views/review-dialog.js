import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Rating } from 'material-ui-rating';
import { lime500 } from 'material-ui/styles/colors';

const customBodyStyle = {
  textalign: 'center',
};
export default class ReviewDialog extends React.Component {
  state = {
    open: false,
    alias: '',
    reviews: [],
    test: 'test',
  };

  handleOpen = () => {

      fetch('http://localhost:5000/reviews', {
        method: 'POST',
        body: JSON.stringify({ alias: this.props.alias }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      .then(res => res.json())
      .then(res=> this.setState({ reviews: res }))
      .then(() => this.setState({ open: true }));
    };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderReviews() {
    return this.state.reviews.map(review => (
      <div style={{ margin: '20px' }} key= {review.id}>
        <div style={{ margin: '20px' }}>{review.user.name}</div>
      {review.time_created}  <Rating
                 readOnly={true}
                 value={review.rating}
                 max={5}
                 onChange={(value) => console.log(`Rated with value ${value}`)}
               />
        {review.text}</div>
    ));
  }

  render() {

    const actions = [
   <div className="reviewdialog">{this.renderReviews()}</div>,
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,

    ];

    return (
      <div>
        <RaisedButton backgroundColor={lime500} label="Reviews" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
           style={customBodyStyle}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        </Dialog>
      </div>
    );
  }
}
