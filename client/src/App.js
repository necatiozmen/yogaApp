import React, { Component } from 'react';
// import {Router, Route,Switch} from 'react-router';

import logo from './logo.svg';
import './App.css';
import StudioList from './components/studio-list';
import SearchBar from './components/search-bar';
import MyMapComponent from './components/google-map';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './views/header';




class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <MyMapComponent />
        <SearchBar  />
        <StudioList />
      </div>
    );
  }
}

export default App;
