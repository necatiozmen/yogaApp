import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import StudioList from './containers/studio-list';
import SearchBar from './containers/search-bar';
import MyMapComponent from './containers/google-map';
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
{/* <div className="App">
  <Header />
  <MyMapComponent />
  <SearchBar  />
  <StudioList />
</div> */}
