import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
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
      .then(res=> this.setState({ reviews: res }, () => {console.log(this.state.reviews)}))
      .then(rewlist => this.rew = this.state.reviews.map(el => {
          return (
            <div key= {el.id}>{el.text}</div>
          );
        }))

      .then(this.setState({ open: true }));
    };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log(this.rew);

    const actions = [

<div>{this.rew}</div>,
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,

    ];

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          // contentStyle={customContentStyle}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >

          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}
