import React from 'react';
import SnackBar from 'material-ui/Snackbar';

export default class Snackbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <SnackBar
          open={this.props.value}
          message="Profile Created"
          autoHideDuration={2500}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
