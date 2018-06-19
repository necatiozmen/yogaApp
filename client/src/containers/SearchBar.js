import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listStudios } from '../actions';

class SearchBar extends Component {
  state = {
      value: '',
    };

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

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
   <form onSubmit={ this.handleSubmit } style={{ margin: 20 }}>
    <input value={this.state.value}
      onChange = {this.handleChange }
      placeHolder={'Please type the city name...'}
      style={{ width: 900, height: 50, fontSize: 20, border: '2px solid #B2DFDB' }}
      ref= {(node) => { this.input = node; }} >
    </input>
  </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  listStudios: (studios) => dispatch(listStudios(studios)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
