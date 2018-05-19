import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudioList from './containers/studio-list';
import SearchBar from './containers/search-bar';
import MyMapComponent from './containers/google-map';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './views/header';
import CitySearcName from './components/city-search-name';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Header />
        <div style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
          <div style={{ flex: 1, overflowY: 'scroll' }}>
            <SearchBar  />
            <CitySearcName />
            <StudioList />
          </div>
          <MyMapComponent />
        </div>
      </div>
    );
  }
}

export default App;
