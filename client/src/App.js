import React, { Component } from 'react';
import './App.css';
import StudioList from './components/Studios/StudioList';
import SearchBar from './containers/SearchBar';
import MyMapComponent from './containers/GoogleMap';
import Header from './components/Header';
import CitySearch from './containers/CitySearch';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Header />
        <div style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
          <div style={{ flex: 1, overflowY: 'scroll' }}>
            <SearchBar  />
            <CitySearch />
            <StudioList />
          </div>
          <MyMapComponent />
        </div>
      </div>
    );
  }
}

export default App;
