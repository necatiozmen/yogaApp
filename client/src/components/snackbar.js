import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <Snackbar
          open={this.props.value}
          message="Profile Created"
          autoHideDuration={2500}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
