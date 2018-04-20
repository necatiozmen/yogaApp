import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listStudios } from '../actions';


class SearchBar extends Component {
  state = {
      value: '',
    };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/search', {
        method: 'POST',
        body: JSON.stringify({ location: this.state.value }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      .then(res => res.json())
      .then(res => this.props.listStudios(res))
      .catch(console.log);
  };

  render () {
    return (
   <form onSubmit={ this.handleSubmit }>
    <input value={this.state.value} onChange = {this.handleChange }></input>
  </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  listStudios: (studios) => dispatch(listStudios(studios)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
