import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listStudios } from '../actions';
// import SearchBar1 from 'material-ui-search-bar'


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
    <input value={this.state.value} onChange = {this.handleChange } style={{width:400, height:30 }} ></input>
  </form>
  // <SearchBar1
  //    value={this.state.value}
  //    onChange={this.handleChange}
  //    onRequestSearch={this.handleSubmit}
  //    style={{
  //      margin: '0 auto',
  //      maxWidth: 800
  //    }}
  //  />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  listStudios: (studios) => dispatch(listStudios(studios)),
  // listCoordinates: (coordlist) =>dispatch(listCoordinates(coordlist)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
